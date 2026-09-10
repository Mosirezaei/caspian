'use client';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

const CONTENT = {
  fa: {
    overviewTitle: 'اقامت از طریق کالج زبان در ارمنستان؛ مسیر را دقیق ببینید',
    overview: 'ثبت‌نام در یک دوره زبان می‌تواند بخشی از برنامه تحصیلی و پرونده اقامتی شما باشد، اما پذیرش در کلاس زبان به‌تنهایی به‌معنای صدور قطعی اقامت نیست. مرجع مهاجرت هر درخواست را با توجه به وضعیت متقاضی، اعتبار و ماهیت مؤسسه آموزشی، مدت و برنامه دوره و مدارک پرونده بررسی می‌کند. به همین دلیل پیش از هر پرداخت باید امکان استفاده از پذیرش برای پرونده شما به‌صورت جداگانه ارزیابی شود.',
    fitTitle: 'این مسیر برای چه کسانی قابل بررسی است؟',
    fit: ['افرادی که برای زندگی، تحصیل یا کار در ارمنستان به یادگیری ارمنی، روسی یا انگلیسی نیاز دارند', 'متقاضیانی که برنامه آموزشی واقعی و قابل پیگیری دارند، نه صرفاً یک ثبت‌نام صوری', 'کسانی که می‌خواهند پیش از ورود به دانشگاه یا بازار کار، زمان مشخصی را برای زبان و سازگاری اختصاص دهند'],
    verifyTitle: 'پیش از انتخاب کالج چه چیزهایی باید روشن شود؟',
    verify: ['نام حقوقی، نشانی و وضعیت فعالیت مؤسسه آموزشی', 'نوع دوره، برنامه زمانی، تعداد ساعت، زبان آموزش و شیوه حضور', 'مدرک یا نامه‌ای که مؤسسه پس از ثبت‌نام صادر می‌کند', 'شرایط لغو، استرداد احتمالی وجه و تعهدات آموزشی به‌صورت مکتوب', 'این‌که پذیرش و مدت دوره با هدف اقامتی و شرایط فعلی شما هم‌خوانی دارد یا نه'],
    routeTitle: 'نقش پذیرش زبان در پرونده اقامت چیست؟',
    route: 'در یک پرونده آموزشی، پذیرش معتبر یکی از مدارکی است که هدف حضور فرد را توضیح می‌دهد؛ اما جایگزین بررسی‌های مهاجرتی نیست. گذرنامه، نشانی محل اقامت، ترجمه و اعتبار مدارک و جزئیات شخصی متقاضی نیز در تصمیم مرجع مربوط اثر دارند. هیچ مؤسسه یا واسطه‌ای نباید نتیجه اقامت را پیش از بررسی رسمی تضمین کند.',
    processTitle: 'کاسپین چگونه کمک می‌کند؟',
    process: ['شنیدن هدف واقعی شما و سنجش مناسب‌بودن مسیر آموزش زبان', 'بررسی اولیه اطلاعات دوره و مدارکی که مؤسسه ارائه می‌کند', 'هماهنگی برای ترجمه و آماده‌سازی منظم مدارک لازم', 'توضیح تفاوت پذیرش آموزشی، درخواست اقامت و مراحل اداری هرکدام', 'همراهی برای پیگیری پرونده از مسیرهای رسمی، بدون وعده نتیجه قطعی'],
    cautionTitle: 'مواردی که نباید بر اساس آن تصمیم بگیرید',
    caution: 'پذیرش فوری بدون جزئیات دوره، وعده اقامت تضمینی، درخواست پرداخت پیش از ارائه سند مکتوب یا معرفی کالجی که اطلاعات حقوقی و آموزشی شفافی ندارد، نشانه‌هایی هستند که باید با احتیاط بررسی شوند. شرایط مهاجرت و رویه‌های اداری ممکن است تغییر کنند؛ تصمیم نهایی را نزدیک به زمان اقدام، با اطلاعات رسمی و پرونده شخصی خود بگیرید.',
  },
  en: {
    overviewTitle: 'Residency through a language college in Armenia: assess the route accurately', overview: 'Enrolment in a language course can be part of an education and residency plan, but admission to a language class does not itself guarantee residency. The migration authority reviews each case in light of the applicant’s status, the educational institution, the course duration and plan, and the supporting documents. Eligibility should therefore be assessed before any payment.',
    fitTitle: 'Who may consider this route?', fit: ['People who need Armenian, Russian or English for life, study or work in Armenia', 'Applicants with a real and traceable study plan, rather than a nominal enrolment', 'Those who want dedicated time for language learning and adaptation before university or employment'],
    verifyTitle: 'What should be verified before choosing a college?', verify: ['The institution’s legal name, address and operating status', 'Course format, schedule, hours, language of instruction and attendance requirements', 'The admission document or letter issued after enrolment', 'Written cancellation, refund and academic conditions', 'Whether the admission and course duration suit your residency purpose and current circumstances'],
    routeTitle: 'What role can language admission play in a residency file?', route: 'In an education-based file, a valid admission letter can help explain the purpose of stay; it does not replace migration review. Passport validity, address, translated documents and the applicant’s individual circumstances also matter. No school or intermediary should guarantee a residency result before official review.',
    processTitle: 'How Caspian can help', process: ['Discuss your actual objective and whether language study is a suitable route', 'Review the available course information and admission documents', 'Coordinate translation and orderly preparation of relevant documents', 'Explain the difference between educational admission, residency application and their administrative stages', 'Support follow-up through official channels without promising a fixed outcome'],
    cautionTitle: 'Do not decide based on these claims', caution: 'Instant admission without course details, guaranteed residency, payment requests before written documents, or a college without transparent legal and academic information all require caution. Procedures may change, so confirm current official requirements close to your application date.'
  },
  ru: {
    overviewTitle: 'ВНЖ через языковой колледж в Армении: оценивайте путь точно', overview: 'Зачисление на языковой курс может быть частью образовательного и миграционного плана, но само по себе не гарантирует ВНЖ. Миграционный орган рассматривает статус заявителя, учреждение, длительность и программу курса, а также документы по конкретному делу. Возможность этого пути следует оценить до оплаты.',
    fitTitle: 'Кому может подойти этот вариант?', fit: ['Тем, кому армянский, русский или английский нужен для жизни, учёбы или работы в Армении', 'Заявителям с реальным и подтверждаемым планом обучения, а не формальной регистрацией', 'Тем, кто хочет выделить время на язык и адаптацию перед вузом или работой'],
    verifyTitle: 'Что проверить перед выбором колледжа?', verify: ['Юридическое название, адрес и статус деятельности учреждения', 'Формат, расписание, объём часов, язык обучения и требования к посещению', 'Документ о зачислении, который выдаётся после регистрации', 'Письменные условия отмены, возможного возврата и обучения', 'Соответствие зачисления и срока курса вашей цели и текущей ситуации'],
    routeTitle: 'Какую роль зачисление на язык играет в деле о ВНЖ?', route: 'В образовательном деле действительное зачисление может объяснить цель пребывания, но не заменяет миграционную проверку. Также имеют значение паспорт, адрес, переводы документов и личные обстоятельства заявителя. Ни колледж, ни посредник не должны гарантировать результат до официального рассмотрения.',
    processTitle: 'Чем может помочь Caspian', process: ['Обсудить вашу реальную цель и уместность языкового обучения', 'Проверить доступную информацию о курсе и документах о зачислении', 'Скоординировать перевод и подготовку нужных документов', 'Объяснить разницу между зачислением, заявлением на ВНЖ и их административными этапами', 'Сопровождать обращение через официальные каналы без обещания результата'],
    cautionTitle: 'На каких обещаниях не стоит основывать решение', caution: 'Мгновенное зачисление без деталей курса, гарантированный ВНЖ, требование оплаты до письменных документов или колледж без прозрачной юридической и учебной информации требуют осторожности. Процедуры могут меняться, поэтому уточняйте актуальные требования близко к дате подачи.'
  },
};

export default function ResidencyLanguageCollege() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.fa;
  return <ServicePageLayout
    titleFa="اقامت از طریق کالج‌های زبان در ارمنستان" titleEn="Language College Residency in Armenia" titleRu="ВНЖ через языковые колледжи Армении"
    subtitleFa="بررسی مسیر آموزشی و اقامتی، بدون وعده نتیجه قطعی" subtitleEn="Assessing an education and residency route without guaranteed outcomes" subtitleRu="Оценка образовательного и миграционного пути без гарантий результата"
    heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop" serviceType="language-college-residency"
  >
    <InfoBlock title={c.overviewTitle}><p>{c.overview}</p></InfoBlock>
    <InfoBlock title={c.fitTitle}><CheckList items={c.fit} /></InfoBlock>
    <InfoBlock title={c.verifyTitle}><CheckList items={c.verify} /></InfoBlock>
    <InfoBlock title={c.routeTitle}><p>{c.route}</p></InfoBlock>
    <InfoBlock title={c.processTitle}><CheckList items={c.process} /></InfoBlock>
    <InfoBlock title={c.cautionTitle}><p>{c.caution}</p></InfoBlock>
  </ServicePageLayout>;
}
