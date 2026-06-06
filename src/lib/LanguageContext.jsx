import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLang } from './i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);
  const [theme, setTheme] = useState(() => localStorage.getItem('caspian-theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('caspian-theme', theme);
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, theme, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}