'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { blogPosts, CATEGORY_LABELS } from '@/data/blogPosts';

function hashText(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(items, seed) {
  const shuffled = [...items];
  let state = seed || 1;
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const target = state % (index + 1);
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

/**
 * کارت‌های انتهای سایدبار، تا ارتفاع ستون محتوای همان صفحه ادامه پیدا می‌کنند.
 * تعداد ثابت نداریم: فقط تا جایی که صفحه نیاز دارد کارت می‌سازیم.
 */
export default function SidebarArticleCards({ currentPath = '', sidebarRef }) {
  const { lang } = useLang();
  const posts = useMemo(
    () => seededShuffle(
      blogPosts.filter((post) => post.href !== currentPath && post.thumbnail),
      hashText(currentPath || 'caspian-sidebar')
    ),
    [currentPath]
  );
  const [visibleCount, setVisibleCount] = useState(1);
  const animationFrameRef = useRef(null);

  const labels = {
    fa: { title: 'بیشتر بخوانید', read: 'مطالعه مقاله' },
    en: { title: 'More to explore', read: 'Read article' },
    ru: { title: 'Читайте также', read: 'Читать статью' },
  }[lang] || { title: 'بیشتر بخوانید', read: 'مطالعه مقاله' };

  const categoryLabels = CATEGORY_LABELS[lang] || CATEGORY_LABELS.fa;
  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const sidebar = sidebarRef?.current;
    let pageGrid = sidebar?.parentElement;
    let contentColumn = null;

    // بعضی صفحات PageSidebar را داخل یک <aside> دیگر گذاشته‌اند؛ تا گریدِ دو ستونهٔ واقعی بالا می‌رویم.
    while (pageGrid && !contentColumn) {
      contentColumn = [...pageGrid.children].find(
        (child) => child !== sidebar && child.classList?.contains('lg:col-span-2')
      );
      if (!contentColumn) pageGrid = pageGrid.parentElement;
    }

    if (!sidebar || !contentColumn || !window.matchMedia('(min-width: 1024px)').matches) return undefined;

    const fillSidebar = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(() => {
        const sidebarBottom = sidebar.offsetTop + sidebar.offsetHeight;
        const contentBottom = contentColumn.offsetTop + contentColumn.offsetHeight;
        const remainingHeight = contentBottom - sidebarBottom;

        if (remainingHeight <= 8) return;

        // ارتفاع میانگین هر کارت حدود 110px است؛ با این محاسبه کارت‌ها در چند رندر محدود افزوده می‌شوند.
        const neededCards = Math.max(1, Math.ceil(remainingHeight / 110));
        setVisibleCount((currentCount) => Math.min(posts.length, currentCount + neededCards));
      });
    };

    const resizeObserver = new ResizeObserver(fillSidebar);
    resizeObserver.observe(contentColumn);
    resizeObserver.observe(sidebar);
    window.addEventListener('resize', fillSidebar);
    fillSidebar();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', fillSidebar);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [posts.length, sidebarRef, visibleCount]);

  if (posts.length === 0) return null;

  return (
    <section aria-label={labels.title} className="hidden space-y-3 lg:block">
      <h3 className="px-1 text-sm font-bold text-foreground">{labels.title}</h3>
      <div className="space-y-3">
        {posts.slice(0, visibleCount).map((post) => {
          const content = post[lang] || post.fa;
          return (
            <Link
              key={post.slug}
              href={post.href}
              className="group flex w-full gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-primary/35 hover:bg-primary/5"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src={post.thumbnail}
                  alt={content.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-semibold text-primary/80">
                  {categoryLabels[post.category] || <FileText className="h-3 w-3" />}
                </span>
                <h4 className="mt-1 line-clamp-3 text-xs font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {content.title}
                </h4>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary/70">
                  {labels.read} <Arrow className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
