'use client';
import { Home, DollarSign, Calendar, ShieldCheck, Thermometer } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function ApartmentRentalGuide() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اجاره و ملک</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">راهنمای اجاره آپارتمان در ایروان</h1>
          <p className="text-foreground/60 mt-3 text-lg">قیمت‌ها، تفاوت کوتاه‌مدت و بلندمدت، و هزینه‌های واقعی زندگی</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </section>

        <img
          src="https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?w=1200&q=75"
          alt="کلید در دست، تصویر مرتبط با اجاره آپارتمان در ایروان"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Home className="w-5 h-5" /> بازار مسکن ایروان برای ایرانیان</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>انتخاب مدت اقامت و محله پیش از جست‌وجوی آپارتمان، هزینه نهایی شما رو تا حد زیادی تعیین می‌کنه. در ایروان، مرکز شهر دسترسی و امکانات بیشتری داره، در حالی که آرابگیر و محله‌های دورتر گزینه‌های متعادل‌تری برای بودجه‌های محدود فراهم می‌کنن.</p>
            <p>بازه قیمت خیلی متنوعه — آپارتمان‌های ساده‌تر در مناطق اقتصادی‌تر از حدود ۵۰۰ دلار شروع می‌شن و بسته به امکانات، متراژ و محله تا ۱,۵۰۰ دلار یا بیشتر افزایش پیدا می‌کنن.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Calendar className="w-5 h-5" /> کوتاه‌مدت یا بلندمدت؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <h3 className="font-bold text-foreground mb-2">اجاره روزانه</h3>
                <p className="text-xs text-foreground/60">مناسب سفر کاری، چند شب اول یا اقامت پیش از پیدا کردن خانه بلندمدت. معمولاً مبله‌ست و قبوض شامل قیمته. برای سفر گروهی فضای بیشتری از هتل می‌ده.</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                <h3 className="font-bold text-foreground mb-2">اجاره ماهانه/سالانه</h3>
                <p className="text-xs text-foreground/60">مناسب کار، تحصیل و مهاجرت. قرارداد مکتوب هزینه قابل‌کنترل‌تری ایجاد می‌کنه. قرارداد سالانه برای درآمد ثابت، ماهانه برای دوره آزمایشی.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5" /> بازه قیمت اجاره در ایروان ۲۰۲۶</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">$۶۵۰–$۱,۰۰۰</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">یک‌خوابه (متوسط)</div>
                <div className="text-[10px] text-foreground/40">بسته به محله و امکانات</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">$۸۰۰–$۱,۲۰۰</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">دوخوابه</div>
                <div className="text-[10px] text-foreground/40">بسته به محله و امکانات</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-black text-xl">$۱,۰۰۰+</div>
                <div className="text-xs text-foreground/50 mt-1 font-semibold">سه‌خوابه/ویلایی</div>
                <div className="text-[10px] text-foreground/40">برای خانواده‌ها</div>
              </div>
            </div>
            <p className="text-xs text-foreground/50">این قیمت‌ها برای آپارتمان‌های استاندارد و معمولی هستن. نوساز/قدیمی‌ساز بودن، امکانات و فصل سال روی قیمت اثر می‌ذاره. ودیعه معمولاً ۱ تا ۲ ماه اجاره.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Thermometer className="w-5 h-5" /> هزینه‌های جانبی ماهانه</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۱۵–$۳۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">اینترنت خانگی</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۲۰–$۶۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">برق و گاز</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۵–$۱۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">آب</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۱۰–$۳۰</div>
                <div className="text-[10px] text-foreground/50 mt-1">شارژ ساختمان</div>
              </div>
            </div>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">کمک برای پیدا کردن آپارتمان مناسب؟</h3>
          <p className="text-sm text-foreground/60 mb-4">گروه کاسپین تو پیدا کردن آپارتمان، بررسی قرارداد و هماهنگی با مالک کنارتونه.</p>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>

        <RelatedServices currentPath="/blog/apartment-rental-yerevan-guide" />
        </div>
          <PageSidebar tags={['apartment', 'yerevan', 'accommodation', 'life', 'cost-of-living']} currentPath="/blog/apartment-rental-yerevan-guide" />
        </div>
      </main>
    </div>
  );
}
