'use client';

import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function PrivateCarArmeniaCarnetGuide() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <header className="mb-8">
              <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">سفر با ماشین شخصی</span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">راهنمای جامع کاپوتاژ خودرو، پلاک ترانزیت، هزینه بنزین و مسیر تا ارمنستان</h1>
              <p className="text-foreground/60 mt-3 text-lg">مراحل قانونی، مدارک لازم، هزینه‌ها و مسیر مرز نوردوز تا ایروان برای سفر بی‌دردسر با ماشین شخصی.</p><ArticleByline author="سحر" date="۱۴۰۵/۰۶/۲۱" />
            </header>

            <img src="/images/blog/private-car-armenia-carnet-transit-plate-route.svg" alt="کاپوتاژ خودرو و پلاک ترانزیت برای سفر به ارمنستان" className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8" loading="lazy" />

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">کاپوتاژ خودرو یعنی چه و چطور انجام می‌شود؟</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>پیش از حرکت به سمت مرز ارمنستان، باید تشریفات گمرکی خروج موقت خودرو — که به آن کاپوتاژ می‌گویند — را انجام دهید: مراجعه به گمرک با مدارک کامل، بازدید فنی خودرو توسط کارشناس گمرک، و دریافت برگه پروانه خروج موقت که معمولاً یک‌ساله اعتبار دارد.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">مدارک لازم برای کاپوتاژ و خروج خودرو</h2>
              <ul className="text-sm text-foreground/70 leading-7 space-y-2 list-disc pr-5">
                <li>سند مالکیت و کارت خودرو (اصل برگ سبز؛ حضور مالک یا وکالت‌نامه رسمی الزامی است).</li>
                <li>گواهینامه رانندگی بین‌المللی از کانون جهانگردی و اتومبیل‌رانی.</li>
                <li>پلاک ترانزیت (بین‌المللی) همراه با دفترچه مالکیت بین‌المللی.</li>
                <li>گذرنامه معتبر با حداقل ۶ ماه اعتبار از زمان سفر.</li>
              </ul>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">دریافت پلاک ترانزیت</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>پس از اخذ مجوز کاپوتاژ از گمرک، به مراکز یا نمایندگی‌های مجاز کانون جهانگردی و اتومبیل‌رانی مراجعه کنید تا پلاک فلزی ترانزیت، برچسب بین‌المللی کشور (IR) و گواهینامه بین‌المللی رانندگی را دریافت کنید. پلاک ترانزیت باید در جاده‌های ارمنستان جایگزین پلاک ملی شود و پس از بازگشت، پلاک ملی دوباره نصب گردد.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">هزینه بنزین، سوخت و عوارض در ارمنستان</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>نرخ بنزین برحسب درام متغیر است و هر لیتر به‌طور میانگین حدود ۱.۱ تا ۱.۳ دلار هزینه دارد. پیش از ورود به مناطق کوهستانی و دورافتاده، باک را در شهرهای بزرگ پر کنید. عوارض مرزی شامل عوارض خروج از ایران و هزینه ثبت ورود خودرو (هزینه خاک) است. کارت سبز بین‌المللی ایران پوشش کامل در ارمنستان ندارد، پس در مرز باید بیمه شخص ثالث ارمنی تهیه کنید.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">مسیر زمینی: از مرز نوردوز تا ایروان</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>تنها مرز زمینی فعال میان ایران و ارمنستان، مرز نوردوز است. پس از عبور از رود ارس و تشریفات گمرکی در سمت ارمنستان (مغری و آگاراک)، وارد جاده‌های کوهستانی می‌شوید. فاصله تا ایروان حدود ۴۰۰ کیلومتر است و طی آن، به‌دلیل جاده‌های کوهستانی، حدود ۶ تا ۸ ساعت زمان می‌برد.</p>
              </div>
            </section>

            <RelatedServices pageType="tour" />
          </article>
          <aside><PageSidebar tags={['armenia', 'carnet', 'transit-plate', 'nordooz', 'border']} currentPath="/blog/private-car-armenia-carnet-transit-plate-route" /></aside>
        </div>
      </main>
    </div>
  );
}
