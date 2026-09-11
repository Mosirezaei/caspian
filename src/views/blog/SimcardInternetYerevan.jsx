'use client';
import { Smartphone, Wifi, Download, CreditCard, MapPin, MessageCircle } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function SimcardInternetYerevan() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">زندگی در ایروان</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان</h1>
          <p className="text-foreground/60 mt-3 text-lg">همه چیز درباره‌ی خرید سیم‌کارت، اینترنت خانگی و اپ‌هایی که بدونشون نمی‌تونید تو ایروان زندگی کنید</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </section>

        <img
          src="https://images.unsplash.com/photo-1562774555-079298a31cbe?w=1200&q=75"
          alt="سیم‌کارت موبایل، تصویر مرتبط با راهنمای اینترنت و سیم‌کارت در ایروان"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5" /> اپراتورهای موبایل ارمنستان</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ارمنستان سه اپراتور اصلی داره. سیم‌کارت رو با پاسپورت از هر فروشگاه رسمی می‌تونید بخرید — فرودگاه زواتنوتس هم غرفه داره.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
              <h3 className="font-bold text-foreground mb-1">Viva-MTS (ویوا)</h3>
              <p className="text-xs text-foreground/60 mb-2">بزرگ‌ترین اپراتور — بهترین پوشش شهری و جاده‌ای</p>
              <div className="text-primary font-bold text-sm">~$۵–$۱۵/ماه</div>
              <p className="text-[10px] text-foreground/40 mt-1">بسته‌ی ۱۰–۳۰ گیگ دیتا + تماس نامحدود</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <h3 className="font-bold text-foreground mb-1">Team Telecom (تیم)</h3>
              <p className="text-xs text-foreground/60 mb-2">قدیمی‌ترین اپراتور — پوشش روستایی خوب</p>
              <div className="text-primary font-bold text-sm">~$۴–$۱۲/ماه</div>
              <p className="text-[10px] text-foreground/40 mt-1">ارزان‌ترین بسته‌های دیتا</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <h3 className="font-bold text-foreground mb-1">Ucom (یوکام)</h3>
              <p className="text-xs text-foreground/60 mb-2">جدیدترین — سریع‌ترین 4G/LTE ایروان</p>
              <div className="text-primary font-bold text-sm">~$۶–$۲۰/ماه</div>
              <p className="text-[10px] text-foreground/40 mt-1">بسته‌های ترکیبی موبایل+خانگی</p>
            </div>
          </div>
          <p className="text-xs text-foreground/50 mt-3">نکته: سیم‌کارت پیش‌پرداخت (prepaid) رو از فرودگاه بخرید — فقط پاسپورت لازمه. بعداً از اپلیکیشن اپراتور شارژ کنید.</p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Wifi className="w-5 h-5" /> اینترنت خانگی</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>اینترنت خانگی تو ایروان فیبر نوری (FTTH) داره و سرعتش عالیه — معمولاً ۵۰ تا ۲۰۰ مگابیت. قیمت ماهانه:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۱۰–$۱۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">۲۰–۵۰ مگابیت</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۱۵–$۲۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">۱۰۰ مگابیت</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۲۵–$۳۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">۲۰۰+ مگابیت</div>
              </div>
            </div>
            <p>Ucom و Rostelecom (Team) اصلی‌ترین ارائه‌دهنده‌های فیبره. نصب معمولاً ۱ تا ۳ روز طول می‌کشه و هزینه‌ی نصب اولیه حدود $۱۰–$۳۰ داره.</p>
            <p>نکته‌ی مهم: VPN تو ارمنستان لازم نیست — اینستاگرام، یوتیوب، تلگرام، واتساپ و همه‌ی سرویس‌ها بدون فیلتر کار می‌کنن.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Download className="w-5 h-5" /> اپلیکیشن‌های ضروری زندگی در ایروان</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">🚕 GG Taxi / Yandex Go</h4>
              <p className="text-xs text-foreground/60">تاکسی آنلاین — GG محلیه و ارزان‌تره، Yandex هم محبوبه. کرایه‌ی شهری ۱,۰۰۰ تا ۳,۰۰۰ درام (~$۲.۵ تا $۸).</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">💳 IDram / Telcell</h4>
              <p className="text-xs text-foreground/60">کیف پول دیجیتال — پرداخت قبوض، شارژ موبایل، انتقال پول. IDram محبوب‌ترینه و با شماره موبایل ارمنی فعال می‌شه.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">📍 2GIS</h4>
              <p className="text-xs text-foreground/60">نقشه‌ی آفلاین ایروان — آدرس‌ها، شماره تلفن مغازه‌ها، مسیریابی. از Google Maps دقیق‌تره برای ایروان.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">🛒 Menu.am / Glovo</h4>
              <p className="text-xs text-foreground/60">سفارش غذا آنلاین — Menu.am محلیه و رستوران‌های بیشتری داره، Glovo سوپرمارکت هم داره.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">🏦 اپ بانکی</h4>
              <p className="text-xs text-foreground/60">بعد از افتتاح حساب، اپ بانک رو نصب کنید (Ameria, Ardshin, Converse). انتقال فوری و رایگان بین حساب‌ها.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">📦 Wildberries / Ozon</h4>
              <p className="text-xs text-foreground/60">خرید آنلاین — هر دو به ارمنستان ارسال دارن. از لباس تا لوازم خونه، ۳ تا ۱۰ روز تحویل.</p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><CreditCard className="w-5 h-5" /> پرداخت بدون نقد</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>ایروان تقریباً کاملاً cashless شده — از تاکسی تا نانوایی، همه‌جا کارت می‌پذیرن. اما:</p>
            <p>✔ کارت ایرانی کار نمی‌کنه — باید کارت بانکی ارمنی (Visa/Mastercard) بگیرید؛ برای افتتاح حساب باید اقامت داشته باشید، تأیید حساب (در صورت نداشتن کسری مدرک) ۱ تا ۳ روز کاری و صدور کارت بعد از تأیید حساب هم ۱ تا ۳ روز کاری دیگه طول می‌کشه.</p>
            <p>✔ Apple Pay و Google Pay با کارت ارمنی کار می‌کنه</p>
            <p>✔ IDram برای پرداخت‌های کوچک (پارکینگ، اتوبوس، خرید از بقالی) عالیه</p>
            <p>✔ دلار نقد برای روزهای اول لازمه — صرافی‌ها تو خیابان مسکوویان و ساریان زیادن</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">کمک برای شروع زندگی در ایروان</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>
        <RelatedServices currentPath="/blog/simcard-internet-apps-yerevan" />
        </div>
          <PageSidebar tags={['yerevan', 'life', 'cost-of-living', 'armenia']} currentPath="/blog/simcard-internet-apps-yerevan" />
        </div>
      </main>
    </div>
  );
}
