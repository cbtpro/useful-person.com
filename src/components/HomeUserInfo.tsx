import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Avatar, Menu, message as Message } from 'antd'
import { UserOutlined, LoginOutlined, LogoutOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import screenfull from 'screenfull'
import { IUserInfo } from '../interfaces/UserInfo'
import { getUserInfoMe, doSignout } from '../redux/userInfo'
import { BLANK_AVATAR_URL } from '../constants/urls'

const { SubMenu, ItemGroup } = Menu

const styles = {
  headerRight: {
    float: 'right',
    display: 'flex',
    marginRight: 50
  },
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px'
  },
  avatarBox: {
    display: 'flex',
    alignItems: 'center',
  }
}

interface IProps {
  onGetUserInfoMe(callback?: () => void): void;
  onSignout(callback?: () => void) : void;
  userInfo: IUserInfo;
}

const HomeUserInfo = (props: IProps) => {
  let { userInfo } = props
  let [isFullscreen, setFullscreen] = useState(false)
  let history = useHistory()
  useEffect(() => {
    props.onGetUserInfoMe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const toOkrmWeb = () => {
    history.push('/ui/okrm-web')
  }
  const signout = () => {
    props.onSignout(() => {
      Message.info('用户已退出！')
      props.onGetUserInfoMe()
      history.push('/portal/')
    })
  }
  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      isFullscreen ? 
      screenfull.exit()
        .then(() => {
          setFullscreen(false)
        })
      : screenfull.request()
        .then(() => {
          setFullscreen(true)
        })
    }
  }
  return (
    <div className="userinfo">
      <div style={styles.headerItem}>
        <Menu mode="horizontal" selectable={false}>
          <SubMenu title={
            <div style={styles.avatarBox}>
            <Avatar size='small' src={userInfo ? userInfo.avatar : BLANK_AVATAR_URL} />
            &nbsp;<span>{userInfo ? userInfo.username : '未登录'}</span></div>
          }>
            <ItemGroup title="用户中心">
              {userInfo && <Menu.Item key={0} onClick={toOkrmWeb}><UserOutlined />编辑个人信息</Menu.Item> }
              {userInfo && <Menu.Item key={1} onClick={toOkrmWeb}><UserOutlined />修改密码</Menu.Item> }
              {userInfo && <Menu.Item key={3} onClick={signout}><LogoutOutlined />退出登录</Menu.Item> }
              {!userInfo && <Menu.Item key={2} onClick={() => history.push('/portal/signin') }><LoginOutlined />登录</Menu.Item> }
            </ItemGroup>
            <ItemGroup title="设置中心">
              <Menu.Item key={4} onClick={toggleFullscreen}>{ isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}切换全屏</Menu.Item>
            </ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  userInfo: state.userInfo.userInfo
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetUserInfoMe: getUserInfoMe,
  onSignout: doSignout
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUserInfo)