import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Layout } from 'antd'
import HomeUserInfo from '../UserInfo'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { getSideCollapsed, setSideCollapsed } from '../../../../redux/app'

interface IProps {
  onGetSideCollapsed(): void;
  onSetSideCollapsed(param: boolean | string): void; 
  sideCollapsed: boolean;
}
const Header = (props: IProps) => {
  const toggleSideCollapsed = () => {
    props.onSetSideCollapsed(!props.sideCollapsed)
  }
  return (
    <Layout.Header>
      
      {!props.sideCollapsed && <MenuFoldOutlined style={{ fontSize: 18 }} onClick={toggleSideCollapsed} />}
      {props.sideCollapsed && <MenuUnfoldOutlined style={{ fontSize: 18 }} onClick={toggleSideCollapsed}  />}
      <HomeUserInfo />
    </Layout.Header>
  )
}

const mapStateToProps = (state: any) => {
  return {
    sideCollapsed: state.appSetting.sideCollapsed
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