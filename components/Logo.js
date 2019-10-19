import '../pages/i18n';
import { useTranslation } from 'react-i18next';

const logoStyle = {
    width: '218px',
    marginRight: 8,
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'table-cell'
}
const logoImageStyle = {
    width: 24,
    verticalAlign: 'middle'
}
const logoText = {
    fontSize: '2rem',
    color: 'orange',
    // borderRadius: '50%',
    // backgroundColor: 'rgba(0, 0, 0, 0.12)',
    textAlign: 'center',
    verticalAlign: 'middle',
}

export default () => {
    const { t } = useTranslation();
    return (<div style={logoStyle}>
        {/* <img style={logoImageStyle} src="static/logo.png" /> */}
        <div style={logoText}>{t('app name')}</div>
    </div>);
};