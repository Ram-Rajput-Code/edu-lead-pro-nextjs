import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Task, Notification, ActivityLog } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role, id } = user;
  try {
    let query: any = {};
    if (role !== 'super_admin') {
      if (role !== 'admin' && role !== 'manager') {
        query = { 
          tenantId: new mongoose.Types.ObjectId(tenant_id),
          $or: [
            { isPrivate: false },
            { createdBy: new mongoose.Types.ObjectId(id) }
          ]
        };
      } else {
        query = { tenantId: new mongoose.Types.ObjectId(tenant_id) };
      }
    }

    const tasks = await (Task as any).find(query)
      .populate('assignedTo', 'name')
      .populate('statusId')
      .sort({ createdAt: -1 });

    const formattedTasks = tasks.map((t: any) => ({
      id: t._id.toString(),
      title: t.title,
      description: t.description,
      assigned_to: t.assignedTo?._id?.toString(),
      assigned_name: t.assignedTo?.name,
      priority: t.priority,
      status_id: t.statusId?._id?.toString(),
      status_label: t.statusId?.label,
      status_color: t.statusId?.color,
      due_date: t.dueDate,
      is_private: t.isPrivate
    }));

    return NextResponse.json(formattedTasks);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, assigned_to, priority, status_id, due_date, is_private } = await request.json();
  const { tenant_id, id } = user;

  try {
    const task = await (Task as any).create({
      tenantId: new mongoose.Types.ObjectId(tenant_id),
      title,
      description,
      assignedTo: assigned_to ? new mongoose.Types.ObjectId(assigned_to) : null,
      createdBy: new mongoose.Types.ObjectId(id),
      priority,
      statusId: status_id ? new mongoose.Types.ObjectId(status_id) : null,
      dueDate: due_date,
      isPrivate: !!is_private
    });

    if (assigned_to && assigned_to !== id) {
      await (Notification as any).create({
        tenantId: new mongoose.Types.ObjectId(tenant_id),
        userId: new mongoose.Types.ObjectId(assigned_to),
        title: 'New Task Assigned',
        message: `You have been assigned a new task: ${title}`,
        type: 'info',
        link: '/tasks'
      });
    }

    // Log Activity
    await ActivityLog.create({
      tenantId: new mongoose.Types.ObjectId(tenant_id),
      userId: new mongoose.Types.ObjectId(id),
      action: 'created a new task',
      details: `Task: ${title}`
    });

    return NextResponse.json({ id: task._id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
