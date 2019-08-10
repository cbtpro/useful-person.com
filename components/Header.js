import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => {
    return (
        <div>
            <Link href="/about">
                <a style={linkStyle} title="about">关于我们</a>
            </Link>
            <Link href="/joinUs">
                <a style={linkStyle} title="join us">加入我们</a>
            </Link>
        </div>
    )
};

export default Header;
