import React from 'react';
import '../components/i18n.js';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout.js';

const Page = () => {
    const { t } = useTranslation();
    return (<div className="container">
        <style jsx>{`
            .banner {
                width: 100%;
                height: 400px;
                background-color: rgba(241, 242, 246, 0.1);
                color: #eccc68;
            }
        `}</style>
        <div className="banner">
            <center><h3>{t('welcome')}</h3></center>
        </div>
    </div>)
};

export default Layout(Page);
