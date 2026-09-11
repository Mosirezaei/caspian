'use client';
import { GraduationCap, School, DollarSign, FileCheck2, Globe2, BookOpen, Users } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';

export default function EducationArmenia() {
  useSEO({
    title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها | کاسپین گروپ',
    description: 'راهنمای کامل مدارس ایرانی در ایروان، برتر دانشگاه‌های ارمنستان، شهریه و هزینه‌های زندگی دانشجویی برای ایرانیان.',
    keywords: 'تحصیل در ارمنستان, دانشگاه‌های ارمنستان, مدارس ایرانی ایروان, اقامت تحصیلی ارمنستان, شهریه دانشگاه ارمنستان',
    path: '/blog/education-armenia',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">تحصیل</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            راهنمای کامل مدارس ایرانی ایروان، دانشگاه‌های برتر و شرایط ثبت‌نام برای ایرانیان مقیم ارمنستان
          </p>
          <p className="text-xs text-foreground/40 mt-2">نویسنده: سحر · آپدیت: شهریور ۱۴۰۵</p>
        </section>

        <img
          src="https://images.unsplash.com/photo-1758270704524-596810e891b5?w=1200&q=75"
          alt="دانشجویان در کلاس درس دانشگاه، تصویر مرتبط با تحصیل در ارمنستان"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        {/* مدارس ایرانی */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <School className="w-5 h-5" /> مدارس ایرانی در ایروان
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>خانواده‌های ایرانی مقیم ایروان دو مسیر اصلی برای تحصیل فرزندانشون دارن: مدرسه‌ی حضوری ایرانی یا آموزش از راه دور با مدرک رسمی ایران.</p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-foreground mb-2">مجتمع آموزشی شهید فهمیده — ایروان</h3>
              <p>تنها مدرسه‌ی حضوری ایرانی در ایروان که وابسته به وزارت آموزش و پرورش ایران و نظارت سفارت ایران در ارمنستانه. شامل مقاطع ابتدایی و متوسطه‌ی اول و دوم، با برنامه‌ی درسی رسمی ایران و مدرک معتبر وزارت آموزش و پرورش.</p>
              <ul className="mt-2 space-y-1 text-xs text-foreground/60">
                <li>✓ مقاطع: ابتدایی تا دبیرستان</li>
                <li>✓ برنامه‌ی درسی: وزارت آموزش و پرورش ایران</li>
                <li>✓ مدرک: معتبر در ایران</li>
                <li>✓ زبان تدریس: فارسی</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold text-foreground mb-2">مدرسه‌ی آنلاین ثمین (iranischool.com)</h3>
              <p>برای خانواده‌هایی که ترجیح می‌دن فرزندشون مدرک رسمی ایران رو بگیره ولی به مدرسه‌ی حضوری دسترسی ندارن. کلاس‌ها آنلاین برگزار می‌شه و مدرک وزارت آموزش و پرورش ایران صادر می‌شه.</p>
            </div>
          </div>
        </section>

        {/* مدارس بین‌المللی */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Globe2 className="w-5 h-5" /> مدارس بین‌المللی ایروان
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>اگه قصد ادغام فرزندتون در سیستم آموزشی بین‌المللی رو دارید، ایروان چند مدرسه‌ی بین‌المللی معتبر داره:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">CIS Armenia</h4>
                <p className="text-xs text-foreground/50 mt-1">برنامه‌ی بریتانیایی (IGCSE, A-Level) — شهریه حدود ۶,۰۰۰ تا ۱۶,۱۰۰ دلار/سال بسته به مقطع</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">QSI International School</h4>
                <p className="text-xs text-foreground/50 mt-1">برنامه‌ی آمریکایی — پذیرش ۳ تا ۱۱ سال، آموزش به انگلیسی</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">مدارس دولتی ارمنستان</h4>
                <p className="text-xs text-foreground/50 mt-1">رایگان برای همه‌ی مقیمان (شامل اتباع خارجی با کارت اقامت) — زبان تدریس ارمنی</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">مدارس روسی‌زبان</h4>
                <p className="text-xs text-foreground/50 mt-1">چندین مدرسه‌ی ارمنی دارای بخش روسی‌زبان هستن — برای خانواده‌هایی که بچه‌شون روسی بلده</p>
              </div>
            </div>
          </div>
        </section>

        {/* دانشگاه‌ها */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> دانشگاه‌های برتر ارمنستان
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ارمنستان بیش از ۶۰ دانشگاه (دولتی و خصوصی) داره. سیستم آموزش عالی با فرآیند بولونیا هماهنگه (کارشناسی-کارشناسی ارشد-دکتری). چند دانشگاه برتر:</p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <h3 className="font-bold text-foreground">دانشگاه آمریکایی ارمنستان (AUA)</h3>
                <p className="text-xs text-foreground/50 mt-1">معتبرترین دانشگاه خصوصی — زبان تدریس انگلیسی — رشته‌های مهندسی، بیزینس، حقوق و علوم سیاسی. شهریه‌ی کارشناسی ارشد حدود ۴ تا ۷ میلیون درام/سال (~$۱۰,۰۰۰-$۱۸,۰۰۰). بورسیه‌ی تحصیلی برای دانشجویان بین‌المللی موجوده.</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                <h3 className="font-bold text-foreground">دانشگاه دولتی ایروان (YSU)</h3>
                <p className="text-xs text-foreground/50 mt-1">قدیمی‌ترین و بزرگ‌ترین دانشگاه ارمنستان — تأسیس ۱۹۱۹. رشته‌های متنوع از پزشکی تا مهندسی. شهریه‌ی دانشجویان خارجی: ۴۰۰,۰۰۰ تا ۱,۵۰۰,۰۰۰ درام/سال (~$۱,۰۰۰-$۳,۸۰۰). بخشی از رشته‌ها به روسی و انگلیسی تدریس می‌شن.</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
                <h3 className="font-bold text-foreground">دانشگاه اروپایی ارمنستان (EUA)</h3>
                <p className="text-xs text-foreground/50 mt-1">دانشگاه خصوصی جدیدتر — رشته‌های حقوق، اقتصاد و مدیریت. شهریه‌ی مقرون‌به‌صرفه و پذیرش آسان‌تر برای دانشجویان بین‌المللی.</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/20">
                <h3 className="font-bold text-foreground">دانشگاه پلی‌تکنیک ملی ارمنستان (NPUA)</h3>
                <p className="text-xs text-foreground/50 mt-1">مرجع مهندسی و فناوری — رشته‌های کامپیوتر، عمران، برق و مکانیک. شهریه‌ی بسیار پایین (~$۸۰۰-$۱,۵۰۰/سال).</p>
              </div>
            </div>
          </div>
        </section>

        {/* هزینه‌ها */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5" /> هزینه‌ی تحصیل و زندگی دانشجویی
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-2xl">$۸۰۰–$۴,۰۰۰</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">شهریه‌ی سالانه دانشگاه‌های دولتی</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-2xl">$۲,۰۰۰–$۹,۰۰۰</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">شهریه‌ی سالانه دانشگاه‌های خصوصی</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-2xl">$۴۰۰–$۷۰۰</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">هزینه‌ی زندگی ماهانه در ایروان</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-2xl">$۲۰۰–$۳۵۰</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">اجاره‌ی خوابگاه یا اتاق دانشجویی/ماه</div>
              </div>
            </div>
            <p className="text-xs text-foreground/50">مقایسه: شهریه‌ی دانشگاه‌های دولتی ارمنستان حدود ۱/۵ تا ۱/۱۰ قیمت دانشگاه‌های اروپایی هم‌ردیفشونه. هزینه‌ی زندگی هم به‌طور میانگین ۳۰-۵۰٪ کمتر از ترکیه و ۶۰-۷۰٪ کمتر از اروپاست.</p>
          </div>
        </section>

        {/* مدارک و شرایط */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5" /> مدارک لازم برای پذیرش دانشگاهی
          </h2>
          <div className="text-sm text-foreground/70 leading-7">
            <ol className="space-y-3 list-decimal list-inside">
              <li><strong>نامه‌ی پذیرش</strong> — ابتدا باید از دانشگاه ارمنی نامه‌ی قبولی بگیرید (معمولاً آنلاین اپلای می‌شه)</li>
              <li><strong>ریزنمرات</strong> — مدارک تحصیلی قبلی (دیپلم یا لیسانس) ترجمه‌شده به ارمنی یا انگلیسی با تأیید دادگستری</li>
              <li><strong>پاسپورت معتبر</strong> — حداقل ۶ ماه اعتبار</li>
              <li><strong>عکس بیومتریک</strong> — ۳×۴ رنگی</li>
              <li><strong>گواهی توانایی مالی</strong> — اثبات توان پرداخت شهریه و هزینه‌ی زندگی</li>
              <li><strong>معادل‌سازی مدارک</strong> — مدارک تحصیلی قبلی باید توسط وزارت آموزش ارمنستان تأیید بشن</li>
            </ol>
            <p className="mt-3 text-xs text-foreground/50">نکته: ایرانیان برای ورود به ارمنستان ویزا نیاز ندارن (تا ۱۸۰ روز اقامت بدون ویزا). بعد از پذیرش دانشگاهی، اقامت تحصیلی جداگانه باید درخواست بشه.</p>
          </div>
        </section>

        {/* نکات */}
        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> نکات مهم برای ایرانیان
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>✓ مدارک دانشگاه‌های ارمنی در ایران قابل تأیید و معادل‌سازی هستن — از طریق سامانه‌ی میخک سفارت ایران در ایروان</p>
            <p>✓ رشته‌ی پزشکی در ارمنستان (مثلاً در دانشگاه دولتی پزشکی ایروان) به انگلیسی تدریس می‌شه و مدرکش در خیلی از کشورها قابل‌قبوله</p>
            <p>✓ بعضی دانشگاه‌ها (مثل AUA) بورسیه‌ی تحصیلی برای دانشجویان بین‌المللی دارن — باید جداگانه اپلای بشه</p>
            <p>✓ زبان تدریس اکثر دانشگاه‌های دولتی ارمنیه، ولی بخشی از رشته‌ها به انگلیسی یا روسی تدریس می‌شن</p>
            <p>✓ اقامت تحصیلی مدت‌دار صادر می‌شه (معمولاً ۱ ساله قابل تمدید) و شامل حق کار پاره‌وقت نمی‌شه — برای کار باید مجوز جداگانه بگیرید</p>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">مشاوره‌ی تحصیلی رایگان</h3>
          <p className="text-sm text-foreground/60 mb-4">گروه کاسپین برای انتخاب دانشگاه، ثبت‌نام و اخذ اقامت تحصیلی در کنارتونه.</p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">تماس با کارشناسان</a>
        </div>

        <RelatedServices currentPath="/blog/education-armenia" />

        </div>
          <PageSidebar tags={['education', 'student', 'armenia', 'residency']} currentPath="/blog/education-armenia" />
        </div>
      </main>
    </div>
  );
}
