import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Form, Input, Button, message as Message } from 'antd'
import ImageCode from '../imageCode'
import SigninOrSignup from '../signinOrSignup'
import { ISignupRequest } from '../../interfaces/UserInfo'
import { doSignup } from '../../redux/userInfo'

interface IProps {
  onSignup(param: ISignupRequest, callback?: () => void): void;
  history: any;
}
interface IState {}

class Signup extends React.Component<RouteComponentProps & IProps> {
  onFinish = (param: any) => {
    this.props.onSignup(param as ISignupRequest, () => {
      Message.info('注册成功！')
      this.props.history.push('/signin')
    })
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 7 },
    }
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    }
    return <Form
      {...layout}
      name='signup'
      layout='horizontal'
      size='large'
      onFinish={this.onFinish}>
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="昵称" name="nickname" rules={[{ required: true, message: '请输入昵称!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="验证码" style={{ marginBottom: 0 }}>
        <Form.Item name="imageCode"
          style={{ display: 'inline-block', width: 'calc(60% - 12px)' }}
          rules={[{ required: true, message: '请输入验证码!' }]}>
          <Input />
        </Form.Item>
        <Form.Item style={{ display: 'inline-block', width: 'calc(40% - 12px)' }}>
          <ImageCode />
        </Form.Item>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">注册</Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <SigninOrSignup />
      </Form.Item>
    </Form>
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onSignup: doSignup
}, dispatch)

// 只注入dispatch，不监听store
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup))