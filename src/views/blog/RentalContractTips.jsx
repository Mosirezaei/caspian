'use client';
import { FileCheck2, ShieldAlert, Camera, CreditCard, Search, AlertTriangle } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function RentalContractTips() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">

        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اجاره و ملک</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">قرارداد اجاره در ارمنستان: ودیعه، مدارک و نکات حقوقی</h1>
          <p className="text-foreground/60 mt-3 text-lg">از جست‌وجوی آگهی تا تحویل کلید — همه چیز درباره قرارداد امن</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
        </section>

        <img
          src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=1200&q=75"
          alt="امضای قرارداد اجاره، تصویر مرتبط با قرارداد اجاره خانه"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Search className="w-5 h-5" /> آگهی معتبر و آژانس قابل‌اعتماد</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>جست‌وجو رو با چند کلیدواژه فارسی، ارمنی و انگلیسی انجام بدید و آدرس، متراژ، طبقه، امکانات و مبلغ رو تو یه جدول شخصی ثبت کنید.</p>
            <p>نام کامل مالک یا شرکت، نشانی دفتر، شماره تماس ثابت و شیوه محاسبه کمیسیون رو بخواید. اگه آگهی چند بار با قیمت‌های متفاوت منتشر شده، دلیل تغییر رو بپرسید.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Camera className="w-5 h-5" /> بازدید آپارتمان: چک‌لیست</h2>
          <div className="text-sm text-foreground/70 leading-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {['شیرهای آب و آب گرم', 'فشار گاز و رادیاتورها', 'کولر و پنجره‌ها', 'قفل‌ها و لوازم برقی', 'صدای همسایه و خیابان', 'بوی رطوبت', 'وضعیت مشاعات و آسانسور', 'پارکینگ (اختصاصی یا مشاع)', 'کنتورهای آب و برق (عکس بگیرید)', 'نورگیری اتاق‌ها'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-[10px] font-bold">{i+1}</span>
                  <span className="text-xs text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><FileCheck2 className="w-5 h-5" /> قرارداد باید چه بندهایی داشته باشه؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>✓ مشخصات کامل طرفین و نشانی دقیق آپارتمان</p>
            <p>✓ مدت قرارداد، مبلغ اجاره و ارز پرداخت</p>
            <p>✓ مبلغ ودیعه، زمان بازگشت و شرایط کسر</p>
            <p>✓ مسئولیت تعمیرات (مالک/مستأجر)</p>
            <p>✓ شرایط فسخ و تمدید</p>
            <p>✓ وضعیت قبوض و شارژ ساختمان</p>
            <p>✓ تعداد ساکنان مجاز و حیوان خانگی</p>
            <p>✓ فهرست وسایل و وضعیت هر کدوم (پیوست قرارداد)</p>
            <p>✓ تعداد کلیدها و شماره کنتورها</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><CreditCard className="w-5 h-5" /> ودیعه، کمیسیون و پرداخت</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">۱–۲ ماه اجاره</div>
                <div className="text-[10px] text-foreground/50 mt-1">ودیعه معمول</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">۵۰–۱۰۰٪ اجاره</div>
                <div className="text-[10px] text-foreground/50 mt-1">کمیسیون آژانس</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">۱ ماه پیش‌پرداخت</div>
                <div className="text-[10px] text-foreground/50 mt-1">اجاره ماه اول</div>
              </div>
            </div>
            <p>برای ودیعه، اجاره نخست و کمیسیون رسیدهای جداگانه بگیرید. پرداخت به حساب شخصی واسطه بدون قرارداد ریسک مالی شما رو افزایش می‌ده.</p>
          </div>
        </section>

        <section className="rounded-2xl p-6 mb-6 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
          <h2 className="text-xl font-black text-red-400 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> نشانه‌های آگهی مشکوک</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>🚩 قیمت خیلی پایین + فشار برای انتقال وجه فوری</p>
            <p>🚩 امتناع از بازدید حضوری</p>
            <p>🚩 آدرس ناقص یا مبهم</p>
            <p>🚩 مالک غایب که «فعلاً خارج از کشوره»</p>
            <p>🚩 عکس‌های تکراری یا از سایت دیگه</p>
            <p>🚩 جواب‌های متفاوت درباره پارکینگ، ودیعه و مدت</p>
            <p className="text-xs text-foreground/50 mt-2 pt-2 border-t border-white/10">قانون طلایی: فقط مبلغی بپردازید که شرایط بازگشتش مکتوب شده باشه. هویت مالک و تطبیق آدرس با ملک واقعی رو قبل از پرداخت بررسی کنید.</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">کمک در بررسی قرارداد و ملک</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>

        <RelatedServices currentPath="/blog/rental-contract-tips-armenia" />
        </div>
          <PageSidebar tags={['apartment', 'armenia', 'life', 'residency']} currentPath="/blog/rental-contract-tips-armenia" />
        </div>
      </main>
    </div>
  );
}
