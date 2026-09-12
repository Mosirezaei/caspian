'use client';

import { useMemo, useState } from 'react';
import { Minus, Plus, X, MapPin, Ticket } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/contact';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

const TICKETS = [
  { id: 'standing', label: 'بلیط ایستاده', price: 40, note: 'Fan Zone / Standing' },
  { id: 'seated', label: 'بلیط نشسته', price: 55, note: 'صندلی اختصاصی، بدون شماره‌گذاری' },
  { id: 'afterParty', label: 'افترپارتی', price: 15, note: 'فقط همراه با بلیط اصلی' },
];

export default function DiscoLegendsBookingModal({ onClose }) {
  const [counts, setCounts] = useState({ standing: 0, seated: 0, afterParty: 0 });
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const mainTickets = counts.standing + counts.seated;
  const total = useMemo(() => TICKETS.reduce((sum, ticket) => sum + counts[ticket.id] * ticket.price, 0), [counts]);

  function updateCount(id, next) {
    const value = Math.max(0, next);
    if (id === 'afterParty' && value > 0 && mainTickets === 0) return setError('ابتدا حداقل یک بلیط ایستاده یا نشسته انتخاب کنید.');
    if (id === 'afterParty' && value > mainTickets) return setError('تعداد بلیط افترپارتی نمی‌تواند از تعداد بلیط‌های اصلی بیشتر باشد.');
    const nextCounts = { ...counts, [id]: value };
    const nextMain = nextCounts.standing + nextCounts.seated;
    if (nextCounts.afterParty > nextMain) nextCounts.afterParty = nextMain;
    setCounts(nextCounts); setError('');
  }

  function submit(event) {
    event.preventDefault();
    if (!mainTickets) return setError('حداقل یک بلیط ایستاده یا نشسته انتخاب کنید.');
    if (!fullName.trim() || !phone.trim()) return setError('نام و شماره تماس را وارد کنید.');
    const message = `سلام، درخواست رزرو Disco Legends دارم:\n\n👤 نام: ${fullName}\n📞 تماس: ${phone}\n🎫 ایستاده: ${counts.standing} عدد\n💺 نشسته: ${counts.seated} عدد\n🎉 افترپارتی: ${counts.afterParty} عدد\n💰 مجموع: ${total} دلار\n\nلطفاً برای تکمیل رزرو راهنمایی کنید.`;
    window.open(getWhatsAppUrl(undefined, message), '_blank');
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="relative w-full max-w-2xl mx-auto my-4 rounded-3xl overflow-hidden bg-[#101010] border border-primary/30 shadow-2xl" dir="rtl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white/80 flex items-center justify-center"><X className="w-5 h-5" /></button>
        <img src="/images/retrodesk.jpeg" alt="Disco Legends Retro Stars Fest" className="w-full h-40 sm:h-52 object-cover" />
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 text-xs text-primary mb-2"><Ticket className="w-4 h-4" /> رزرو مستقیم از کاسپین</div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">Disco Legends — Retro Stars Fest</h2>
          <p className="text-sm text-foreground/60 mt-2 flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> AURA by Adana Complex · ۲۰ سپتامبر</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="space-y-2.5">{TICKETS.map((ticket) => <div key={ticket.id} className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10"><div><div className="font-bold text-sm text-foreground">{ticket.label}</div><div className="text-xs text-foreground/50 mt-1">{ticket.note} · <span className="text-primary font-bold">{ticket.price} دلار</span></div></div><div className="flex items-center gap-2 rounded-xl bg-black/30 border border-white/10 p-1"><button type="button" onClick={() => updateCount(ticket.id, counts[ticket.id] - 1)} className="w-8 h-8 grid place-items-center text-primary"><Minus className="w-4 h-4" /></button><span className="w-6 text-center font-bold text-foreground">{counts[ticket.id]}</span><button type="button" onClick={() => updateCount(ticket.id, counts[ticket.id] + 1)} className="w-8 h-8 grid place-items-center text-primary"><Plus className="w-4 h-4" /></button></div></div>)}</div>
            <div className="grid sm:grid-cols-2 gap-3"><input value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="نام و نام خانوادگی" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 outline-none focus:border-primary/50" /><input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="شماره تماس" inputMode="tel" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 outline-none focus:border-primary/50" /></div>
            {error && <p className="text-xs text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl p-3">{error}</p>}
            <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/20"><span className="text-sm text-foreground/70">مجموع قابل پرداخت</span><strong className="text-xl text-primary">{total} دلار</strong></div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-black font-bold hover:bg-yellow-400 transition"><WhatsAppIcon className="w-5 h-5" /> تأیید و ارسال درخواست در واتساپ</button>
            <p className="text-[11px] text-foreground/40 text-center leading-5">بلیط‌ها QR Code و غیرقابل استرداد هستند. صندلی‌های نشسته شماره‌گذاری نشده‌اند.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
