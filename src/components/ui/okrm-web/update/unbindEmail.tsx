import { Button, Col, Form, Input, Modal, Row } from 'antd'
import { useForm } from 'antd/lib/form/util'
import React, { useState } from 'react'
import { sendEmailCode, unbindEmail } from '../../../../utils/sendValidatorCode'
import ImageCode from '../../../imageCode'

interface IProps {
    onSuccess: () => void
    onClose: () => void
    visible: boolean
    email: string
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
}

export default (props: IProps) => {
    const [loading, setLoading] = useState(false)
    const [validatorOldEmailForm] = useForm()
    const [unbindEmailForm] = useForm()

    const getEmailCode = async () => {
        setLoading(true)
        try {
            const { email, imageCode } = await validatorOldEmailForm.validateFields()
            await sendEmailCode({ email, imageCode })
        } finally {
            setLoading(false)
        }
    }
    const close = () => {
        props.onClose()
    }
    const ok = async () => {
        setLoading(true)
        try {
            const { email, emailCode } = await unbindEmailForm.validateFields()
            await unbindEmail({ email, emailCode })
            props.onSuccess()
        } finally {
            setLoading(false)
        }
    }
    return (
        <><Modal visible={props.visible} title="解绑电子邮箱" onCancel={close} footer={[
            <Button key="cancel" onClick={close}>取消</Button>,
            <Button key="submit" loading={loading} onClick={ok}>确认</Button>
        ]}>
            <Form form={validatorOldEmailForm} {...layout} >
                <Form.Item label="完整邮箱地址" name="email" rules={[{ required: true, message: '请输入完整邮箱地址！' }, { type: 'email', message: '邮箱地址格式不正确！' }]} >
                    <Input placeholder={props.email} onChange={e => unbindEmailForm.setFieldsValue({email: e.target.value})} />
                </Form.Item>
                <Form.Item label="验证码">
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item name="imageCode" rules={[{ required: true, message: '验证码不能为空！' }, { pattern: /[0-9A-Za-z]{4,}/, message: '验证码只能是4位数字和字母，大小写忽略！' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <ImageCode />
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
            <Form form={unbindEmailForm} {...layout}>
                <Form.Item label="邮箱地址" name="email" className="hidden">
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱验证码">
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item name="emailCode" rules={[{ required: true, message: '邮箱验证码不能为空！' }, { pattern: /[0-9A-Za-z]{4,}/, message: '邮箱验证码只能是4位数字和字母，大小写忽略！' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button loading={loading} onClick={getEmailCode}>获取邮箱验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}