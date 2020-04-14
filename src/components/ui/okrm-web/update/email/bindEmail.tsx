import { Button, Col, Form, Input, Modal, Row } from 'antd'
import { useForm } from 'antd/lib/form/util'
import React, { useState } from 'react'
import { sendEmailCode, updateEmail } from '../../../../../utils/sendValidatorCode'
import ImageCode from '../../../../imageCode'

interface IProps {
    onSuccess: () => void
    onClose: () => void
    visible: boolean
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
}

export default (props: IProps) => {
    const [sendEmailCodeForm] = useForm()
    const [bindNewEmailForm] = useForm()
    const [loading, setLoading] = useState(false)

    const getEmailCode = async () => {
        setLoading(true)
        try {
            const { email, imageCode } = await sendEmailCodeForm.validateFields()
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
            const { email, emailCode } = await bindNewEmailForm.validateFields()
            await updateEmail({ email, emailCode })
            props.onSuccess()
        } finally {
            setLoading(false)
        }
    }
    return <>
        <Modal visible={props.visible} title="绑定电子邮箱" onCancel={close} footer={[
            <Button key="cancel" onClick={close}>取消</Button>,
            <Button key="submit" loading={loading} onClick={ok}>确认</Button>
        ]}>
            <Form form={sendEmailCodeForm} {...layout}>
                <Form.Item label="电子邮箱" name="email" rules={[{ required: true, message: '电子邮箱不能为空！' }, { type: 'email', message: '电子邮箱格式不正确！' }]}>
                    <Input onChange={e => bindNewEmailForm.setFieldsValue({ email: e.target.value})} />
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
            <Form form={bindNewEmailForm} {...layout}>
                <Form.Item label="电子邮箱" name="email" className="hidden">
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱验证码">
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item name="emailCode" rules={[{ required: true, message: '邮箱验证码不能为空！' }, { pattern: /[0-9A-Za-z]{4,}/, message: '邮箱验证码只能是4位数字和字母，大小写忽略！' }]} noStyle >
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
}