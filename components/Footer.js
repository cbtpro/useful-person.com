import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Footer = () => (
    <div>
        <div>
            <Link href="/about">
                <a style={linkStyle} title="about">关于我们</a>
            </Link>
            <Link href="/joinUs">
                <a style={linkStyle} title="join us">加入我们</a>
            </Link>
        </div>
        <p className="copyright">Copyright &copy; {new Date().getFullYear()} 深圳市益人信息科技有限公司。</p>
    </div>
);

export default Footer;
