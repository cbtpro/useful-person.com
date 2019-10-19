import React from 'react';
import Layout from '../components/Layout.js';

const companyIntroductionStyle = {
    textIndent: '2em',
    color: '#fff'
};
const Page = () => {
    return (<div className="container">
        <style jsx >{`
            a {
                color: #fff;
            }
        `}</style>
        <center><h2>公司介绍</h2></center>
        <p style={companyIntroductionStyle}><a href="https://www.tianyancha.com/company/3370574712" target="_blank" rel="noopener noreferrer">深圳市生而不庸软件技术有限责任公司</a>&nbsp;于2019年9月成立于&nbsp;<a href="https://baike.baidu.com/item/深圳软件产业基地/7160404" target="_blank" rel="noopener noreferrer">深圳南山软件产业基地</a>&nbsp;的&nbsp;<a href="https://baike.baidu.com/item/深圳市源泉汇创业孵化器有限公司" target="_blank" rel="noopener noreferrer">源泉汇创业孵化器</a>中，正赶上伟大祖国母亲70周年生日，深情献礼祖国母亲。</p>
        <center><h3>愿景和使命</h3></center>
        <p style={companyIntroductionStyle}>帮助用户提升价值的企业。共同创建美好生活是我们的终生奋斗的目标。</p>
    </div>);
};

export default Layout(Page);