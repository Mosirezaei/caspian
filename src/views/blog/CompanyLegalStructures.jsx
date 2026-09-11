'use client';
import { Scale, Users, Briefcase, Building, FileText } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import { useSEO } from '@/hooks/useSEO';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

const heroImg = '/images/company.webp';

export default function CompanyLegalStructures() {
  useSEO({
    title: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟ | کاسپین گروپ',
    description: 'مقایسه کامل LLC، IE و CJSC: مزایا، مسئولیت مالی و اینکه کدام ساختار برای فریلنسر، استارتاپ یا شرکت بازرگانی مناسب‌تر است.',
    keywords: 'ساختار حقوقی شرکت ارمنستان, LLC یا IE, CJSC ارمنستان, مسئولیت محدود ارمنستان',
    path: '/blog/company-legal-structures-armenia',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImg} alt="ساختار حقوقی شرکت در ارمنستان" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
              <span className="gold-gradient-text">انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟</span>
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base max-w-xl">مقایسه گزینه‌ها و انتخاب ساختار مناسب کسب‌وکار شما</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
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
            <p>انواع شرکت در ارمنستان شامل شرکت با مسئولیت محدود (LLC)، کارآفرین انفرادی (IE) و شرکت سهامی (JSC یا CJSC) است که هر یک برای اهداف متفاوتی طراحی شده‌اند. انتخاب درست میان این سه گزینه به تعداد شرکا، سطح مسئولیت مالی مطلوب و نوع فعالیت بستگی دارد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Users className="w-5 h-5" /> چه کسانی از راه‌اندازی کسب‌وکار در ارمنستان سود می‌برند؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>مزایای ثبت شرکت در ارمنستان بیشتر از همه به کارآفرینان مستقل، صاحبان استارتاپ و شرکت‌های بازرگانی کوچک و متوسط می‌رسد. اتباع خارجی از جمله ایرانیان می‌توانند بدون نیاز به شریک محلی، مالکیت کامل شرکت را در دست بگیرند و از دسترسی ارمنستان به بازار اتحادیه اقتصادی اوراسیا (EAEU) بهره ببرند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Building className="w-5 h-5" /> شرکت با مسئولیت محدود یا LLC چه مزایا و مسئولیت‌هایی دارد؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>LLC در ارمنستان رایج‌ترین گزینه برای سرمایه‌گذاران خارجی است زیرا شخصیت حقوقی مستقل دارد و مسئولیت مالکان به میزان سرمایه ثبت‌شده محدود می‌شود. این ساختار امکان داشتن چند سهامدار، استخدام رسمی نیرو و پرداخت حقوق قانونی را فراهم می‌کند.</p>
            <p>حسابداری LLC نسبت به شرکت فردی پیچیده‌تر است و نیاز به گزارش‌دهی منظم به اداره مالیات دارد.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> IE یا کارآفرین انفرادی برای چه فعالیت‌هایی مناسب است؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>Individual Entrepreneur برای افرادی که بدون شریک و با حجم فعالیت محدودتر کار می‌کنند مناسب است. ثبت IE سریع‌تر انجام می‌شود و هزینه دولتی آن پایین‌تر از LLC است، اما مسئولیت مالی از شخص فرد تفکیک نمی‌شود.</p>
            <p>فریلنسرهای حوزه فناوری اطلاعات یا توسعه نرم‌افزار که به تنهایی با مشتریان خارجی کار می‌کنند، معمولاً این مسیر را انتخاب می‌کنند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <Scale className="w-5 h-5" /> چه زمانی شرکت سهامی یا CJSC انتخاب بهتری است؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>شرکت سهامی خاص (CJSC) زمانی مناسب است که تعداد سهامداران بیشتر باشد یا شرکت قصد جذب سرمایه‌گذار نهادی داشته باشد. این ساختار نسبت به LLC الزامات گزارش‌دهی و اداری سختگیرانه‌تری دارد و بیشتر برای پروژه‌های بزرگ‌تر کاربرد دارد.</p>
            <p>برای اکثر کسب‌وکارهای کوچک و متوسط، LLC یا IE کافی است و نیازی به پیچیدگی CJSC نیست.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" /> اساسنامه، مدیر شرکت و مالک ذینفع چه نقشی دارند؟
          </h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>اساسنامه شرکت چارچوب حقوقی فعالیت، سهم شرکا و نحوه تصمیم‌گیری را تعیین می‌کند و پایه هر LLC یا CJSC است. مدیر شرکت مسؤولیت اجرایی روزمره را برعهده دارد و لازم نیست حتماً یکی از سهامداران باشد.</p>
            <p>از سال ۲۰۲۵، تمام شرکت‌های LLC در ارمنستان موظفاند اطلاعات مالک ذینفع (beneficial owner) را در سامانه دولتی ثبت کنند.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4">سوالات متداول</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">برای ثبت شرکت در ارمنستان LLC بهتر است یا IE؟</p>
              <p className="text-sm text-foreground/65 leading-7">IE برای فعالیت فردی و ساختار ساده‌تر مناسب است، در حالی که LLC برای شرکایی که قصد استخدام نیرو و تقسیم سود رسمی دارند گزینه بهتری است.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground/90 mb-1">آیا برای شروع فعالیت به شریک محلی نیاز دارید؟</p>
              <p className="text-sm text-foreground/65 leading-7">نیازی به شریک محلی برای ثبت شرکت در ارمنستان وجود ندارد. قانون ارمنستان اجازه می‌دهد یک تبعه خارجی به تنهایی صاحب صد در صد سهام شرکت باشد.</p>
            </div>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            نمی‌دونید کدوم ساختار مناسب کسب‌وکار شماست؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            گروه کاسپین با توجه به نوع فعالیت و اهداف شما، بهترین ساختار حقوقی رو پیشنهاد می‌ده.
          </p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
            مشاوره رایگان
          </a>
        </div>

        <RelatedServices currentPath="/blog/company-legal-structures-armenia" />

        </div>

          <PageSidebar tags={['LLC', 'IE', 'CJSC', 'legal-structure', 'armenia', 'company']} currentPath="/blog/company-legal-structures-armenia" />
        </div>
      </main>
    </div>
  );
}
