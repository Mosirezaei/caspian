'use client';
import { useLang } from '@/lib/LanguageContext';
import RelatedContent from './RelatedContent';
import RelatedServices from './RelatedServices';
import SeoFooterLinks from './SeoFooterLinks';
import SidebarArticleCards from './SidebarArticleCards';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SERVICE_TYPE_TAGS } from '@/data/siteLinks';
import { getWhatsAppUrl } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

const t = {
  fa: { cta: 'در مورد این صفحه سؤالی دارید؟', ctaSub: 'با کارشناسان ما در ارتباط باشید؛ در اسرع وقت پاسخ شما را خواهند داد.' },
  en: { cta: 'Have a question about this?', ctaSub: 'Get in touch with our experts.' },
  ru: { cta: 'Есть вопрос по этой теме?', ctaSub: 'Свяжитесь с нашими специалистами.' },
};

// متن جدا برای صفحات هتل/تور — همون درخواستی که قبلاً واسه بنر پایین صفحه هم استفاده شده.
const tBooking = {
  fa: { cta: 'در مورد این صفحه سؤالی دارید؟', ctaSub: 'با کارشناسان ما در ارتباط باشید؛ در اسرع وقت پاسخ شما را خواهند داد.' },
  en: { cta: 'Have a question about this?', ctaSub: 'Get in touch with our experts.' },
  ru: { cta: 'Есть вопрос по этой теме?', ctaSub: 'Свяжитесь с нашими специалистами.' },
};

const BOOKING_FLOW_TYPES = new Set(['hotel', 'tour']);
const SERVICE_TOPIC_FA = {
  hotel: 'رزرو هتل',
  transfer: 'ترانسفر',
  tour: 'تور ارمنستان',
  apartment: 'رزرو آپارتمان',
  flight: 'پرواز',
  exchange: 'خدمات ارزی',
  visa: 'ویزای روسیه',
  residency: 'اقامت در ارمنستان',
  company: 'ثبت شرکت در ارمنستان',
};

/**
 * PageSidebar — ساید‌بار مشترک همه‌ی صفحات محتوایی سایت (مقالات وبلاگ و صفحات سرویس).
 * یه کامپوننت واحد، جای دو نسخه‌ی جدا (BlogSidebar + ساید‌بار inline تو ServicePageLayout).
 *
 * props:
 *  - tags + currentPath  -> برای مقالات وبلاگ: کارت‌های «مطالب مرتبط» (RelatedContent, تگ‌محور)
 *  - serviceType         -> برای صفحات سرویس: کارت‌های «خدمات مرتبط» (RelatedServices)
 * هر دو تا رو هم می‌شه هم‌زمان پاس داد، یا فقط یکی -- بخشی که prop نداره رندر نمی‌شه.
 */
export default function PageSidebar({ tags, currentPath, serviceType }) {
  const sidebarRef = useRef(null);
  const { lang } = useLang();
  const isBookingFlow = BOOKING_FLOW_TYPES.has(serviceType);
  const tt = (isBookingFlow ? tBooking : t)[lang] || (isBookingFlow ? tBooking.fa : t.fa);
  const pathname = usePathname();
  const path = currentPath || pathname || '';
  const [pageTopic, setPageTopic] = useState(() => SERVICE_TOPIC_FA[serviceType] || '');

  useEffect(() => {
    const pageHeading = document.querySelector('main h1')?.textContent?.replace(/\s+/g, ' ').trim();
    if (pageHeading) setPageTopic(pageHeading);
  }, [path, lang]);

  const ctaQuestion = lang === 'fa' && pageTopic ? `در مورد ${pageTopic} سؤالی دارید؟` : tt.cta;
  const usefulLinksTags = (tags && tags.length > 0) ? tags : (SERVICE_TYPE_TAGS[serviceType] || SERVICE_TYPE_TAGS.default);
  const whatsappUrl = getWhatsAppUrl(serviceType);

  return (
    <aside ref={sidebarRef} className="lg:self-start space-y-5">
      {isBookingFlow ? (
        <div className="relative p-5 text-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/25 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
          <div className="relative">
            <h3 className="font-black text-foreground text-sm mb-1">{ctaQuestion}</h3>
            <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{tt.ctaSub}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-l from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition text-white text-xs font-bold shadow-lg shadow-green-600/20">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white p-0.5"><WhatsAppIcon className="h-full w-full" /></span> WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="p-5 text-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20">
          <h3 className="font-bold text-foreground text-sm mb-1">{ctaQuestion}</h3>
          <p className="text-xs text-foreground/60 mb-4 leading-relaxed">{tt.ctaSub}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-xs font-bold">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white p-0.5"><WhatsAppIcon className="h-full w-full" /></span> WhatsApp
          </a>
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <RelatedContent currentTags={tags} currentPath={currentPath} maxItems={6} variant="sidebar" />
        </div>
      )}

      {serviceType && (
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <RelatedServices pageType={serviceType} variant="sidebar" />
        </div>
      )}

      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
        <SeoFooterLinks variant="sidebar" currentTags={usefulLinksTags} currentPath={path} />
      </div>

      <SidebarArticleCards currentPath={path} sidebarRef={sidebarRef} />
    </aside>
  );
}
