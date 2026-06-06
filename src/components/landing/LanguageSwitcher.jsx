import React from 'react';
import { useLang } from '@/lib/LanguageContext';

const langs = [
  { code: 'fa', label: 'فا' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
            lang === l.code
              ? 'bg-primary text-background shadow'
              : 'text-foreground/60 hover:text-primary'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}