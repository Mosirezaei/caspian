'use client';
import { FileText, Building2, UserCheck, Clock } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

const heroImg = '/images/company/yerevan-bank-building.webp';

export default function CompanyRegistrationSteps() {
  useSEO({
    title: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل | کاسپین گروپ',
    description: 'مدارک لازم، فرایند اداره ثبت، وکالت‌نامه از راه دور و اقدامات ضروری پس از دریافت شماره ثبت — راهنمای گام‌به‌گام.',
    keywords: 'مراحل ثبت شرکت ارمنستان, مدارک ثبت شرکت, وکالت‌نامه ثبت شرکت, LLC ارمنستان',
    path: '/blog/company-registration-steps-armenia',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImg} alt="ثبت شرکت در ارمنستان" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base max-w-xl">مسیر ثبت شرکت برای کارآفرینان و سرمایه‌گذاران ایرانی</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
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
            <p>راه‌اندازی کسب‌وکار در ارمنستان به یکی از مسیرهای جذاب کارآفرینان ایرانی برای گسترش فعالیت اقتصادی خارج از ایران تبدیل شده است. مالکیت کامل خارجی، ثبت سریع و نزدیکی جغرافیایی و فرهنگی به ایران، ارمنستان را گزینه‌ای عملی برای سرمایه‌گذاران و صاحبان استارتاپ‌ها کرده است.</p>
            <p>ثبت شرکت در ارمنستان معمولاً در یک تا سه روز کاری در اداره ثبت شرکت‌های این کشور انجام می‌شود و نیازی به حداقل سرمایه اولیه ندارد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" /> پیش از ثبت چه اطلاعات و مدارکی باید آماده شود؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">مدارک لازم برای ثبت شرکت در ارمنستان معمولاً این موارد را دربر می‌گیرد:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                ترجمه رسمی پاسپورت متقاضی یا متقاضیان
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                دریافت Social Number (شماره اجتماعی ارمنستان)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                آدرس ثبت‌شده برای دفتر شرکت
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                اساسنامه شرکت (برای LLC و CJSC)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                انتخاب و رزرو نام شرکت
              </li>
            </ul>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5" /> فرایند ثبت در اداره ثبت شرکت‌های ارمنستان چگونه پیش می‌رود؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ثبت شرکت بازرگانی در ارمنستان از طریق سامانه دیجیتال اداره ثبت شرکت‌ها یا با حضور وکیل محلی انجام می‌شود. پس از بررسی مدارک و تأیید نام شرکت، شماره ثبت صادر و شرکت به صورت رسمی در رجیستری دولتی درج می‌شود.</p>
            <p>بیشتر پرونده‌ها بدون نیاز به حضور فیزیکی متقاضی در ارمنستان قابل پیگیری هستند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <UserCheck className="w-5 h-5" /> وکالت‌نامه رسمی چه زمانی کاربرد دارد؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>وکالت‌نامه رسمی زمانی لازم است که متقاضی قصد ندارد شخصاً برای ثبت شرکت به ارمنستان سفر کند. با تنظیم وکالت‌نامه نزد دفاتر رسمی و ترجمه آن، یک وکیل محلی می‌تواند تمام مراحل ثبت، دریافت شماره ثبت و حتی برخی امور مالیاتی را از راه دور پیگیری کند.</p>
            <p>افتتاح حساب بانکی و دریافت اقامت معمولاً حضور شخصی متقاضی را ایجاب می‌کند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5" /> پس از دریافت شماره ثبت، چه اقداماتی نباید به تأخیر بیفتد؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>پس از دریافت شماره ثبت، ثبت‌نام در اداره مالیات و تعیین کد فعالیت مالیاتی باید بدون فاصله زمانی طولانی انجام شود. ثبت علامت تجاری نیز اگر برند شرکت اهمیت دارد، بهتر است زودتر پیگیری شود تا از سوءاستفاده احتمالی جلوگیری شود.</p>
            <p>تأخیر در افتتاح حساب بانکی و راه‌اندازی حسابداری می‌تواند فعال‌سازی عملی شرکت را چند هفته به تعویق بیندازد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4">سوالات متداول</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">ثبت شرکت در ارمنستان معمولاً چقدر زمان می‌برد؟</p>
              <p className="text-sm text-foreground/65 leading-7">ثبت رسمی LLC یا IE در اداره ثبت شرکت‌های ارمنستان معمولاً یک تا سه روز کاری طول می‌کشد. فعال‌سازی کامل شرکت با احتساب ثبت مالیاتی و افتتاح حساب بانکی می‌تواند بین چند هفته تا حدود دو ماه به طول بینجامد.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">آیا ایرانیان می‌توانند مالک ۱۰۰ درصد شرکت در ارمنستان باشند؟</p>
              <p className="text-sm text-foreground/65 leading-7">بله، ایرانیان می‌توانند بدون نیاز به شریک محلی مالک صد در صد سهام LLC یا IE در ارمنستان باشند.</p>
            </div>
          </div>
        </section>

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

        <RelatedServices currentPath="/blog/company-registration-steps-armenia" />

        </div>

          <PageSidebar tags={['company', 'registration', 'documents', 'armenia', 'LLC']} currentPath="/blog/company-registration-steps-armenia" />
        </div>
      </main>
    </div>
  );
}
