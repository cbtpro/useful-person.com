import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default () => {
  let location = useLocation()
  let { pathname } = location
  return pathname === '/portal/signin' ? <p>没有账号<Link to="/portal/signup">注册</Link>一个</p> : <p>已有账号去<Link to="/portal/signin">登陆</Link></p>
}