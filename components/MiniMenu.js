import { useTranslation } from 'react-i18next';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const MiniMenu = () => {
    const { t } = useTranslation();
    function handler() {
    }
    return <div>
        <style jsx>{`
            .mini-menu-button {
                position: absolute;
                right: 10px;
                width: 36px;
                padding: 18px 30px;
                cursor: pointer;
            }
            .mini-navbar-menu.active {
            }
            .mini-navbar-menu {
                display: none;
                position: absolute;
                background: rgba(0, 0, 0, 0.2);
                list-style: none;
                border: 1px #ddd solid;
                border-radius: 10px;
                width: 200px;
                padding: 6px 20px 6px 20px;
                margin: 0px;
            }
            .mini-navbar-menu li {
                font-size: 18px;
                line-height: 2.4em;
                border-bottom: dotted 1px #fff;
            }
            .mini-navbar-menu li:last-child {
                border: none;
            }
            .mini-navbar-menu li a {
                color: #333;
                text-decoration: none;
            }
            .mini-navbar-menu li a:hover {
                color: coral;
            }
        `}</style>
        <div className="mini-menu-button">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="mini-navbar-menu">
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

export default MiniMenu
