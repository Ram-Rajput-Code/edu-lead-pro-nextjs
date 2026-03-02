import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { TaskStatus } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id } = user;
  try {
    const statuses = await (TaskStatus as any).find({ tenantId: new mongoose.Types.ObjectId(tenant_id) }).sort({ sortOrder: 1 });
    return NextResponse.json(statuses);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role } = user;
  if (role !== 'admin' && role !== 'manager' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  
  const { label, color, isDefault } = await request.json();
  try {
    if (isDefault) {
      await (TaskStatus as any).updateMany({ tenantId: new mongoose.Types.ObjectId(tenant_id) }, { isDefault: false });
    }
    const status = await (TaskStatus as any).create({ 
      tenantId: new mongoose.Types.ObjectId(tenant_id), 
      label, 
      color, 
      isDefault 
    });
    return NextResponse.json(status);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
