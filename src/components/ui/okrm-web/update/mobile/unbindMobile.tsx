import { Button, Col, Form, Input, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { MOBILE_FORM_RULES } from '../../../../../constants/App'
import { sendSmsCode, unbindMobile } from '../../../../../utils/sendValidatorCode'
import ImageCode from '../../../../imageCode'

interface IProps {
    onSuccess: () => void
    onClose: () => void
    visible: boolean
    mobile: string
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
}

export default (props: IProps) => {
    const [loading, setLoading] = useState(false)
    const [validatorOldMobileForm] = Form.useForm()
    const [unbindMobileForm] = Form.useForm()

    const getSmsCode = async () => {
        setLoading(true)
        try {
            const { mobile, imageCode } = await validatorOldMobileForm.validateFields()
            await sendSmsCode({ mobile, imageCode })
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
            const { mobile, smsCode } = await unbindMobileForm.validateFields()
            await unbindMobile({ mobile, smsCode })
            props.onSuccess()
        } finally {
            setLoading(false)
        }
    }
    return (
        <><Modal visible={props.visible} title="解绑手机号" onCancel={close} footer={[
            <Button key="cancel" onClick={close}>取消</Button>,
            <Button key="submit" loading={loading} onClick={ok}>确认</Button>
        ]}>
            <Form form={validatorOldMobileForm} {...layout} >
                <Form.Item label="完整手机号" name="mobile" rules={MOBILE_FORM_RULES} >
                    <Input placeholder={props.mobile} onChange={e => unbindMobileForm.setFieldsValue({mobile: e.target.value})} />
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
            <Form form={unbindMobileForm} {...layout}>
                <Form.Item label="手机号" name="mobile" className="hidden">
                    <Input />
                </Form.Item>
                <Form.Item label="短信验证码">
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item name="smsCode" noStyle>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button loading={loading} onClick={getSmsCode}>获取短信验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}