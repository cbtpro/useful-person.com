import React from 'react';
import { useTranslation } from "react-i18next";

const footerStyle = {
    width: '100%',
    margin: 0,
    padding: 5,
    bottom: 0,
    textAlign: 'center'
};

const Footer = () => {
    const { t } = useTranslation();
    return (<div className="footer" style={footerStyle}>
        <div>
        </div>
        <p className="copyright">Copyright &copy; {t('corporation', { year: 2019 })}</p>
    </div>);
};

export default Footer;
