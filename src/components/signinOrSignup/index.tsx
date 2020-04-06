import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default () => {
  let location = useLocation()
  let { pathname } = location
  return pathname === '/signin' ? <p>没有账号<Link to="/signup">注册</Link>一个</p> : <p>已有账号去<Link to="/signin">登陆</Link></p>
}