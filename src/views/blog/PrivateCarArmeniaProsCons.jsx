'use client';

import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function PrivateCarArmeniaProsCons() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <header className="mb-8">
              <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">سفر با ماشین شخصی</span>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">مزایا و معایب سفر با ماشین شخصی به ارمنستان + قوانین رانندگی و جریمه‌ها</h1>
              <p className="text-foreground/60 mt-3 text-lg">آزادی عمل کامل در برابر جاده‌های کوهستانی؛ قوانین رانندگی، جریمه‌ها و نکات برخورد با پلیس ارمنستان.</p><ArticleByline author="سحر" date="۱۴۰۵/۰۶/۲۱" />
            </header>

            <img src="/images/blog/private-car-armenia-pros-cons-driving-rules.svg" alt="سفر با ماشین شخصی در جاده کوهستانی ارمنستان" className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8" loading="lazy" />

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">مزایای سفر با ماشین شخصی به ارمنستان</h2>
              <ul className="text-sm text-foreground/70 leading-7 space-y-2 list-disc pr-5">
                <li>آزادی عمل کامل در برنامه‌ریزی و توقف در مسیر، بدون وابستگی به ساعت اتوبوس یا تور.</li>
                <li>دسترسی راحت‌تر به مناطق بکر مثل دریاچه سوان، دره وهور و صومعه‌های کوهستانی.</li>
                <li>صرفه‌جویی در هزینه‌های جابجایی برای خانواده‌ها و گروه‌های کوچک نسبت به کرایه مداوم تاکسی.</li>
                <li>امکان حمل بار بیشتر، بدون محدودیت وزن و حجم چمدان مثل سفر هوایی.</li>
              </ul>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">معایب و چالش‌های سفر با ماشین شخصی</h2>
              <ul className="text-sm text-foreground/70 leading-7 space-y-2 list-disc pr-5">
                <li>جاده‌های کوهستانی و پرپیچ‌وخم از مرز نوردوز تا ایروان که رانندگی طولانی را خسته‌کننده می‌کند.</li>
                <li>استهلاک بالای خودرو به‌دلیل شیب‌های تند و کیفیت نامساوی برخی مسیرها.</li>
                <li>نظارت دقیق‌تر پلیس روی خودروهای با پلاک خارجی.</li>
                <li>دغدغه پیدا کردن جای پارک و رعایت قوانین پارکومتر در مرکز ایروان.</li>
              </ul>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">قوانین مهم رانندگی در ارمنستان</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p><strong className="text-foreground/85">حد مجاز الکل:</strong> صفر درصد؛ رانندگی در حالت مستی با جریمه سنگین، حبس و توقیف خودرو همراه است.</p>
                <p><strong className="text-foreground/85">تلفن همراه:</strong> مکالمه یا پیامک بدون هندزفری اکیداً ممنوع است.</p>
                <p><strong className="text-foreground/85">کمربند و صندلی کودک:</strong> بستن کمربند برای همه سرنشینان اجباری است؛ کودکان زیر ۱۲ سال نباید صندلی جلو بنشینند.</p>
                <p><strong className="text-foreground/85">حق تقدم عابر پیاده:</strong> عابران در گذرگاه‌ها حق تقدم کامل دارند.</p>
              </div>
            </section>

            <section className="glass-panel rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-black text-primary mb-3">جریمه‌ها و نکات برخورد با پلیس ارمنستان</h2>
              <div className="text-sm text-foreground/70 leading-7 space-y-3">
                <p>پلیس راه ارمنستان از دوربین‌های کنترل سرعت هوشمند استفاده می‌کند و جریمه‌ها معمولاً به‌صورت الکترونیکی ثبت می‌شوند. در صورت توقف توسط پلیس، آرام بمانید، مدارک خودرو و بیمه را ارائه دهید و از بحث خودداری کنید؛ جریمه‌ها فقط از طریق بانک یا اپلیکیشن‌های مجاز پرداخت می‌شوند.</p>
                <p>چراغ‌های خودرو، به‌ویژه در مناطق کوهستانی مه‌آلود یا هنگام غروب، باید همیشه روشن باشند.</p>
              </div>
            </section>

            <RelatedServices pageType="tour" />
          </article>
          <aside><PageSidebar tags={['armenia', 'private-car', 'driving', 'nordooz', 'border']} currentPath="/blog/private-car-armenia-pros-cons-driving-rules" /></aside>
        </div>
      </main>
    </div>
  );
}
