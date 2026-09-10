import ResidencyWork from '@/views/service/ResidencyWork';

export const metadata = {
  title: 'اقامت کاری ارمنستان | ویزای کار و مجوز اشتغال',
  description: 'اقامت ارمنستان از طریق اشتغال در شرکت‌های ارمنستانی. حوزه‌های پرتقاضا: IT، پزشکی، مهندسی. حقوق IT از ۱۰۰۰ تا ۳۰۰۰ دلار. مشاوره رایگان.',
  keywords: 'اقامت کاری ارمنستان, ویزای کار ارمنستان, مجوز اشتغال ارمنستان, کار در ارمنستان',
  alternates: { canonical: 'https://caspian.am/residency/work' },
  openGraph: {
    title: 'اقامت کاری ارمنستان | ویزای کار، مجوز اشتغال و کارت اقامت',
    description: 'اقامت ارمنستان از طریق اشتغال در شرکت‌های ارمنستانی. حوزه‌های پرتقاضا: IT، پزشکی، مهندسی. حقوق IT از ۱۰۰۰ تا ۳۰۰۰ دلار. مشاوره رایگان.',
    url: 'https://caspian.am/residency/work',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اقامت کاری ارمنستان | ویزای کار، مجوز اشتغال و کارت اقامت',
    description: 'اقامت ارمنستان از طریق اشتغال در شرکت‌های ارمنستانی. حوزه‌های پرتقاضا: IT، پزشکی، مهندسی. حقوق IT از ۱۰۰۰ تا ۳۰۰۰ دلار.',
  },
};

export default function Page() {
  return <ResidencyWork />;
}
