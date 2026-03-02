import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Lead } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id } = user;
  try {
    const leads = await (Lead as any).find({ tenantId: new mongoose.Types.ObjectId(tenant_id) })
      .populate('statusId')
      .populate('assignedTo', 'name')
      .sort({ createdAt: -1 });

    const formattedLeads = leads.map((l: any) => ({
      id: l._id.toString(),
      name: l.name,
      phone: l.phone,
      course: l.course,
      source: l.source,
      status_id: l.statusId?._id?.toString(),
      status_label: l.statusId?.label,
      status_color: l.statusId?.color,
      assigned_to: l.assignedTo?._id?.toString(),
      assigned_name: l.assignedTo?.name,
      remarks: l.remarks
    }));

    return NextResponse.json(formattedLeads);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, phone, course, source, status_id, assigned_to, remarks } = await request.json();
  const { tenant_id, id: userId } = user;

  try {
    const lead = await (Lead as any).create({
      tenantId: new mongoose.Types.ObjectId(tenant_id),
      name,
      phone,
      course,
      source,
      statusId: status_id ? new mongoose.Types.ObjectId(status_id) : null,
      assignedTo: assigned_to ? new mongoose.Types.ObjectId(assigned_to) : null,
      remarks,
      timeline: [{
        action: 'Lead Created',
        details: `Lead created from ${source}`,
        performedBy: new mongoose.Types.ObjectId(userId)
      }]
    });
    return NextResponse.json({ id: lead._id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
