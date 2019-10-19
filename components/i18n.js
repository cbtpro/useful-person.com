/* eslint-disable no-undef */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    zh: {
        translation: require('../static/locales/zh/common.json')
    },
    en: {
        translation: require('../static/locales/en/common.json')
    }
};
// initialize i18next with catalog and language to use
i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    resources,
    lng: 'zh',
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;