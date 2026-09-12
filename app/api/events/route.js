import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

async function readCachedEvents() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) throw new Error('Missing Supabase configuration');

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('events_cache')
    .select('event_id, title, title_fa, venue, venue_fa, category, category_fa, event_date, price, image_url, event_url')
    .order('event_date', { ascending: true });

  if (error) throw new Error(error.message);
  return (data || []).map((event) => ({
    id: event.event_id,
    title: event.title,
    titleFa: event.title_fa,
    venue: event.venue,
    venueFa: event.venue_fa,
    category: event.category,
    categoryFa: event.category_fa,
    date: event.event_date,
    price: event.price,
    priceDisplay: event.price || null,
    image: event.image_url,
    url: event.event_url,
  }));
}

export async function GET() {
  try {
    const events = await readCachedEvents();
    return NextResponse.json(
      { events, total: events.length, fetchedAt: new Date().toISOString() },
      { headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=300' } }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
