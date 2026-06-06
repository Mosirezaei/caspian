/**
 * DynamicService — a single component that renders any service page
 * by reading its slug from the URL and looking up content in data/servicesContent.js
 *
 * Routes using this component (in App.jsx):
 *   /service/:slug   (used for all dynamic service pages)
 */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import { getServiceContent } from '@/data/servicesContent';

function DynamicServiceContent() {
  const { slug } = useParams();
  const { lang } = useLang();

  const service = getServiceContent(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground font-vazir gap-4">
        <h1 className="text-2xl font-black text-primary">صفحه یافت نشد</h1>
        <p className="text-foreground/60">سرویس مورد نظر وجود ندارد.</p>
        <Link to="/" className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
          بازگشت به خانه
        </Link>
      </div>
    );
  }

  const blocks = service.blocks[lang] || service.blocks.fa || [];

  return (
    <ServicePageLayout
      titleFa={service.titleFa}
      titleEn={service.titleEn}
      titleRu={service.titleRu}
      subtitleFa={service.subtitleFa}
      subtitleEn={service.subtitleEn}
      subtitleRu={service.subtitleRu}
      heroImage={service.heroImage}
      serviceType={service.serviceType}
    >
      {blocks.map((block, i) => (
        <InfoBlock key={i} title={block.title}>
          {block.content && <p>{block.content}</p>}
          {block.list && <CheckList items={block.list} />}
        </InfoBlock>
      ))}
    </ServicePageLayout>
  );
}

export default function DynamicService() {
  return (
    <LanguageProvider>
      <DynamicServiceContent />
    </LanguageProvider>
  );
}