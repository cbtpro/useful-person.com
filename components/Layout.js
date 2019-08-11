import Header from './Header.js';
import Footer from './Footer.js';
import Theme from '../themes/default.js';

const layoutStyle = {
    margin: 0,
    padding: 0
};

const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Theme />
            <Header />
            <Page />
            <Footer />
        </div>
    )
};

export default Layout;
