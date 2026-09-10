import HealthInsuranceArmeniaMigrants from '@/views/blog/HealthInsuranceArmeniaMigrants';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'بیمه درمانی در ارمنستان برای مهاجران؛ انتخاب پوشش و نکات قرارداد',
  description: 'راهنمای بررسی بیمه درمانی خصوصی برای مهاجران، دانشجویان و خانواده‌هایی که در ارمنستان زندگی می‌کنند.',
  alternates: { canonical: 'https://caspian.am/blog/health-insurance-armenia-migrants' },
  openGraph: {
    title: 'بیمه درمانی در ارمنستان برای مهاجران؛ انتخاب پوشش و نکات قرارداد',
    description: 'راهنمای بررسی بیمه درمانی خصوصی برای مهاجران، دانشجویان و خانواده‌هایی که در ارمنستان زندگی می‌کنند.',
    url: 'https://caspian.am/blog/health-insurance-armenia-migrants',
    images: [{ url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'بیمه درمانی در ارمنستان برای مهاجران؛ انتخاب پوشش و نکات قرارداد',
        description: 'راهنمای بررسی بیمه درمانی خصوصی برای مهاجران، دانشجویان و خانواده‌هایی که در ارمنستان زندگی می‌کنند.',
        url: 'https://caspian.am/blog/health-insurance-armenia-migrants',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=70',
      })} />
      <HealthInsuranceArmeniaMigrants />
    </>
  );
}
