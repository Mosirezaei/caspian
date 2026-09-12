'use client';

import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import TourInquiryWidget from '@/components/shared/TourInquiryWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

export default function KhorVirapTour() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1677864109159-34eb97228c65?w=1600&q=80" alt="صومعه خور ویراپ و کوه آرارات" className="w-full h-full object-cover opacity-40" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">تور یک‌روزه صومعه تاریخی خور ویراپ و چشم‌انداز باشکوه کوه آرارات</h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">صومعه تاریخی با چشم‌انداز مستقیم کوه آرارات</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">🏔️ سفر به قلب معنویت و تاریخ کهن ارمنستان؛ جایی که یکی از باشکوه‌ترین قاب‌های کوه آرارات پیش چشمان شما نقش می‌بندد! 😍📜</p>
                <h2 className="text-lg font-black text-primary mt-6 mb-3">🌸 در این تور چه می‌بینیم؟</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>⛪ <b>صومعه تاریخی خور ویراپ:</b> صومعه‌ای بر فراز تپه‌های دشت آرارات که با تاریخ مسیحیت ارمنستان و داستان گریگور روشنگر پیوندی عمیق دارد.</li>
                  <li>🕳️ <b>چاه سیاه‌چال گریگور روشنگر:</b> بازدید از محل تاریخی حبس گریگور روشنگر و تجربه فرود به فضای زیرزمینی صومعه.</li>
                  <li>🏔️ <b>چشم‌انداز کوه آرارات:</b> منظره‌ای باز و تماشایی از آرارات؛ یکی از جذاب‌ترین سوژه‌های عکاسی اطراف ایروان.</li>
                  <li>🍇 <b>دشت آرارات:</b> مسیر و چشم‌اندازهای سرسبز دشت حاصلخیز آرارات، در کنار روستاها و باغ‌های منطقه.</li>
                </ul>
                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍽️ خدمات تور</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🚐 ترانسفر رفت‌وبرگشت توریستی با خودروی راحت و مجهز به تهویه مطبوع</li>
                  <li>🗣️ راهنمای باتجربه با توضیحات تاریخی، مذهبی و جغرافیایی</li>
                  <li>🍱 ناهار کامل ارمنی در رستوران سنتی محلی</li>
                  <li>☕ آب معدنی، پشتیبانی و بیمه سفر</li>
                </ul>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15"><p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> حرکت</p><p className="font-bold text-foreground">۰۹:۳۰ از ایروان</p><p className="text-xs text-foreground/50 mt-1">زمان دقیق هنگام هماهنگی تأیید می‌شود</p></div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15"><p className="text-xs text-foreground/50 mb-1">🕒 بازگشت</p><p className="font-bold text-foreground">حدود ساعت ۱۵:۳۰</p><p className="text-xs text-foreground/50 mt-1">با توجه به برنامه و شرایط مسیر</p></div>
                </div>
                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2"><Backpack className="w-5 h-5" /> پیشنهاد برای سفر</h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed"><li>👟 کفش راحت و مناسب پیاده‌روی</li><li>🧥 پوشش مناسب برای ورود به مکان مذهبی</li><li>🕶️ عینک آفتابی و کلاه</li><li>📱 تلفن یا دوربین با شارژ کافی</li></ul>
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" /><span>برای انتخاب تاریخ و هماهنگی ظرفیت تور، پیش از رزرو با کارشناسان کاسپین در ارتباط باشید.</span></div>
                <div className="mt-5"><TourInquiryWidget tourName="تور یک‌روزه خور ویراپ" /></div>
              </section>
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-foreground mb-4">خور ویراپ؛ روایت تاریخ، ایمان و آرارات</h2>
                <div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base">
                  <p>خور ویراپ به معنای «گودال عمیق» یا «سیاه‌چال عمیق» است و نام آن با یکی از مهم‌ترین روایت‌های تاریخ مسیحیت ارمنستان گره خورده است. این صومعه در دشت آرارات قرار دارد و چشم‌انداز کوه آرارات، فضای تاریخی آن را برای گردشگران بسیار منحصربه‌فرد کرده است.</p>
                  <h3 className="text-lg font-bold text-foreground mt-6">پیشینه تاریخی و مسیحی‌شدن ارمنستان</h3>
                  <p>بر اساس روایت سنتی، تیرِدات سوم، پادشاه ارمنستان، گریگور روشنگر را به دلیل ایمان مسیحی‌اش در سیاه‌چال خور ویراپ زندانی کرد. در روایت‌های تاریخی و مذهبی، گریگور سال‌ها در این زندان زیرزمینی محبوس بود تا اینکه پس از بیماری پادشاه، برای درمان او فراخوانده شد.</p>
                  <p>گریگور توانست پادشاه را درمان کند و پس از آن روند مسیحی‌شدن ارمنستان آغاز شد. سال ۳۰۱ میلادی معمولاً در سنت تاریخی ارمنی به‌عنوان تاریخ رسمی پذیرش مسیحیت در ارمنستان شناخته می‌شود.</p>
                  <h3 className="text-lg font-bold text-foreground mt-6">معماری صومعه و سیاه‌چال</h3>
                  <p>ساختمان‌های خور ویراپ در دوره‌های مختلف بازسازی شده‌اند و مجموعه امروزی نتیجه چندین مرحله ساخت‌وساز و مرمت است. یکی از جذاب‌ترین بخش‌های بازدید، دسترسی به فضای زیرزمینی سیاه‌چال تاریخی است؛ تجربه‌ای متفاوت از یک بازدید معمول گردشگری.</p>
                  <h3 className="text-lg font-bold text-foreground mt-6">قاب مشهور کوه آرارات</h3>
                  <p>یکی از دلایل اصلی محبوبیت خور ویراپ، چشم‌انداز گسترده آن به آرارات است. در روزهای صاف می‌توان نمای باشکوه آرارات بزرگ و کوچک را در افق دید. صبح‌ها معمولاً برای عکاسی و دید بهتر شرایط مناسبی دارند، هرچند شفافیت منظره به آب‌وهوا وابسته است.</p>
                </div>
              </section>
              <WhatsAppBottomCTA serviceType="tour" />
            </article>
            <PageSidebar tags={['خور ویراپ', 'کوه آرارات', 'تور یک‌روزه', 'تاریخ ارمنستان', 'جاذبه‌های ارمنستان']} serviceType="tour" />
          </div>
          <div className="mt-10"><RelatedServices pageType="tour" /><RelatedContent currentTags={['خور ویراپ', 'کوه آرارات', 'تاریخ ارمنستان']} currentPath="/travel/tour/khor-virap" /></div>
        </div>
      </div>
    </div>
  );
}
