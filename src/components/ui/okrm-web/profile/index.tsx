import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { PageHeader, Tag, Row, Descriptions, Button } from 'antd'
import moment from 'moment'

import './index.less'
import { doSignout } from '../../../../redux/userInfo'

const Content = (content: { children: JSX.Element, extraContent: JSX.Element }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{content.children}</div>
      <div className="avatar-image">{content.extraContent}</div>
    </Row>
  )
}
const UserDescription = (props: IUserInfo) => (
  <>
    <Descriptions size="small" column={1}>
      <Descriptions.Item label="用户名">{props.username}</Descriptions.Item>
      <Descriptions.Item label="昵称">{props.nickname}</Descriptions.Item>
      <Descriptions.Item label="手机号">{props.mobile}</Descriptions.Item>
      <Descriptions.Item label="生日">{moment(props.birthday).format('YYYY-MM')}</Descriptions.Item>
      <Descriptions.Item label="实名制">{props.identityCardNo?<Tag color="blue">已实名</Tag>: <Tag color="red">未实名</Tag>}</Descriptions.Item>
      {/* <Descriptions.Item label="位置信息">{props.longitude}, {props.latitude}</Descriptions.Item> */}
      {/* <Descriptions.Item label="最后登陆时间">{moment(props.updateTime).format('YYYY-MM-DD HH:mm')}</Descriptions.Item> */}
      <Descriptions.Item label="注册时间">{moment(props.createTime).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
    </Descriptions>
  </>
)
interface IUserState {
}
interface IUserProp {
  onSignout(callback?: () => void) : void
  userInfo: IUserInfo
}
class ProfilePage extends React.Component<IUserProp, IUserState> {
  render() {
    let {
      userInfo,
    } = this.props
    const { username, nickname } = userInfo || {}
    const title = <span><span className="username">{username}</span>#<span className="nickname">{nickname}</span></span>
    return (
      <>
        <PageHeader
          title={title}
          className="site-page-header"
          tags={<Tag color="blue">注册用户</Tag>}
          extra={[
            <Button key="2"
              type="primary"
              danger
              onClick={() => {
              }}>删除账号</Button>
          ]}
          avatar={{ src: userInfo?.avatar }}
        >
          <Content
            extraContent={
              <img
                src={userInfo?.avatar}
                alt="content"
                width="50%"
              />
            }
          >
            <UserDescription {...userInfo} />
          </Content>
        </PageHeader>
      </>
    )
  }
}

const mapStateToProps = (states: any) => ({
  userInfo: states.userInfo.userInfo
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onSignout: doSignout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
