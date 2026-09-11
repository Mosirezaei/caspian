'use client';
import { useMemo } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ALL_SITE_LINKS } from '@/data/siteLinks';

/**
 * SeoFooterLinks — «لینک‌های مفید»: همه‌ی صفحات محتوایی سایت (سرویس‌ها + مقالات وبلاگ)،
 * به‌جز صفحه اصلی/درباره‌ما/تماس‌با‌ما. ترتیب بر اساس تعداد تگ مشترک با صفحه‌ی فعلی
 * (مرتبط‌ترین اول). برای جلوگیری از شلوغی و لینک‌های بی‌ربط، فقط موارد دارای تگ
 * تخصصی مشترک نمایش داده می‌شوند؛ تگ عمومی «ارمنستان» به‌تنهایی کافی نیست.
 *
 * currentTags: تگ‌های صفحه‌ی فعلی (از blogPosts یا نگاشت SERVICE_TYPE_TAGS)
 * currentPath: مسیر صفحه‌ی فعلی، تا از لیست حذف بشه
 */
export default function SeoFooterLinks({ variant = 'default', currentTags = [], currentPath = '' }) {
  const { lang } = useLang();
  const label = lang === 'fa' ? 'لینک‌های مفید' : lang === 'ru' ? 'Полезные ссылки' : 'Useful Links';

  const items = useMemo(() => {
    const meaningfulTags = currentTags.filter((tag) => tag !== 'armenia');
    const pool = ALL_SITE_LINKS.filter(l => l.href !== currentPath);
    const scored = pool.map(l => ({
      link: l,
      score: l.tags.filter(t => meaningfulTags.includes(t)).length,
    }));
    return scored
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ link }) => link);
  }, [currentTags, currentPath]);

  if (items.length === 0) return null;

  if (variant === 'sidebar') {
    return (
      <nav aria-label={label}>
        <h3 className="text-sm font-bold text-foreground mb-3">{label}</h3>
        <div className="space-y-2.5">
          {items.map((link) => {
            const text = link[lang] || link.fa;
            return (
              <a key={link.href} href={link.href}
                className="group block p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition">
                <h4 className="text-xs font-bold text-foreground mt-0.5 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {text.label}
                </h4>
              </a>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label={label} className="border-t border-white/6 pt-10 pb-6 px-4 mt-6">
      <p className="text-xs text-foreground/60 text-center mb-6 font-medium tracking-widest uppercase">{label}</p>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((link) => {
          const text = link[lang] || link.fa;
          return (
            <a key={link.href} href={link.href}
              className="text-xs text-foreground/65 hover:text-primary transition-colors leading-relaxed block">
              {text.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
