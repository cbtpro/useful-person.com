import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Modal } from 'antd'
import Signin from '../../signin'

interface IProps {
    userIsLogin: boolean
}
class Login extends React.Component<IProps, {}> {
    render() {
        const { userIsLogin } = this.props
        return (
            <Modal
                title="登陆"
                visible={!userIsLogin}
                footer={false}
            >
                <Signin />
            </Modal>
        )
    }
}

const mapStateToProps = (state: any) => ({
    userIsLogin: state.userInfo.userIsLogin
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)
