'use client';

import GlobalNavbar from '@/components/shared/GlobalNavbar';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices';
import RelatedContent from '@/components/shared/RelatedContent';
import TourInquiryWidget from '@/components/shared/TourInquiryWidget';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA';

const heroImage = 'https://unsplash.com/photos/S4c5HHJqCOo/download?force=true&w=1600';

export default function WineFactoryTour() {
  return <div dir="rtl" className="min-h-screen bg-background"><GlobalNavbar />
    <main className="container mx-auto px-4 py-8 lg:py-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[360px] flex items-end bg-black/40">
        <img src={heroImage} alt="تاکستان و کارخانه شراب‌سازی ارمنستان" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
        <div className="relative z-10 p-6 md:p-10 text-white max-w-3xl">
          <span className="inline-flex rounded-full bg-primary/90 text-black px-4 py-1.5 text-sm font-black mb-4">تورهای خاص ارمنستان</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">تور بازدید از کارخانه‌های شراب‌سازی ارمنستان</h1>
          <p className="mt-4 text-lg text-white/85 font-bold">سفر به مهد کهن‌ترین شراب دنیا؛ از تاکستان‌های آرنی تا چشیدن طعم‌های اصیل ارمنی</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-8">
        <article className="space-y-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-foreground/85 leading-8">
            <p className="text-xl font-black leading-9 text-foreground">ارمنستان با پیشینه‌ای بیش از ۶۰۰۰ سال در تولید شراب، یکی از کهن‌ترین خاستگاه‌های فرهنگ شراب‌سازی جهان است. کشف کارخانهٔ شراب‌سازی ۶۱۰۰ ساله در غار آرنی نشان می‌دهد این هنر با تاریخ و خاک ارمنستان پیوندی عمیق دارد.</p>
            <h2 className="text-2xl font-black text-foreground mt-8 mb-4">چرا تور شراب‌سازی ارمنستان؟</h2>
            <ul className="space-y-3"><li><strong>انگورهای بومی:</strong> آشنایی با گونه‌هایی مانند آرِنی (Areni)، واسکهات (Voskehat) و خندونی.</li><li><strong>بازدید از فرایند تولید:</strong> مشاهده برداشت، تخمیر، بشکه‌های بلوط و نگهداری در انبارهای سنتی و مدرن.</li><li><strong>ترکیب تاریخ و طبیعت:</strong> تاکستان‌های منطقه آرنی، درهٔ وایوتس‌دزور و چشم‌اندازهای کوهستانی در یک برنامهٔ متفاوت.</li></ul>
            <h2 className="text-2xl font-black text-foreground mt-8 mb-4">روند برگزاری تور</h2>
            <ol className="space-y-3 list-decimal pr-6"><li>ترانسفر از هتل یا محل اقامت شما در ایروان و حرکت به سمت تاکستان‌ها.</li><li>استقبال راهنما و معرفی تاریخ مجموعه، انگورها و شیوهٔ تولید.</li><li>بازدید از تاکستان، سالن تخمیر، بشکه‌خانه و انبارهای زیرزمینی.</li><li>جلسهٔ تست شراب‌های قرمز، سفید و رزه همراه با پنیر و خوراکی‌های محلی، مطابق پکیج انتخابی.</li></ol>
            <h2 className="text-2xl font-black text-foreground mt-8 mb-4">قیمت و پکیج تست</h2>
            <p>هزینهٔ تست و برنامهٔ بازدید بر اساس کارخانه، تعداد نمونه‌ها، خوراکی‌های همراه و خدمات پکیج تعیین می‌شود و به‌صورت تقریبی از <strong>۱۰٬۰۰۰ تا ۲۵٬۰۰۰ درام برای هر نفر</strong> متغیر است. قیمت نهایی هنگام هماهنگی، با توجه به تاریخ و جزئیات درخواست اعلام می‌شود.</p>
            <h2 className="text-2xl font-black text-foreground mt-8 mb-4">این تور برای چه کسانی مناسب است؟</h2>
            <p>زوج‌ها، علاقه‌مندان به تاریخ و گردشگری غذایی، عکاسان، گروه‌های دوستانه و مسافرانی که می‌خواهند خارج از مرکز ایروان یک روز آرام و متفاوت را تجربه کنند.</p>
            <h2 className="text-2xl font-black text-foreground mt-8 mb-4">نکات مهم قبل از رزرو</h2>
            <ul className="space-y-2"><li>رزرو قبلی برای هماهنگی خودرو، راهنما و ظرفیت کارخانه ضروری است.</li><li>تست نوشیدنی فقط برای افراد بزرگسال انجام می‌شود؛ رانندگی پس از مصرف الکل توصیه نمی‌شود.</li><li>برنامه و مدت مسیر با توجه به کارخانه و وضعیت جاده ممکن است تغییر کند.</li><li>امکان طراحی برنامهٔ خصوصی برای گروه‌ها با هماهنگی قبلی وجود دارد.</li></ul>
            <h2 className="text-2xl font-black text-foreground mt-8 mb-4">رزرو تور کارخانه شراب‌سازی</h2>
            <p>برای بررسی تاریخ‌های قابل رزرو، انتخاب کارخانه و دریافت قیمت نهایی، فرم زیر را ارسال کنید تا کارشناسان کاسپین برنامه‌ای متناسب با زمان و تعداد نفرات شما پیشنهاد دهند.</p>
            <div className="mt-6"><TourInquiryWidget tourName="تور کارخانه شراب‌سازی ارمنستان" /></div>
          </section>
          <WhatsAppBottomCTA serviceType="tour" />
        </article>
        <aside className="lg:sticky lg:top-24 h-fit"><PageSidebar tags={['تور شراب‌سازی', 'آرنی', 'وایوتس‌دزور', 'گردشگری غذایی', 'جاذبه‌های ارمنستان']} serviceType="tour" /></aside>
      </div>
      <div className="mt-10"><RelatedServices /></div><div className="mt-10"><RelatedContent /></div>
    </main>
  </div>;
}
