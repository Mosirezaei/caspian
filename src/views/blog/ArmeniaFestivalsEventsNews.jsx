'use client';
import { Newspaper, CalendarDays, ArrowLeft, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';

export default function ArmeniaFestivalsEventsNews() {
  useSEO({
    title: 'تقویم کامل فستیوال‌ها و جشن‌های ارمنستان | راهنمای ماه‌به‌ماه ۲۰۲۶',
    description: 'کامل‌ترین تقویم فستیوال‌ها و جشن‌های ارمنستان؛ از کریسمس و ترندز تا وارداوار، روزهای شراب، جشنواره گاتا، آرنی و رویدادهای فرهنگی ارمنستان به تفکیک ماه.',
    keywords: 'فستیوال ارمنستان, تقویم جشن های ارمنستان, وارداوار, ترندز, روزهای شراب ایروان, جشنواره آرنی, رویدادهای ایروان',
    path: '/blog/armenia-festivals-events-news',
  });


  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <div className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            اخبار و فستیوال‌ها
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            تقویم کامل فستیوال‌ها و جشن‌های سالانه ارمنستان
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            از جشن‌های باستانی مثل ترندز و وارداوار تا فستیوال‌های مدرن مثل Yerevan Wine Days و Golden Apricot — راهنمای ماه‌به‌ماه جشن‌های مذهبی، فرهنگی، غذایی و هنری ارمنستان
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2.5 bg-primary text-black font-bold px-7 py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-sm sm:text-base animate-pulse hover:animate-none"
            >
              <CalendarDays className="w-5 h-5" />
              دیدن کنسرت‌ها و خرید بلیط در ایروان
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* تقویم کامل فستیوال‌ها در تب اول صفحه‌ی /events قرار دارد. */}
        <section className="mb-14">
          <div className="p-6 rounded-2xl bg-white/5 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <PartyPopper className="w-5 h-5 text-primary" /> تقویم فستیوال‌های سالانه ارمنستان
            </h2>
            <p className="text-sm text-foreground/60 leading-7 mt-3">
              تاریخ، توضیحات و تصاویر جشن‌های سالانه از جمله وارداوار، ترندز، روزهای شراب ایروان، گاتا و جشنواره آرنی را در صفحه اختصاصی فستیوال‌ها ببینید.
            </p>
            <Link href="/events" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              دیدن تقویم کامل فستیوال‌ها <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Immigration & EU news */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-primary" /> اخبار مهاجرتی و روابط ارمنستان با اتحادیه اروپا
          </h2>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-sm text-foreground/70 leading-7">
            <p>
              گفت‌وگوی لغو ویزای ارمنستان با اتحادیه اروپا در سال ۲۰۲۶ وارد فاز فعالی شده. طبق اعلام کمیسیون اروپا، ارمنستان تنها کشوری‌ست که در حال حاضر گفت‌وگوی فعال لغو ویزا با اتحادیه اروپا دارد — نخستین اجلاس رسمی ارمنستان-اتحادیه اروپا در ماه مه ۲۰۲۶ در ایروان برگزار شد و گزارش پیشرفت اولیه هم همان‌جا ارائه شد.
            </p>
            <p>
              اتحادیه اروپا ۵۳ توصیه‌ی مشخص به دولت ارمنستان ارائه داده که به ۱۱۷ اقدام اجرایی تفکیک شده؛ طبق آخرین اعلام مقامات ارمنی، بیش از نیمی از این اقدام‌ها تا تابستان ۲۰۲۶ تکمیل شده. یک هیئت ارزیابی اتحادیه اروپا هم پاییز امسال برای بررسی میزان پیشرفت به ارمنستان سفر می‌کند.
            </p>
            <p>
              اورسولا فون‌درلاین، رئیس کمیسیون اروپا، پیشرفت ارمنستان را «چشمگیر» توصیف کرده، هرچند هیچ‌کدام از طرفین هنوز جدول زمانی قطعی برای تکمیل فرآیند اعلام نکرده‌اند. این روند به معنای لغو فوری ویزا نیست، اما نشانه‌ی روشنی از نزدیک‌تر شدن روابط ارمنستان و اروپاست که می‌تواند در سال‌های آینده سفر به شنگن را برای شهروندان ارمنی ساده‌تر کند.
            </p>
            <p className="text-xs text-foreground/50 pt-2 border-t border-white/10">
              نکته‌ی مهم برای متقاضیان ایرانی: این گفت‌وگو مربوط به شهروندان ارمنی و لغو ویزای اتحادیه اروپاست، نه تغییری مستقیم در قوانین اقامت ارمنستان برای اتباع خارجی. با این حال، نزدیک‌شدن ارمنستان به اروپا می‌تواند در بلندمدت روی فرصت‌های اقتصادی و ارزش اقامت ارمنستان اثر بگذارد. برای آخرین وضعیت دقیق قوانین اقامت، همیشه با کارشناسان گروه کاسپین هماهنگ کنید — این حوزه به‌سرعت در حال تغییر است.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برای برنامه‌ریزی سفر یا مشاوره‌ی اقامت آماده‌اید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین برای هماهنگی سفر همزمان با فستیوال‌ها و مشاوره‌ی به‌روز اقامت و مهاجرت در کنارتان است.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            تماس با کارشناسان
          </a>
        </div>

        </div>

          <PageSidebar tags={['festivals', 'events', 'concerts', 'news', 'eu', 'armenia']} currentPath="/blog/armenia-festivals-events-news" />
        </div>

        <RelatedServices currentPath="/blog/armenia-festivals-events-news" />
      </main>
    </div>
  );
}
