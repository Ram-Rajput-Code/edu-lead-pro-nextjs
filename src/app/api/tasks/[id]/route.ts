import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Task, Notification } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { priority, status_id, assigned_to } = await request.json();
  const { tenant_id, role } = user;

  try {
    const query: any = { _id: new mongoose.Types.ObjectId(id) };
    if (role !== 'super_admin') {
      query.tenantId = new mongoose.Types.ObjectId(tenant_id);
    }
    
    const task = await (Task as any).findOne(query);
    if (!task) return NextResponse.json({ error: "Task not found" }, { status: 404 });

    if (priority) task.priority = priority;
    if (status_id) task.statusId = new mongoose.Types.ObjectId(status_id);
    
    if (assigned_to !== undefined && (role === 'admin' || role === 'manager' || role === 'super_admin')) {
      const oldAssignee = task.assignedTo?.toString();
      task.assignedTo = assigned_to ? new mongoose.Types.ObjectId(assigned_to) : null;
      
      if (assigned_to && assigned_to !== user.id && assigned_to !== oldAssignee) {
        await (Notification as any).create({
          tenantId: new mongoose.Types.ObjectId(tenant_id),
          userId: new mongoose.Types.ObjectId(assigned_to),
          title: 'Task Reassigned',
          message: `A task has been reassigned to you: ${task.title}`,
          type: 'info',
          link: '/tasks'
        });
      }
    }

    await task.save();
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { tenant_id, role } = user;
  
  if (role !== 'admin' && role !== 'manager' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid task ID" }, { status: 400 });
  }

  try {
    const query: any = { _id: new mongoose.Types.ObjectId(id) };
    if (role !== 'super_admin') {
      query.tenantId = new mongoose.Types.ObjectId(tenant_id);
    }
    
    const result = await (Task as any).deleteOne(query);
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Task not found or unauthorized" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
