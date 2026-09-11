'use client';
import { Building2, FileCheck2, Calculator, Landmark, Users, Globe2, ShieldCheck } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

const heroImg = 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1600&q=82&auto=format&fit=crop';
const bankImg = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop';
const dramImg = 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80&auto=format&fit=crop';

export default function CompanyRegistrationGuide() {
  useSEO({
    title: 'راهنمای ثبت شرکت در ارمنستان: هزینه، مراحل و مالیات | کاسپین گروپ',
    description: 'ثبت LLC در ۳ روز، مالیات ۵٪، حساب بانکی بین‌المللی — راهنمای واقعی و هزینه‌ها برای ایرانیان.',
    keywords: 'ثبت شرکت ارمنستان, هزینه ثبت شرکت, مالیات ارمنستان, LLC ارمنستان, حساب بانکی ارمنستان',
    path: '/blog/company-registration-armenia',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImg} alt="امضای اسناد و آغاز ثبت شرکت در ارمنستان" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">راهنمای ثبت شرکت در ارمنستان</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base max-w-xl">هزینه‌ها، مراحل، مالیات و نکات کلیدی برای ایرانیان</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
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

        {/* بخش ۱: مقدمه */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5" /> ثبت شرکت در ارمنستان: چرا و چگونه؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ارمنستان با مالیات پایین (فقط ۵٪ برای میکروبنگاه‌ها)، روند ثبت سریع (۳ روز کاری) و امکان مالکیت ۱۰۰٪ خارجی، یکی از ساده‌ترین کشورها برای ثبت شرکت توسط اتباع خارجی. ثبت شرکت LLC (معادل ՍՊԸ ارمنی یا ООО روسی) رایج‌ترین انتخابه و مسیر اصلی اقامت بیزینسی هم از همین‌جا شروع می‌شه.</p>
            <p>مستقیم بریم سر اصل مطلب: هزینه‌ها، مراحل، مالیات و نکاتی که قبل از اقدام باید بدونید.</p>
          </div>
        </section>

        {/* عکس بررسی مدارک شرکت */}
        <div className="rounded-2xl overflow-hidden mb-6">
          <img src={bankImg} alt="جلسه بررسی مدارک و ثبت شرکت در ارمنستان" className="w-full h-48 sm:h-64 object-cover" loading="lazy" />
          <p className="text-xs text-foreground/40 text-center py-2">بررسی مدارک و برنامه‌ریزی ثبت شرکت</p>
        </div>

        {/* بخش ۲: هزینه‌ها */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5" /> هزینه‌های واقعی سال اول
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>هزینه‌ی ثبت دولتی (عوارض ثبت): رایگان برای LLC — ارمنستان عوارض ثبت شرکت نداره. هزینه‌ی واقعی فقط حق‌الوکاله‌ی وکیل/حسابدار و ترجمه‌ی مدارکه.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-primary font-bold text-lg">$۰</div>
                <div className="text-xs text-foreground/50 mt-1">عوارض ثبت دولتی LLC</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-primary font-bold text-lg">$۱۰۰–$۳۵۰</div>
                <div className="text-xs text-foreground/50 mt-1">حق‌الوکاله‌ی ثبت (با وکیل/حسابدار)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-primary font-bold text-lg">$۵۰–$۱۰۰</div>
                <div className="text-xs text-foreground/50 mt-1">ترجمه‌ی رسمی مدارک</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-primary font-bold text-lg">$۱۰۰–$۲۵۰/ماه</div>
                <div className="text-xs text-foreground/50 mt-1">حسابداری ماهانه (اظهارنامه‌ی مالیاتی)</div>
              </div>
            </div>
            <p className="text-xs text-foreground/50 mt-2">هزینه‌ی واقعی سال اول (ثبت + حسابداری): حدود ۱۵۰۰ تا ۳۵۰۰ دلار بسته به حجم فعالیت. این شامل اجاره‌ی دفتر مجازی یا فیزیکی نمی‌شه.</p>
          </div>
        </section>

        {/* بخش ۳: مراحل ثبت */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5" /> مراحل ثبت LLC (گام‌به‌گام)
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <ol className="space-y-3 list-decimal list-inside">
              <li><strong>انتخاب نام شرکت</strong> — باید منحصربه‌فرد باشه. بررسی از طریق سایت ثبت شرکت‌های ارمنستان (e-register.am) قبل از مراجعه.</li>
              <li><strong>تهیه‌ی اساسنامه</strong> — وکیل محلی یا دفتر حسابداری اساسنامه رو طبق قانون تجارت ارمنستان تنظیم می‌کنه.</li>
              <li><strong>مراجعه به دفتر ثبت (یا آنلاین)</strong> — مدیرعامل با پاسپورت معتبر مراجعه می‌کنه. ثبت معمولاً ۱ تا ۳ روز کاری طول می‌کشه.</li>
              <li><strong>دریافت شماره مالیاتی (HVHH/TIN)</strong> — خودکار بعد از ثبت صادر می‌شه.</li>
              <li><strong>افتتاح حساب بانکی شرکتی</strong> — با مدارک ثبت + پاسپورت مدیرعامل، در بانک‌های ارمنی (Ameriabank، Ardshinbank، Converse Bank و...) حساب شرکتی باز می‌شه.</li>
              <li><strong>ثبت در سامانه‌ی مالیاتی الکترونیکی</strong> — برای ارسال اظهارنامه‌های مالیاتی آنلاین (الزامی).</li>
            </ol>
          </div>
        </section>

        {/* عکس اسناد مالی */}
        <div className="rounded-2xl overflow-hidden mb-6">
          <img src={dramImg} alt="اسناد مالی و حسابداری شرکت در ارمنستان" className="w-full h-48 sm:h-56 object-cover object-top" loading="lazy" />
          <p className="text-xs text-foreground/40 text-center py-2">اسناد مالی و حسابداری شرکت</p>
        </div>

        {/* بخش ۴: مالیات */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> سیستم مالیاتی ارمنستان
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ارمنستان چند رژیم مالیاتی داره و انتخاب درست از همون اول خیلی مهمه:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 text-center">
                <div className="text-green-400 font-black text-2xl">۵٪</div>
                <div className="text-xs text-foreground/60 mt-1 font-semibold">مالیات گردش مالی (میکروبنگاه)</div>
                <div className="text-[10px] text-foreground/40 mt-1">گردش سالانه تا ۲۴ میلیون درام (~$۶۰,۰۰۰)</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 text-center">
                <div className="text-amber-400 font-black text-2xl">۱۸٪</div>
                <div className="text-xs text-foreground/60 mt-1 font-semibold">مالیات بر سود (استاندارد)</div>
                <div className="text-[10px] text-foreground/40 mt-1">برای شرکت‌های بزرگ‌تر</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 text-center">
                <div className="text-blue-400 font-black text-2xl">۲۰٪</div>
                <div className="text-xs text-foreground/60 mt-1 font-semibold">مالیات بر ارزش افزوده (VAT)</div>
                <div className="text-[10px] text-foreground/40 mt-1">بالای آستانه‌ی ۱۱۵ میلیون درام/سال</div>
              </div>
            </div>
            <p>اکثر ایرانیان از رژیم میکروبنگاه (۵٪ گردش مالی) شروع می‌کنن — بدون نیاز به حسابداری پیچیده و بدون VAT. اگه گردش مالی بالا رفت، تبدیل به رژیم استاندارد الزامیه.</p>
          </div>
        </section>

        {/* بخش ۵: حساب بانکی */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Globe2 className="w-5 h-5" /> حساب بانکی و انتقال ارز
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>بعد از ثبت شرکت، حساب بانکی شرکتی در درام (AMD) و دلار/یورو باز می‌شه. نکات مهم:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                انتقال ارز از ایران به ارمنستان مستقیم ممکن نیست — معمولاً از طریق صرافی‌های واسطه یا ارز دیجیتال انجام می‌شه
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                با حساب شرکتی ارمنی می‌تونید پرداخت‌های بین‌المللی (SWIFT) انجام بدید — چیزی که با حساب ایرانی عملاً غیرممکنه
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                کارت ویزا/مسترکارت شرکتی هم صادر می‌شه — برای پرداخت‌های آنلاین و سفرهای خارجی
              </li>
            </ul>
          </div>
        </section>

        {/* بخش ۶: نکات مهم */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> نکات کلیدی قبل از اقدام
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                ثبت شرکت به‌تنهایی اقامت نمی‌ده — باید بعدش درخواست اقامت بیزینسی جداگانه بدید (مسیرش از طریق مدیرعاملی یا سهام‌داری شرکت ثبت‌شده)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                شرکت باید فعالیت واقعی داشته باشه — صرف ثبت بدون فعالیت اقتصادی، ممکنه تمدید اقامت رو با مشکل مواجه کنه
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                حسابدار محلی الزامیه — اظهارنامه‌های مالیاتی باید ماهانه/فصلی به سامانه‌ی الکترونیکی ارسال بشه
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                آدرس ثبتی لازمه — می‌تونه دفتر مجازی باشه (از حدود ۵۰ دلار/ماه)
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            آماده‌ی ثبت شرکت هستید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین کل فرآیند ثبت شرکت، افتتاح حساب بانکی و تنظیم حسابداری رو از صفر تا صد براتون انجام می‌ده.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان
          </a>
        </div>

        <RelatedServices currentPath="/blog/company-registration-armenia" />

        </div>

          <PageSidebar tags={['company', 'residency', 'armenia', 'investment', 'business']} currentPath="/blog/company-registration-armenia" />
        </div>
      </main>
    </div>
  );
}
