'use client';
import { MapPin, Star, Bus, DollarSign, Mountain } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function BestNeighborhoods() {
  const neighborhoods = [
    { name: 'کِنترون (مرکز شهر)', nameLat: 'Kentron', price: '$۹۰۰–$۱,۵۰۰+', color: 'amber', pros: ['دسترسی به همه چیز بدون ماشین', 'نزدیک میدان جمهوری و کاسکاد', 'رستوران‌ها و کافه‌ها'], cons: ['اجاره بالاتر', 'صدای خیابان', 'پارکینگ محدود'], best: 'شاغلین در مرکز، دانشجویان، سفرهای کوتاه' },
    { name: 'آرابگیر', nameLat: 'Arabkir', price: '$۶۵۰–$۱,۰۰۰', color: 'emerald', pros: ['تعادل خوب قیمت و دسترسی', 'فروشگاه و مدرسه نزدیک', 'ساختمان‌های متنوع'], cons: ['شیب خیابان‌ها', 'فاصله پیاده تا مرکز'], best: 'خانواده‌ها، کار در مرکز، زندگی طولانی‌مدت' },
        { name: 'داوتاشن', nameLat: 'Davtashen', price: '$۵۵۰–$۸۵۰', color: 'rose', pros: ['اجاره متعادل‌تر', 'فضای بزرگ‌تر', 'ساختمان‌های نسبتاً جدید'], cons: ['فاصله از مرکز', 'هزینه رفت‌وآمد اضافه'], best: 'خانواده‌ها، بودجه متوسط' },
    { name: 'آجاپنیاک و مالاتیا-سباستیا', nameLat: 'Ajapnyak / Malatia', price: '$۵۰۰–$۸۰۰', color: 'violet', pros: ['اقتصادی‌ترین گزینه‌ها', 'آپارتمان‌های بزرگ'], cons: ['دسترسی شبانه ضعیف', 'کیفیت ساختمان متغیر', 'فاصله زیاد از مرکز'], best: 'بودجه محدود، اقامت موقت' },
  ];

  const colors = { amber: 'from-amber-500/10 border-amber-500/20', emerald: 'from-emerald-500/10 border-emerald-500/20', rose: 'from-rose-500/10 border-rose-500/20', violet: 'from-violet-500/10 border-violet-500/20' };

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اجاره و ملک</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">بهترین محله‌های ایروان برای اجاره خانه</h1>
          <p className="text-foreground/60 mt-3 text-lg">مقایسه محله‌ها از نظر قیمت، دسترسی و کیفیت زندگی</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
        </section>

        <img
          src="https://images.unsplash.com/photo-1506092309076-af15fb0051e3?w=1200&q=75"
          alt="نمای هوایی از خانه‌های مسکونی، تصویر مرتبط با بهترین محله‌های ایروان"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <div className="space-y-5 mb-6">
          {neighborhoods.map((n, i) => (
            <section key={i} className={`rounded-2xl p-5 bg-gradient-to-br ${colors[n.color]} to-transparent border`}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-black text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> {n.name}
                </h2>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">{n.price}/ماه</span>
              </div>
              <p className="text-xs text-foreground/40 mb-3">{n.nameLat}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <h4 className="font-bold text-green-400 mb-1.5">مزایا</h4>
                  {n.pros.map((p, j) => <p key={j} className="text-foreground/60 mb-1">✓ {p}</p>)}
                </div>
                <div>
                  <h4 className="font-bold text-red-400 mb-1.5">معایب</h4>
                  {n.cons.map((c, j) => <p key={j} className="text-foreground/60 mb-1">✗ {c}</p>)}
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1.5">مناسب برای</h4>
                  <p className="text-foreground/60">{n.best}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-2xl p-4 mb-6 bg-amber-500/10 border border-amber-500/20">
          <p className="text-xs text-foreground/60 leading-6">
            ⚠️ قیمت‌های بالا برای آپارتمان‌های استاندارد و معمولی هستن. با توجه به نوساز یا قدیمی‌ساز بودن ساختمان، امکانات، مبله بودن و شرایط مختلف، قیمت هر منطقه می‌تونه بالاتر یا پایین‌تر باشه. همچنین در فصل‌های مختلف سال (به‌خصوص تابستان) قیمت‌ها متغیره.
          </p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Mountain className="w-5 h-5" /> اقامت لوکس کنار کاسکاد</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>محدوده‌ی کاسکاد برای کسایی مناسبه که طراحی داخلی، منظره، دسترسی فرهنگی و خدمات ساختمان براشون اولویت داره. آسانسور، پارکینگ، نگهبانی، هزینه شارژ و شرایط نظافت رو پیش از امضا بپرسید.</p>
            <p>واحدهای لوکس ممکنه مبله باشن، ولی فهرست وسایل و مسئولیت تعمیر تجهیزات باید دقیقاً تو قرارداد درج بشه.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Bus className="w-5 h-5" /> نکته‌ی مهم: هزینه رفت‌وآمد رو اضافه کنید</h2>
          <div className="text-sm text-foreground/70 leading-7">
            <p>محله‌ی ارزان‌تر = لزوماً هزینه‌ی کمتر نیست. هزینه‌ی تاکسی یا اتوبوس روزانه رو به اجاره ماهانه اضافه کنید. مثلاً اگه محل کارتون مرکز شهره و تو داوتاشن زندگی می‌کنید، ماهانه ۳۰-۵۰ دلار هزینه رفت‌وآمد اضافه می‌شه.</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">کمک در انتخاب محله و آپارتمان</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>

        <RelatedServices currentPath="/blog/best-neighborhoods-yerevan-rent" />
        </div>
          <PageSidebar tags={['apartment', 'yerevan', 'accommodation', 'life']} currentPath="/blog/best-neighborhoods-yerevan-rent" />
        </div>
      </main>
    </div>
  );
}
