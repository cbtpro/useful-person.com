import { Button, Col, Form, Input, Modal, notification, Row } from 'antd'
import { useForm } from 'antd/lib/form/util'
import React, { useEffect, useState } from 'react'
import { sendEmailCode, updateEmail } from '../../../../utils/sendValidatorCode'
import ImageCode from '../../../imageCode'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
}
interface IProps {
    onSuccess: (v: string) => void
    onClose: () => void
    email?: string
    visible: boolean
}
export default (props: IProps) => {
    const [ sendEmailCodeForm ] = useForm()
    const [ bindNewEmailForm ] = useForm()
    const [ unbindEmailForm ] = useForm()
    const [ sendCodeloadding, setSendLoading ] = useState(false)
    const [ validatorCodeLoading, setValidatorCodeLoading] = useState(false)
    const [ email, setEmail ] = useState<string | undefined>()
    useEffect(() => {
        setEmail(props?.email)
    }, [props])
    const close = () => {
        props.onClose()
    }
    const sendEmailValidatorCode = async () => {
        setSendLoading(true)
        try {
            const { email, imageCode } = await sendEmailCodeForm.validateFields()
            const response = await sendEmailCode({ email, imageCode })
            if (response) {
                notification.error({
                    message: '验证码发送失败！',
                    description: response as string
                })
            } else {
                notification.info({
                    message: '验证码发送成功！',
                    description: '您还可以点击邮箱中的验证链接，电子邮箱地址将会完成更新！'
                })
            }
        } finally {
            setSendLoading(false)
        }
    }
    const bindEmailNew = async () => {
        setValidatorCodeLoading(true)
        try {
            const { email, emailCode } = await bindNewEmailForm.validateFields()
            const response = await updateEmail({ email, emailCode })
            console.log(response)
        } finally {
            setValidatorCodeLoading(false)
        }
    }
    const unbindEmail = async () => {
        setValidatorCodeLoading(true)
        try {
            const { email, emailCode } = await unbindEmailForm.validateFields()
            debugger
        } finally {
            setValidatorCodeLoading(false)
        }
    }
    return <Modal visible={props.visible} title="修改电子邮箱" onCancel={close} footer={[
        <Button key="cancel" onClick={close}>取消</Button>,
        <Button key="submit" loading={validatorCodeLoading} onClick={props?.email ? bindEmailNew : unbindEmail}>确认</Button>
    ]}>
        <Form form={sendEmailCodeForm} initialValues={{ email: email }} {...layout} className={`${props.email ? 'hidden' : null}`}>
            <Form.Item label="电子邮箱" name="email" rules={[{ required: true, message: '电子邮箱不能为空！' }, { type: 'email', message: '电子邮箱格式不正确！' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="验证码">
                <Row gutter={8}>
                    <Col span={16}>
                        <Form.Item name="imageCode" rules={[{ required: true, message: '验证码不能为空！'}, { pattern: /[0-9A-Za-z]{4,}/, message: '验证码只能是4位数字和字母，大小写忽略！' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <ImageCode />
                    </Col>
                </Row>
            </Form.Item>
        </Form>
        <Form form={bindNewEmailForm} initialValues={{ email: email }} {...layout} className={`${props.email ? 'hidden' : null}`}>
            <Form.Item label="电子邮箱" name="email" rules={[{ required: true, message: '电子邮箱不能为空！' }, { type: 'email', message: '电子邮箱格式不正确！' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="邮箱验证码">
                <Row gutter={8}>
                    <Col span={16}>
                        <Form.Item name="emailCode" rules={[{ required: true, message: '邮箱验证码不能为空！'}, { pattern: /[0-9A-Za-z]{4,}/, message: '邮箱验证码只能是4位数字和字母，大小写忽略！' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button loading={sendCodeloadding} onClick={sendEmailValidatorCode}>获取邮箱验证码</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
        <Form form={unbindEmailForm} initialValues={{ email: props?.email }} {...layout} className={`${props.email ? null : 'hidden'}`} >
            <Form.Item label="邮箱地址" name="email" >
                <Input disabled />
            </Form.Item>
            <Form.Item label="完整邮箱地址" name="oldEmail" rules={[{ required: true, message: '请输入完整邮箱地址！'}, { type: 'email', message: '邮箱地址格式不正确！' } ]} >
                <Input />
            </Form.Item>
            <Form.Item label="邮箱验证码">
                <Row gutter={8}>
                    <Col span={16}>
                        <Form.Item name="emailCode" rules={[{ required: true, message: '邮箱验证码不能为空！'}, { pattern: /[0-9A-Za-z]{4,}/, message: '邮箱验证码只能是4位数字和字母，大小写忽略！' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button loading={sendCodeloadding} onClick={sendEmailValidatorCode}>获取邮箱验证码</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    </Modal>
}