import VisaRussia from '@/views/service/VisaRussia';
import { FAQ_DATA } from '@/data/faqData';

export const metadata = {
  title: 'ویزای توریستی روسیه برای ایرانیان | شرایط، مدارک و هزینه ۲۰۲۶',
  description: 'ویزای توریستی روسیه از ایروان: eVisa از ۷۰ دلار در ۴ روز کاری یا ویزای سفارت تا ۳۰ روز اقامت. مدارک، هزینه، دعوتنامه رسمی و مراحل کامل درخواست.',
  keywords: 'ویزای روسیه, اخذ ویزای روسیه, قیمت ویزای روسیه, ویزای توریستی روسیه, ویزای روسیه برای ایرانیان, دعوتنامه روسیه, اخذ ویزای روسیه از طریق ارمنستان برای ایرانیان, مدارک لازم برای ویزای فوری روسیه, دعوتنامه توریستی روسیه چیست, ویزای الکترونیکی روسیه, تفاوت ویزای توریستی و تجاری روسیه, راهنمای سفر به روسیه با ویزای گردشگری',
  alternates: { canonical: 'https://caspian.am/visa/russia' },
  openGraph: {
    title: 'ویزای توریستی روسیه برای ایرانیان | شرایط، مدارک و هزینه',
    description: 'eVisa از ۷۰ دلار در ۴ روز، یا ویزای سفارت تا ۳۰ روز اقامت — راهنمای کامل و دعوتنامه رسمی.',
    url: 'https://caspian.am/visa/russia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ویزای توریستی روسیه برای ایرانیان | شرایط، مدارک و هزینه',
    description: 'eVisa از ۷۰ دلار در ۴ روز، یا ویزای سفارت تا ۳۰ روز اقامت — راهنمای کامل و دعوتنامه رسمی.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ویزای توریستی روسیه',
  description: 'اخذ ویزای توریستی روسیه از طریق eVisa یا سفارت در ایروان',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  areaServed: { '@type': 'Country', name: 'Russia' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', lowPrice: '70', highPrice: '160' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA['visa-russia-tourist'].map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VisaRussia />
    </>
  );
}
