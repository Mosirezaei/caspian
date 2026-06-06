import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';
import { base44 } from '@/api/base44Client';

const Entity = base44.entities.ImmigrationNews;

const PAGE_TITLE = {
  fa: 'آخرین اخبار و قوانین مهاجرتی ارمنستان',
  en: 'Latest Armenia Immigration & Residency Laws',
  ru: 'Актуальные законы об иммиграции в Армению',
};

const PAGE_SUB = {
  fa: 'به‌روزترین اطلاعات درباره ویزا، اقامت و قوانین اتباع خارجی در ارمنستان',
  en: 'Up-to-date information on visas, residency and foreign national laws in Armenia',
  ru: 'Актуальная информация о визах, ВНЖ и законах для иностранцев в Армении',
};

// Static fallback articles
const FALLBACK = [
  {
    title_fa: 'تمدید ویزای توریستی ارمنستان برای ایرانیان تا ۱۸۰ روز',
    title_en: 'Armenia Extends Visa-Free Stay for Iranians to 180 Days',
    title_ru: 'Армения продлила безвизовый режим для иранцев до 180 дней',
    summary_fa: 'دولت ارمنستان اعلام کرد شهروندان ایرانی می‌توانند بدون ویزا تا ۱۸۰ روز در این کشور اقامت داشته باشند.',
    summary_en: 'The Armenian government confirmed that Iranian nationals can stay visa-free for up to 180 days.',
    summary_ru: 'Правительство Армении подтвердило, что граждане Ирана могут находиться в стране без визы до 180 дней.',
    body_fa: 'بر اساس آخرین تصمیم دولت ارمنستان، شهروندان جمهوری اسلامی ایران می‌توانند بدون نیاز به اخذ ویزا تا ۱۸۰ روز در این کشور اقامت داشته باشند. این مدت در سال‌های اخیر از ۹۰ روز به ۱۸۰ روز افزایش یافته است. مسافران ایرانی باید گذرنامه معتبر داشته باشند. این تصمیم به منظور تقویت روابط دوستانه بین دو کشور همسایه اتخاذ شده است. توریست‌ها باید در بازگشت از ارمنستان، مدت اقامت قانونی خود را رعایت کرده باشند. در صورت تمایل به اقامت بیشتر، باید برای ویزای اقامت اقدام کنند.',
    body_en: 'According to the latest decision of the Armenian government, Iranian nationals can stay in the country for up to 180 days without a visa. This period has been extended from 90 to 180 days in recent years. Travelers must hold a valid passport. This decision was made to strengthen friendly relations between the two neighboring countries. Tourists must observe their legal stay period when leaving Armenia. For longer stays, they need to apply for a residency visa.',
    body_ru: 'Согласно последнему решению правительства Армении, граждане Ирана могут находиться в стране без визы до 180 дней. Этот срок был увеличен с 90 до 180 дней в последние годы. Путешественники должны иметь действующий паспорт. Это решение принято для укрепления дружественных отношений между двумя соседними странами.',
    category_fa: 'ویزا',
    category_en: 'Visa',
    date: 'ژوئن ۲۰۲۵',
  },
  {
    title_fa: 'شرایط جدید اخذ اقامت دائم ارمنستان برای اتباع خارجی',
    title_en: 'New Permanent Residency Requirements for Foreign Nationals in Armenia',
    title_ru: 'Новые условия получения ПМЖ для иностранцев в Армении',
    summary_fa: 'سرویس مهاجرت ارمنستان شرایط به‌روز‌شده اخذ اقامت دائم را اعلام کرد. افراد با ۳ سال اقامت موقت مستمر می‌توانند درخواست بدهند.',
    summary_en: 'Armenia\'s Migration Service updated permanent residency criteria. Foreigners with 3 consecutive years of temporary residence are eligible.',
    summary_ru: 'Миграционная служба обновила требования для ПМЖ. Иностранцы с 3 годами ВНЖ могут подать заявку.',
    body_fa: 'سرویس مهاجرت ارمنستان شرایط به‌روزشده اخذ اقامت دائم را اعلام کرد. بر اساس این قوانین جدید، اتباع خارجی که حداقل ۳ سال اقامت موقت قانونی در ارمنستان داشته باشند، می‌توانند برای اقامت دائم درخواست دهند. مدارک مورد نیاز شامل گذرنامه معتبر، گواهی عدم سوءپیشینه، مدرک منبع درآمد پایدار و بیمه درمانی است. هزینه درخواست ۵۰ هزار درام ارمنستان است. پروسه بررسی معمولاً ۳ تا ۶ ماه طول می‌کشد.',
    body_en: 'Armenia\'s Migration Service announced updated requirements for permanent residency. Under the new rules, foreigners with at least 3 consecutive years of legal temporary residence in Armenia can apply. Required documents include a valid passport, criminal background check, proof of stable income, and health insurance. The application fee is AMD 50,000. The review process typically takes 3 to 6 months.',
    body_ru: 'Миграционная служба Армении объявила обновлённые требования для получения ПМЖ. По новым правилам иностранцы с не менее чем 3-летним законным временным проживанием в Армении могут подать заявку. Необходимые документы: действующий паспорт, справка об отсутствии судимости, подтверждение стабильного дохода и медицинская страховка.',
    category_fa: 'اقامت دائم',
    category_en: 'Permanent Residency',
    date: 'مه ۲۰۲۵',
  },
  {
    title_fa: 'ثبت شرکت برای اتباع خارجی در ارمنستان در ۲ روز',
    title_en: 'Company Registration for Foreigners in Armenia Within 2 Days',
    title_ru: 'Регистрация компании для иностранцев в Армении за 2 дня',
    summary_fa: 'با اصلاح قوانین تجاری، اتباع خارجی می‌توانند در ۲ روز کاری شرکت خود را در ایروان ثبت کنند.',
    summary_en: 'Following legal reforms, foreign nationals can register a company in Yerevan within 2 business days.',
    summary_ru: 'После правовых реформ иностранцы могут зарегистрировать компанию в Ереване за 2 рабочих дня.',
    body_fa: 'با اصلاحات اخیر در قوانین تجاری ارمنستان، فرآیند ثبت شرکت برای اتباع خارجی بسیار ساده‌تر شده است. اتباع خارجی اکنون می‌توانند در ۲ روز کاری شرکت با مسئولیت محدود (LLC) در ایروان ثبت کنند. نرخ مالیات بر درآمد شرکت‌های کوچک ۵ درصد باقی مانده است. حداقل سرمایه لازم برای ثبت شرکت ۱۰۰ هزار درام ارمنستان است. اتباع خارجی نیازی به شریک ارمنی ندارند و می‌توانند ۱۰۰ درصد مالکیت شرکت را داشته باشند.',
    body_en: 'With recent reforms to Armenian commercial law, the company registration process for foreign nationals has become much simpler. Foreign nationals can now register an LLC in Yerevan within 2 business days. The income tax rate for small companies remains at 5%. The minimum capital required is AMD 100,000. Foreign nationals do not need an Armenian partner and can hold 100% company ownership.',
    body_ru: 'Благодаря последним реформам коммерческого законодательства Армении процесс регистрации компании для иностранных граждан значительно упростился. Иностранные граждане теперь могут зарегистрировать ООО в Ереване за 2 рабочих дня. Ставка налога на доходы для малых компаний остаётся на уровне 5%.',
    category_fa: 'ثبت شرکت',
    category_en: 'Company Registration',
    date: 'آوریل ۲۰۲۵',
  },
  {
    title_fa: 'ویزای دانشجویی ارمنستان بدون مصاحبه برای دانشجویان ایرانی',
    title_en: 'Armenia Student Visa Without Interview for Iranian Students',
    title_ru: 'Студенческая виза Армении без собеседования для иранцев',
    summary_fa: 'وزارت آموزش ارمنستان اعلام کرد دانشجویان پذیرفته‌شده بدون نیاز به مصاحبه ویزا دریافت می‌کنند.',
    summary_en: 'Armenia\'s Ministry of Education announced that accepted students receive visas without an interview.',
    summary_ru: 'Министерство образования объявило, что принятые студенты получают визу без собеседования.',
    body_fa: 'وزارت آموزش و علوم ارمنستان اعلام کرد دانشجویان پذیرفته‌شده در دانشگاه‌های معتبر این کشور دیگر نیازی به مصاحبه حضوری ندارند. درخواست ویزای دانشجویی می‌تواند به صورت آنلاین از طریق پورتال رسمی وزارت ارسال شود. مدارک مورد نیاز شامل پذیرش‌نامه دانشگاه، گذرنامه معتبر، عکس پرسنلی و بیمه درمانی است. ویزای دانشجویی یک‌ساله قابل تمدید است. دانشجویان بین‌المللی پس از یک سال تحصیل می‌توانند کار پاره‌وقت نیز داشته باشند.',
    body_en: 'Armenia\'s Ministry of Education announced that students admitted to accredited universities no longer need an in-person interview. The student visa application can be submitted online through the ministry\'s official portal. Required documents include a university admission letter, valid passport, photo, and health insurance. The one-year student visa is renewable. International students can also work part-time after one year of study.',
    body_ru: 'Министерство образования Армении объявило, что студентам, принятым в аккредитованные университеты, больше не требуется личное собеседование. Заявку на студенческую визу можно подать онлайн через официальный портал.',
    category_fa: 'ویزای تحصیلی',
    category_en: 'Student Visa',
    date: 'مارس ۲۰۲۵',
  },
  {
    title_fa: 'مالیات اتباع خارجی مقیم ارمنستان در سال ۲۰۲۵',
    title_en: 'Tax Rules for Foreign Residents in Armenia 2025',
    title_ru: 'Налоговые правила для иностранных резидентов Армении в 2025 году',
    summary_fa: 'قوانین مالیاتی ارمنستان برای اتباع خارجی که بیش از ۱۸۳ روز در این کشور اقامت دارند تغییراتی داشته است.',
    summary_en: 'Armenian tax laws for foreign nationals residing more than 183 days in the country have seen changes.',
    summary_ru: 'Налоговое законодательство Армении для иностранцев, проживающих более 183 дней, претерпело изменения.',
    body_fa: 'بر اساس قوانین مالیاتی ارمنستان، افرادی که بیشتر از ۱۸۳ روز در سال در این کشور اقامت داشته باشند، مقیم مالیاتی محسوب می‌شوند. مقیمان مالیاتی باید مالیات بر درآمد جهانی خود را پرداخت کنند. نرخ مالیات بر درآمد شخصی ۲۰ درصد است. با این حال، بسیاری از کشورها با ارمنستان معاهده اجتناب از اخذ مالیات مضاعف دارند که شامل ایران هم می‌شود. افراد غیرمقیم فقط روی درآمد حاصل از منابع ارمنی مالیات می‌دهند.',
    body_en: 'Under Armenian tax law, individuals who stay more than 183 days per year in the country are considered tax residents. Tax residents must pay taxes on their worldwide income. The personal income tax rate is 20%. However, many countries have double tax avoidance treaties with Armenia, including Iran. Non-residents only pay taxes on income from Armenian sources.',
    body_ru: 'По налоговому законодательству Армении лица, проживающие более 183 дней в году, считаются налоговыми резидентами. Они обязаны платить налоги с мирового дохода. Ставка НДФЛ составляет 20%.',
    category_fa: 'مالیات',
    category_en: 'Taxation',
    date: 'ژانویه ۲۰۲۵',
  },
  {
    title_fa: 'برنامه اقامت از طریق سرمایه‌گذاری در ارمنستان',
    title_en: 'Armenia Residency by Investment Program',
    title_ru: 'Программа ВНЖ через инвестиции в Армении',
    summary_fa: 'ارمنستان برنامه جدیدی برای اخذ اقامت از طریق سرمایه‌گذاری ۱۵۰ هزار دلاری در حوزه مسکن معرفی کرده است.',
    summary_en: 'Armenia introduced a residency-by-investment program requiring $150,000 in real estate.',
    summary_ru: 'Армения представила программу ВНЖ через инвестиции от $150 000 в недвижимость.',
    body_fa: 'دولت ارمنستان برنامه جدیدی برای اخذ اقامت از طریق سرمایه‌گذاری معرفی کرده است. سرمایه‌گذاری حداقل ۱۵۰ هزار دلار در حوزه مسکن یا ۱۰۰ هزار دلار در ثبت شرکت فعال، شرایط دریافت اقامت موقت ۳ ساله را فراهم می‌کند. این اقامت قابل تمدید است و پس از ۳ سال می‌توان برای اقامت دائم اقدام کرد. ارمنستان در ۵ سال گذشته رونق قابل‌توجهی در بازار مسکن تجربه کرده است. ایروان به عنوان یکی از مقاصد اصلی سرمایه‌گذاری مسکن در منطقه قفقاز شناخته می‌شود.',
    body_en: 'The Armenian government introduced a new program for obtaining residency through investment. A minimum investment of $150,000 in real estate or $100,000 in an active company registration provides eligibility for a 3-year temporary residency. This residency is renewable and after 3 years, permanent residency can be applied for. Armenia has experienced significant real estate market growth in the past 5 years.',
    body_ru: 'Правительство Армении представило новую программу получения ВНЖ через инвестиции. Минимальные инвестиции в размере $150 000 в недвижимость или $100 000 в регистрацию компании дают право на временный ВНЖ сроком на 3 года.',
    category_fa: 'سرمایه‌گذاری',
    category_en: 'Investment',
    date: 'فوریه ۲۰۲۵',
  },
];

