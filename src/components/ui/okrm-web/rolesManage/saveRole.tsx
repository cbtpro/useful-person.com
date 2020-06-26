import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { IRole } from '../../../../interfaces/UserInfo'
import { useForm } from 'antd/lib/form/util'
import { post, put } from '../../../../http'
import { ADD_ROLE_URL, UPDATE_ROLE_URL } from '../../../../constants/urls'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 }
}

interface IProps {
    onCancel(): void
    onSuccess(): void
    visible: boolean
    role?: IRole
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
            if (role.uuid) {
                await updateRole(role)
            } else {
                await saveRole(role)
            }
            props.onSuccess()
        } finally {
            setLoading(false)
        }
    }
    const updateRole = (param: IRole) => {
        return put(UPDATE_ROLE_URL, param)
    }
    const saveRole = (param: IRole) => {
        return post(ADD_ROLE_URL, param)
    }
    useEffect(() => {
        props.role && form.setFieldsValue(props.role);
    }, [form, props.role])
    return <>
        <Modal visible={props.visible} title="保存角色" onCancel={cancel} forceRender={true} footer={[
            <Button key="cancel" onClick={cancel}>取消</Button>,
            <Button key="ok" loading={loading} onClick={ok}>确认</Button>
        ]}>
            <Form form={form} {...layout}>
                <Form.Item label="uuid" name="uuid" className="hidden">
                    <Input />
                </Form.Item>
                <Form.Item label="角色名称" name="rolename" rules={[{required: true, message: '角色名称不能为空！'}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="角色描述" name="description">
                    <Input />
                </Form.Item>
                <Form.Item label="updateTime" name="updateTime" className="hidden">
                    <Input />
                </Form.Item>
                <Form.Item label="createTime" name="createTime" className="hidden">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </>
}

export default AddRole