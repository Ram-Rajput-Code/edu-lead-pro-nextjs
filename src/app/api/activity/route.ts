import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { ActivityLog } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role } = user;
  try {
    const tenantId = new mongoose.Types.ObjectId(tenant_id);
    const query: any = role === 'super_admin' ? {} : { tenantId };
    
    const activities = await ActivityLog.find(query)
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('userId', 'name');

    return NextResponse.json(activities);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
