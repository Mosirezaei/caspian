'use client';
import { useEffect } from 'react';

/**
 * useSEO — client-side <title> updater ONLY.
 *
 * Historically this hook also rewrote meta description, keywords, OG tags,
 * Twitter tags, canonical link and JSON-LD (page + breadcrumb) on every
 * mount/update. That duplicated — and could momentarily override — the tags
 * already set server-side by the Next.js Metadata API and <JsonLd> in each
 * route's `app/.../page.jsx`, which is now the single source of truth for
 * everything crawlers read. Search engines never see the client-side
 * rewrite anyway (it runs after hydration), so removing it changes nothing
 * for SEO and only removes a source of drift/duplication.
 *
 * What's kept: updating `document.title` on the fly, which is real,
 * user-visible behavior needed for the live fa/en/ru language switcher
 * (the browser tab title should follow the language the visitor picks).
 */
export function useSEO({ title }) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}
