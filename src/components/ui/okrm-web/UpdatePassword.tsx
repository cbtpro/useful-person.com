import React, { useState } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Modal, Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/util'
import { IUserInfo } from '../../../interfaces/UserInfo'
import { userInfo } from 'os'
import { put } from '../../../http'
import { UPDATE_USER_PASSWORD_URL } from '../../../constants/urls'
import { IResponseData } from '../../../interfaces/ResponseData'
import MediaType from '../../../constants/MediaType'
import qs from 'qs'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
}

interface IProps {
    close: () => void
    userInfo: IUserInfo
    visible: boolean
}
const UpdatePassword = (props: IProps) => {
    let { userInfo } = props
    const [loading, setLoading] = useState(false)
    const [form] = useForm()
    const updateUserPassword = (request: { oldPassword: string, password: string}) => {
        return put<IResponseData<String>>(UPDATE_USER_PASSWORD_URL, qs.stringify(request))
    }
    const submit = async () => {
        setLoading(true)
        try {
            const { oldPassword, newPassword } = await form.validateFields()
            await updateUserPassword({ oldPassword, password: newPassword})
            props.close()
        } catch (error) {
            setLoading(false)
        }
    }
    return <>
        <Modal visible={props.visible} title="修改密码" onCancel={props.close} footer={[
            <Button key="cancel" onClick={props.close}>取消</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={submit}>确认</Button>
        ]}>
            <Form form={form} {...layout} initialValues={{ username: userInfo?.username }} >
                <Form.Item label="用户名" name="username">
                    <Input disabled />
                </Form.Item>
                <Form.Item label="旧密码" name="oldPassword" rules={[{ required: true, message: '请输入旧密码' }]}>
                    <Input.Password autoComplete="old-password" />
                </Form.Item>
                <Form.Item label="新密码" name="newPassword" rules={[{ required: true, message: '请输入新密码' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label="确认新密码" name="confirmPassword" dependencies={['newPassword']} rules={[{ required: true, message: '请输入旧密码' }, ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('两次密码输入不匹配!');
                    },
                })]}>
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    </>
}

const mapStateToProps = (state: any) => ({
    userInfo: state.userInfo.userInfo
})

export default connect(mapStateToProps)(UpdatePassword)