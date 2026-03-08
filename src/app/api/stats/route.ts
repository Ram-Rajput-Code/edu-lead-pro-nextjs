import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Lead, Task, LeadStatus, TaskStatus } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role, id: userId } = user;
  const { searchParams } = new URL(request.url);
  
  const memberIds = searchParams.get('members')?.split(',').filter(Boolean);
  const priorities = searchParams.get('priorities')?.split(',').filter(Boolean);
  const statusIds = searchParams.get('statuses')?.split(',').filter(Boolean);

  try {
    const tenantId = new mongoose.Types.ObjectId(tenant_id);
    const baseQuery: any = role === 'super_admin' ? {} : { tenantId };
    
    // Build dynamic query
    const filterQuery: any = { ...baseQuery };
    if (memberIds && memberIds.length > 0) {
      filterQuery.assignedTo = { $in: memberIds.map(id => new mongoose.Types.ObjectId(id)) };
    }
    if (priorities && priorities.length > 0) {
      filterQuery.priority = { $in: priorities };
    }
    // Note: statusId filtering is tricky because Lead and Task have different status models.
    // We'll apply statusId filtering specifically when counting.

    const [leadStatusesRaw, taskStatusesRaw] = await Promise.all([
      (LeadStatus as any).find({ tenantId }),
      (TaskStatus as any).find({ tenantId })
    ]);

    let leadStatuses = leadStatusesRaw;
    let taskStatuses = taskStatusesRaw;

    // Fallback: Create default statuses if they don't exist (for older tenants)
    if (leadStatuses.length === 0 && role !== 'super_admin') {
      leadStatuses = await LeadStatus.create([
        { tenantId, label: 'New', color: '#6366f1' },
        { tenantId, label: 'Contacted', color: '#f59e0b' },
        { tenantId, label: 'Interested', color: '#10b981' },
        { tenantId, label: 'Enrolled', color: '#059669' },
        { tenantId, label: 'Lost', color: '#ef4444' }
      ]);
    }

    if (taskStatuses.length === 0 && role !== 'super_admin') {
      taskStatuses = await TaskStatus.create([
        { tenantId, label: 'To Do', color: '#94a3b8', isDefault: true },
        { tenantId, label: 'In Progress', color: '#6366f1' },
        { tenantId, label: 'Completed', color: '#10b981' }
      ]);
    }

    // Apply status filter if provided
    const filteredLeadStatuses = statusIds && statusIds.length > 0 
      ? leadStatuses.filter((s: any) => statusIds.includes(s._id.toString()))
      : leadStatuses;
    
    const filteredTaskStatuses = statusIds && statusIds.length > 0
      ? taskStatuses.filter((s: any) => statusIds.includes(s._id.toString()))
      : taskStatuses;

    const [totalLeads, totalTasks, pendingTasks] = await Promise.all([
      (Lead as any).countDocuments({ 
        ...filterQuery, 
        ...(statusIds && statusIds.length > 0 ? { statusId: { $in: statusIds.map(id => new mongoose.Types.ObjectId(id)) } } : {})
      }),
      (Task as any).countDocuments({ 
        ...filterQuery,
        ...(statusIds && statusIds.length > 0 ? { statusId: { $in: statusIds.map(id => new mongoose.Types.ObjectId(id)) } } : {})
      }),
      (Task as any).countDocuments({ 
        ...filterQuery, 
        statusId: { $ne: null },
        ...(statusIds && statusIds.length > 0 ? { statusId: { $in: statusIds.map(id => new mongoose.Types.ObjectId(id)) } } : {})
      })
    ]);

    // Pipeline Data (Leads by Status)
    const pipelineData = await Promise.all(filteredLeadStatuses.map(async (status: any) => {
      const count = await (Lead as any).countDocuments({ ...filterQuery, statusId: status._id });
      return {
        name: status.label,
        count,
        color: status.color
      };
    }));

    // Task Distribution (Tasks by Status)
    const taskData = await Promise.all(filteredTaskStatuses.map(async (status: any) => {
      const count = await (Task as any).countDocuments({ ...filterQuery, statusId: status._id });
      return {
        name: status.label,
        value: count,
        color: status.color
      };
    }));

    return NextResponse.json({
      totalLeads,
      totalTasks,
      pendingTasks,
      pipelineData,
      taskData
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
