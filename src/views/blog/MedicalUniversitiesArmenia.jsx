'use client';
import { Stethoscope, GraduationCap, DollarSign, Globe2, Clock, FileCheck2, AlertTriangle } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';
import ArticleByline from '@/components/shared/ArticleByline.jsx';

export default function MedicalUniversitiesArmenia() {
  const unis = [
    { name: 'دانشگاه دولتی پزشکی ایروان (YSMU)', nameLat: 'Yerevan State Medical University', color: 'blue', founded: '۱۹۲۰', lang: 'انگلیسی / روسی', fee: '$۴,۰۰۰–$۶,۰۰۰/سال', duration: '۶ سال (پزشکی عمومی)', students: '+۱,۵۰۰ دانشجوی خارجی', recognition: 'WHO, WFME, بیش از ۴۰ کشور', desc: 'قدیمی‌ترین و معتبرترین دانشگاه پزشکی ارمنستان. رشته‌های پزشکی عمومی، دندانپزشکی، داروسازی و پرستاری. بخش انگلیسی‌زبان از ۲۰۱۱ فعاله و دانشجویان هندی، عراقی، سوری و ایرانی داره.' },
    { name: 'دانشگاه اروپایی (EUA) — رشته‌های بهداشت', nameLat: 'European University of Armenia', color: 'emerald', founded: '۲۰۰۱', lang: 'ارمنی / انگلیسی', fee: '$۲,۰۰۰–$۳,۵۰۰/سال', duration: '۴ سال (بهداشت عمومی)', students: 'پذیرش محدود خارجی', recognition: 'وزارت علوم ارمنستان', desc: 'رشته‌های بهداشت عمومی و مدیریت سلامت. شهریه‌ی پایین‌تر از YSMU ولی محدودتر از نظر رشته‌های بالینی. برای کسایی که بودجه‌ی محدودتری دارن مناسبه.' },
    { name: 'دانشگاه آمریکایی ارمنستان (AUA) — بهداشت', nameLat: 'American University of Armenia', color: 'amber', founded: '۱۹۹۱', lang: 'انگلیسی', fee: '$۸,۰۰۰–$۱۲,۰۰۰/سال', duration: '۲ سال (MPH)', students: 'بین‌المللی', recognition: 'WFME, آمریکا', desc: 'فقط مقطع کارشناسی ارشد بهداشت عمومی (MPH). برای کسایی که لیسانس پزشکی یا پرستاری دارن و می‌خوان تخصص مدیریت سلامت بگیرن. مدرک بین‌المللی با اعتبار بالا.' },
  ];
  const colors = { blue: 'from-blue-500/10 border-blue-500/20', emerald: 'from-emerald-500/10 border-emerald-500/20', amber: 'from-amber-500/10 border-amber-500/20' };

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">تحصیل</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">دانشگاه‌های پزشکی ارمنستان: شرایط پذیرش و شهریه</h1>
          <p className="text-foreground/60 mt-3 text-lg">پزشکی، دندانپزشکی و داروسازی به زبان انگلیسی با شهریه‌ی ۳ تا ۱۰ برابر ارزان‌تر از اروپا</p><ArticleByline author="مصطفی" date="۱۴۰۴/۰۶/۲۰" />
        </section>

        <img
          src="https://images.unsplash.com/photo-1741637335289-c99652d3155f?w=1200&q=75"
          alt="دانشجویان در محوطه دانشگاه، تصویر مرتبط با تحصیل و زندگی دانشجویی در ارمنستان"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          loading="lazy"
        />

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><Stethoscope className="w-5 h-5" /> چرا پزشکی در ارمنستان؟</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>ارمنستان از مقاصد ناشناخته ولی جذاب تحصیل پزشکی برای ایرانیانه. دلایل:</p>
            <p>✔ شهریه‌ی سالانه $۴,۰۰۰ تا $۶,۰۰۰ (در مقابل $۳۰,۰۰۰+ در اروپا)</p>
            <p>✔ تدریس به زبان انگلیسی (نیاز به ارمنی نیست)</p>
            <p>✔ مدرک مورد تأیید WHO — قابل‌قبول در بیش از ۴۰ کشور</p>
            <p>✔ پرواز مستقیم تهران-ایروان (۲ ساعت) — نزدیک‌ترین مقصد پزشکی</p>
            <p>✔ هزینه‌ی زندگی $۴۰۰–$۷۰۰/ماه (خیلی کمتر از اروپا)</p>
            <p>✔ بدون ویزا (تا ۱۸۰ روز) + اقامت تحصیلی آسان</p>
          </div>
        </section>

        <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5" /> دانشگاه‌ها و شهریه</h2>
        <div className="space-y-5 mb-6">
          {unis.map((u, i) => (
            <section key={i} className={`rounded-2xl p-5 bg-gradient-to-br ${colors[u.color]} to-transparent border`}>
              <h3 className="text-lg font-black text-foreground mb-1">{u.name}</h3>
              <p className="text-xs text-foreground/40 mb-3">{u.nameLat} — تأسیس {u.founded}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                <div className="p-2 rounded-lg bg-white/5 text-center">
                  <div className="text-primary font-bold text-xs">{u.fee}</div>
                  <div className="text-[9px] text-foreground/40">شهریه</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 text-center">
                  <div className="text-primary font-bold text-xs">{u.duration}</div>
                  <div className="text-[9px] text-foreground/40">مدت تحصیل</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 text-center">
                  <div className="text-primary font-bold text-xs">{u.lang}</div>
                  <div className="text-[9px] text-foreground/40">زبان تدریس</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 text-center">
                  <div className="text-primary font-bold text-xs">{u.recognition}</div>
                  <div className="text-[9px] text-foreground/40">اعتبار</div>
                </div>
              </div>
              <p className="text-xs text-foreground/60 leading-6">{u.desc}</p>
            </section>
          ))}
        </div>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><FileCheck2 className="w-5 h-5" /> مدارک لازم برای پذیرش پزشکی</h2>
          <div className="text-sm text-foreground/70 leading-7">
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong>دیپلم دبیرستان</strong> با معدل بالای ۱۴ (ترجیحاً رشته‌ی تجربی)</li>
              <li><strong>ریزنمرات</strong> ترجمه‌شده به انگلیسی یا ارمنی با تأیید دادگستری</li>
              <li><strong>گواهی زبان انگلیسی</strong> (IELTS 5.5+ یا TOEFL 60+ — بعضی دانشگاه‌ها آزمون داخلی دارن)</li>
              <li><strong>پاسپورت معتبر</strong> با حداقل ۱ سال اعتبار</li>
              <li><strong>نامه‌ی انگیزه</strong> (Motivation Letter) — ۱ تا ۲ صفحه</li>
              <li><strong>گواهی سلامت</strong> و آزمایش HIV (بعد از پذیرش)</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl p-5 mb-6 bg-amber-500/10 border border-amber-500/20">
          <h3 className="font-bold text-foreground mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-400" /> نکات مهم</h3>
          <div className="text-xs text-foreground/60 leading-6 space-y-2">
            <p>• مدرک YSMU در ایران قابل معادل‌سازی از طریق سامانه‌ی میخک سفارت ایرانه — ولی فرآیندش زمان‌بره</p>
            <p>• برای کار تو اروپا/آمریکا بعد از فارغ‌التحصیلی، باید آزمون‌های ملی اون کشور رو بدید (USMLE, PLAB و...)</p>
            <p>• دانشجویان خارجی حق کار پاره‌وقت حین تحصیل رو ندارن — بودجه‌ی کافی از قبل داشته باشید</p>
            <p>• ددلاین پذیرش معمولاً ژوئن-ژوئیه هر ساله — زودتر اپلای کنید</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">مشاوره‌ی تحصیل پزشکی در ارمنستان</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره واتساپ</a>
        </div>
        <RelatedServices currentPath="/blog/medical-universities-armenia" />
        </div>
          <PageSidebar tags={['education', 'student', 'armenia', 'residency']} currentPath="/blog/medical-universities-armenia" />
        </div>
      </main>
    </div>
  );
}
