import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Menu } from 'antd'
import { IMenu, tabs, menu } from './tabs'

import './index.less'
import { addPane } from '../../../../redux/appSettings'

interface IProps {
    onAddPane(pane: IPane): void
    panes: IPane[]
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
            <Menu theme="light" mode="inline" style={{ paddingTop: 16 }}>
                {renderMenu(menu)}
            </Menu>
        </div >
    )
}

const mapStateToProps = (state: any) => ({
    panes: state.appSettings.panes
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onAddPane: addPane
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Side)