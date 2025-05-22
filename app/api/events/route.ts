import { NextResponse } from 'next/server';
import { fetchEventsFromSheet } from '@/lib/googleSheets';

export async function GET() {
  const events = await fetchEventsFromSheet();
  return NextResponse.json(events);
}
