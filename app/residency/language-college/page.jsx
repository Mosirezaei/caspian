import ResidencyLanguageCollege from '@/views/service/ResidencyLanguageCollege';

const title = 'اقامت از طریق کالج‌های زبان در ارمنستان | بررسی مسیر آموزشی';
const description = 'راهنمای بررسی اقامت از طریق دوره‌ها و کالج‌های زبان در ارمنستان؛ تفاوت پذیرش آموزشی با اقامت، مدارک و نکات مهم پیش از ثبت‌نام.';

export const metadata = {
  title,
  description,
  keywords: 'اقامت از طریق کالج زبان ارمنستان, کالج زبان ارمنستان, اقامت تحصیلی ارمنستان, دوره زبان در ایروان',
  alternates: { canonical: 'https://caspian.am/residency/language-college' },
  openGraph: { title, description, url: 'https://caspian.am/residency/language-college', type: 'website' },
};

export default function Page() { return <ResidencyLanguageCollege />; }
