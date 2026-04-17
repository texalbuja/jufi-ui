import { initReactI18next } from '../../node_modules/react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';
import translationAr from './langs/ar.json';
import translationBn from './langs/bn.json';
import translationEn from './langs/en.json';
import translationEs from './langs/es.json';
import translationFr from './langs/fr.json';
import translationHi from './langs/hi.json';
import translationZh from './langs/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      enUS: { translation: translationEn },
      esEC: { translation: translationEs },
      frFR: { translation: translationFr },
      bnBD: { translation: translationBn },
      zhCN: { translation: translationZh },
      hiIN: { translation: translationHi },
      arSA: { translation: translationAr },
    },
    lng: 'enUS',
    ns: ['translation'],
    fallbackLng: 'en',
    debug: false,
  });

export default i18n;
