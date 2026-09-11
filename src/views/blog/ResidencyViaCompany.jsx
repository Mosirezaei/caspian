'use client';
import { Home, ShieldAlert, Globe2, HeartHandshake, Scale } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

const heroImg = '/images/Yerevan_Residency.webp';

export default function ResidencyViaCompany() {
  useSEO({
    title: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم | کاسپین گروپ',
    description: 'اقامت با فعالیت واقعی شرکت — چرا ثبت صوری کافی نیست، چه مدارکی لازم است و Caspian Group چطور کل مسیر را پشتیبانی می‌کند.',
    keywords: 'اقامت ارمنستان با ثبت شرکت, اقامت بیزینسی ارمنستان, اقامت از طریق شرکت',
    path: '/blog/residency-via-company-registration',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImg} alt="اقامت ارمنستان از طریق ثبت شرکت" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base max-w-xl">مسیر اقامت از راه فعالیت واقعی تجاری، نه ثبت صوری</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            ثبت شرکت و مالی
          </span>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>اقامت ارمنستان از طریق ثبت شرکت یکی از مسیرهای رایج برای کارآفرینان و سرمایه‌گذاران خارجی است، اما این اقامت به صورت خودکار صادر نمی‌شود. تصمیم نهایی درباره اخذ اقامت ارمنستان با اداره مهاجرت این کشور است و به فعالیت واقعی شرکت وابسته است.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Home className="w-5 h-5" /> اقامت ارمنستان از طریق فعالیت تجاری چه شرایطی دارد؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">اقامت ارمنستان با ثبت شرکت زمانی قابل پیگیری است که:</p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                شرکت فعالیت اقتصادی واقعی داشته باشد
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                گردش مالی و پرداخت مالیات ثبت‌شده باشد
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                مدارک لازم شامل مدارک هویتی، اساسنامه و سابقه فعالیت مالی به اداره مهاجرت ارائه شود
              </li>
            </ul>
            <p>متقاضی معمولاً باید برای مصاحبه یا ثبت‌نام حضوری به ایروان مراجعه کند. بازه رسیدگی به پرونده اقامت متغیر است و به کامل بودن مدارک و حجم فعالیت شرکت بستگی دارد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" /> چرا ثبت صوری شرکت مبنای مطمئنی برای اقامت نیست؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">شرکتی که فقط روی کاغذ ثبت شده و فعالیت واقعی ندارد، پایه ضعیفی برای درخواست اقامت است. اداره مهاجرت ارمنستان معمولاً به دنبال شواهدی از فعالیت جاری است مانند:</p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                تراکنش‌های بانکی
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                پرداخت مالیات
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                گزارش حسابداری منظم
              </li>
            </ul>
            <p>پرونده‌هایی که پشت آن‌ها فقط ثبت اسمی شرکت قرار دارد، در بررسی اداری با ریسک رد شدن یا تأخیر طولانی مواجه می‌شوند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Globe2 className="w-5 h-5" /> مزایای مالکیت خارجی و دسترسی به بازار اوراسیا چیست؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>مالکیت ۱۰۰٪ خارجی در ارمنستان به این معناست که صاحب شرکت برای تصمیم‌گیری، تقسیم سود یا فروش سهام به تأیید هیچ شریک محلی نیاز ندارد. عضویت ارمنستان در اتحادیه اقتصادی اوراسیا (EAEU) نیز صادرات به روسیه، قزاقستان، بلاروس و قرقیزستان را بدون تعرفه‌های گمرکی سنگین ممکن می‌کند.</p>
            <p>این ترکیب برای شرکت‌های بازرگانی و صادراتی که هدفشان دسترسی به بازارهای منطقه‌ای است، ارزش عملی دارد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5" /> Caspian Group Armenia چگونه امور ثبت، اقامت، اسکان و پشتیبانی را یکپارچه می‌کند؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>تیم Caspian Group Armenia با بیش از ۱۵ سال تجربه در حوزه مهاجرت و ویزا، فرایند ثبت شرکت، افتتاح حساب بانکی، اخذ اقامت و حتی رزرو محل اقامت در ایروان را در یک مسیر هماهنگ پیگیری می‌کند. مشاوره رایگان، پاسخگویی زیر یک ساعت و پشتیبانی ۲۴ ساعته بخشی از خدماتی است که این تیم برای متقاضیان ایرانی ارائه می‌دهد.</p>
            <p>با نرخ موفقیت گزارش‌شده ۹۷ درصد در امور ویزا و مهاجرت، مشتریانی که مسیر ثبت شرکت تا اقامت را طی می‌کنند از پشتیبانی یکپارچه بهره می‌برند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Scale className="w-5 h-5" /> انتخاب ساختار درست، پایه کسب‌وکار پایدار در ارمنستان
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>انتخاب میان LLC، IE یا CJSC نقطه شروع هر پرونده ثبت شرکت در ارمنستان است و مستقیماً روی هزینه، مسئولیت مالی و مسیر اقامت اثر می‌گذارد. کارآفرینان ایرانی که این انتخاب را با دقت و بر اساس نوع فعالیت خود انجام می‌دهند، از همان ابتدا مسیر ساده‌تری برای مالیات، بانکداری و حتی اقامت خواهند داشت.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4">سوالات متداول</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">آیا با ثبت شرکت می‌توان اقامت ارمنستان گرفت؟</p>
              <p className="text-sm text-foreground/65 leading-7">ثبت شرکت به تنهایی اقامت را تضمین نمی‌کند، اما فعالیت واقعی شرکت همراه با گردش مالی و پرداخت مالیات می‌تواند مبنای درخواست اقامت باشد. تصمیم نهایی درباره صدور اقامت با اداره مهاجرت ارمنستان است.</p>
            </div>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            مسیر ثبت شرکت تا اقامت رو با راهنمایی تخصصی طی کنید
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین ثبت شرکت، بانکداری و پرونده اقامت شما رو یکپارچه پیش می‌بره.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان
          </a>
        </div>

        <RelatedServices currentPath="/blog/residency-via-company-registration" />

        </div>

          <PageSidebar tags={['residency', 'company', 'armenia', 'immigration', 'EAEU']} currentPath="/blog/residency-via-company-registration" />
        </div>
      </main>
    </div>
  );
}
