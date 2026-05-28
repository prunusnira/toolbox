import { useState, useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import { languageAtom, saveLanguage } from './languageAtom';
import { languages, languageLabels } from './types';
import type { Language } from './types';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useAtom(languageAtom);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setCurrentLang(lang);
    saveLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        🌐 {languageLabels[currentLang]}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg z-50 max-h-80 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                lang === currentLang ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}