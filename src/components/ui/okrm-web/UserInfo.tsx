import { FullscreenExitOutlined, FullscreenOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Menu, message as Message } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'
import screenfull from 'screenfull'
import { BLANK_AVATAR_URL } from '../../../constants/urls'
import { IUserInfo } from '../../../interfaces/UserInfo'
import { doSignout, getUserInfoMe } from '../../../redux/userInfo'
import UpdatePassword from './UpdatePassword'
import UpdateProfile from './UpdateProfile'

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

const UserInfo = (props: IProps) => {
  let { userInfo } = props
  let [isFullscreen, setFullscreen] = useState(false)
  let [ isUpdateProfileOpened, setIsUpdateProfileOpened ] = useState(false)
  let [ isUpdatePasswordOpened, setIsUpdatePasswordOpened] = useState(false)
  let history = useHistory()
  useEffect(() => {
    props.onGetUserInfoMe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const toUpdateProfile = () => {
    setIsUpdateProfileOpened(true)
  }
  const toUpdatePassword = () => {
    setIsUpdatePasswordOpened(true)
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
            &nbsp;<span>{userInfo ? userInfo.nickname : '未登录'}</span></div>
          }>
            <ItemGroup title="用户中心">
              {userInfo && <Menu.Item key={0} onClick={toUpdateProfile}><UserOutlined />编辑个人信息</Menu.Item> }
              {userInfo && <Menu.Item key={1} onClick={toUpdatePassword}><UserOutlined />修改密码</Menu.Item> }
              {userInfo && <Menu.Item key={3} onClick={signout}><LogoutOutlined />退出登录</Menu.Item> }
              {!userInfo && <Menu.Item key={2} onClick={() => history.push('/portal/signin') }><LoginOutlined />登录</Menu.Item> }
            </ItemGroup>
            <ItemGroup title="设置中心">
              <Menu.Item key={4} onClick={toggleFullscreen}>{ isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}切换全屏</Menu.Item>
            </ItemGroup>
          </SubMenu>
        </Menu>
      </div>
      <UpdateProfile visible={isUpdateProfileOpened} close={() => setIsUpdateProfileOpened(false)} />
      <UpdatePassword visible={isUpdatePasswordOpened} close={() => setIsUpdatePasswordOpened(false) } />
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
)(UserInfo)