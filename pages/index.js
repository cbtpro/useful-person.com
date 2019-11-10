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
                color: #eccc68;
                text-align: center;
            }
            .slogan {
                color: #eb2f06;
                height: 200px;
                line-height: 200px;
                font-size: 2rem;
                font-weight: 600;
                background-color: #78e08f;
                background-size: cover;
                
            }
            .order-download {
                padding: 20px;
                width: 50%;
                margin: auto;
            }
            @media only screen and (max-width: 1100px) {
                .order-download {
                    width:50%
                }
            }
            
            @media only screen and (max-width: 600px) {
                .order-download {
                    width:87%
                }
            }
        `}</style>
        <div className="banner">
            <div className="slogan">
                {t('welcome')}
            </div>
        </div>
        <div className="order-download">
            <div><input type="tel" className="input-text" placeholder={t('phone placeholder')} /></div>
            <div><button className="input-button">预约下载</button></div>
        </div>
    </div>)
};

export default Layout(Page);
