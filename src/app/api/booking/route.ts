import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCATIONS = ['gueliz', 'medina', 'casablanca'] as const;
const GUEST_COUNTS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'];
const TIME_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00', '22:30',
];

interface BookingPayload {
  fullName?: unknown;
  phone?: unknown;
  location?: unknown;
  guests?: unknown;
  date?: unknown;
  time?: unknown;
  company_website?: unknown; // honeypot — real users never fill this in
}

// Strip control characters and cap length; this is a JSON API (not HTML),
// so the risk being closed here is log/header injection, not XSS.
function sanitize(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const cleaned = value.replace(/[\x00-\x1F\x7F]/g, '').trim();
  if (cleaned.length === 0 || cleaned.length > maxLength) return null;
  return cleaned;
}

function isValidFutureDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

export async function POST(request: NextRequest) {
  // Cheap same-site check: no cookies/sessions exist here, but this stops
  // arbitrary third-party pages from POSTing to this endpoint via fetch.
  const origin = request.headers.get('origin');
  if (!origin || origin !== request.nextUrl.origin) {
    return NextResponse.json({ ok: false, error: 'Invalid origin.' }, { status: 403 });
  }

  let body: BookingPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed request body.' }, { status: 400 });
  }

  // Honeypot: bots fill every field including hidden ones. Pretend success
  // so we don't teach the bot which field gave it away.
  if (typeof body.company_website === 'string' && body.company_website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const fullName = sanitize(body.fullName, 100);
  const phone = sanitize(body.phone, 30);
  const location = typeof body.location === 'string' ? body.location : '';
  const guests = typeof body.guests === 'string' ? body.guests : '';
  const date = typeof body.date === 'string' ? body.date : '';
  const time = typeof body.time === 'string' ? body.time : '';

  if (!fullName) {
    return NextResponse.json({ ok: false, error: 'Please enter your full name.' }, { status: 400 });
  }
  if (!phone || !/^\+?[0-9\s-]{6,20}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid phone number.' }, { status: 400 });
  }
  if (!LOCATIONS.includes(location as typeof LOCATIONS[number])) {
    return NextResponse.json({ ok: false, error: 'Please select a valid location.' }, { status: 400 });
  }
  if (!GUEST_COUNTS.includes(guests)) {
    return NextResponse.json({ ok: false, error: 'Please select a valid guest count.' }, { status: 400 });
  }
  if (!isValidFutureDate(date)) {
    return NextResponse.json({ ok: false, error: 'Please select a valid date.' }, { status: 400 });
  }
  if (!TIME_SLOTS.includes(time)) {
    return NextResponse.json({ ok: false, error: 'Please select a valid time.' }, { status: 400 });
  }

  // ponytail: no database is configured yet, so a validated booking is just
  // logged (visible in Vercel's function logs). Wire this to a real store
  // (Postgres/Supabase/CRM webhook) once one exists — the validation above
  // won't need to change.
  console.log('[booking]', { fullName, phone, location, guests, date, time });

  return NextResponse.json({ ok: true });
}
