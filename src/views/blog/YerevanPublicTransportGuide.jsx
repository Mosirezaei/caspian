'use client';

import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

export default function YerevanPublicTransportGuide() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <header className="mb-8">
              <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">زندگی در ارمنستان</span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">حمل‌ونقل عمومی ایروان؛ مترو، اتوبوس و تاکسی</h1>
              <p className="text-foreground/60 mt-3 text-lg">راهنمای انتخاب شیوه رفت‌وآمد برای مسافران، دانشجویان و خانواده‌های تازه‌وارد در ایروان.</p>
            </header>

            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=75" alt="راهنمای حمل‌ونقل عمومی ایروان با مترو و اتوبوس" className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8" loading="lazy" />

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">مترو ایروان برای چه مسیرهایی مناسب است؟</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>مترو برای رفت‌وآمد در بخشی از مسیرهای اصلی شهر و کاهش زمان سفر در ساعات شلوغ کاربردی است. اگر محل اقامت یا محل کار نزدیک ایستگاه باشد، مترو می‌تواند انتخاب قابل پیش‌بینی‌تری نسبت به خودرو در ترافیک باشد.</p>
                <p>پیش از انتخاب خانه، فاصله واقعی تا ایستگاه را پیاده بررسی کنید. فاصله روی نقشه همیشه شیب خیابان، گذرگاه امن یا شرایط مسیر در شب را نشان نمی‌دهد.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">اتوبوس و مسیرهای شهری</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>اتوبوس و مینی‌بوس برای محله‌هایی که ایستگاه مترو ندارند اهمیت زیادی دارند. مسیر، ساعت حرکت و روش پرداخت ممکن است تغییر کند؛ برای اطلاعات همان روز از منبع رسمی یا ابزارهای مسیریابی به‌روز استفاده کنید.</p>
                <p>در روزهای اول ورود، برای جلسه، پرواز یا کار اداری زمان اضافه در نظر بگیرید. تأخیرهای شهری و شرایط آب‌وهوا می‌تواند زمان سفر را تغییر دهد.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">تاکسی اینترنتی و تاکسی خیابانی</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>پیش از سوار شدن، نام سرویس، پلاک خودرو، مقصد و مبلغ نمایش‌داده‌شده را بررسی کنید. تاکسی اینترنتی معمولاً امکان مشاهده مسیر و ثبت سابقه سفر را فراهم می‌کند.</p>
                <p>برای فرودگاه یا مسیرهای طولانی، شرایط بار، توقف و هر هزینه احتمالی را پیش از حرکت روشن کنید. برای ترانسفر مستقل می‌توانید از تاکسی رسمی فرودگاه یا اپلیکیشن‌های تاکسی استفاده کنید.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">انتخاب محل اقامت با توجه به رفت‌وآمد</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>خانه نزدیک مسیر مستقیم مترو یا اتوبوس می‌تواند رفت‌وآمد روزانه را ساده‌تر کند. برای خانواده‌ها، مسیر مدرسه، محل کار هر نفر و نیاز به تاکسی در ساعات شب را جداگانه بررسی کنید.</p>
                <p>اگر قصد رزرو هتل یا آپارتمان در ایروان را دارید، نام مقصدهای روزانه خود را از ابتدا اعلام کنید تا منطقه مناسب‌تر با توجه به برنامه سفر بررسی شود.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">نکات ایمنی رفت‌وآمد</h2>
              <p className="text-sm text-foreground/70 leading-7">در سفر شبانه، محل سوار و پیاده‌شدن را روشن و قابل شناسایی انتخاب کنید. اطلاعات سفر را برای همراه خود بفرستید و در صورت تغییر غیرمنتظره مسیر یا مبلغ، پیش از ادامه سفر توضیح بخواهید.</p>
            </section>

            <RelatedServices pageType="tour" />
          </article>
          <aside><PageSidebar tags={['yerevan', 'transport', 'taxi', 'metro', 'life']} currentPath="/blog/yerevan-public-transport-guide" /></aside>
        </div>
      </main>
    </div>
  );
}
