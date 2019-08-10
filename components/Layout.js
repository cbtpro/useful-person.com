import Header from './Header.js'
import Footer from './Footer.js'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
};

const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
            <Footer />
        </div>
    )
}

export default Layout
