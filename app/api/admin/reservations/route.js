import { NextResponse } from 'next/server';
import { adminCookie, hasValidAdminSession } from '@/lib/adminAuth';

export const runtime = 'nodejs';

const ALLOWED_ACTIONS = new Set(['list', 'create', 'update', 'delete']);

export async function POST(request) {
  if (!hasValidAdminSession(request.cookies.get(adminCookie.name)?.value)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  if (!ALLOWED_ACTIONS.has(body?.action)) {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }

  const endpoint = process.env.RESERVATIONS_API_URL;
  const apiPassword = process.env.RESERVATIONS_API_PASSWORD;
  if (!endpoint || !apiPassword) {
    return NextResponse.json({ error: 'Reservations service is not configured' }, { status: 503 });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: apiPassword, action: body.action, payload: body.payload }),
      cache: 'no-store',
    });
    const data = await upstream.json().catch(() => ({ error: 'Invalid upstream response' }));
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json({ error: 'Reservations service is unavailable' }, { status: 502 });
  }
}
