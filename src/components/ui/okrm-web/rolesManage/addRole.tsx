import React, { useState } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { IRole } from '../../../../interfaces/UserInfo'
import { useForm } from 'antd/lib/form/util'
import { post } from '../../../../http'
import { ADD_ROLE_URL } from '../../../../constants/urls'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
}

interface IProps {
    onCancel(): void
    onSuccess(): void
    visible: boolean
}

const AddRole = (props: IProps) => {
    const [loading, setLoading] = useState(false)
    const [form] = useForm()
    const cancel = () => {
        props.onCancel()
    }
    const ok = async () => {
        setLoading(true)
        try {
            const role = await form.validateFields() as IRole
            await saveRole(role)
            props.onSuccess()
        } finally {
            setLoading(false)
        }
    }
    const saveRole = (param: IRole) => {
        post(ADD_ROLE_URL, param)
    }
    return <>
        <Modal visible={props.visible} title="添加角色" footer={[
            <Button key="cancel" onClick={cancel}>取消</Button>,
            <Button key="ok" loading={loading} onClick={ok}>确认</Button>
        ]}>
            <Form form={form} {...layout}>
                <Form.Item label="角色名称" name="rolename" rules={[{required: true, message: '角色名称不能为空！'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="角色描述" name="description">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </>
}

export default AddRole