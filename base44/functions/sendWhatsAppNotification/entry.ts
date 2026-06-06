import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const body = await req.json();
  const reservation = body.data;

  if (!reservation) {
    return Response.json({ error: 'No reservation data' }, { status: 400 });
  }

  const apiKey = Deno.env.get('CALLMEBOT_API_KEY');
  const phone = '37433149327'; // Company WhatsApp number

  const ticketTypeLabel = reservation.ticket_type === 'air' ? '✈️' : '🚌';
  const paymentLabels = {
    rial_transfer: '🏦 ریالی',
    usd_card: '💳 دلاری',
    crypto_usdt: '₮ تتر',
  };

  const msg = `🎫 رزرو جدید!\n${reservation.passenger_name}\n${ticketTypeLabel} ${reservation.from_city} → ${reservation.to_city}\n💰 ${(reservation.total_price || 0).toLocaleString()} تومان\n${paymentLabels[reservation.payment_method] || reservation.payment_method}`;

  try {
    const response = await fetch(`https://api.callmebot.com/whatsapp.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        phone: phone,
        text: msg,
        apikey: apiKey,
      }).toString(),
    });

    if (!response.ok) {
      console.error('CallMeBot API error:', response.status);
    }
  } catch (error) {
    console.error('WhatsApp notification error:', error.message);
  }

  return Response.json({ success: true });
});