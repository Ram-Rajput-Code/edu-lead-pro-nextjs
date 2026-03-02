import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Task } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { ids } = await request.json();
  const { tenant_id, role } = user;

  if (role !== 'admin' && role !== 'manager' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: "No task IDs provided" }, { status: 400 });
  }

  try {
    const validIds = ids.filter(id => mongoose.Types.ObjectId.isValid(id));
    const objectIds = validIds.map(id => new mongoose.Types.ObjectId(id));
    
    const query: any = { _id: { $in: objectIds } };
    if (role !== 'super_admin') {
      query.tenantId = new mongoose.Types.ObjectId(tenant_id);
    }
    
    const result = await (Task as any).deleteMany(query);
    return NextResponse.json({ success: true, deletedCount: result.deletedCount });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
