import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import HomeHeader from './components/HomeHeader'
import HomeFooter from './components/HomeFooter'
import Home from './components/home'
import About from './components/about'
import JoinUs from './components/joinUs'
import Signin from './components/signin'
import Signup from './components/signup'
import Demo from './components/demo'

import './themes/default.less'
import './App.less';

const { Content } = Layout



function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <HomeHeader />
          <Content style={{ padding: '50px 50px' }}>
            <Route path="/portal/" exact component={Home} />
            <Route path="/portal/about" exact component={About} />
            <Route path="/portal/joinUs" exact component={JoinUs} />
            <Route path="/portal/demo" exact component={Demo} />
            <Route path="/portal/signin" component={Signin} />
            <Route path="/portal/signup" component={Signup} />
          </Content>
        <HomeFooter />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
