'use client';
import { useState } from 'react';
import { PartyPopper, CalendarDays, Info, MapPin, Star } from 'lucide-react';
import { FESTIVAL_MONTHS, FESTIVALS } from '@/data/festivalsData';

const TOP_PICKS = [
  { id: 'christmas', month: 1, label: '🎄 کریسمس', when: 'ژانویه' },
  { id: 'trndez', month: 2, label: '🔥 ترندز', when: 'فوریه' },
  { id: 'easter', month: 4, label: '✝️ عید پاک (زاتیک)', when: 'مارس–آوریل' },
  { id: 'wine-days', month: 6, label: '🍷 روزهای شراب ایروان', when: 'ژوئن' },
  { id: 'haybuis', month: 6, label: '🌿 HayBuis', when: 'ژوئن' },
  { id: 'sheep-shearing', month: 6, label: '🐑 پشم‌چینی گوسفند', when: 'ژوئن' },
  { id: 'vardavar', month: 7, label: '💦 وارداوار', when: 'ژوئیه' },
  { id: 'golden-apricot', month: 7, label: '🎬 زردآلوی طلایی', when: 'ژوئیه' },
  { id: 'beer-days', month: 7, label: '🍺 روزهای آبجو', when: 'ژوئیه/اوت' },
  { id: 'taraz-fest', month: 8, label: '👘 تاراز فست', when: 'اوت' },
  { id: 'barbecue-akhtala', month: 8, label: '🍖 جشنواره کباب آختالا', when: 'اوت' },
  { id: 'gata-fest', month: 9, label: '🥮 جشنواره گاتا', when: 'سپتامبر' },
  { id: 'independence-day', month: 9, label: '🇦🇲 روز استقلال', when: 'سپتامبر' },
  { id: 'areni-wine', month: 10, label: '🍷 جشنواره شراب آرنی', when: 'اکتبر' },
  { id: 'high-fest', month: 10, label: '🎭 های‌فست', when: 'اکتبر' },
  { id: 'balloon-fest', month: 10, label: '🎈 جشنواره بالن هوای گرم', when: 'پاییز' },
  { id: 'erebuni-yerevan', month: 10, label: '🏛️ اربونی-ایروان', when: 'اکتبر' },
];

function Stars({ n }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3 h-3 ${i < n ? 'fill-primary text-primary' : 'text-foreground/15'}`} />
      ))}
    </span>
  );
}
/**
 * FestivalsCalendar -- تقویم کامل فستیوال‌های ارمنستان (بدون Header/GlobalNavbar).
 * روی صفحه‌ی مقاله /blog/armenia-festivals-events-news و تب «فستیوال‌ها»ی
 * صفحه‌ی /events استفاده می‌شه تا محتوا یک‌بار نوشته و دو‌جا نمایش داده بشه.
 */
export default function FestivalsCalendar({ idPrefix = '' }) {
  const [activeMonth, setActiveMonth] = useState('all');

  const goToFestival = (id, month) => {
    setActiveMonth(month);
    setTimeout(() => {
      const el = document.getElementById(`${idPrefix}festival-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-primary/60');
        setTimeout(() => el.classList.remove('ring-2', 'ring-primary/60'), 2000);
      }
    }, 50);
  };

  const visibleFestivals = activeMonth === 'all' ? FESTIVALS : FESTIVALS.filter(f => f.month === activeMonth);

  return (
    <div>
{/* هشدار مهم درباره‌ی تاریخ‌های متغیر */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-sm text-foreground/75 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-400" />
          <span>تاریخ فستیوال‌ها ممکن است هر سال تغییر کند. تاریخ‌های ثابت و تاریخ‌های اعلام‌شده رسمی از منابع رسمی ارمنستان درج شده‌اند؛ برای رویدادهای متغیر، تاریخ نهایی هر سال پس از اعلام برگزارکنندگان به‌روزرسانی می‌شود.</span>
        </div>

        {/* مهم‌ترین فستیوال‌ها برای گردشگران */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-4.5 h-4.5 text-primary fill-primary" /> مهم‌ترین فستیوال‌های ارمنستان برای گردشگران
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {TOP_PICKS.map((p) => (
              <button key={p.id} type="button" onClick={() => goToFestival(p.id, p.month)}
                className="flex items-center justify-between text-sm px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-colors text-right">
                <span className="text-foreground/85">{p.label}</span>
                <span className="text-[11px] text-primary/70 font-semibold">{p.when}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Annual Festivals — با فیلتر ماه */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-primary" /> تقویم کامل فستیوال‌ها به تفکیک ماه
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setActiveMonth('all')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors ${activeMonth === 'all' ? 'bg-primary text-black border-primary' : 'bg-white/5 text-foreground/60 border-white/10 hover:bg-white/10'}`}>
              همه ماه‌ها
            </button>
            {FESTIVAL_MONTHS.map(m => (
              <button key={m.id} onClick={() => setActiveMonth(m.id)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full border transition-colors ${activeMonth === m.id ? 'bg-primary text-black border-primary' : 'bg-white/5 text-foreground/60 border-white/10 hover:bg-white/10'}`}>
                {m.fa}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {visibleFestivals.map((f) => (
              <div key={f.id} id={`${idPrefix}festival-${f.id}`} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden scroll-mt-24 transition-shadow">
                {f.image && (
                  <img src={f.image.url} alt={f.image.alt || `${f.nameFa} — جشن ${f.nameEn} در ارمنستان`} title={f.image.alt || f.nameEn} loading="lazy" className="w-full h-44 sm:h-52 object-cover bg-black/20" />
                )}
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
                      {FESTIVAL_MONTHS.find(m => m.id === f.month)?.fa}
                    </span>
                    <Stars n={f.star} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{f.nameFa} <span className="text-foreground/40 font-normal">— {f.nameEn}</span></h3>
                  <p className="text-foreground/60 text-sm leading-6 mb-2">{f.desc}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/45">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {f.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {f.location}</span>
                  </div>
                  {f.image && (
                    <p className="text-[10px] text-foreground/30 mt-2">عکس: {f.image.credit}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground/40 mt-3 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0" /> تاریخ دقیق برخی جشن‌ها (مثل وارداوار که وابسته به تقویم مذهبی است) هرسال کمی جابه‌جا می‌شود؛ نزدیک به موعد با ما تماس بگیرید تا تاریخ امسال را تأیید کنیم.
          </p>
        </section>
    </div>
  );
}
