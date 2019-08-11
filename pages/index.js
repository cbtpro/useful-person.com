import i18n from './i18n.js';
import { useTranslation, initReactI18next } from "react-i18next";
import Layout from '../components/Layout.js';

const Page = () => {
    const { t } = useTranslation();
    return (<p>{t('welcome')}</p>)
};

export default Layout(Page);
