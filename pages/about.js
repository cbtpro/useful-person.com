import Layout from '../components/Layout.js';

const companyIntroductionStyle = {
    textIndent: '2em'
};
const Page = () => {
    return (<div className="container">
        <style jsx >{`
            a {
                color: blue;
            }
        `}</style>
        <center><h2>公司介绍</h2></center>
        <span style={companyIntroductionStyle}><a href="https://www.tianyancha.com/company/3370574712" target="_blank" rel="noopener noreferrer">深圳市生而不庸软件技术有限责任公司</a>&nbsp;于2019年9月成立于&nbsp;<a href="https://baike.baidu.com/item/深圳软件产业基地/7160404" target="_blank" rel="noopener noreferrer">深圳南山软件产业基地&nbsp;&nbsp;</a>中。我们主要产品是“生而不庸”APP，主要目标是明确个人每个目标，保证集中精力提升个人能力和价值。
        </span>
        <center><h3>愿景和使命</h3></center>
        <p style={companyIntroductionStyle}>帮助用户提升价值，共同创建美好生活是我们的终身奋斗的目标。</p>
    </div>);
};

export default Layout(Page);