import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Lead, LeadStatus } from '@/lib/models';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';
import Papa from 'papaparse';

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, id: userId } = user;
  
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const csvData = await file.text();
    const { data, errors } = Papa.parse(csvData, { header: true, skipEmptyLines: true });

    if (errors.length > 0) {
      return NextResponse.json({ error: "Invalid CSV format", details: errors }, { status: 400 });
    }

    const defaultStatus = await (LeadStatus as any).findOne({ tenantId: new mongoose.Types.ObjectId(tenant_id) });

    const leadsToCreate = data.map((row: any) => ({
      tenantId: new mongoose.Types.ObjectId(tenant_id),
      name: row.name,
      phone: row.phone,
      course: row.course,
      source: row.source || 'Bulk Upload',
      remarks: row.remarks,
      statusId: defaultStatus?._id,
      timeline: [{
        action: 'Lead Created',
        details: 'Created via Bulk Upload',
        performedBy: new mongoose.Types.ObjectId(userId)
      }]
    })).filter((l: any) => l.name && l.phone);

    if (leadsToCreate.length === 0) {
      return NextResponse.json({ error: "No valid leads found in CSV" }, { status: 400 });
    }

    await (Lead as any).insertMany(leadsToCreate);
    return NextResponse.json({ success: true, count: leadsToCreate.length });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
