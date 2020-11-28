import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // load translation using http 
  .use(LanguageDetector) // Language Detector
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;