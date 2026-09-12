'use client';
import { useLang } from '@/lib/LanguageContext';
import { getWhatsAppUrl } from '@/lib/contact';
import { usePathname } from 'next/navigation';
import { getWhatsAppTopic } from '@/lib/whatsappTopic';

const t = {
  fa: { title: 'در مورد این صفحه سؤالی دارید؟', subtitle: 'با کارشناسان ما در ارتباط باشید؛ در اسرع وقت پاسخ شما را خواهند داد.', button: 'ارتباط در واتساپ' },
  en: { title: 'Have a question about this?', subtitle: 'Get in touch with our experts.', button: 'Contact us on WhatsApp' },
  ru: { title: 'Есть вопрос по этой теме?', subtitle: 'Свяжитесь с нашими специалистами.', button: 'Написать в WhatsApp' },
};

export default function WhatsAppBottomCTA({ serviceType, tags, currentPath, topic }) {
  const { lang } = useLang();
  const tt = t[lang] || t.fa;
  const pathname = usePathname();
  const resolvedTopic = topic || getWhatsAppTopic({ path: currentPath || pathname, serviceType, tags, lang });
  const title = lang === 'fa' ? `در مورد ${resolvedTopic} سؤالی دارید؟` : tt.title;
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6 sm:p-8 text-center">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
      <div className="relative">
        <h3 className="text-lg sm:text-xl font-black text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/60 mb-6">{tt.subtitle}</p>
        <a href={getWhatsAppUrl(serviceType)} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-primary to-yellow-500 text-black font-black px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
          {tt.button}
        </a>
      </div>
    </div>
  );
}