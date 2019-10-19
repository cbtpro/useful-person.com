import React from 'react';
import i18n from "i18next";
import Dropdown from './Dropdown.js';

const languageStyle = {
    marginRight: 8,
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'table-cell'
};

const LANGUAGES = [{ key: 'zh', value: '中文' }, { key: 'en', value: 'English' }];

const Language = () => {
    return <div style={languageStyle}>
        <Dropdown value={i18n.language} items={LANGUAGES} onChange={$event => {
            i18n.changeLanguage($event.target.value);
        }} />
    </div>
};

export default Language;