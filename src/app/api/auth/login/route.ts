import { NextResponse } from 'next/server';
import * as bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongodb';
import { User } from '@/lib/models';
import { signToken } from '@/lib/auth';

export async function POST(request: Request) {
  await dbConnect();
  const { email, password } = await request.json();

  try {
    const user = await (User as any).findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken({ 
      id: user._id, 
      tenant_id: user.tenantId, 
      role: user.role, 
      name: user.name 
    });

    return NextResponse.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        role: user.role, 
        tenant_id: user.tenantId 
      } 
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
