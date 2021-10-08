import React from 'react';
import Head from 'next/head'
import Header from './Header.js';
import Footer from './Footer.js';
import Theme from '../themes/default.js';

const layoutStyle = {
    margin: 0,
    padding: 0
};

const Layout = Page => {
    const html = () => (
        <div style={layoutStyle}>
            <Head>
                <title>生而不庸</title>
                <link rel="shortcut icon" href="/static/favicon.ico"></link>
            </Head>
            <Theme />
            <Header />
            <Page />
            <Footer />
        </div>
    );
    return html;
};

export default Layout;
