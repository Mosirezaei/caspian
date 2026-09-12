import PrivateCarArmeniaProsCons from '@/views/blog/PrivateCarArmeniaProsCons';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'مزایا و معایب سفر با ماشین شخصی به ارمنستان + قوانین رانندگی',
  description: 'سفر با ماشین شخصی به ارمنستان یعنی چی؟ مزایا، معایب، قوانین رانندگی، حد مجاز الکل، جریمه‌ها و نکات برخورد با پلیس ارمنستان.',
  alternates: { canonical: 'https://caspian.am/blog/private-car-armenia-pros-cons-driving-rules' },
  openGraph: {
    title: 'مزایا و معایب سفر با ماشین شخصی به ارمنستان + قوانین رانندگی',
    description: 'سفر با ماشین شخصی به ارمنستان یعنی چی؟ مزایا، معایب، قوانین رانندگی، حد مجاز الکل، جریمه‌ها و نکات برخورد با پلیس ارمنستان.',
    url: 'https://caspian.am/blog/private-car-armenia-pros-cons-driving-rules',
    images: [{ url: 'https://caspian.am/images/blog/private-car-armenia-pros-cons-driving-rules.svg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'مزایا و معایب سفر با ماشین شخصی به ارمنستان + قوانین رانندگی',
        description: 'سفر با ماشین شخصی به ارمنستان یعنی چی؟ مزایا، معایب، قوانین رانندگی، حد مجاز الکل، جریمه‌ها و نکات برخورد با پلیس ارمنستان.',
        url: 'https://caspian.am/blog/private-car-armenia-pros-cons-driving-rules',
        datePublished: '2026-09-12',
        dateModified: '2026-09-12',
        image: 'https://caspian.am/images/blog/private-car-armenia-pros-cons-driving-rules.svg',
      })} />
      <PrivateCarArmeniaProsCons />
    </>
  );
}