function ArticleModal({ article, lang, onClose }) {
  const title = lang === 'fa' ? article.title_fa : lang === 'ru' ? article.title_ru : article.title_en;
  const body = lang === 'fa' ? article.body_fa : lang === 'ru' ? article.body_ru : article.body_en;
  const category = lang === 'fa' ? article.category_fa : article.category_en;

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.93, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93 }} transition={{ type: 'spring', damping: 28 }}
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto glass-panel border border-primary/30 rounded-2xl shadow-2xl"
        onClick={e => e.stopPropagation()}
        dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <div className="sticky top-0 glass-panel border-b border-white/10 px-5 py-4 flex items-center justify-between">
          <span className="text-xs bg-primary/20 text-primary px-2.5 py-1 rounded-full font-bold">{category}</span>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 transition-colors">
            <X className="w-4 h-4 text-foreground/60" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-2 text-xs text-foreground/40">
            <span>{article.date}</span>
          </div>
          <h2 className="text-lg font-black text-foreground leading-snug">{title}</h2>
          <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">{body}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NewsCard({ article, lang, index, onClick }) {
  const title = lang === 'fa' ? article.title_fa : lang === 'ru' ? article.title_ru : article.title_en;
  const summary = lang === 'fa' ? article.summary_fa : lang === 'ru' ? article.summary_ru : article.summary_en;
  const category = lang === 'fa' ? article.category_fa : article.category_en;
  const readMore = lang === 'fa' ? 'مشاهده کامل' : lang === 'ru' ? 'Читать далее' : 'Read more';

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="glass-panel border border-white/8 hover:border-primary/30 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:bg-white/3 group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs bg-primary/15 text-primary px-2.5 py-1 rounded-full font-bold">{category}</span>
        <span className="text-xs text-foreground/35">{article.date}</span>
      </div>
      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">{title}</h3>
      <p className="text-xs text-foreground/55 leading-relaxed line-clamp-3 mb-3">{summary}</p>
      <span className="text-xs text-primary/70 font-medium flex items-center gap-1">
        {readMore}
        <ArrowRight className={`w-3 h-3 ${lang === 'fa' ? 'rotate-180' : ''}`} />
      </span>
    </motion.div>
  );
}

function ImmigrationNewsContent() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    Entity.filter({ is_published: true }, '-order', 50)
      .then(data => setArticles(data || []))
      .catch(() => {});
  }, []);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-background font-vazir">
      <GlobalNavbar />

      {/* Hero */}
      <div className="relative pt-14">
        <div className="relative h-52 sm:h-64 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=75"
            alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-primary font-bold uppercase tracking-wider">
                {lang === 'fa' ? 'اخبار به‌روز' : lang === 'ru' ? 'Свежие новости' : 'Live Updates'}
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl font-black gold-gradient-text mb-2">
              {PAGE_TITLE[lang]}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-sm text-foreground/55 max-w-xl">{PAGE_SUB[lang]}</motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <NewsCard key={i} article={article} lang={lang} index={i} onClick={() => setSelected(article)} />
          ))}
        </div>
      </div>

      <ContactFooter />

      <AnimatePresence>
        {selected && <ArticleModal article={selected} lang={lang} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default function ImmigrationNews() {
  return <LanguageProvider><ImmigrationNewsContent /></LanguageProvider>;
}