import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'
const { Content } = Layout
interface IProps {
  children: ReactNode
}

const HomeLayout = (props: IProps) => {
  return (
    <Layout>
      <HomeHeader />
      <Content style={{ padding: '50px 50px' }}>
        {props.children}
      </Content>
      <HomeFooter />
    </Layout>
  )
}
export default HomeLayout