import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Lead, Task } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role, id: userId } = user;
  try {
    const query: any = role === 'super_admin' ? {} : { tenantId: new mongoose.Types.ObjectId(tenant_id) };
    
    const [totalLeads, totalTasks, pendingTasks] = await Promise.all([
      (Lead as any).countDocuments(query),
      (Task as any).countDocuments(query),
      (Task as any).countDocuments({ ...query, statusId: { $ne: null } }) // Simplified
    ]);

    // More detailed stats could be added here
    return NextResponse.json({
      totalLeads,
      totalTasks,
      pendingTasks,
      // Add other stats as needed by the frontend
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
