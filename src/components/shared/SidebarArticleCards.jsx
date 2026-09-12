'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { useMemo } from 'react';
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

export default function SidebarArticleCards({ currentPath = '', maxItems = 8 }) {
  const { lang } = useLang();
  const posts = useMemo(
    () => seededShuffle(
      blogPosts.filter((post) => post.href !== currentPath && post.thumbnail),
      hashText(currentPath || 'caspian-sidebar')
    ).slice(0, maxItems),
    [currentPath, maxItems]
  );

  if (posts.length === 0) return null;

  const labels = {
    fa: { title: 'بیشتر بخوانید', read: 'مطالعه مقاله' },
    en: { title: 'More to explore', read: 'Read article' },
    ru: { title: 'Читайте также', read: 'Читать статью' },
  }[lang] || { title: 'بیشتر بخوانید', read: 'مطالعه مقاله' };

  const categoryLabels = CATEGORY_LABELS[lang] || CATEGORY_LABELS.fa;
  const Arrow = lang === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section aria-label={labels.title} className="space-y-3">
      <h3 className="px-1 text-sm font-bold text-foreground">{labels.title}</h3>
      <div className="space-y-3">
        {posts.map((post) => {
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
