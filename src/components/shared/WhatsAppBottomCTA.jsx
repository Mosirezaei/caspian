'use client';
import { useLang } from '@/lib/LanguageContext';
import { getWhatsAppUrl } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

const t = {
  fa: {
    title: 'در مورد این صفحه سؤالی دارید؟',
    subtitle: 'با کارشناسان ما در ارتباط باشید؛ در اسرع وقت پاسخ شما را خواهند داد.',
    button: 'ارتباط در واتساپ',
  },
  en: {
    title: 'Have a question about this?',
    subtitle: 'Get in touch with our experts.',
    button: 'Contact us on WhatsApp',
  },
  ru: {
    title: 'Есть вопрос по этой теме?',
    subtitle: 'Свяжитесь с нашими специалистами.',
    button: 'Написать в WhatsApp',
  },
};

/**
 * WhatsAppBottomCTA — کارت تماس واتساپ که پایین صفحه، بعد از توضیحات صفحات
 * هتل/تور نمایش داده می‌شه؛ نسخه‌ی «پایین صفحه»‌ی همون کارتی که تو
 * PageSidebar بالای صفحه هست، اما با طراحی بزرگ‌تر و متن مناسب این جایگاه.
 * شماره‌ی واتساپ رو بر اساس serviceType از src/lib/contact.js می‌گیره.
 */
export default function WhatsAppBottomCTA({ serviceType }) {
  const { lang } = useLang();
  const tt = t[lang] || t.fa;
  const whatsappUrl = getWhatsAppUrl(serviceType);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6 sm:p-8 text-center">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="relative w-12 h-12 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-4 ring-1 ring-green-500/30">
          <WhatsAppIcon className="w-6 h-6" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-background animate-pulse" />
        </div>

        <h3 className="text-lg sm:text-xl font-black text-foreground mb-2">{tt.title}</h3>
        <p className="text-sm text-foreground/60 mb-6">{tt.subtitle}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-primary to-yellow-500 text-black font-black px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {tt.button}
        </a>
      </div>
    </div>
  );
}
