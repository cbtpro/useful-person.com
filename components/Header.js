import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle} title="首页">首页</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle} title="关于我们">关于我们</a>
        </Link>
        <Link href="/joinUs">
            <a style={linkStyle} title="加入我们，你不看一下吗？">加入我们</a>
        </Link>
    </div>
);

export default Header;
