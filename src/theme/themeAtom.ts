import { atom } from 'jotai';

const STORAGE_KEY = 'toolbox-theme';

type Theme = 'light' | 'dark' | 'system';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark' || saved === 'system') {
    return saved;
  }
  return 'system';
}

export const themeAtom = atom<Theme>(getInitialTheme());

export const isDarkAtom = atom<boolean>((get) => {
  const theme = get(themeAtom);
  if (theme === 'system') {
    return getSystemTheme() === 'dark';
  }
  return theme === 'dark';
});

export function saveTheme(theme: Theme): void {
  localStorage.setItem(STORAGE_KEY, theme);
}

export function applyThemeClass(isDark: boolean): void {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

// Listen for system theme changes
if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const current = localStorage.getItem(STORAGE_KEY);
    if (!current || current === 'system') {
      applyThemeClass(getSystemTheme() === 'dark');
    }
  });
}