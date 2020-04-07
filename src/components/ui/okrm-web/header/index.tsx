import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Layout } from 'antd'
import HomeUserInfo from '../UserInfo'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { getSideCollapsed, setSideCollapsed } from '../../../../redux/appSettings'

interface IProps {
  onGetSideCollapsed(): void;
  onSetSideCollapsed(param: boolean | string): void; 
  sideCollapsed: boolean;
}
const Header = (props: IProps) => {
  let { sideCollapsed } = props
  const toggleSideCollapsed = () => {
    props.onSetSideCollapsed(!sideCollapsed)
  }
  return (
    <Layout.Header style={{ 'padding':  '0px'}}>
      <div style={{ padding: '0px 16px' }}>
        {!sideCollapsed && <MenuFoldOutlined style={{ fontSize: 18 }} onClick={toggleSideCollapsed} />}
        {sideCollapsed && <MenuUnfoldOutlined style={{ fontSize: 18 }} onClick={toggleSideCollapsed}  />}
      </div>
      <HomeUserInfo />
    </Layout.Header>
  )
}

const mapStateToProps = (state: any) => {
  return {
    sideCollapsed: state.appSettings.sideCollapsed
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetSideCollapsed: getSideCollapsed,
  onSetSideCollapsed: setSideCollapsed
}, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)