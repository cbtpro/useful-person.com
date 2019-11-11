import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Logo from './Logo.js'
import Language from './Language.js';
import MiniMenu from './MiniMenu.js'
// import UserInfo from './UserInfo.js'

const Header = () => {
    const { t } = useTranslation();
    return (<div className="navbar">
        <div className="navbar-brand">
            <div className="" >
                <Logo />
            </div>
            <Link href="/">
                <a className="navbar-item navbar-title navbar-separator" title="首页">{t('home')}</a>
            </Link>
            <Link href="/about">
                <a className="navbar-item navbar-title" title="关于我们">{t('about us')}</a>
            </Link>
            <Link href="/joinUs">
                <a className="navbar-item navbar-title" title={t('join us tip')}>{t('join us')}</a>
            </Link>
            <div  className="navbar-item navbar-title navbar-language">
                <Language/>
            </div>
            {/* <UserInfo /> */}
            <MiniMenu />
        </div>
    </div>)
};

export default Header;
