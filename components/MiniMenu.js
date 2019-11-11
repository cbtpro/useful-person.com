import React from 'react'
import '../components/i18n.js';
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MiniMenu = () => {
    const { t } = useTranslation();
    return <div className="mini-navbar">
        <style jsx>{`
            .menu {
                width: 24px;
                height: 24px;
                color: gray;
                line-height: 24px;
                position: relative;
                display: inline-block;
            }
            .menu-item {
                float: right;
                position: relative;
                background-color: #f9f9f9;
                min-width: 100px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                padding: 12px 16px;
                z-index: 1;
            }
            .menu:hover .menu-item {
                display: block;
            }
        `}</style>
        <div className="menu">
            <FontAwesomeIcon icon={faBars} />
            <div className="menu-item">
                <p>
                    <Link href="/">
                        <a title="首页">{t('home')}</a>
                    </Link></p>
                <p><Link href="/about">
                    <a title="关于我们">{t('about us')}</a>
                </Link></p>
                <p><Link href="/joinUs">
                    <a title={t('join us tip')}>{t('join us')}</a>
                </Link></p>
            </div>
        </div>
    </div>
}

export default MiniMenu