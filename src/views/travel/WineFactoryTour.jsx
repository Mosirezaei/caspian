'use client';
import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import TourInquiryWidget from '@/components/shared/TourInquiryWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

const heroImage = 'https://unsplash.com/photos/S4c5HHJqCOo/download?force=true&w=1600';
const articleImage = 'https://unsplash.com/photos/aK6WGqxyHFw/download?force=true&w=1600';

export default function WineFactoryTour() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img src={heroImage} alt="بشکه‌های شراب در کارخانه شراب‌سازی ارمنستان" className="w-full h-full object-cover opacity-40" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">تور بازدید از کارخانه‌های شراب‌سازی ارمنستان</h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">سفری به مهد کهن‌ترین شراب دنیا؛ از تاکستان‌های آرنی تا چشیدن طعم‌های اصیل ارمنی</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="space-y-8">
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">🍇 ارمنستان با پیشینه‌ای بیش از ۶۰۰۰ سال در تولید شراب، یکی از کهن‌ترین خاستگاه‌های فرهنگ شراب‌سازی جهان است. کشف کارخانهٔ شراب‌سازی ۶۱۰۰ ساله در غار آرنی نشان می‌دهد این هنر با تاریخ و خاک ارمنستان پیوندی عمیق دارد.</p>
                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍷 در این تور چه می‌بینیم؟</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed"><li>🍇 <b>تاکستان‌های آرنی:</b> آشنایی با انگورهای بومی مانند آرِنی (Areni)، واسکهات (Voskehat) و خندونی.</li><li>🏺 <b>فرایند تولید:</b> بازدید از سالن تخمیر، بشکه‌خانه و انبارهای سنتی و مدرن.</li><li>🏔️ <b>طبیعت وایوتس‌دزور:</b> مسیرهای کوهستانی و چشم‌اندازهای دره‌ای در کنار تجربه‌ای فرهنگی.</li><li>🥂 <b>جلسه تست:</b> چشیدن شراب‌های قرمز، سفید و رزه همراه با پنیر و خوراکی‌های محلی، مطابق پکیج انتخابی.</li></ul>
                <h2 className="text-lg font-black text-primary mt-6 mb-3">🚐 روند برگزاری تور</h2>
                <ol className="space-y-3 text-foreground/75 leading-relaxed list-decimal pr-6"><li>ترانسفر از هتل یا محل اقامت شما در ایروان.</li><li>معرفی تاریخ کارخانه، انگورها و روش‌های تولید توسط راهنما.</li><li>بازدید از تاکستان، خطوط تولید و بشکه‌خانه.</li><li>تست نمونه‌های منتخب و پذیرایی طبق پکیج.</li></ol>
                <div className="grid sm:grid-cols-2 gap-4 mt-6"><div className="p-4 rounded-xl bg-primary/5 border border-primary/15"><p className="text-xs text-foreground/50 mb-1">💰 هزینه تست و پکیج</p><p className="font-bold text-foreground">تقریباً ۱۰٬۰۰۰ تا ۲۵٬۰۰۰ درام برای هر نفر</p><p className="text-xs text-foreground/50 mt-1">بسته به کارخانه، تعداد تست و خدمات همراه</p></div><div className="p-4 rounded-xl bg-primary/5 border border-primary/15"><p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> زمان‌بندی</p><p className="font-bold text-foreground">هماهنگ‌شده بر اساس تاریخ و پکیج انتخابی</p><p className="text-xs text-foreground/50 mt-1">حرکت از ایروان</p></div></div>
                <h2 className="text-lg font-black text-primary mt-6 mb-3">👥 این تور برای چه کسانی مناسب است؟</h2><p className="text-foreground/75 leading-relaxed">زوج‌ها، گروه‌های دوستانه، علاقه‌مندان به تاریخ و گردشگری غذایی، عکاسان و مسافرانی که می‌خواهند خارج از مرکز ایروان یک روز آرام و متفاوت را تجربه کنند.</p>
                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2"><Backpack className="w-5 h-5" /> نکات مهم قبل از رزرو</h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed"><li>رزرو قبلی برای هماهنگی خودرو، راهنما و ظرفیت کارخانه ضروری است.</li><li>تست نوشیدنی فقط برای افراد بزرگسال انجام می‌شود و رانندگی پس از مصرف الکل توصیه نمی‌شود.</li><li>برنامه و مدت مسیر با توجه به کارخانه و وضعیت جاده ممکن است تغییر کند.</li><li>امکان طراحی برنامهٔ خصوصی برای گروه‌ها با هماهنگی قبلی وجود دارد.</li></ul>
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" /><span>برای انتخاب کارخانه، تاریخ و پکیج مناسب، کارشناسان کاسپین راهنمایی‌تان می‌کنند.</span></div>
                <div className="mt-5"><TourInquiryWidget tourName="تور کارخانه شراب‌سازی ارمنستان" /></div>
              </section>
              <section className="glass-panel rounded-2xl p-6 sm:p-8"><h2 className="text-xl font-black text-foreground mb-4">آرنی؛ یکی از کهن‌ترین خاستگاه‌های شراب جهان</h2><div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base"><p>منطقه آرنی در استان وایوتس‌دزور، به‌دلیل آب‌وهوای خشک، اختلاف دمای شب و روز و خاک مناسب، یکی از مهم‌ترین مناطق شراب‌سازی ارمنستان است. غار آرنی محل کشف بقایای کارخانه‌ای است که قدمت آن حدود ۶۱۰۰ سال برآورد شده است.</p><img src={articleImage} alt="بطری‌های شراب ارمنی در کارخانه" className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2" loading="lazy" /><p>امروزه کارخانه‌های منطقه با ترکیب روش‌های سنتی و فناوری مدرن، شراب‌هایی از انگورهای بومی تولید می‌کنند. بازدید از این مجموعه‌ها فرصتی برای آشنایی با تاریخ، طبیعت و فرهنگ غذایی ارمنستان در یک سفر است.</p><h3 className="text-lg font-bold text-foreground mt-6">بهترین زمان برای تور</h3><p>از بهار تا پاییز، به‌ویژه فصل برداشت انگور، زمان مناسبی برای این تجربه است؛ بااین‌حال برنامهٔ قابل رزرو به تقویم کارخانه و شرایط آب‌وهوا بستگی دارد.</p></div></section>
              <WhatsAppBottomCTA serviceType="tour" />
            </article>
            <aside className="space-y-6"><div className="glass-panel rounded-2xl p-5 lg:sticky lg:top-20"><PageSidebar tags={['wine', 'areni', 'food tourism', 'tour']} serviceType="tour" /></div></aside>
          </div>
          <div className="mt-10"><RelatedServices pageType="tour" /><RelatedContent currentTags={['wine', 'areni', 'tourism']} currentPath="/travel/tour/wine-factory-tour" /></div>
        </div>
      </div>
    </div>
  );
}
