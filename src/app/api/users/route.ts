import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { User } from '@/lib/models';
import * as bcrypt from 'bcryptjs';
import { getAuthUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id } = user;
  try {
    const users = await User.find({ tenantId: new mongoose.Types.ObjectId(tenant_id) })
      .select('-password')
      .sort({ name: 1 });
    
    const formattedUsers = users.map((u: any) => ({
      id: u._id.toString(),
      name: u.name,
      email: u.email,
      role: u.role,
      status: u.status
    }));

    return NextResponse.json(formattedUsers);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { tenant_id, role } = user;
  if (role !== 'admin' && role !== 'super_admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { name, email, password, role: userRole } = await request.json();
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      tenantId: new mongoose.Types.ObjectId(tenant_id),
      name,
      email,
      password: hashedPassword,
      role: userRole
    });
    return NextResponse.json({ id: newUser._id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
