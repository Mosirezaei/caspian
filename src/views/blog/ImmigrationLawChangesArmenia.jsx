'use client';
import { RefreshCw, Building2, BadgeCheck, PlaneTakeoff, Users, ClipboardList, AlertTriangle } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

const heroImg = 'https://images.unsplash.com/photo-1619418602850-35ad20aa1700?w=1200&q=80';

export default function ImmigrationLawChangesArmenia() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImg} alt="قوانین جدید مهاجرتی ارمنستان" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">قوانین جدید مهاجرتی ارمنستان</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base max-w-xl">تحولات اساسی در قوانین مهاجرت و اقامت ارمنستان: تحلیل جامع اصلاحات جدید</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            اقامت و مهاجرت
          </span>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>اصلاحات قانون اتباع خارجی ارمنستان چارچوب‌های پذیرش مهاجران، دریافت اقامت و فعالیت اقتصادی اتباع غیرارمنی را بازتعریف کرده است. هدف اصلی دولت ارمنستان از این تغییرات، حذف تقاضاهای صوری، دیجیتالی‌سازی کامل فرآیندها و افزایش نظارت مالیاتی بر کسب‌وکارهای ثبت‌شده توسط اتباع خارجی است.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <RefreshCw className="w-5 h-5" /> یکپارچه‌سازی سامانه‌ها و دیجیتالی‌شدن درخواست‌ها
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">در ساختار جدید اداری:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                کلیه مراحل تشکیل پرونده، بارگذاری مدارک و استعلام‌ها به پلتفرم متمرکز مهاجرتی منتقل شده است.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                نوبت‌دهی‌های قدیمی از طریق پلتفرم‌هایی مانند Early One حذف شده و روند ثبت پرونده فقط با احراز هویت سیستمی انجام می‌گیرد.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                مراجعه حضوری متقاضی تنها به یک مرحله یعنی ثبت داده‌های بیومتریک (اثر انگشت و عکس دیجیتال) و تحویل فیزیکی کارت اقامت محدود می‌شود.
              </li>
            </ul>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5" /> پایان دوران شرکت‌های کاغذی و الزامات مالی کسب‌وکارها
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">یکی از متداول‌ترین روش‌های اخذ اقامت ارمنستان برای ایرانیان، ثبت شرکت (LLC) یا ثبت‌نام به عنوان کارآفرین فردی (Individual Entrepreneur) بوده است. در مقررات تازه، شرایط حفظ و تمدید این نوع اقامت سخت‌گیرانه‌تر شده است:</p>
            <ul className="space-y-2">
              <li><strong className="text-foreground/90">حداقل سرمایه ثبتی:</strong> متقاضیانی که از طریق تاسیس شرکت اقدام می‌کنند، باید حداقل ۲ میلیون درام ارمنستان سرمایه اولیه یا سهام ثبتی معرفی کنند.</li>
              <li><strong className="text-foreground/90">گردش مالی کارآفرینان فردی:</strong> اشخاص حقیقی صاحب جواز کارآفرینی باید حداقل ۱ میلیون درام ارمنستان در حساب بانکی فعال داشته یا گردش مالی معادل این رقم را طی ۶۰ روز پیش از ثبت درخواست اثبات کنند.</li>
              <li><strong className="text-foreground/90">شرط حیاتی مالیات (قانون ۱۸۰ روز):</strong> چنانچه ظرف ۱۸۰ روز پس از صدور مجوز اقامت، هیچ‌گونه ردپای پرداخت مالیات یا ثبت درآمد در سامانه کمیته درآمدهای دولتی ارمنستان (SRC) مشاهده نشود، کارت اقامت صادره باطل خواهد شد. این بند مستقیماً شرکت‌های غیرفعال و بدون گردش مالی را از چرخه اقامت خارج می‌کند.</li>
            </ul>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <BadgeCheck className="w-5 h-5" /> حذف گذرنامه ویژه ۱۰ ساله و بازتعریف اقامت دائم
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">پیش از این، وضعیت اقامت ۱۰ ساله (Special Residence Status) صادر می‌شد. بر اساس قانون جدید، صدور وضعیت ۱۰ ساله به کلی متوقف شده است؛ اما افرادی که از گذشته این مدرک را دارند تا پایان تاریخ انقضای آن از مزایای قانونی بهره‌مند خواهند بود. ساختار اقامتی ارمنستان به دو رده اصلی تبدیل شده است:</p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                اقامت موقت ۱ ساله (Temporary Residence)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                اقامت دائم ۵ ساله (Permanent Residence)
              </li>
            </ul>
            <p>برای دریافت اقامت دائم از طریق فعالیت تجاری یا اشتغال، متقاضی باید پیش از ثبت درخواست، حداقل ۳ سال از ۵ سال گذشته را دارای اقامت موقت قانونی در ارمنستان بوده باشد. (مسیر دریافت فوری اقامت ۵ ساله تنها برای سرمایه‌گذاران تایید‌شده یا حوزه‌های خدماتی استثنایی حفظ شده است).</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <PlaneTakeoff className="w-5 h-5" /> راه‌اندازی ویزای ورود کاری (Work Entry Visa)
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>برای ساماندهی ورود نیروی کار خارجی، ویزای جدیدی تحت عنوان ویزای ورود برای کار با اعتبار ۱۲۰ روزه تعریف شده است. این ویزا صرفاً سند ورود رسمی با هدف اشتغال است و پس از استقرار در کشور و امضای قرارداد کار، تبدیل به اقامت کاری موقت می‌شود.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Users className="w-5 h-5" /> اعمال سیستم سهمیه‌بندی سالانه (Quota System)
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>دولت ارمنستان سیستمی مبتنی بر سهمیه سالانه را طراحی کرده است که بر مبنای نیاز بازار کار و ظرفیت‌های اقتصادی کشور، تعداد کارت‌های اقامت صادرشده در هر سال را مدیریت کند. بر این اساس، رویکرد اداری تمدیدهای غیرسیستمی تغییر کرده و پرونده‌ها در پایان دوره اقامت در قالب بازبینی جدید بررسی می‌شوند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5" /> جدول مقایسه هزینه‌های دولتی ثبت درخواست
          </h2>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-foreground/50 text-xs">
                  <th className="py-2 pr-2 font-semibold">نوع اقامت</th>
                  <th className="py-2 px-2 font-semibold">هزینه پیشین دولتی</th>
                  <th className="py-2 px-2 font-semibold">تعرفه در قانون جدید</th>
                </tr>
              </thead>
              <tbody className="text-foreground/75">
                <tr className="border-b border-white/5">
                  <td className="py-2.5 pr-2">اقامت موقت (یک‌ساله)</td>
                  <td className="py-2.5 px-2">۱۰۵,۰۰۰ درام</td>
                  <td className="py-2.5 px-2">۱۵۵,۹۵۰ درام</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5 pr-2">اقامت دائم (پنج‌ساله)</td>
                  <td className="py-2.5 px-2">۱۴۰,۰۰۰ درام</td>
                  <td className="py-2.5 px-2">۲۵۵,۹۵۰ درام</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2">ویزای ورود کاری (۱۲۰ روزه)</td>
                  <td className="py-2.5 px-2">—</td>
                  <td className="py-2.5 px-2">۱۵,۰۰۰ درام</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-foreground/50 mt-4 leading-6">هزینه‌های فوق صرفاً عوارض دولتی بوده و مبالغ ترجمه مدارک، ثبت حقوقی و تمبر اداری جداگانه محاسبه می‌شوند.</p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> نکات کلیدی برای متقاضیان ایرانی
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                ورود توریستی ایرانیان به ارمنستان کماکان تا سقف ۹۰ روز در هر بازه ۱۸۰ روزه بدون نیاز به ویزا است؛ اما این حضور توریستی حق فعالیت اقتصادی ثبت‌نشده یا اشتغال رسمی بدون مجوز را ایجاد نمی‌کند.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                اجاره‌نامه رسمی ثبت‌شده در دفاتر دولتی یا کاداستر و داشتن آدرس معتبر مسکونی در ارمنستان برای همه انواع درخواست‌های اقامت الزامی است.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                چنانچه قصد مهاجرت از مسیر کارآفرینی دارید، آماده‌سازی یک بیزینس پلن واقعی، محاسبه هزینه‌های حسابداری ماهانه و پرداخت مالیات منظم برای حفظ اقامت نقشی تعیین‌کننده دارند.
              </li>
            </ul>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            پرونده اقامت شما با قوانین جدید هماهنگ است؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین شرایط جدید سرمایه ثبتی، گردش مالی و قانون ۱۸۰ روز رو برای پرونده شما بررسی و مسیر درست رو پیشنهاد می‌ده.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان
          </a>
        </div>

        <RelatedServices currentPath="/blog/armenia-immigration-law-changes" />

        </div>

          <PageSidebar tags={['residency', 'immigration', 'armenia', 'work-visa', 'law']} currentPath="/blog/armenia-immigration-law-changes" />
        </div>
      </main>
    </div>
  );
}
