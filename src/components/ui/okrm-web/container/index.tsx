import React from 'react'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { Tabs } from 'antd'

interface IProps {
    panes: IPane[]
}
const Container = (props: IProps) => {
    return (
        <div className="container">
            {
                props.panes.length ? <Tabs type="editable-card" hideAdd>
                {
                    props.panes.map(pane => {
                        return <Tabs.TabPane key={pane.key} tab={pane.name}>
                            {pane.content}
                        </Tabs.TabPane>
                    })
                }
                </Tabs> : <div>首页背景</div>
            }
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    panes: state.appSettings.panes
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)