import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { TaskStatus } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { tenant_id, role } = user;
  if (role !== 'admin' && role !== 'manager' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  
  const { label, color, isDefault } = await request.json();
  try {
    if (isDefault) {
      await (TaskStatus as any).updateMany({ tenantId: new mongoose.Types.ObjectId(tenant_id) }, { isDefault: false });
    }
    const status = await (TaskStatus as any).findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id), tenantId: new mongoose.Types.ObjectId(tenant_id) },
      { label, color, isDefault },
      { new: true }
    );
    return NextResponse.json(status);
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
  if (role !== 'admin' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  
  try {
    await (TaskStatus as any).deleteOne({ 
      _id: new mongoose.Types.ObjectId(id), 
      tenantId: new mongoose.Types.ObjectId(tenant_id) 
    });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
