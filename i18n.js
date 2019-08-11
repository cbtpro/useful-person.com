const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'zh',
    otherLanguages: ['en', 'de'],
    localeSubpaths
});

export default NextI18NextInstance;

export const {
    i18n,
    appWithTranslation,
    withTranslation,
    Link
} = NextI18NextInstance;