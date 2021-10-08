import React from 'react'
import { connect } from 'react-redux'

import { Layout } from 'antd'

import Header from './header'
import Side from './side'
import Container from './container'
const { Sider, Content } = Layout

interface IProps {
  sideCollapsed: boolean;
}

const OkrmUser = (props: IProps) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={props.sideCollapsed} theme="light">
        <Side />
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Container />
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state: any) => {
  return {
    sideCollapsed: state.appSettings.sideCollapsed
  }
}


export default connect(mapStateToProps)(OkrmUser)