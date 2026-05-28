export type Language = 'en' | 'ko' | 'ja' | 'zh-Hans' | 'zh-Hant' | 'es' | 'pt' | 'de' | 'fr';

export const languages: Language[] = ['en', 'ko', 'ja', 'zh-Hans', 'zh-Hant', 'es', 'pt', 'de', 'fr'];

export const languageLabels: Record<Language, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
};