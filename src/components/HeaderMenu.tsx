import React from 'react'
import { Menu } from 'antd'

interface IProps {
  style?: React.CSSProperties
}

const HeaderMenu = (props: IProps) => {
  return (
    <Menu mode="horizontal" style={props.style} theme="light">
      <Menu.Item key="/" title="首页">
        首页
      </Menu.Item>
      <Menu.Item key="/about" title="关于我们">
        关于我们
      </Menu.Item>
      <Menu.Item key="/joinUs" title="加入我们">
        加入我们
      </Menu.Item>
    </Menu>
  )
}

export default HeaderMenu
