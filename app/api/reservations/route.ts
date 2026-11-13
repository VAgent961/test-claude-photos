import { NextResponse } from 'next/server';
import { sql, hasDb } from '@/lib/db';
import { clean, isEmail, asText, whatsappLink, notifyOwner } from '@/lib/notify';

export async function POST(req: Request) {
  let wa = '';
  try {
    const body = await req.json();
    const name = clean(body?.name, 100);
    const date = clean(body?.date, 20);
    const time = clean(body?.time, 10);
    const partySize = parseInt(String(body?.party_size || ''), 10);
    const specialRequests = clean(body?.special_requests, 500);

    if (!name || !date || !time || !partySize || partySize < 1) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all required fields.', whatsapp: wa },
        { status: 400 }
      );
    }

    const fields = [
      { label: 'Name', value: name },
      { label: 'Date', value: date },
      { label: 'Time', value: time },
      { label: 'Party Size', value: String(partySize) },
      { label: 'Special Requests', value: specialRequests || '—' },
    ];

    wa = whatsappLink(asText('New Table Reservation', fields));

    if (!hasDb) {
      return NextResponse.json(
        { ok: false, error: 'Online booking is not connected yet. Please contact us on WhatsApp or by phone.', whatsapp: wa },
        { status: 503 }
      );
    }

    await sql`
      insert into reservations (name, date, time, party_size, special_requests)
      values (${name}, ${date}, ${time}, ${partySize}, ${specialRequests || null})
    `;

    await notifyOwner('New Table Reservation', fields);

    return NextResponse.json({ ok: true, whatsapp: wa });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again or contact us on WhatsApp.', whatsapp: wa },
      { status: 500 }
    );
  }
}
