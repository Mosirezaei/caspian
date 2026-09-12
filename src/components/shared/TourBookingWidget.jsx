'use client';
import { useState } from 'react';
import { X, Plus, Minus, Calendar, Users } from 'lucide-react';
import { WHATSAPP_BOOKING } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * TourBookingWidget — دکمه طلایی رزرو تور + مودال فرم رزرو.
 * قیمت‌گذاری: بزرگسال با adultPrice، کودک ۷ تا ۱۳ سال با childPrice، کودک زیر ۷ سال رایگان (بدون ناهار).
 * روی ارسال، همه‌ی مشخصات به‌صورت یک پیام آماده به واتساپ فرستاده می‌شه.
 * این کامپوننت عمومیه — قراره روی همه‌ی صفحات تور (سوان، ایروان و بقیه) استفاده بشه.
 */
export default function TourBookingWidget({
  tourName,
  adultPrice = 15000,
  childPrice = 12000,
  currency = 'درام',
  whatsappNumber = WHATSAPP_BOOKING,
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [childrenOlder, setChildrenOlder] = useState(0); // ۷ تا ۱۳ سال
  const [childrenYounger, setChildrenYounger] = useState(0); // زیر ۷ سال

  const totalPeople = adults + childrenOlder + childrenYounger;
  const totalPrice = adults * adultPrice + childrenOlder * childPrice;

  const step = (setter, val, delta, min = 0) => setter(Math.max(min, val + delta));

  const buildMessage = () => {
    const lines = [
      `سلام، می‌خوام برای «${tourName}» رزرو کنم:`,
      date ? `📅 تاریخ ترجیحی: ${date}` : '📅 تاریخ ترجیحی: هنوز مشخص نشده',
      `👤 بزرگسال: ${adults} نفر`,
      `🧒 کودک ۷ تا ۱۳ سال: ${childrenOlder} نفر`,
      `👶 کودک زیر ۷ سال (بدون ناهار): ${childrenYounger} نفر`,
      `👥 مجموع نفرات: ${totalPeople} نفر`,
      `💰 هزینه تقریبی: ${totalPrice.toLocaleString('fa-IR')} ${currency}`,
    ];
    return lines.join('\n');
  };

  const handleSend = () => {
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const Counter = ({ label, hint, value, onDec, onInc }) => (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
      <div>
        <p className="text-sm font-bold text-foreground">{label}</p>
        {hint && <p className="text-[11px] text-foreground/50 mt-0.5">{hint}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onDec} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-6 text-center font-black text-foreground">{value}</span>
        <button type="button" onClick={onInc} className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 text-primary flex items-center justify-center transition">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-l from-primary to-yellow-500 text-black font-black px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
      >
        🎟️ رزرو تور
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full sm:max-w-md bg-[#111] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto" dir="rtl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-black text-foreground">رزرو {tourName}</h3>
              <button type="button" onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <X className="w-4 h-4" />
              </button>
            </div>

            <label className="block mb-5">
              <span className="text-sm font-bold text-foreground/80 flex items-center gap-1.5 mb-2">
                <Calendar className="w-4 h-4 text-primary" /> تاریخ ترجیحی رزرو
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50"
              />
            </label>

            <div className="space-y-3 mb-5">
              <Counter label="بزرگسال" hint={`${adultPrice.toLocaleString('fa-IR')} ${currency} برای هر نفر`} value={adults}
                onDec={() => step(setAdults, adults, -1, 1)} onInc={() => step(setAdults, adults, 1)} />
              <Counter label="کودک ۷ تا ۱۳ سال" hint={`${childPrice.toLocaleString('fa-IR')} ${currency} برای هر نفر`} value={childrenOlder}
                onDec={() => step(setChildrenOlder, childrenOlder, -1)} onInc={() => step(setChildrenOlder, childrenOlder, 1)} />
              <Counter label="کودک زیر ۷ سال" hint="رایگان، بدون ناهار" value={childrenYounger}
                onDec={() => step(setChildrenYounger, childrenYounger, -1)} onInc={() => step(setChildrenYounger, childrenYounger, 1)} />
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/25 mb-5">
              <div className="flex items-center justify-between text-sm text-foreground/70 mb-1.5">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> مجموع نفرات</span>
                <span className="font-bold text-foreground">{totalPeople} نفر</span>
              </div>
              <div className="flex items-center justify-between text-base pt-1.5 border-t border-primary/15">
                <span className="font-bold text-foreground/80">هزینه تقریبی</span>
                <span className="font-black text-primary text-lg">{totalPrice.toLocaleString('fa-IR')} {currency}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSend}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition"
            >
              <WhatsAppIcon className="w-5 h-5 brightness-0 invert" />
              ارسال مشخصات و ادامه در واتساپ
            </button>
          </div>
        </div>
      )}
    </>
  );
}
