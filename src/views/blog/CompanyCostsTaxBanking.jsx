'use client';
import { Calculator, Landmark, Percent, ClipboardList } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

const heroImg = 'https://images.unsplash.com/photo-1762427355235-dd22e5cb010c?w=1200&q=80';

export default function CompanyCostsTaxBanking() {
  useSEO({
    title: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی | کاسپین گروپ',
    description: 'هزینه واقعی راه‌اندازی ۱۰۰۰ تا ۱۶۰۰ دلار، رژیم مالیاتی ۱۸٪ یا گردش مالی، شرایط KYC بانک و چرا حسابداری منظم ضروری است.',
    keywords: 'هزینه ثبت شرکت ارمنستان, مالیات شرکت ارمنستان, افتتاح حساب بانکی ارمنستان, حسابداری ارمنستان',
    path: '/blog/company-costs-tax-banking-armenia',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImg} alt="هزینه، مالیات و بانک شرکت در ارمنستان" className="w-full h-full object-cover opacity-40 object-top" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base max-w-xl">رقم واقعی راه‌اندازی، رژیم‌های مالیاتی و مراحل بانکی</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
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
            <p>هزینه ثبت شرکت در ارمنستان از حدود ۲۸۰ دلار برای هزینه‌های پایه دولتی شروع می‌شود، اما هزینه کامل راه‌اندازی با احتساب حساب بانکی، حسابداری و مشاوره حقوقی معمولاً بین ۱۰۰۰ تا ۱۶۰۰ دلار قرار می‌گیرد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5" /> هزینه ثبت و هزینه‌های واقعی شروع کار شامل چه مواردی است؟
          </h2>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-foreground/50 text-xs">
                  <th className="py-2 pr-2 font-semibold">معیار</th>
                  <th className="py-2 px-2 font-semibold">LLC</th>
                  <th className="py-2 px-2 font-semibold">IE</th>
                </tr>
              </thead>
              <tbody className="text-foreground/75">
                <tr className="border-b border-white/5">
                  <td className="py-2.5 pr-2">هزینه دولتی ثبت</td>
                  <td className="py-2.5 px-2">حدود ۴۴۰۰ درام</td>
                  <td className="py-2.5 px-2">حدود ۳۰۰۰ درام</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5 pr-2">زمان ثبت</td>
                  <td className="py-2.5 px-2">۱ تا ۳ روز کاری</td>
                  <td className="py-2.5 px-2">۱ روز کاری</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5 pr-2">مسئولیت مالی</td>
                  <td className="py-2.5 px-2">محدود به سرمایه شرکت</td>
                  <td className="py-2.5 px-2">شخصی و تفکیک‌نشده</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2.5 pr-2">مناسب برای</td>
                  <td className="py-2.5 px-2">چند شریک، استخدام نیرو</td>
                  <td className="py-2.5 px-2">فعالیت فردی، فریلنسری</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2">پیچیدگی حسابداری</td>
                  <td className="py-2.5 px-2">بیشتر</td>
                  <td className="py-2.5 px-2">کمتر</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-foreground/50 mt-4 leading-6">هزینه دولتی پایه فقط بخش رسمی هزینه را نشان می‌دهد؛ ترجمه رسمی مدارک، دریافت Social Number، اجاره آدرس ثبتی و مشاوره حقوقی هزینه‌های جانبی هستند که باید به آن اضافه شود.</p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Percent className="w-5 h-5" /> قوانین مالیاتی ارمنستان و رژیم‌های مالیاتی چه تفاوتی دارند؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">قوانین مالیاتی ارمنستان دو رژیم اصلی برای شرکت‌ها در نظر گرفته است:</p>
            <ul className="space-y-2 mb-3">
              <li><strong className="text-foreground/90">مالیات بر درآمد شرکت:</strong> نرخ ۱۸٪ — معمولاً برای LLC‌هایی با فعالیت گسترده‌تر یا صادرات‌محور مناسب‌تر است.</li>
              <li><strong className="text-foreground/90">مالیات بر گردش مالی:</strong> برای کسب‌وکارهای کوچک با درآمد سالانه محدود — گزینه سبک‌تری از نظر اداری برای IE و کسب‌وکارهای کوچک.</li>
            </ul>
            <p>اداره مالیات ارمنستان تعیین می‌کند کدام رژیم برای نوع فعالیت و حجم گردش مالی هر شرکت قابل اعمال است.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Landmark className="w-5 h-5" /> افتتاح حساب بانکی شرکت چه مدارک و بررسی‌هایی دارد؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p className="mb-3">افتتاح حساب بانکی در ارمنستان نیازمند حضور شخصی مالک یا مدیر شرکت در شعبه بانک است. بانک‌ها معمولاً این مدارک را درخواست می‌کنند:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                مدارک ثبت شرکت
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                اساسنامه
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                پاسپورت مدیر
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary text-xs font-bold">✓</span>
                توضیح منبع درآمد (KYC)
              </li>
            </ul>
            <p className="mt-3">حساب بانکی شرکت برای دریافت پرداخت‌های بین‌المللی، پرداخت حقوق و انجام تعهدات مالیاتی ضروری است و نبود آن عملاً فعالیت رسمی شرکت را متوقف می‌کند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <ClipboardList className="w-5 h-5" /> چرا حسابداری منظم برای شرکت تازه‌تأسیس ضروری است؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>حسابداری شرکت باید از همان ماه اول فعالیت به صورت منظم انجام شود تا جرائم مالیاتی و مشکلات گزارش‌دهی به اداره مالیات ارمنستان پیش نیاید. حتی شرکت‌هایی که فعالیت کم دارند، موظف به ارسال گزارش دوره‌ای هستند.</p>
            <p>بسیاری از شرکت‌های تازه‌تأسیس این بخش را به خدمات حسابداری محلی محول می‌کنند تا از تأخیر یا خطا در گزارش‌دهی ماهانه جلوگیری شود.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4">سوالات متداول</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">هزینه ثبت شرکت در ارمنستان چقدر است؟</p>
              <p className="text-sm text-foreground/65 leading-7">هزینه دولتی پایه از حدود ۲۸۰ دلار شروع می‌شود، اما هزینه کامل راه‌اندازی شرکت با احتساب ترجمه مدارک، حساب بانکی و مشاوره حقوقی معمولاً بین ۱۰۰۰ تا ۱۶۰۰ دلار قرار می‌گیرد.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">افتتاح حساب بانکی شرکتی در ارمنستان چه شرایطی دارد؟</p>
              <p className="text-sm text-foreground/65 leading-7">افتتاح حساب بانکی شرکت نیازمند حضور شخصی مدیر یا مالک در شعبه بانک و ارائه مدارک ثبت شرکت، اساسنامه و پاسپورت است.</p>
            </div>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            برآورد دقیق هزینه ثبت شرکت خودتون رو بخواید
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین بر اساس نوع فعالیت شما، هزینه واقعی راه‌اندازی و مالیات رو محاسبه می‌کنه.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان
          </a>
        </div>

        <RelatedServices currentPath="/blog/company-costs-tax-banking-armenia" />

        </div>

          <PageSidebar tags={['cost', 'tax', 'bank', 'armenia', 'company', 'finance']} currentPath="/blog/company-costs-tax-banking-armenia" />
        </div>
      </main>
    </div>
  );
}
