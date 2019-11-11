import '../components/i18n.js';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'

const NavbarMenu = () => {
    const { t } = useTranslation();
    return <div>
        <style jsx>{`
            .navbar-menu {
                list-style: none;
                margin: 0;
                padding: 0;
                border-radius: 5px;
                overflow: auto;
            }
            .navbar-menu li {
                float: left;
            }
            .navbar-menu li a {
                display: block;
                color: #333;
                text-decoration: none;
                padding: 15px 20px;
                border-right: dotted 1px #ddd;
            }
            .navbar-menu li a:last-child {
                border: none;
            }
            .navbar-menu li a:hover {
                color: coral;
            }
        `}</style>
        <ul className="navbar-menu">
            <li>
                <Link href="/">
                    <a className="navbar-item navbar-title navbar-separator" title="首页">{t('home')}</a>
                </Link></li>
            <li>
                <Link href="/about">
                    <a className="navbar-item navbar-title" title="关于我们">{t('about us')}</a>
                </Link>
            </li>
            <li>
                <Link href="/joinUs">
                    <a className="navbar-item navbar-title" title={t('join us tip')}>{t('join us')}</a>
                </Link>
            </li>
        </ul>
    </div>
}

export default NavbarMenu
