'use client';
import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import TourBookingWidget from '@/components/shared/TourBookingWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

export default function YerevanCityTour() {
  useSEO({
    title: 'تور یک‌روزه شهری ایروان | گروه کاسپین',
    description: 'تور یک‌روزه شهری ایروان: میدان جمهوری، موزه تاریخ ارمنستان، مجموعه پلکانی کاسکاد و پارک پیروزی، با ترانسفر، راهنمای فارسی و ناهار کامل — فقط ۲۵ دلار.',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1693071486458-810787f9d465?w=1600&q=80"
            alt="میدان جمهوری و کاسکاد ایروان، پایتخت صورتی ارمنستان"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">
              تور یک‌روزه جذاب شهری ایروان: تاریخ، معماری و چشم‌اندازهای رویایی
            </h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">
              یک روز به‌یادماندنی در دل پایتخت صورتی ارمنستان؛ از قلب تپنده شهر تا پله‌های باشکوه کاسکاد و بام ایروان
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">

              {/* === متن تبلیغاتی ارسالی کاربر — دست‌نخورده === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">
                  🏛️ تور یک‌روزه جذاب شهری ایروان: تاریخ، معماری و چشم‌اندازهای رویایی 🇦🇲
                  <br /><br />
                  یک روز به‌یادماندنی در دل پایتخت صورتی ارمنستان؛ از قلب تپنده شهر و گنجینه‌های چند هزار ساله تا پله‌های باشکوه کاسکاد و بام ایروان! 🌆🚶‍♂️
                </p>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🌟 برنامه گشت و جاذبه‌های تور:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🏛️ <b>میدان جمهوری (هراپاراک):</b> تماشای شاهکار معماری توف صورتی، فواره‌های موزیکال و قدم‌زدن در کانون سرزندگی شهر ⛲✨</li>
                  <li>🏺 <b>موزه تاریخ ارمنستان:</b> سفری رازآلود از عصر حجر، اورارتو و دوره‌های پادشاهی تا تاریخ معاصر با اشیاء باستانی بی‌نظیر 📜👑</li>
                  <li>🎨 <b>مجموعه پلکانی کاسکاد (هزارپله):</b> تماشای مجسمه‌های معاصر مدرن، گالری‌های هنری و دیدن منظره کوه آرارات از فراز پله‌ها ⛰️🖼️</li>
                  <li>🕊️ <b>پارک پیروزی و تندیس مام ارمنستان:</b> تنفس در فضای سرسبز پارک، دیدن دریاچه کوچک و ایستادن بر بام ایروان با چشم‌انداز پانوراما 🌿🏰</li>
                </ul>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍽️ خدمات تور:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🚐 ترانسفر توریستی راحت و کولردار در طول برنامه شهری</li>
                  <li>🗣️ راهنمای مجرب و مسلط (توضیح کامل تاریخ و داستان‌های پشت هر اثر)</li>
                  <li>🍱 صرف ناهار کامل و خوشمزه در رستوران دنج و باکیفیت 🍖🥗</li>
                  <li>🎫 پوشش بلیط ورودی موزه تاریخ</li>
                </ul>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1">💰 هزینه تور</p>
                    <p className="font-bold text-foreground">تنها ۲۵ دلار برای هر نفر</p>
                    <p className="text-xs text-foreground/50 mt-1">شامل گشت کامل + ترانسفر + راهنما + ورودی موزه + ناهار 🌟</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> زمان‌بندی</p>
                    <p className="font-bold text-foreground">از ۱۰:۰۰ صبح تا ۱۷:۰۰ بعدازظهر</p>
                    <p className="text-xs text-foreground/50 mt-1">شروع از ایروان</p>
                  </div>
                </div>

                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2">
                  <Backpack className="w-5 h-5" /> نکات و توصیه‌ها
                </h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed">
                  <li>👟 کفش راحت پیاده‌روی (برای پله‌های کاسکاد و سنگ‌فرش‌های میدان)</li>
                  <li>🕶️🧢 کلاه، عینک آفتابی و کرم ضدآفتاب</li>
                  <li>📸🔋 گوشی شارژ شده برای ثبت زیباترین قاب‌های شهری!</li>
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <span>✨ برای اطلاعات بیشتر و ثبت‌نام سریع، همین حالا پیام بده یا با ما تماس بگیر! ظرفیت هر اجرا محدود است. 📲</span>
                </div>

                <div className="mt-5">
                  <TourBookingWidget tourName="تور شهری ایروان" adultPrice={25} childPrice={25} currency="دلار" />
                </div>
              </section>

              {/* === مقاله‌ی کامل درباره‌ی جاذبه‌های تور ایروان === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-foreground mb-4">راهنمای کامل جاذبه‌های تور شهری ایروان</h2>
                <div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base">
                  <p>
                    شهر ایروان، یکی از کهن‌ترین سکونتگاه‌های پیوسته مسکونی در جهان است که قدمت قلعه اربونی آن حتی از رم باستان نیز فراتر می‌رود. این شهر در قرن بیستم توسط معمار نامدار، الکساندر تامانیان، بر اساس الگوی مدرن شهری با شعاع‌های منظم دایره‌ای و خیابان‌های سرسبز بازآفرینی شد و به دلیل کاربرد گسترده سنگ آتشفشانی «توف» در نمای ساختمان‌ها، به شهر صورتی شهرت یافت. در ادامه با جزئیات نقاطی که در این تور مورد بازدید قرار می‌گیرند آشنا می‌شویم.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۱. میدان جمهوری (Republic Square)</h3>
                  <p>
                    میدان جمهوری، نگین معماری و قلب تپنده پایتخت است که توسط الکساندر تامانیان طراحی شد و اجرای نهایی آن دهه‌ها به طول انجامید.
                  </p>
                  <p>
                    <b className="text-foreground">معماری و مصالح:</b> ساختمان‌های اطراف میدان بر پایه‌ای از سنگ بازالت تیره و بدنه‌ای از سنگ توف صورتی و اخرایی ساخته شده‌اند. ترکیب نقوش و تزئینات کنده‌کاری‌شده روی ستون‌ها و طاق‌ها، الهام‌گرفته از معماری سنتی و قرون‌وسطایی ارمنستان است.
                  </p>
                  <p>
                    <b className="text-foreground">ساختمان‌های کلیدی:</b> ساختمان دولت (با برج ساعت معروف شهر)، کاخ نخست‌وزیری، وزارت امور خارجه سابق، هتل ماریوت و عمارت مرکزی موزه تاریخ و گالری ملی دورتادور این میدان بیضی‌شکل قرار گرفته‌اند.
                  </p>
                  <p>
                    <b className="text-foreground">فواره‌های موزیکال:</b> حوض مرکزی بزرگ میدان محل اجرای رقص فواره‌ها همراه با موسیقی کلاسیک و ملی است که در طول فصل‌های گرم سال، شب‌های ایروان را زنده و پرشور نگه می‌دارد.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1693071486458-810787f9d465?w=1200&q=80"
                    alt="میدان جمهوری ایروان، معماری سنگ توف صورتی"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2"
                    loading="lazy"
                  />

                  <h3 className="text-lg font-bold text-foreground mt-6">۲. موزه تاریخ ارمنستان (History Museum of Armenia)</h3>
                  <p>
                    این موزه که در سال ۱۹۱۹ پایه‌گذاری شد و در ضلع شمالی میدان جمهوری قرار دارد، معتبرترین و غنی‌ترین مخزن باستان‌شناسی، مردم‌شناسی و تاریخ ملت ارمنستان و فلات قفقاز محسوب می‌شود.
                  </p>
                  <p>
                    <b className="text-foreground">گنجینه‌های دوران باستان:</b> بخش ماقبل تاریخ و عصر برنز موزه شامل کشفیات شگفت‌انگیزی است؛ از جمله کفش چرمی آرنی-۱ (قدیمی‌ترین کفش چرمی شناخته‌شده در جهان با قدمت بیش از ۵,۵۰۰ سال) و ارابه‌های چوبی چهارهزارساله مربوط به محوطه دریاچه سوان.
                  </p>
                  <p>
                    <b className="text-foreground">تمدن اورارتو:</b> یکی از درخشان‌ترین بخش‌های موزه، یادگارهای دوران امپراتوری اورارتو (سده‌های نهم تا ششم پیش از میلاد) نظیر کتیبه‌های میخی برنزی و سنگی، سلاح‌ها، زره‌های شاهانه و کتیبه مشهور تاسیس قلعه اربونی به فرمان آرگیشتی اول است.
                  </p>
                  <p>
                    <b className="text-foreground">قرون وسطی و دوران مدرن:</b> مجموعه‌ای کم‌نظیر از سنگ‌صلیب‌ها (خاچکار)، نسخ خطی، لباس‌های سنتی اقوام مختلف، سکه‌های ضرب‌شده در ضرابخانه‌های دوره‌های مختلف تاریخی و نقشه‌های جغرافیایی قدیمی در طبقات این موزه نگهداری می‌شوند.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۳. مجموعه هزارپله کاسکاد و موزه هنر کافسجیان</h3>
                  <p>
                    کاسکاد یکی از برجسته‌ترین نمادهای هنر مدرن و معماری شهری در قفقاز است. این پلکان عظیم تراس‌بندی‌شده، مرکز شهر ایروان را به بافت مرتفع محله مانیومنت و پارک پیروزی متصل می‌کند.
                  </p>
                  <p>
                    <b className="text-foreground">پارک مجسمه:</b> پیش از آغاز پله‌ها، باغچه‌ای سرسبز قرار دارد که میزبان آثار مجسمه‌سازان نامدار بین‌المللی مانند فرناندو بوترو (مجسمه‌های گربه، سیگاری و جنگجو)، بری فلاناگان و لئین تامسون است.
                  </p>
                  <p>
                    <b className="text-foreground">فضای پلکان و آب‌نماها:</b> کاسکاد دارای ۵۷۲ پله روباز است که در هر پاگرد آن حوضچه‌ها، آب‌نماها و مجسمه‌های مفهومی سنگی و فلزی چشم‌نوازی می‌کنند. علاوه بر پله‌های بیرونی، در داخل بدنه پلکان پله‌های برقی و گالری‌های هنری سرپوشیده (موزه کافسجیان) تعبیه شده است.
                  </p>
                  <p>
                    <b className="text-foreground">چشم‌انداز پانوراما:</b> بالاترین سکوی کاسکاد بهترین دید را به ساختار هلالی شهر ایروان، میدان اپرا و در پس‌زمینه آن، قله برفی دوگانه کوه آرارات (ماسیس و سیس) ارائه می‌دهد که لوکیشنی فوق‌العاده برای عکاسی است.
                  </p>

                  <img
                    src="https://images.unsplash.com/photo-1591489378430-ef2f4c826d0e?w=1200&q=80"
                    alt="مجموعه پلکانی کاسکاد ایروان و چشم‌انداز کوه آرارات"
                    className="w-full h-56 sm:h-72 object-cover rounded-2xl my-2"
                    loading="lazy"
                  />

                  <h3 className="text-lg font-bold text-foreground mt-6">۴. پارک پیروزی و تندیس مام ارمنستان</h3>
                  <p>
                    این پارک وسیع بر روی تپه‌ای جنگلی مشرف به شهر واقع شده و به عنوان نمادی از صلح، فداکاری و پایداری ملی شناخته می‌شود.
                  </p>
                  <p>
                    <b className="text-foreground">تندیس مام ارمنستان (مایر هایاستان):</b> مجسمه‌ای غول‌پیکر به ارتفاع ۲۲ متر از جنس مس چکشی بر روی یک پایه ستبر بازالتی به ارتفاع ۳۴ متر (ارتفاع کلی ۵۴ متر) ایستاده است. این مجسمه زنی مقتدر با شمشیری غلاف‌شده را به تصویر می‌کشد که از مرزهای کشور پاسداری می‌کند. در سال‌های اولیه دوران شوروی، مجسمه استالین روی این پایه قرار داشت که در سال ۱۹۶۷ با اثر هنری آرا هاروتیونیان جایگزین شد.
                  </p>
                  <p>
                    <b className="text-foreground">موزه نظامی دفاع مقدس:</b> در پایه سنگی تندیس، موزه نظامی قرار دارد که نمایشگاه‌هایی از جنگ جهانی دوم، نبرد شوشی و دوران پایداری ملی را به نمایش می‌گذارد.
                  </p>
                  <p>
                    <b className="text-foreground">محوطه پارک و بام ایروان:</b> در اطراف این تندیس، دریاچه‌ای مصنوعی برای قایق‌سواری، چرخ‌وفلک، جنگل کاج سرسبز و سکوهای دیده‌بانی قرار دارند که دید کامل و هوایی به تمام خیابان‌ها، استادیوم هرازدان و دشت آرارات فراهم می‌آورند.
                  </p>
                </div>
              </section>

              <WhatsAppBottomCTA serviceType="tour" />

            </article>

            <PageSidebar tags={['tourism', 'yerevan', 'city-tour', 'tour']} serviceType="tour" />
          </div>

          <div className="mt-10">
            <RelatedServices pageType="tour" />
            <RelatedContent currentTags={['tourism', 'yerevan', 'armenia']} currentPath="/travel/tour/yerevan-city" />
          </div>
        </div>
      </div>
    </div>
  );
}
