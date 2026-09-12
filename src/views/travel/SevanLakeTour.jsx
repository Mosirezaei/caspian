'use client';
import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import TourBookingWidget from '@/components/shared/TourBookingWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

export default function SevanLakeTour() {
  useSEO({
    title: 'تور یک‌روزه دریاچه سوان و دره گل‌ها (تساغکادزور) | گروه کاسپین',
    description: 'تور یک‌روزه دریاچه سوان و تساغکادزور با تله‌سیژ، صومعه سواناوانک، کلیسای کچاریس، ترانسفر، راهنمای فارسی و ناهار کامل — فقط ۱۵,۰۰۰ درام.',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1709832476369-a2d84d31b168?w=1600&q=80"
            alt="صومعه سواناوانک بر فراز دریاچه سوان، ارمنستان"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">
              تور یک‌روزه دریاچه سوان و دره گل‌ها (تساغکادزور)
            </h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">
              یک روز کامل فرار از شلوغی شهر، تنفس در هوای خنک کوهستان و تماشای نگین فیروزه‌ای ارمنستان
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">

              {/* === متن تبلیغاتی ارسالی کاربر — دست‌نخورده === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">
                  🌊 تور یک‌روزه خاطره‌انگیز دریاچه سوان و دره گل‌ها (تساغکادزور) 🏔️✨
                  <br /><br />
                  یک روز کامل فرار از شلوغی شهر، تنفس در هوای خنک کوهستان و تماشای نگین فیروزه‌ای ارمنستان! 😍🌿
                </p>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🌸 جاهایی که با هم می‌بینیم:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>😠 <b>دره گل‌ها (تساغکادزور):</b> صعود به ارتفاعات با تله‌سیژ روباز و تماشای دشت‌های سرسبز و قله‌های مه‌آلود ⛰️🌤️</li>
                  <li>⛪ <b>کلیسای باستانی کچاریس:</b> گشت‌وگذار در شاهکار معماری قرن یازدهم ارمنستان 🏰📜</li>
                  <li>🌊 <b>دریاچه رویایی سوان:</b> بزرگ‌ترین دریاچه آب شیرین قفقاز با آب زلال، هوای عالی و ساحل زیبا ⛵🏖️</li>
                  <li>🏰 <b>صومعه تاریخی سواناوانک:</b> منظره‌ای ۳۶۰ درجه و کارت‌پستالی بر فراز تپه شبه‌جزیره برای زیباترین عکس‌های سفرتان 📸🕊️</li>
                </ul>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍽️ خدمات تور:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🚐 ترانسفر رفت و برگشت توریستی، راحت و مجهز</li>
                  <li>🗣️ راهنمای فارسی‌زبان مجرب و حرفه‌ای</li>
                  <li>🍱 صرف ناهار کامل و لذیذ (کباب ماهی معروف سوان یا غذای سنتی محلی) 🐟🥗</li>
                  <li>☕ بیمه و پشتیبانی کامل در طول سفر</li>
                </ul>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1">💰 هزینه تور</p>
                    <p className="font-bold text-foreground">فقط ۱۵,۰۰۰ درام به ازای هر نفر</p>
                    <p className="text-xs text-foreground/50 mt-1">همه‌چیز شامل ترانسفر + راهنما + ناهار کامل 🌟</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> زمان‌بندی</p>
                    <p className="font-bold text-foreground">حرکت ۹:۳۰ صبح — بازگشت حدود ۱۹:۰۰ عصر</p>
                    <p className="text-xs text-foreground/50 mt-1">شروع از ایروان</p>
                  </div>
                </div>

                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2">
                  <Backpack className="w-5 h-5" /> چی همراه داشته باشیم؟
                </h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed">
                  <li>👟 کفش کتانی راحت برای پله‌ها و پیاده‌روی</li>
                  <li>🧥 یک ژاکت سبک یا بادگیر (کنار دریاچه و بالای تله‌سیژ هوا خنک است)</li>
                  <li>🕶️🧴 عینک آفتابی، کلاه و ضدآفتاب</li>
                  <li>🔋📱 انرژی مثبت و دوربین گوشی پر از شارژ!</li>
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <span>✨ برای اطلاعات بیشتر و ثبت‌نام سریع، همین حالا پیام بده یا با ما تماس بگیر! ظرفیت هر اجرا محدود است. 📲</span>
                </div>

                <div className="mt-5">
                  <TourBookingWidget tourName="تور دریاچه سوان و دره گل‌ها" adultPrice={15000} childPrice={12000} />
                </div>
              </section>

              {/* === مقاله‌ی کامل درباره‌ی دریاچه سوان و تساغکادزور === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-foreground mb-4">درباره‌ی دریاچه سوان</h2>
                <div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base">
                  <p>
                    دریاچه سوان (Sevana Lich) در ارتفاع تقریبی ۱،۹۰۰ متری از سطح دریا، بزرگ‌ترین دریاچه آب شیرین قفقاز و یکی از بزرگ‌ترین دریاچه‌های کوهستانی جهان است. این دریاچه که به «دریای ارمنستان» یا «نگین فیروزه‌ای ارمنستان» معروف است، حدود ۵٪ از مساحت کل کشور را پوشش می‌دهد و مهم‌ترین منبع آب شیرین منطقه به‌شمار می‌رود. رنگ آبی-فیروزه‌ای خیره‌کننده‌اش، همراه با کوه‌های اطراف که اغلب تا اوایل تابستان برف روی قله‌هاشون باقی می‌مونه، از سوان یکی از دیدنی‌ترین چشم‌اندازهای طبیعی ارمنستان ساخته.
                  </p>
                  <p>
                    <b className="text-foreground">صومعه سواناوانک</b> روی یک شبه‌جزیره‌ی کوچک در ساحل شمال‌غربی دریاچه قرار داره — جایی که تا قبل از پایین رفتن سطح آب دریاچه در دوران شوروی، واقعاً یک جزیره جدا از خشکی بود. این صومعه که قدمتش به قرن نهم میلادی برمی‌گرده، شامل دو کلیسای سنگی کوچک (سورب آراکلوتس و سورب آستواتساتسین) با تزئینات خاچکار (سنگ‌نبشته‌های صلیبی ارمنی) روی دیوارهاست. برای رسیدن به بالای تپه باید از یک پلکان سنگی بالا رفت که در انتهاش، یکی از معروف‌ترین منظره‌های ۳۶۰ درجه‌ی ارمنستان منتظرتونه.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1702675231835-ba8c6136b173?w=1200&q=80"
                    alt="دریاچه سوان و صومعه سواناوانک، ارمنستان"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2"
                    loading="lazy"
                  />
                  <p>
                    اگر تابستان به سوان سفر کنید، حتماً <b className="text-foreground">سیگ (ماهی سوان)</b> رو امتحان کنید — گونه‌ای ماهی آزاد بومی همین دریاچه که کبابی یا سرخ‌شده، غذای محلی و بسیار محبوب منطقه‌ست و در بیشتر رستوران‌های کنار ساحل سرو می‌شه.
                  </p>
                  <h3 className="text-lg font-bold text-foreground mt-6">تساغکادزور و دره گل‌ها</h3>
                  <p>
                    تساغکادزور، حدود ۵۰ کیلومتری شمال ایروان، شهرکی کوهستانی است که در دوران شوروی به‌عنوان قطب اصلی ورزش‌های زمستانی ارمنستان ساخته شد و امروز هم پیست اسکی و تله‌سیژ‌های معروفش رو داره. اما همین تله‌سیژ‌ها (تله‌کابین‌های روباز) در فصل گرم سال هم فعال هستند و مسافر رو به ارتفاعاتی می‌برند که به‌خاطر پوشش گیاهی و دشت‌های پر از گل‌های وحشی رنگارنگش، به «دره گل‌ها» معروف شده. از بالای تله‌سیژ، چشم‌اندازی از دره‌های سرسبز، جنگل‌های کاج و قله‌های مه‌آلود اطراف تساغکادزور در برابرتون قرار می‌گیره — تجربه‌ای که بین گرمای تابستان ایروان و خنکای کوهستان، حسابی نفس‌گیره.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1666093894171-faed137507c6?w=1200&q=80"
                    alt="چشم‌انداز کوهستانی و دشت سرسبز ارمنستان، مشابه فضای اطراف تساغکادزور"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2"
                    loading="lazy"
                  />
                  <p>
                    نزدیک تساغکادزور، <b className="text-foreground">صومعه کچاریس</b> قرار داره؛ مجموعه‌ای مذهبی از قرن یازدهم میلادی که یکی از مهم‌ترین مراکز علمی و مذهبی ارمنستان قرون وسطی بوده. این مجموعه شامل چند کلیسای سنگی با معماری کلاسیک ارمنی و یک برج ناقوس است که در کنار طبیعت اطرافش، توقفی آرام و دیدنی در مسیر تور محسوب می‌شه.
                  </p>
                  <h3 className="text-lg font-bold text-foreground mt-6">بهترین زمان برای این تور</h3>
                  <p>
                    ماه‌های اردیبهشت تا مهر (می تا اکتبر میلادی) بهترین زمان برای این تور هستند؛ هوا معتدل و مناسب پیاده‌روی است، تله‌سیژ تساغکادزور فعاله و دشت‌های اطرافش پر از گل‌های وحشیه. در تابستان می‌توانید کنار دریاچه سوان هم شنا کنید، هرچند آب دریاچه حتی در گرم‌ترین روزهای تابستان هم نسبتاً خنک باقی می‌مونه.
                  </p>
                </div>
              </section>

              <WhatsAppBottomCTA serviceType="tour" />

            </article>

            <PageSidebar tags={['tourism', 'sevan', 'tsaghkadzor', 'tour']} serviceType="tour" />
          </div>

          <div className="mt-10">
            <RelatedServices pageType="tour" />
            <RelatedContent currentTags={['tourism', 'sevan', 'armenia']} currentPath="/travel/tour/sevan-lake" />
          </div>
        </div>
      </div>
    </div>
  );
}
