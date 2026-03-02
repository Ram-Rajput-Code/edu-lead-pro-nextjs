import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Notification } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, id } = user;
  try {
    const notifications = await (Notification as any).find({ 
      tenantId: new mongoose.Types.ObjectId(tenant_id), 
      userId: new mongoose.Types.ObjectId(id) 
    })
      .sort({ createdAt: -1 })
      .limit(50);
    return NextResponse.json(notifications);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
