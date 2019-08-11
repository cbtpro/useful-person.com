import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Layout from '../components/Layout.js';

const resources = {
    zh: {
        translation: {
            'welcome': '欢迎使用 React & react-i18next.',
            'home': '首页',
            'about us': '关于我们',
            'join us': '加入我们',
            'join us tip': '加入我们，你不进来看一下吗？！！'
        }
    },
    en: {
        translation: {
            "welcome": "Welcome to React and react-i18next",
            'home': 'Home',
            'about us': 'About Us',
            'join us': 'Join Us',
            'join us tip': 'Join Us, Do you want come in looking for something？！！'
        }
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

const Page = () => {
    const { t } = useTranslation();
    return (<p>{t('welcome')}</p>)
};

export default Layout(Page);
