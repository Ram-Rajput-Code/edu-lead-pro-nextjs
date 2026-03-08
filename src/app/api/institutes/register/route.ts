import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Institute, User, LeadStatus, TaskStatus } from '@/lib/models';
import * as bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  await dbConnect();
  const { name: adminName, email, password: adminPassword, instituteName } = await request.json();
  
  try {
    // Check if user already exists
    const existingUser = await (User as any).findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    // Check if institute email already exists
    const existingInst = await (Institute as any).findOne({ email });
    if (existingInst) {
      return NextResponse.json({ error: "Institute email already registered" }, { status: 400 });
    }

    // Create Institute
    const inst = await Institute.create({ name: instituteName, email });
    const tenantId = inst._id;
    const hashedPassword = bcrypt.hashSync(adminPassword, 10);
    
    // Create Admin User
    await User.create({
      tenantId,
      name: adminName,
      email,
      password: hashedPassword,
      role: "admin"
    });

    // Create default Lead Statuses
    await LeadStatus.create([
      { tenantId, label: 'New', color: '#6366f1' },
      { tenantId, label: 'Contacted', color: '#f59e0b' },
      { tenantId, label: 'Interested', color: '#10b981' },
      { tenantId, label: 'Enrolled', color: '#059669' },
      { tenantId, label: 'Lost', color: '#ef4444' }
    ]);

    // Create default Task Statuses
    await TaskStatus.create([
      { tenantId, label: 'To Do', color: '#94a3b8', isDefault: true },
      { tenantId, label: 'In Progress', color: '#6366f1' },
      { tenantId, label: 'Completed', color: '#10b981' }
    ]);

    return NextResponse.json({ success: true, tenantId });
  } catch (err: any) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: err.message || "Registration failed" }, { status: 400 });
  }
}
