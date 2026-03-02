import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Lead, LeadStatus, User, Notification } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { tenant_id } = user;
  try {
    const lead = await (Lead as any).findOne({ _id: new mongoose.Types.ObjectId(id), tenantId: new mongoose.Types.ObjectId(tenant_id) })
      .populate('statusId')
      .populate('assignedTo', 'name')
      .populate('timeline.performedBy', 'name');
    
    if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    return NextResponse.json(lead);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { status_id, assigned_to, remarks } = await request.json();
  const { tenant_id, role, id: userId } = user;

  try {
    const lead = await (Lead as any).findOne({ _id: new mongoose.Types.ObjectId(id), tenantId: new mongoose.Types.ObjectId(tenant_id) });
    if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

    if (status_id && status_id !== lead.statusId?.toString()) {
      const status = await (LeadStatus as any).findById(new mongoose.Types.ObjectId(status_id));
      lead.statusId = new mongoose.Types.ObjectId(status_id);
      lead.timeline.push({
        action: 'Status Changed',
        details: `Stage updated to ${status?.label || 'Unknown'}`,
        performedBy: new mongoose.Types.ObjectId(userId)
      });
    }
    
    if (remarks !== undefined && remarks !== lead.remarks) {
      lead.remarks = remarks;
      lead.timeline.push({
        action: 'Remark Added',
        details: remarks,
        performedBy: new mongoose.Types.ObjectId(userId)
      });
    }
    
    if (assigned_to !== undefined && assigned_to !== lead.assignedTo?.toString() && (role === 'admin' || role === 'manager' || role === 'super_admin')) {
      const assignedUser = await (User as any).findById(new mongoose.Types.ObjectId(assigned_to));
      lead.assignedTo = assigned_to ? new mongoose.Types.ObjectId(assigned_to) : null;
      lead.timeline.push({
        action: 'Lead Assigned',
        details: `Assigned to ${assignedUser?.name || 'Unassigned'}`,
        performedBy: new mongoose.Types.ObjectId(userId)
      });

      if (assigned_to && assigned_to !== userId) {
        await (Notification as any).create({
          tenantId: new mongoose.Types.ObjectId(tenant_id),
          userId: new mongoose.Types.ObjectId(assigned_to),
          title: 'New Lead Assigned',
          message: `You have been assigned a new lead: ${lead.name}`,
          type: 'success',
          link: '/leads'
        });
      }
    }

    await lead.save();
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
