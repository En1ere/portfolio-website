import { useI18n } from 'vue-i18n';

export const useLocale = () => {
  const { locale, availableLocales } = useI18n({ useScope: 'global' });

  const setLocale = (value: 'ru' | 'en') => {
    locale.value = value;
    document.documentElement.lang = value;
  };

  const toggleLocale = ()=> setLocale(locale.value === 'ru' ? 'en' : 'ru')

  const getAvailableLocales = () => {
    return availableLocales;
  };

  return {
    locale,
    setLocale,
    toggleLocale,
    getAvailableLocales
  };
};
