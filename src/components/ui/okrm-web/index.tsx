import React, { useState } from 'react'

import { connect } from 'react-redux'

import WebHeader from './header'
import Side from './side'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout

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
        <WebHeader />
        <Content>
          主要内容
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state: any) => {
  return {
    sideCollapsed: state.appSetting.sideCollapsed
  }
}


export default connect(mapStateToProps)(OkrmUser)