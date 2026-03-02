import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Notification } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, id: userId } = user;
  try {
    await (Notification as any).updateMany(
      { 
        tenantId: new mongoose.Types.ObjectId(tenant_id), 
        userId: new mongoose.Types.ObjectId(userId), 
        isRead: false 
      },
      { isRead: true }
    );
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
