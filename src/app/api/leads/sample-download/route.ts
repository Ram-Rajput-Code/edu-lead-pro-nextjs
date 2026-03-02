import { NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';

export async function GET(request: Request) {
  const user: any = getAuthUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const csvContent = "name,phone,course,source,remarks\nJohn Doe,9876543210,Full Stack Development,Facebook,Interested in weekend batch\nJane Smith,8765432109,Data Science,Google Ads,Needs scholarship info";
  
  return new NextResponse(csvContent, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename=leads_sample.csv',
    },
  });
}
