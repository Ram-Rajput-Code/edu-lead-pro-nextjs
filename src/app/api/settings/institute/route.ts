import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Institute } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id } = user;
  try {
    const inst = await (Institute as any).findById(new mongoose.Types.ObjectId(tenant_id));
    return NextResponse.json(inst);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role } = user;
  if (role !== 'admin') return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  
  const { name } = await request.json();
  try {
    const inst = await (Institute as any).findByIdAndUpdate(new mongoose.Types.ObjectId(tenant_id), { name }, { new: true });
    return NextResponse.json(inst);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
