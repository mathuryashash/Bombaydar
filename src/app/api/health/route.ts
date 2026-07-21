import { NextResponse } from 'next/server';

// Point uptime monitors (UptimeRobot, BetterStack, etc.) at this endpoint.
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
