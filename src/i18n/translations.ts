import type { Language } from './types';
import { menuTranslations } from '../feature/menu/i18n/translations';
import { homeTranslations } from '../routes/i18n/translations';

export interface Translations {
  menu: typeof menuTranslations[Language];
  home: typeof homeTranslations[Language];
}

export function getTranslations(lang: Language): Translations {
  return {
    menu: menuTranslations[lang],
    home: homeTranslations[lang],
  };
}