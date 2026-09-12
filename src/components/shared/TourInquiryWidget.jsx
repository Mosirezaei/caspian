'use client';
import { useState } from 'react';
import { X, Plus, Minus, Calendar, Users } from 'lucide-react';
import { WHATSAPP_BOOKING } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * TourInquiryWidget — دکمه «استعلام قیمت آنلاین» + مودال فرم.
 * برخلاف TourBookingWidget، این کامپوننت قیمت ثابتی نداره (برای تورهایی که هنوز
 * قیمت‌گذاری مشخصی روی سایت اعلام نشده) — فقط تاریخ و تعداد نفرات رو می‌گیره و
 * به‌صورت یک پیام آماده به واتساپ می‌فرسته تا قیمت دقیق همون‌جا از کارشناسان
 * کاسپین استعلام بشه.
 * صفحاتی که استفاده می‌کنن: خور ویراپ، گیومری، دیلیجان — و هر توری که هنوز
 * قیمت مشخص نداره. تورهایی که قیمت دارن (سوان، ایروان، گارنی-گغارد) از
 * TourBookingWidget استفاده می‌کنن.
 */
export default function TourInquiryWidget({
  tourName,
  whatsappNumber = WHATSAPP_BOOKING,
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const totalPeople = adults + childrenCount;

  const step = (setter, val, delta, min = 0) => setter(Math.max(min, val + delta));

  const buildMessage = () => {
    const lines = [
      `سلام، می‌خوام برای «${tourName}» استعلام قیمت بگیرم:`,
      date ? `📅 تاریخ ترجیحی: ${date}` : '📅 تاریخ ترجیحی: هنوز مشخص نشده',
      `👤 بزرگسال: ${adults} نفر`,
      `🧒 کودک: ${childrenCount} نفر`,
      `👥 مجموع نفرات: ${totalPeople} نفر`,
      `💰 لطفاً قیمت و ظرفیت این تاریخ رو برام بفرستید`,
    ];
    return lines.join('\n');
  };

  const handleSend = () => {
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const Counter = ({ label, value, onDec, onInc }) => (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
      <p className="text-sm font-bold text-foreground">{label}</p>
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
        💬 استعلام قیمت آنلاین
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full sm:max-w-md bg-[#111] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto" dir="rtl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-black text-foreground">استعلام قیمت {tourName}</h3>
              <button type="button" onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-foreground/50 mb-5">
              قیمت این تور فعلاً روی سایت اعلام نشده — مشخصات زیر رو پر کن تا همین حالا در واتساپ قیمت دقیق و ظرفیت رو از کارشناسان ما بگیری.
            </p>

            <label className="block mb-5">
              <span className="text-sm font-bold text-foreground/80 flex items-center gap-1.5 mb-2">
                <Calendar className="w-4 h-4 text-primary" /> تاریخ ترجیحی
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50"
              />
            </label>

            <div className="space-y-3 mb-5">
              <Counter label="بزرگسال" value={adults}
                onDec={() => step(setAdults, adults, -1, 1)} onInc={() => step(setAdults, adults, 1)} />
              <Counter label="کودک" value={childrenCount}
                onDec={() => step(setChildrenCount, childrenCount, -1)} onInc={() => step(setChildrenCount, childrenCount, 1)} />
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/25 mb-5">
              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> مجموع نفرات</span>
                <span className="font-bold text-foreground">{totalPeople} نفر</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSend}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition"
            >
              <WhatsAppIcon className="w-5 h-5 brightness-0 invert" />
              ارسال و استعلام قیمت در واتساپ
            </button>
          </div>
        </div>
      )}
    </>
  );
}
