import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Menu } from 'antd'
import { IMenu, tabs, menu } from './tabs'

import './index.less'
import { addPane, togglePane } from '../../../../redux/appSettings'

interface IProps {
    onAddPane(pane: IPane): void;
    onTogglePane(key: string): void;
    activeMenu: string;
    panes: IPane[];
}

const Side = (props: IProps) => {
    const clickMenu = (item: IMenu) => {
        const panes = props.panes.slice()
        const activeMenu = item.key
        if (!panes.some(pane => pane.key === activeMenu)) {
            props.onAddPane({
                name: item.name,
                key: item.key,
                content: tabs[item.key]
            })
        }
        props.onTogglePane(activeMenu)
    }
    const renderMenu = (menu: any) => {
        if (Array.isArray(menu)) {
            return menu.map(item => {
                return (
                    <Menu.Item key={item.key}>
                        <div onClick={() => clickMenu(item)}>{item.icon}<span>{item.name}</span></div>
                    </Menu.Item>
                )
            })
        }
    }
    return (
        <div className={`side`}>
            <div className={`side-menu-logo`}>
                <img src={require('../../../../assets/images/shengerbuyong.svg')} alt="" />
                <h1>生而不庸</h1>
            </div>
            <Menu selectedKeys={[props.activeMenu]} theme="light" mode="inline" style={{ paddingTop: 16 }}>
                {renderMenu(menu)}
            </Menu>
        </div >
    )
}

const mapStateToProps = (state: any) => ({
    activeMenu: state.appSettings.activeSideMenu,
    panes: state.appSettings.panes
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onAddPane: addPane,
    onTogglePane: togglePane
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Side)