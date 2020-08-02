import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Form, Input, Button, Switch, message as Message } from 'antd'
import ImageCode from '../imageCode'
import SigninOrSignup from '../signinOrSignup'
import { useHistory } from 'react-router-dom'
import { IUserInfo, ISigninRequest } from '../../interfaces/UserInfo'
import { doSignin, getUserInfoMe } from '../../redux/userInfo'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 7 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}
const onFinishFailed = (e: any) => {
  console.log(e)
}

interface IProps {
  onGetUserInfoMe(callback?: () => void): void;
  onSignin(param: ISigninRequest, callback?: () => void): void
  userInfo: IUserInfo;
}

const Signin = (props: IProps) => {
  let history = useHistory()
  const submit = (param: any) => {
    props.onSignin(param as ISigninRequest, () => {
      Message.info('登陆成功！')
      props.onGetUserInfoMe()
      history.push('/ui/okrm-web')
    })
  }
  return (
    <>
      <Form
        {...layout}
        name='signin'
        layout='horizontal'
        size='large'
        onFinish={submit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="密码" name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="验证码" style={{ marginBottom: 0 }}>
          <Form.Item name="imageCode"
            style={{ display: 'inline-block', width: 'calc(60% - 12px)' }}
            rules={[{ required: true, message: '请输入验证码！' }]}>
            <Input />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: 'calc(40% - 12px)' }}>
            <ImageCode />
          </Form.Item>
        </Form.Item>
        <Form.Item label="记住我" name="remember-me" valuePropName="checked">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">登陆</Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <SigninOrSignup />
        </Form.Item>
      </Form>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  userInfo: state.userInfo.userInfo
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetUserInfoMe: getUserInfoMe,
  onSignin: doSignin
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)