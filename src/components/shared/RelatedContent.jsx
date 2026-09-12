'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { blogPosts, CATEGORY_LABELS } from '@/data/blogPosts';

/**
 * RelatedContent — لینک‌های «مطالب مرتبط»، بر اساس تگ مشترک.
 * currentTags: آرایه‌ای از تگ‌های صفحه‌ی فعلی (مثلاً [\'residency\', \'visa\'])
 * currentPath: مسیر صفحه‌ی فعلی، تا از نتیجه‌ها حذف بشه
 * maxItems: تعداد کارت‌ها (پیش‌فرض ۳)
 * variant: \'grid\' (پیش‌فرض، کارت‌های افقی سه‌ستونه پایین صفحه) یا \'sidebar\'
 *   (لیست عمودی جمع‌وجورتر، برای ساید‌بار کنار مقاله)
 *
 * فعلاً منبع داده فقط blogPosts.js هست. وقتی صفحات سرویس هم tags گرفتن،
 * می‌شه یه آرایه‌ی دوم رو هم به همین کامپوننت اضافه/مرج کرد.
 */
export default function RelatedContent({ currentTags = [], currentPath = '', maxItems = 3, variant = 'grid' }) {
  const { lang } = useLang();

  const items = useMemo(() => {
    const pool = blogPosts.filter(p => p.href !== currentPath);
    const scored = pool.map(p => ({
      post: p,
      score: p.tags.filter(t => currentTags.includes(t)).length,
    }));
    scored.sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug));
    return scored.slice(0, maxItems).map(s => s.post);
  }, [currentTags, currentPath, maxItems]);

  if (items.length === 0) return null;

  const t = {
    fa: { title: 'مطالب مرتبط' },
    en: { title: 'Related Content' },
    ru: { title: 'Похожие материалы' },
  }[lang] || { title: 'مطالب مرتبط' };

  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight;
  const catLabels = CATEGORY_LABELS[lang] || CATEGORY_LABELS.fa;

  if (variant === 'sidebar') {
    return (
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">{t.title}</h3>
        <div className="space-y-2.5">
          {items.map(post => {
            const c = post[lang] || post.fa;
            return (
              <Link key={post.slug} href={post.href}
                className="group block p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition">
                <span className="text-[10px] font-semibold text-primary/80">{catLabels[post.category]}</span>
                <h4 className="text-xs font-bold text-foreground mt-1 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {c.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold text-foreground mb-4">{t.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map(post => {
          const c = post[lang] || post.fa;
          return (
            <Link key={post.slug} href={post.href}
              className="group block p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition">
              <span className="text-[11px] font-semibold text-primary/80">{catLabels[post.category]}</span>
              <h4 className="text-sm font-bold text-foreground mt-1.5 mb-1.5 leading-snug group-hover:text-primary transition-colors">
                {c.title}
              </h4>
              <p className="text-xs text-foreground/50 leading-relaxed line-clamp-2">{c.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary/70 mt-2 font-medium">
                {lang === 'fa' ? 'ادامه مطلب' : lang === 'ru' ? 'Читать' : 'Read more'} <Arrow className="w-3 h-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
