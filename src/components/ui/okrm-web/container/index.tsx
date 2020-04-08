import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Tabs } from 'antd'
import { removePane, togglePane } from '../../../../redux/appSettings'

interface IProps {
    onClosePane(key: string): void;
    onChangePane(key: string | undefined): void;
    activePane: string;
    panes: IPane[];
}
const Container = (props: IProps) => {
    const tabsChange = (key: string) => {
        props.onChangePane(key)
    }
    // 这里key的类型是string，antd的ts类型定义文件写得有问题
    const tabsEdit = (key: string | React.MouseEvent<HTMLElement>, action: 'add' | 'remove') => {
        if (action === 'remove') {
            props.onClosePane(key as string)
        }
    }
    return (
        <div className="container">
            {
                props.panes.length
                ?
                <Tabs
                    type="editable-card"
                    activeKey={props.activePane}
                    onChange={tabsChange}
                    onEdit={tabsEdit}
                    hideAdd>
                {
                    props.panes.map(pane => {
                        return <Tabs.TabPane
                            key={pane.key}
                            tab={pane.name}>
                            {pane.content}
                        </Tabs.TabPane>
                    })
                }
                </Tabs>
                :
                <div>首页背景</div>
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    panes: state.appSettings.panes,
    activePane: state.appSettings.activeSideMenu
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onClosePane: removePane,
    onChangePane: togglePane
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)