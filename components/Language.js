import i18n from "i18next";
import Dropdown from './Dropdown.js';

const LANGUAGES = [{ key: 'zh', value: '中文' }, { key: 'en', value: 'English' }];

const Language = () => {
    return <Dropdown value={i18n.language} items={LANGUAGES} onChange={$event => {
            i18n.changeLanguage($event.target.value);
        }} />
};

export default Language;