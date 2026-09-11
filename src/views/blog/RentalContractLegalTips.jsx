'use client';
import { ShieldAlert, FileCheck2, MessageSquare, Scale } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function RentalContractLegalTips() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">اجاره و ملک</span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">نکات حقوقی قرارداد اجاره در ارمنستان؛ مذاکره، ضمانت و فسخ</h1>
              <p className="text-foreground/60 mt-3 text-lg">راهنمای تخصصی برای کاهش ریسک پیش از امضای قرارداد</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
            </section>
            <img src="https://images.unsplash.com/photo-1733244766159-f58f4184fd38?w=1200&q=75" alt="بررسی حقوقی قرارداد اجاره خانه در ارمنستان" className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8" loading="lazy" />
            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><FileCheck2 className="w-5 h-5" /> پیش از امضا چه چیزهایی را مکتوب کنیم؟</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-2">
                <p>نام و مشخصات کامل طرفین، نشانی دقیق ملک، مدت اجاره، مبلغ اجاره، مبلغ ودیعه و روش پرداخت باید در متن قرارداد درج شود.</p>
                <p>وضعیت قبوض، شارژ ساختمان، تعمیرات، تعداد کلیدها، فهرست وسایل و آسیب‌های موجود را در یک صورت‌جلسه تحویل ثبت و امضا کنید.</p>
              </div>
            </section>
            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><Scale className="w-5 h-5" /> مذاکره درباره ودیعه و تعهدات</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-2">
                <p>قبل از پرداخت، زمان و شیوه بازگرداندن ودیعه، موارد مجاز کسر از آن و مسئول پرداخت هزینه‌های تعمیرات را روشن کنید.</p>
                <p>هر توافق شفاهی درباره تمدید، افزایش اجاره، حیوان خانگی یا استفاده تجاری از ملک را به بند جداگانه تبدیل کنید.</p>
              </div>
            </section>
            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3 flex items-center gap-2"><MessageSquare className="w-5 h-5" /> فسخ، تمدید و حل اختلاف</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-2">
                <p>مهلت اعلام تخلیه، شرایط فسخ زودهنگام، خسارت احتمالی و روش تحویل ملک را پیش از امضا مشخص کنید.</p>
                <p>نسخه امضاشده قرارداد و رسید همه پرداخت‌ها را نزد خود نگه دارید. برای تفسیر بندهای حساس، از مشاور حقوقی مسلط به قوانین ارمنستان کمک بگیرید.</p>
              </div>
            </section>
            <section className="rounded-2xl p-6 mb-6 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <h2 className="text-xl font-black text-red-400 mb-3 flex items-center gap-2"><ShieldAlert className="w-5 h-5" /> هشدارهای حقوقی و مالی</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-2">
                <p>پیش از تطبیق هویت مالک یا نماینده و مشاهده اصل مدارک ملک، وجه قابل‌توجهی پرداخت نکنید.</p>
                <p>این مقاله جایگزین مشاوره حقوقی اختصاصی نیست؛ مقررات و رویه‌های اجرایی ممکن است بر اساس وضعیت ملک و طرفین متفاوت باشد.</p>
              </div>
            </section>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">بررسی قرارداد اجاره و شرایط ملک</h3>
              <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
            </div>
            <RelatedServices currentPath="/blog/rental-contract-tips-armenia" />
          </div>
          <PageSidebar tags={['rental-contract', 'deposit', 'legal', 'armenia']} currentPath="/blog/rental-contract-tips-armenia" />
        </div>
      </main>
    </div>
  );
}