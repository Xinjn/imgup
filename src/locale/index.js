
import  i18n from "i18next";
import {initReactI18next} from 'react-i18next'
import  en from "./en";
import  ch from "./ch";
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: ch
      }
    },
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });
  export  default  i18n;
