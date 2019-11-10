import i18n from 'i18next';
const configs = (state = [], action) => {
    switch(action.type) {
        case 'CHANGE_LANGUAGE':
            let { lang } = action;
            i18n.changeLanguage(lang);
            return lang;
        default:
            return 'zh'
    }
};

export default configs;