import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Institute, User } from '@/lib/models';
import * as bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

export async function POST(request: Request) {
  await dbConnect();
  const { name, email, adminName, adminPassword } = await request.json();
  
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const inst = await Institute.create([{ name, email }], { session });
    const tenantId = inst[0]._id;
    const hashedPassword = bcrypt.hashSync(adminPassword, 10);
    
    await User.create([{
      tenantId,
      name: adminName,
      email,
      password: hashedPassword,
      role: "admin"
    }], { session });

    await session.commitTransaction();
    session.endSession();
    return NextResponse.json({ success: true, tenantId });
  } catch (err: any) {
    await session.abortTransaction();
    session.endSession();
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
