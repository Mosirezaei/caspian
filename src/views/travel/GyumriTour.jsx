'use client';
import { Clock, Backpack, Phone } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import RelatedContent from '@/components/shared/RelatedContent.jsx';
import { useSEO } from '@/hooks/useSEO';
import TourInquiryWidget from '@/components/shared/TourInquiryWidget.jsx';
import WhatsAppBottomCTA from '@/components/shared/WhatsAppBottomCTA.jsx';

export default function GyumriTour() {
  useSEO({
    title: 'تور یک‌روزه تاریخی و هنری گیومری، پایتخت فرهنگی ارمنستان | گروه کاسپین',
    description: 'تور یک‌روزه گیومری: قلعه سیاه، میدان وارتانانتس، محله تاریخی کومایری و کلیسای ناجی مقدس، با ترانسفر، راهنمای فارسی و ناهار کامل.',
  });

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />

      <div className="relative pt-14">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1584294672682-fa86591eded1?w=1600&q=80"
            alt="مرد سوار بر اسب سفید در گیومری، ارمنستان"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight max-w-2xl">
              تور یک‌روزه تاریخی و هنری گیومری، پایتخت فرهنگی ارمنستان
            </h1>
            <p className="text-foreground/60 mt-3 text-base sm:text-lg max-w-xl">
              سفر به قلب تاریخ سده نوزدهم، قدم زدن در کوچه‌پس‌کوچه‌های سنگ‌فرش و تجربه طنز، هنر و فرهنگ اصیل ارمنی
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 space-y-8">

              {/* === متن تبلیغاتی ارسالی کاربر — دست‌نخورده === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <p className="text-foreground/80 leading-loose">
                  🏛️ تور یک‌روزه تاریخی و هنری گیومری؛ پایتخت فرهنگی ارمنستان 🎨✨
                  <br /><br />
                  سفر به قلب تاریخ سده نوزدهم، قدم زدن در کوچه‌پس‌کوچه‌های سنگ‌فرش با عمارت‌های چشم‌نواز توف سیاه و قرمز، و تجربه طنز، هنر و فرهنگ اصیل ارمنی! 😍🎭
                </p>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🌸 جاهایی که با هم می‌بینیم:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🏰 <b>قلعه سیاه (سِو برد / Black Fortress):</b> دژ نظامی دایره‌ای و مخوف امپراتوری روسیه با چشم‌انداز باز به دشت شیراک 🪖🛡️</li>
                  <li>🏛️ <b>میدان وارتانانتس و کلیسای هفت زخم:</b> قلب تپنده شهر با فواره‌ها، عمارت شهرداری و کلیسای تاریخی مریم مقدس ⛪⛲</li>
                  <li>🎨 <b>محله تاریخی کومایری (Kumayri):</b> بزرگ‌ترین موزه زنده معماری شهری قرن نوزدهم با خانه‌های اشرافی، درهای چوبی کنده‌کاری‌شده و بالکن‌های مشبک فلزی 🚪📸</li>
                  <li>⛪ <b>کلیسای ناجی مقدس (Amenaprkich):</b> شاهکار معماری سنگی و نماد استقامت و بازسازی گیومری 🕊️✨</li>
                  <li>🏺 <b>موزه معماری ملی و زندگی شهری گیومری (خانه دزیتوغتسیان):</b> لمس حال‌وهوای زندگی، صنایع دستی، فرش‌بافی و طبقه بورژوای الکساندراپول قدیم 🪕📜</li>
                </ul>

                <h2 className="text-lg font-black text-primary mt-6 mb-3">🍽️ خدمات تور:</h2>
                <ul className="space-y-3 text-foreground/75 leading-relaxed">
                  <li>🚐 ترانسفر رفت و برگشت با مینی‌بوس‌های توریستی راحت، مجهز و کولردار</li>
                  <li>🗣️ راهنمای مسلط، خوش‌صحبت و کاربلد (روایت داستان‌ها، طنزهای معروف و تاریخ غنی گیومری)</li>
                  <li>🍱 صرف ناهار کامل و اصیل محلی در رستوران‌های سنتی با حال‌وهوای نوستالژیک 🍲🥗</li>
                  <li>🎟️ پوشش ورودی موزه‌ها و اماکن تاریخی</li>
                </ul>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> زمان‌بندی</p>
                    <p className="font-bold text-foreground">حرکت ۰۹:۰۰ صبح — بازگشت حدود ۱۹:۳۰ عصر</p>
                    <p className="text-xs text-foreground/50 mt-1">شروع از ایروان</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs text-foreground/50 mb-1">📍 مقصد</p>
                    <p className="font-bold text-foreground">گیومری، مرکز استان شیراک</p>
                    <p className="text-xs text-foreground/50 mt-1">دومین شهر بزرگ ارمنستان</p>
                  </div>
                </div>

                <h2 className="text-lg font-black text-primary mt-6 mb-3 flex items-center gap-2">
                  <Backpack className="w-5 h-5" /> چی همراه داشته باشیم؟
                </h2>
                <ul className="space-y-2 text-foreground/75 leading-relaxed">
                  <li>👟 کفش پیاده‌روی راحت و مناسب برای سنگ‌فرش‌های بافت تاریخی</li>
                  <li>🧥 ژاکت سبک یا بادگیر (گیومری در ارتفاع بیش از ۱،۵۰۰ متری قرار دارد و عصرها خنک‌تر از ایروان است)</li>
                  <li>🕶️🧢 عینک آفتابی، کلاه و ضدآفتاب</li>
                  <li>📸🔋 گوشی و دوربین پر از شارژ برای عکاسی از درها و بالکن‌های باشکوه قجری-تزاری!</li>
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-foreground/80 flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                  <span>✨ برای اطلاعات بیشتر، قیمت تور و ثبت‌نام سریع، همین حالا پیام بده یا با ما تماس بگیر! ظرفیت هر اجرا محدود است. 📲</span>
                </div>
              </section>

              {/* === مقاله‌ی کامل درباره‌ی گیومری === */}
              <section className="glass-panel rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-foreground mb-4">درباره‌ی شهر تاریخی گیومری</h2>
                <div className="space-y-4 text-foreground/75 leading-loose text-sm sm:text-base">
                  <p>
                    شهر گیومری (Gyumri)، مرکز استان شیراک و دومین شهر بزرگ ارمنستان، در فاصله‌ای حدود ۱۲۵ کیلومتری شمال غربی ایروان واقع شده است. این شهر در طول تاریخ طولانی خود نام‌های متعددی نظیر کومایری، الکساندراپول (در دوران امپراتوری روسیه تزاری) و لنیناکان (در دوران شوروی) به خود دیده است. گیومری به عنوان پایتخت فرهنگی، مهد طنز، خاستگاه هنرمندان، صنعتگران و نام‌آوران ارمنستان شناخته می‌شود و بافت معماری آن تفاوت ساختاری چشمگیری با پایتخت، ایروان، دارد.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۱. معماری روسی و سنگی قرن نوزدهم (سبک بلک اند رد)</h3>
                  <p>
                    بارزترین ویژگی گیومری که آن را از سایر شهرهای قفقاز متمایز می‌کند، بافت شهری سده نوزدهم میلادی آن است. برخلاف ایروان که بیشتر با سنگ توف صورتی ساخته شده، ساختمان‌های اعیان‌نشین و خیابان‌های مرکزی گیومری از تلفیق هنرمندانه سنگ‌های آتشفشانی بازالت تیره و توف اخرایی-قرمز ساخته شده‌اند. این سنگ‌تراشی‌های دقیق با بندکشی‌های برجسته، جلوه‌ای باابهت و اشرافی به شهر بخشیده‌اند.
                  </p>
                  <p>
                    در دوران تزار، پس از پیوستن ارمنستان شرقی به امپراتوری روسیه، این شهر تحت نام الکساندراپول به عنوان یک مرکز اداری-نظامی گسترش یافت. معماران بومی با ترکیب الگوهای نئوکلاسیک روسی با مقرنس‌ها، طاق‌ها و کتیبه‌های سنتی ارمنی، سبک خاصی خلق کردند که نمونه آن در پنجره‌های قوسی، ورودی‌های کالسکه و بالکن‌های فرفوژه دست‌ساخت خودنمایی می‌کند.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۲. محله باستانی کومایری (Kumayri Historic District)</h3>
                  <p>
                    محله کومایری هسته تاریخی دست‌نخورده شهر است که از زمین‌لرزه بزرگ سال ۱۹۸۸ نیز جان سالم به در برده و امروزه بیش از هزار بنای تاریخی ثبت‌شده را در خود جای داده است. خیابان‌های آبوویان و ریژکوف، پیاده‌راه‌های سنگ‌فرش‌شده مملو از کافه‌های مدرن، گالری‌های نقاشی، کارگاه‌های سفال‌گری و مجسمه‌سازی هستند که فضایی زنده و دلنشین برای قدم زدن فراهم می‌کنند.
                  </p>
                  <p>
                    موزه معماری و زندگی شهری (خانه دزیتوغتسیان) عمارت باشکوهی متعلق به سال ۱۸۷۲ است که توسط خاندان بازرگان دزیتوغتسیان ساخته شده و چیدمان زندگی روزمره، مبلمان، البسه اشرافی، کارگاه‌های آهنگری، قلاب‌دوزی و ادوات موسیقی قرن نوزدهم را با حفظ تمام جزئیات تاریخی به نمایش می‌گذارد.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۳. دژ نظامی قلعه سیاه (Sev Berd / Black Fortress)</h3>
                  <p>
                    این سازه دفاعی مدور در غرب شهر و بر روی تپه‌ای مسلط به مرز عثمانی قرار دارد. ساخت قلعه سیاه در سال ۱۸۳۴ پس از پیروزی روسیه بر امپراتوری عثمانی در جنگ ۱۸۲۸–۱۸۲۹ با نظارت تزار نیکلای اول آغاز شد. این دژ به عنوان یکی از پایگاه‌های راهبردی امپراتوری روسیه برای کنترل مرزهای جنوبی و نگهداری توپخانه طراحی شده بود.
                  </p>
                  <p>
                    بنا به شکل یک حلقه دفاعی کامل با دیوارهای سنگی فوق‌العاده قطور از بازالت سیاه ساخته شده است. درون دژ شامل بارانداز، اسلحه‌خانه، پادگان و مسیرهای ارتباطی زیرزمینی است که قابلیت مقاومت در برابر محاصره‌های طولانی‌مدت را دارا بوده است. امروزه این قلعه بازسازی شده و به عنوان یک مجتمع فرهنگی و سالن برگزاری رویدادهای هنری مورد استفاده قرار می‌گیرد.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۴. میدان وارتانانتس و شاهکارهای کلیسایی</h3>
                  <p>
                    میدان مرکزی شهر، میدان وارتانانتس، با مجسمه عظیم سردار ملی وارتان مامیکونیان مزین شده و گرداگرد آن دو کلیسای شاخص تاریخی قرار دارد. کلیسای مادر مقدس (یوت ورک یا هفت زخم) کلیسایی با سنگ سیاه متعلق به سده نوزدهم است که نماد مقدسی از «هفت غم و اندوه مریم عذرا» را در خود جای داده و فضای معنوی بسیار پرشوری دارد. این کلیسا در طول تاریخ از معدود نیایشگاه‌هایی بود که در دوران حکومت کمونیستی شوروی نیز درهای آن به روی مؤمنان باز ماند.
                  </p>
                  <p>
                    کلیسای ناجی مقدس (آمناپرکیچ) رونوشتی از کلیسای جامع باستانی آنی (پایتخت تاریخی ارمنستان باستان در خاک ترکیه امروزی) است و نماد ایستادگی مردم گیومری به شمار می‌رود. بنا در زلزله ویرانگر ۱۹۸۸ به شدت آسیب دید و فروریخت، اما در دهه‌های اخیر سنگ به سنگ با دقت فراوان بازسازی شده و مجدداً شکوه خود را به دست آورده است.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mt-6">۵. فرهنگ، هنر و خلق‌وخوی مردم گیومری</h3>
                  <p>
                    گیومری زادگاه بزرگانی چون هوانس شیراز (شاعر ملی)، آوتیک ایساهاکیان، فرونزیک مکرتچیان (بازیگر نامدار تئاتر و سینما) و سرگئی پاراجانوف است. مردم گیومری در سرتاسر ارمنستان به شوخ‌طبعی، کنایه‌های ظریف و حاضرجوابی، مهمان‌نوازی مثال‌زدنی و تعصب خاص روی حفظ میراث اجدادی‌شان شهرت دارند؛ روحیه‌ای که در غذاهای سنتی منطقه نظیر ماهی قزل‌آلای پرورشی شیراک و سوپ‌های محلی آن نیز بازتاب یافته است.
                  </p>
                </div>
              </section>

              <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent border border-primary/25">
                <h3 className="text-lg font-black text-foreground mb-2">همین حالا استعلام قیمت بگیر</h3>
                <p className="text-sm text-foreground/60 mb-5">قیمت این تور فعلاً روی سایت اعلام نشده — فرم زیر رو پر کن تا همون لحظه در واتساپ قیمت دقیق بگیری</p>
                <TourInquiryWidget tourName="تور گیومری" />
              </div>

              <WhatsAppBottomCTA serviceType="tour" />

            </article>

            <PageSidebar tags={['tourism', 'gyumri', 'armenia', 'tour']} serviceType="tour" />
          </div>

          <div className="mt-10">
            <RelatedServices pageType="tour" />
            <RelatedContent currentTags={['tourism', 'gyumri', 'armenia']} currentPath="/travel/tour/gyumri" />
          </div>
        </div>
      </div>
    </div>
  );
}
