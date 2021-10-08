import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  type?: 'is-signup' | 'is-signin';
}
const SigninOrSignup = (props: IProps) => {
  const { type } = props
  return type === 'is-signup' ? <p>没有账号<Link to="/portal/signup">注册</Link>一个</p> : <p>已有账号去<Link to="/portal/signin">登陆</Link></p>
}

SigninOrSignup.defaultProps = {
  type: 'is-signin',
}

export default SigninOrSignup