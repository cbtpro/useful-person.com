import '../components/i18n.js';
import { useTranslation } from 'react-i18next';

const logoImageStyle = {
    width: 220
}

const Logo = () => {
    const { t } = useTranslation();
    return (<img style={logoImageStyle} src="static/images/logo.png" alt={t('app name')}/>);
}
export default Logo;