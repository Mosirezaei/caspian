'use client';
import { Wrench, Truck, ChefHat, Palette, ShoppingBag, AlertTriangle, DollarSign } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function WorkWithoutDegree() {
  const jobs = [
    { icon: Wrench, title: 'ساختمان و تعمیرات', desc: 'نقاشی، لوله‌کشی، برق‌کشی، کاشی‌کاری. تقاضای بالا به‌خاطر ساخت‌وساز زیاد ایروان. ایرانی‌ها تو این حوزه شهرت خوبی دارن.', salary: '۵۰۰,۰۰۰–۱,۰۰۰,۰۰۰ درام/ماه', color: 'amber' },
    { icon: ChefHat, title: 'آشپزی و رستوران', desc: 'آشپز، کمک‌آشپز، گارسون، باریستا. رستوران‌های ایرانی ایروان و کافه‌ها همیشه نیرو می‌خوان.', salary: '۳۰۰,۰۰۰–۷۰۰,۰۰۰ درام/ماه', color: 'rose' },
    { icon: Truck, title: 'رانندگی و حمل‌ونقل', desc: 'تاکسی (Yandex/GG)، پیک موتوری، راننده شرکتی. با گواهینامه‌ی بین‌المللی یا ارمنی شروع می‌شه.', salary: '۴۰۰,۰۰۰–۸۰۰,۰۰۰ درام/ماه', color: 'blue' },
    { icon: ShoppingBag, title: 'فروشندگی و خدمات', desc: 'فروشنده مغازه، صندوق‌دار سوپرمارکت، کار در مراکز خرید. زبان روسی یا ارمنی مزیت بزرگیه.', salary: '۲۵۰,۰۰۰–۵۰۰,۰۰۰ درام/ماه', color: 'emerald' },
    { icon: Palette, title: 'آرایشگری و زیبایی', desc: 'آرایشگر مردانه/زنانه، مانیکور، تاتو. ایرانی‌ها تو آرایشگری ایروان خیلی موفقن و مشتری ثابت پیدا می‌کنن.', salary: '۴۰۰,۰۰۰–۱,۲۰۰,۰۰۰ درام/ماه', color: 'violet' },
  ];
  const colors = { amber: 'from-amber-500/10 border-amber-500/20', rose: 'from-rose-500/10 border-rose-500/20', blue: 'from-blue-500/10 border-blue-500/20', emerald: 'from-emerald-500/10 border-emerald-500/20', violet: 'from-violet-500/10 border-violet-500/20' };

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">کار و اشتغال</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">کار بدون مدرک تحصیلی در ارمنستان</h1>
          <p className="text-foreground/60 mt-3 text-lg">فرصت‌ها، حقوق و واقعیت‌های بازار کار برای ایرانیان</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
        </section>

        <img
          src="https://images.unsplash.com/photo-1577199001468-44c049e7603f?w=1200&q=75"
          alt="کارگران با کلاه ایمنی، تصویر مرتبط با کار بدون مدرک تحصیلی"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3">واقعیت بازار کار ارمنستان</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ارمنستان برای کارهای یدی و خدماتی نیروی کار کم داره — خیلی از جوان‌های ارمنی به سمت IT و کارهای اداری رفتن و کارهای فنی و خدماتی جای خالی زیادی داره. ایرانی‌ها به‌خاطر مهارت‌های فنی و قیمت رقابتی، تو بعضی حوزه‌ها تقاضای خوبی دارن.</p>
            <p>نکته‌ی مهم: برای کار قانونی باید مجوز کار داشته باشید. بدون مجوز، هم شما هم کارفرما جریمه می‌شید. مجوز کار معمولاً از طریق کارفرما یا ثبت IE (کارآفرین انفرادی) گرفته می‌شه.</p>
          </div>
        </section>

        <h2 className="text-xl font-black text-primary mb-4">حوزه‌های کاری بدون نیاز به مدرک</h2>
        <div className="space-y-4 mb-6">
          {jobs.map((job, i) => {
            const Icon = job.icon;
            return (
              <div key={i} className={`p-5 rounded-2xl bg-gradient-to-br ${colors[job.color]} to-transparent border`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">{job.title}</h3>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> {job.salary}
                  </span>
                </div>
                <p className="text-xs text-foreground/60 leading-6">{job.desc}</p>
              </div>
            );
          })}
        </div>

        <section className="rounded-2xl p-5 mb-6 bg-amber-500/10 border border-amber-500/20">
          <h3 className="font-bold text-foreground mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /> نکات مهم</h3>
          <div className="text-xs text-foreground/60 leading-6 space-y-2">
            <p>• حقوق‌ها بر اساس تجربه، زبان و فصل متغیره — ارقام بالا میانگین‌های تقریبی هستن</p>
            <p>• زبان روسی خیلی مهمه — اکثر کارفرماها و مشتری‌ها روسی صحبت می‌کنن</p>
            <p>• کار بدون مجوز = ریسک جریمه و مشکل برای تمدید اقامت</p>
            <p>• ثبت IE (کارآفرین انفرادی) ساده‌ترین راه قانونی‌سازی کار مستقله — هزینه ثبت تقریباً صفر</p>
            <p>• بیمه اجتماعی و مالیات حتی برای کارهای ساده الزامیه</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">مشاوره اشتغال و مجوز کار</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>
        <RelatedServices currentPath="/blog/work-without-degree-armenia" />
        </div>
          <PageSidebar tags={['work', 'employment', 'armenia', 'jobs']} currentPath="/blog/work-without-degree-armenia" />
        </div>
      </main>
    </div>
  );
}
