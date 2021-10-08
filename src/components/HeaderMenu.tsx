import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const HeaderMenu = (props: any) => {
  let defaultKey = props.match.url || '/portal/'
  return (
    <Menu defaultSelectedKeys={[defaultKey]} theme="light" mode="horizontal" style={{ ...props.style }}>
      <Menu.Item key="/portal/" title="首页">
        <Link to="/portal/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/portal/about" title="关于我们">
        <Link to="/portal/about">关于我们</Link>
      </Menu.Item>
      <Menu.Item key="/portal/joinUs" title="加入我们">
        <Link to="/portal/joinUs">加入我们</Link>
      </Menu.Item>
    </Menu>
  )
}
export default withRouter(HeaderMenu)
