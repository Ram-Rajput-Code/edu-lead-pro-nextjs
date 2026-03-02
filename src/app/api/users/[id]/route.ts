import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { User } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { tenant_id, role, id: currentUserId } = user;
  
  // Only admin, manager, or super_admin can deactivate
  if (role !== 'admin' && role !== 'manager' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { status } = await request.json();
  
  try {
    // Find the user to update
    const userToUpdate = await User.findOne({ 
      _id: new mongoose.Types.ObjectId(id), 
      tenantId: new mongoose.Types.ObjectId(tenant_id) 
    });

    if (!userToUpdate) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Prevent deactivating yourself
    if (id === currentUserId) {
      return NextResponse.json({ error: "You cannot deactivate yourself" }, { status: 400 });
    }

    // Managers can only deactivate staff
    if (role === 'manager' && userToUpdate.role !== 'staff') {
      return NextResponse.json({ error: "Managers can only deactivate staff members" }, { status: 403 });
    }

    userToUpdate.status = status;
    await userToUpdate.save();

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
  const { tenant_id, role, id: currentUserId } = user;

  // Only admin, manager, or super_admin can delete
  if (role !== 'admin' && role !== 'manager' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Find the user to delete
    const userToDelete = await User.findOne({ 
      _id: new mongoose.Types.ObjectId(id), 
      tenantId: new mongoose.Types.ObjectId(tenant_id) 
    });

    if (!userToDelete) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Prevent deleting yourself
    if (id === currentUserId) {
      return NextResponse.json({ error: "You cannot delete yourself" }, { status: 400 });
    }

    // Managers can only delete staff
    if (role === 'manager' && userToDelete.role !== 'staff') {
      return NextResponse.json({ error: "Managers can only delete staff members" }, { status: 403 });
    }

    await User.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
