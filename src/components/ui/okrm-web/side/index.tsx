import React from 'react'
import { Menu } from 'antd'
import { tabs, menu } from './tabs'

class Side extends React.Component {
    /**
     * 生成侧边栏菜单
     */
    renderMenu = (menu: any) => {
        if (Array.isArray(menu)) {
            return menu.map(item => {
                if (!item.children || !item.children.length) {
                    return (
                        <Menu.Item key={item.key || item.name}>
                            <div><span>{item.name}</span></div>
                        </Menu.Item>
                    )
                } else {
                    return (
                        <Menu.SubMenu key={item.key} title={<span>{item.name}</span>}>
                            {this.renderMenu(item.children)}
                        </Menu.SubMenu>
                    )
                }
            })
        }
    }
    render() {
        return (
            <div className={`my-sider`}>
                <div className={`sider-menu-logo`}>
                    <img src={require('../../../../assets/images/logo.png')} style={{ width: '45px' }} alt="" />
                </div>
                <Menu theme="light" mode="inline" style={{ paddingTop: 16 }}>
                    {this.renderMenu(menu)}
                </Menu>
            </div >
        )
    }
}

export default Side