import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import Logo from './Logo.js'
import UserInfo from './UserInfo.js'

const headerStyle = {
    padding: 15,
    display: 'table',
    width: '100%'
};
const linkStyle = {
    marginRight: 15,
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'table-cell'
};
const Header = () => {
    const { t } = useTranslation();
    return (<div className="header" style={headerStyle}>
        <Logo />
        <Link href="/">
            <a style={linkStyle} title="首页">{t('home')}</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle} title="关于我们">{t('about us')}</a>
        </Link>
        <Link href="/joinUs">
            <a style={linkStyle} title={t('join us tip')}>{t('join us')}</a>
        </Link>
        <select defaultValue={i18n.language} onChange={($event) => {
            i18n.changeLanguage($event.target.value);
        }}>
            <option value="zh">中文</option>
            <option value="en">English</option>
        </select>
        <UserInfo />
    </div>)
};

export default Header;
