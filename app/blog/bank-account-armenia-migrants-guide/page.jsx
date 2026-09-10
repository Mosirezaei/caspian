import BankAccountArmeniaMigrantsGuide from '@/views/blog/BankAccountArmeniaMigrantsGuide';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'افتتاح حساب بانکی در ارمنستان برای مهاجران؛ مدارک و نکات KYC',
  description: 'راهنمای کاربردی آماده‌سازی مدارک و کاهش خطا در درخواست حساب بانکی برای مهاجران در ارمنستان.',
  alternates: { canonical: 'https://caspian.am/blog/bank-account-armenia-migrants-guide' },
  openGraph: {
    title: 'افتتاح حساب بانکی در ارمنستان برای مهاجران؛ مدارک و نکات KYC',
    description: 'راهنمای کاربردی آماده‌سازی مدارک و کاهش خطا در درخواست حساب بانکی برای مهاجران در ارمنستان.',
    url: 'https://caspian.am/blog/bank-account-armenia-migrants-guide',
    images: [{ url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=70', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'افتتاح حساب بانکی در ارمنستان برای مهاجران؛ مدارک و نکات KYC',
        description: 'راهنمای کاربردی آماده‌سازی مدارک و کاهش خطا در درخواست حساب بانکی برای مهاجران در ارمنستان.',
        url: 'https://caspian.am/blog/bank-account-armenia-migrants-guide',
        datePublished: '2026-09-08',
        dateModified: '2026-09-08',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=70',
      })} />
      <BankAccountArmeniaMigrantsGuide />
    </>
  );
}
