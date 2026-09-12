import { NextResponse } from 'next/server';
import { adminCookie, createAdminSession, hasValidAdminPassword, hasValidAdminSession } from '@/lib/adminAuth';

export const runtime = 'nodejs';

export async function GET(request) {
  return NextResponse.json({
    authenticated: hasValidAdminSession(request.cookies.get(adminCookie.name)?.value),
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  if (!hasValidAdminPassword(body?.password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const response = NextResponse.json({ authenticated: true });
  response.cookies.set(adminCookie.name, createAdminSession(), adminCookie.options);
  return response;
}

export function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(adminCookie.name, '', { ...adminCookie.options, maxAge: 0 });
  return response;
}
