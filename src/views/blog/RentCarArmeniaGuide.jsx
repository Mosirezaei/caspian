'use client';

import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function RentCarArmeniaGuide() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <header className="mb-8">
              <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">گردشگری و دیدنی‌ها</span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">اجاره خودرو در ارمنستان؛ مدارک، بیمه و نکات رانندگی</h1>
              <p className="text-foreground/60 mt-3 text-lg">راهنمای بررسی خودرو و قرارداد برای سفرهای شهری و بین‌شهری در ارمنستان.</p><ArticleByline author="سحر" date="۱۴۰۴/۰۶/۲۰" />
            </header>

            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=75" alt="خودروی اجاره‌ای برای سفر در ارمنستان" className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8" loading="lazy" />

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">اجاره خودرو برای چه سفری مناسب است؟</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>برای بازدید از چند شهر، مسیرهای کوهستانی یا برنامه‌ای با زمان‌بندی منعطف، خودرو می‌تواند رفت‌وآمد را ساده‌تر کند. برای سفر کاملاً شهری، ترافیک، پارکینگ و مسیرها را با تاکسی و حمل‌ونقل عمومی مقایسه کنید.</p>
                <p>پیش از هماهنگی، تعداد سرنشینان، حجم چمدان، نوع جاده و فصل سفر را مشخص کنید. خودرو کوچک برای مرکز شهر مناسب‌تر است؛ اما برای سفر طولانی یا بار بیشتر، فضای کافی اهمیت دارد.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">مدارک و شرایط را پیشاپیش بررسی کنید</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>شرکت اجاره‌دهنده معمولاً پاسپورت، گواهینامه معتبر و اطلاعات لازم برای قرارداد را بررسی می‌کند. پذیرش گواهینامه کشور مبدأ یا نیاز به گواهینامه بین‌المللی، حداقل سن و سابقه رانندگی را قبل از تأیید از شرکت رسمی بپرسید.</p>
                <p>نام تمام رانندگان مجاز باید در قرارداد درج شود. تحویل خودرو به فردی که در قرارداد ثبت نشده، می‌تواند مسئولیت و پوشش بیمه را تحت تأثیر قرار دهد.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">قرارداد و بیمه را دقیق بخوانید</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>شرایط اجاره، ودیعه، سقف مسافت، سوخت، تأخیر، راننده اضافه و لغو را پیش از امضا به‌صورت مکتوب بررسی کنید. مشخص کنید خودرو با چه سطحی از سوخت تحویل داده می‌شود و با چه سطحی باید بازگردانده شود.</p>
                <p>نوع پوشش بیمه، فرانشیز، خسارت شیشه و لاستیک، سرقت و کمک جاده‌ای را از شرکت بپرسید. هنگام تحویل، از بدنه، شیشه‌ها، لاستیک‌ها و داخل خودرو عکس و ویدئو بگیرید.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">چک‌لیست تحویل خودرو</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>کیلومترشمار، سطح سوخت، چراغ‌های هشدار، زاپاس یا کیت پنچرگیری، جک، مثلث هشدار و مدارک خودرو را بررسی کنید. هر خط‌وخش یا نقص موجود را در صورت‌جلسه تحویل ثبت کنید.</p>
                <p>نسخه قرارداد و رسید ودیعه را نگه دارید. اگر سفر بین‌شهری دارید، مقصد و محدودیت‌های احتمالی مسیر را پیش از حرکت با شرکت هماهنگ کنید.</p>
              </div>
            </section>

            <RelatedServices pageType="tour" />
          </article>
          <aside><PageSidebar tags={['armenia', 'car-rental', 'driving', 'travel']} currentPath="/blog/rent-car-armenia-guide" /></aside>
        </div>
      </main>
    </div>
  );
}
