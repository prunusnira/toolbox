import { atom } from 'jotai';
import type { Language } from './types';
import { getTranslations } from './translations';
import type { Translations } from './translations';

const STORAGE_KEY = 'toolbox-language';

function detectBrowserLanguage(): Language {
  const browserLangs = navigator.languages || [navigator.language];

  const langMap: Record<string, Language> = {
    ko: 'ko',
    ja: 'ja',
    'zh-CN': 'zh-Hans',
    'zh-Hans': 'zh-Hans',
    'zh-SG': 'zh-Hans',
    'zh-TW': 'zh-Hant',
    'zh-HK': 'zh-Hant',
    'zh-Hant': 'zh-Hant',
    'zh-MO': 'zh-Hant',
    es: 'es',
    pt: 'pt',
    'pt-BR': 'pt',
    de: 'de',
    fr: 'fr',
  };

  for (const lang of browserLangs) {
    if (langMap[lang]) {
      return langMap[lang];
    }
    const primary = lang.split('-')[0];
    if (langMap[primary]) {
      return langMap[primary];
    }
  }

  return 'en';
}

function getInitialLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return saved as Language;
  }
  return detectBrowserLanguage();
}

export const languageAtom = atom<Language>(getInitialLanguage());

export const translationAtom = atom<Translations>((get) => {
  const lang = get(languageAtom);
  return getTranslations(lang);
});

export function saveLanguage(lang: Language): void {
  localStorage.setItem(STORAGE_KEY, lang);
}