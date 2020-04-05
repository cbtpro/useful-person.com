import React, { CSSProperties } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

interface IProps {
  style?: CSSProperties
}

const HeaderMenu = (props: any) => {
  let defaultKey = props.match.url || '/'
  return (
    <Menu defaultSelectedKeys={[defaultKey]} theme="light" mode="horizontal" style={{ ...props.style }}>
      <Menu.Item key="/" title="首页">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/about" title="关于我们">
        <Link to="/about">关于我们</Link>
      </Menu.Item>
      <Menu.Item key="/joinUs" title="加入我们">
        <Link to="/joinUs">加入我们</Link>
      </Menu.Item>
    </Menu>
  )
}
export default withRouter(HeaderMenu)
