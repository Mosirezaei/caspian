import { blogPosts, CATEGORY_LABELS } from '@/data/blogPosts';
import { SERVICE_LINKS } from '@/data/siteLinks';

const TAG_TOPICS = {
  apartment: 'اجاره و خرید ملک', property: 'اجاره و خرید ملک', accommodation: 'اجاره و خرید ملک', rental: 'اجاره و خرید ملک',
  residency: 'اقامت و مهاجرت', immigration: 'اقامت و مهاجرت',
  company: 'ثبت شرکت و امور مالی', business: 'ثبت شرکت و امور مالی', finance: 'ثبت شرکت و امور مالی',
  work: 'کار و اشتغال', employment: 'کار و اشتغال', jobs: 'کار و اشتغال',
  education: 'تحصیل', student: 'تحصیل',
  tourism: 'گردشگری و دیدنی‌ها', sightseeing: 'گردشگری و دیدنی‌ها',
  news: 'اخبار و فستیوال‌ها', festivals: 'اخبار و فستیوال‌ها', events: 'اخبار و فستیوال‌ها', concerts: 'اخبار و فستیوال‌ها',
  life: 'زندگی در ایروان', shopping: 'خرید در ارمنستان',
  'car-travel': 'سفر با ماشین شخصی', 'private-car': 'سفر با ماشین شخصی', driving: 'سفر با ماشین شخصی', carnet: 'سفر با ماشین شخصی',
  visa: 'ویزا و مدارک سفر',
};
const SERVICE_TOPICS = {
  hotel: 'رزرو هتل', transfer: 'ترانسفر', tour: 'تور ارمنستان', apartment: 'اجاره آپارتمان مبله',
  flight: 'بلیط هوایی و زمینی', exchange: 'خدمات ارزی', visa: 'ویزای روسیه',
  residency: 'اقامت در ارمنستان', company: 'ثبت شرکت در ارمنستان',
};
const normalizePath = (path = '') => path.split('?')[0].replace(/\/$/, '') || '/';

export function getWhatsAppTopic({ path, serviceType, tags = [], lang = 'fa' } = {}) {
  const currentPath = normalizePath(path);
  const service = SERVICE_LINKS.find((item) => item.href === currentPath);
  if (service) return service[lang]?.label || service.fa?.label || SERVICE_TOPICS[serviceType];
  const article = blogPosts.find((post) => post.href === currentPath);
  if (article?.category) return CATEGORY_LABELS[lang]?.[article.category] || CATEGORY_LABELS.fa?.[article.category] || SERVICE_TOPICS[serviceType];
  if (currentPath === '/events') return lang === 'fa' ? 'رویدادها و کنسرت‌های ایروان' : SERVICE_TOPICS.tour;
  const tagTopic = tags.map((tag) => TAG_TOPICS[String(tag).toLowerCase()]).find(Boolean);
  if (tagTopic && lang === 'fa') return tagTopic;
  return SERVICE_TOPICS[serviceType] || (lang === 'fa' ? 'این موضوع' : 'this topic');
}