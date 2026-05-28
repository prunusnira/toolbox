import { useState, useRef, useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { themeAtom, isDarkAtom, saveTheme, applyThemeClass } from './themeAtom.ts';

type Theme = 'light' | 'dark' | 'system';

const themeIcons: Record<Theme, string> = {
  light: '☀️',
  dark: '🌙',
  system: '💻',
};

const themeLabels: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

export default function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom);
  const isDark = useAtomValue(isDarkAtom);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyThemeClass(isDark);
  }, [isDark]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (t: Theme) => {
    setTheme(t);
    saveTheme(t);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {themeIcons[theme]}
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-lg z-50">
          {(['light', 'dark', 'system'] as Theme[]).map((t) => (
            <button
              key={t}
              onClick={() => handleSelect(t)}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                t === theme
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span>{themeIcons[t]}</span>
              {themeLabels[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}