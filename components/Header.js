import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Logo from './Logo.js'
import Language from './Language.js';
// import UserInfo from './UserInfo.js'

const headerStyle = {
    padding: 0,
    display: 'table',
    width: '100%'
};
const logoStyle = {};
const linkStyle = {
    marginRight: 8,
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'table-cell',
    fontSize: 16
};
const Header = () => {
    const { t } = useTranslation();
    return (<div className="header" style={headerStyle}>
        <Logo style={logoStyle} />
        <Link href="/">
            <a style={linkStyle} title="首页">{t('home')}</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle} title="关于我们">{t('about us')}</a>
        </Link>
        <Link href="/joinUs">
            <a style={linkStyle} title={t('join us tip')}>{t('join us')}</a>
        </Link>
        <Language />
        {/* <UserInfo /> */}
    </div>)
};

export default Header;
