import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Descriptions } from 'antd'


interface IProps {
  userInfo: IUserInfo
}

const WebAbout = (props: IProps) => {
  let { userInfo } = props
  return <div>
    <Descriptions title="关于" column={1}>
      <Descriptions.Item label="登陆用户">{userInfo?.nickname}</Descriptions.Item>
      <Descriptions.Item label="描述">这个人很懒，什么也没留下</Descriptions.Item>
      <Descriptions.Item label="版本">v1.0.0</Descriptions.Item>
    </Descriptions>
  </div>
}

const mapStateToProps = (state: any) => ({
  userInfo: state.userInfo.userInfo
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WebAbout)