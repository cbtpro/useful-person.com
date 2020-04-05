import React, { ReactNode } from 'react'
import { Layout } from 'antd'
const { Content } = Layout;
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

interface IHomeProps {
  children: ReactNode
}

const HomeLayout: React.SFC<IHomeProps> = props => {
  return (
    <div>
      <Layout className="layout">
        <HomeHeader />
        <Content style={{ padding: '50px 50px' }}>
          <div className="site-layout-content">{props.children}</div>
        </Content>
        <HomeFooter />
      </Layout>
      <style jsx>{`
        .site-layout-content {
          background: #fff;
          padding: 24px;
          min-height: 280px;
        }
      `}</style>
    </div>
  )
}

export default HomeLayout