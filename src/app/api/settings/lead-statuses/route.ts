import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { LeadStatus } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id } = user;
  try {
    const statuses = await (LeadStatus as any).find({ tenantId: new mongoose.Types.ObjectId(tenant_id) });
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
  
  const { label, color } = await request.json();
  try {
    const status = await (LeadStatus as any).create({ 
      tenantId: new mongoose.Types.ObjectId(tenant_id), 
      label, 
      color 
    });
    return NextResponse.json(status);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
