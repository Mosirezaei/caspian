'use client';
import { useLang } from '@/lib/LanguageContext';
import RelatedContent from './RelatedContent';
import RelatedServices from './RelatedServices';
import SeoFooterLinks from './SeoFooterLinks';
import SidebarArticleCards from './SidebarArticleCards';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { SERVICE_TYPE_TAGS } from '@/data/siteLinks';
import { getWhatsAppUrl } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';
import WhatsAppBottomCTA from './WhatsAppBottomCTA';
import { getWhatsAppTopic } from '@/lib/whatsappTopic';

const t = {
  fa: { cta: 'در مورد این صفحه سؤالی دارید؟', ctaSub: 'با کارشناسان ما در ارتباط باشید؛ در اسرع وقت پاسخ شما را خواهند داد.' },
  en: { cta: 'Have a question about this?', ctaSub: 'Get in touch with our experts.' },
  ru: { cta: 'Есть вопрос по этой теме?', ctaSub: 'Свяжитесь с нашими специалистами.' },
};

export default function PageSidebar({ tags, currentPath, serviceType }) {
  const sidebarRef = useRef(null);
  const { lang } = useLang();
  const tt = t[lang] || t.fa;
  const pathname = usePathname();
  const path = currentPath || pathname || '';
  const [articleTarget, setArticleTarget] = useState(null);

  useEffect(() => {
    const grid = sidebarRef.current?.closest('.grid');
    setArticleTarget(path.startsWith('/blog/') ? grid?.querySelector('article') || null : null);
  }, [path]);

  const topic = getWhatsAppTopic({ path, serviceType, tags, lang });
  const ctaQuestion = lang === 'fa' ? `در مورد ${topic} سؤالی دارید؟` : tt.cta;
  const usefulLinksTags = tags?.length ? tags : (SERVICE_TYPE_TAGS[serviceType] || SERVICE_TYPE_TAGS.default);
  return (
    <>
      <aside ref={sidebarRef} className="lg:self-start space-y-5">
        <div className="p-5 text-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20">
          <h3 className="font-bold text-foreground text-sm mb-1">{ctaQuestion}</h3>
          <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{tt.ctaSub}</p>
          <a href={getWhatsAppUrl(serviceType)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-xs font-bold">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white p-0.5"><WhatsAppIcon className="h-full w-full" /></span> WhatsApp
          </a>
        </div>
        {tags?.length > 0 && <div className="p-4 rounded-2xl bg-white/5 border border-white/10"><RelatedContent currentTags={tags} currentPath={currentPath} maxItems={6} variant="sidebar" /></div>}
        {serviceType && <div className="p-4 rounded-2xl bg-white/5 border border-white/10"><RelatedServices pageType={serviceType} variant="sidebar" /></div>}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10"><SeoFooterLinks variant="sidebar" currentTags={usefulLinksTags} currentPath={path} /></div>
        <SidebarArticleCards currentPath={path} sidebarRef={sidebarRef} />
      </aside>
      {articleTarget && createPortal(<div className="mt-8" data-caspian-whatsapp-cta><WhatsAppBottomCTA serviceType={serviceType} tags={tags} currentPath={path} /></div>, articleTarget)}
    </>
  );
}