'use client';
import { Rocket, Code2, Building2, Globe2, Users, Zap, TrendingUp } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function StartupTechYerevan() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اخبار و فستیوال‌ها</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">اکوسیستم استارتاپ و فناوری ایروان</h1>
          <p className="text-foreground/60 mt-3 text-lg">فرصت‌ها برای توسعه‌دهندگان، فریلنسرها و کارآفرینان ایرانی</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
        </section>

        <img
          src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200&q=75"
          alt="فضای کار اشتراکی استارتاپی، تصویر مرتبط با اکوسیستم فناوری ایروان"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Rocket className="w-5 h-5" /> چرا ایروان «سیلیکون‌ولی قفقاز» شده؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ایروان تو ۵ سال اخیر تبدیل به یکی از هاب‌های فناوری منطقه شده. بعد از شروع جنگ اوکراین (۲۰۲۲)، هزاران متخصص روسی و بلاروسی به ایروان مهاجرت کردن و اکوسیستم تکنولوژی شهر رو منفجر کردن — شرکت‌هایی مثل Picsart (یونیکورن ارمنی)، ServiceTitan و DISQO از ایروان رشد کردن.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">+۱,۲۰۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">شرکت IT فعال</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">+۳۵,۰۰۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">شاغل حوزه‌ی IT</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">~۲۵٪</div>
                <div className="text-[10px] text-foreground/50 mt-1">سهم IT از GDP</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">۱٪</div>
                <div className="text-[10px] text-foreground/50 mt-1">مالیات ویژه‌ی IT</div>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Code2 className="w-5 h-5" /> فرصت‌ها برای ایرانیان</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">💻 فریلنسر/ریموت</h4>
              <p className="text-xs text-foreground/60 leading-6">ثبت IE (کارآفرین انفرادی) + مالیات ۵٪ + حساب بانکی SWIFT = دریافت درآمد ارزی قانونی. خیلی از ایرانی‌ها برای فرار از تحریم‌های بانکی اینجا ثبت می‌کنن.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">🏭 استارتاپ</h4>
              <p className="text-xs text-foreground/60 leading-6">ثبت LLC + استخدام نیروی محلی + دسترسی به بازار CIS و اروپا. اکسلراتورهایی مثل HIVE Ventures و Orion Worldwide Innovations پذیرش بین‌المللی دارن.</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">👥 استخدام تو شرکت‌های ارمنی</h4>
              <p className="text-xs text-foreground/60 leading-6">شرکت‌های IT ایروان همیشه دنبال دولوپر، دیزاینر و مارکتره. حقوق مهندس نرم‌افزار: $۱,۵۰۰–$۴,۰۰۰/ماه (بسته به تجربه).</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/20">
              <h4 className="font-bold text-foreground text-sm mb-2">🌐 دیجیتال مارکتینگ</h4>
              <p className="text-xs text-foreground/60 leading-6">آژانس‌های دیجیتال مارکتینگ ایرانی‌ها تو ایروان خیلی موفقن — خدمات سئو، تبلیغات و محتوا برای مشتریان بین‌المللی.</p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Building2 className="w-5 h-5" /> فضاهای کوورکینگ ایروان</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ایروان پر از فضای کوورکینگ باکیفیته — از $۵۰/ماه تا $۲۰۰/ماه بسته به امکانات:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">Impact Hub Yerevan</h4>
                <p className="text-[10px] text-foreground/50 mt-1">بزرگ‌ترین کوورکینگ — رویدادهای هفتگی، اتاق جلسه، اینترنت سریع</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">The Loft Coworking</h4>
                <p className="text-[10px] text-foreground/50 mt-1">نزدیک کاسکاد — فضای شیک، قهوه رایگان، ۲۴/۷</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-foreground text-sm">TUMO Labs</h4>
                <p className="text-[10px] text-foreground/50 mt-1">متصل به مرکز TUMO — فضای رایگان برای پروژه‌های آموزشی</p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> مالیات ویژه‌ی IT: واقعیت ۲۰۲۶</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>ارمنستان نرخ مالیاتی ویژه‌ای برای شرکت‌های IT داره — ولی دیگه مثل قبل «معافیت خودکار» نیست:</p>
            <p>✔ نرخ ترجیحی ۱٪ روی گردش مالی — فقط اگه فعالیت واقعی‌تون با کدهای مصوب فناوری مطابقت داشته باشه</p>
            <p>✔ باید درآمد از خدمات IT (توسعه نرم‌افزار، SaaS، مشاوره‌ی فنی) باشه — نه تجارت عمومی</p>
            <p>✔ حسابدار متخصص IT الزامیه — اظهارنامه‌های مالیاتی باید دقیق و مطابق کدها باشن</p>
            <p>⚠️ هشدار: بعضی مشاوران «مالیات صفر» وعده می‌دن — این دیگه درست نیست. از منابع رسمی و حسابداران معتبر مشاوره بگیرید.</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">مشاوره‌ی ثبت شرکت IT و مالیات</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره واتساپ</a>
        </div>
        <RelatedServices currentPath="/blog/startup-tech-ecosystem-yerevan" />
        </div>
          <PageSidebar tags={['company', 'work', 'armenia', 'business']} currentPath="/blog/startup-tech-ecosystem-yerevan" />
        </div>
      </main>
    </div>
  );
}
