import '../i18n.js';
import Layout from '../components/Layout.js';

const { setConfig } = require('next/config')
setConfig(require('../next.config'))

const Page = () => <p>Hello Next.js</p>;

export default Layout(Page);
