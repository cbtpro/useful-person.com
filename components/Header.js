import Link from 'next/link';
import Logo from './Logo.js'
import UserInfo from './UserInfo.js'

const headerStyle = {
    padding: 15,
    display: 'table',
    width: '100%'
}
const linkStyle = {
    marginRight: 15,
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'table-cell'
};

const Header = () => (
    <div className="header" style={headerStyle}>
        <Logo />
        <Link href="/">
            <a style={linkStyle} title="首页">首页</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle} title="关于我们">关于我们</a>
        </Link>
        <Link href="/joinUs">
            <a style={linkStyle} title="加入我们，你不看一下吗？">加入我们</a>
        </Link>
        <UserInfo />
    </div>
);

export default Header;
