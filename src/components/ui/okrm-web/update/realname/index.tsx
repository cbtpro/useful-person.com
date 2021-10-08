import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { UPDATE_REALNAME_URL } from '../../../../../constants/urls'
import { put } from '../../../../../http'
import { IResponseData } from '../../../../../interfaces/ResponseData'
import { asyncValidatorIdcardNo } from '../../../../../utils/asyncFieldValueValidator'
import qs from 'qs'
import MediaType from '../../../../../constants/MediaType'

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
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    const updateRealname = (request : { idcardname: string, idcardno: string }) => {
        put<IResponseData<string>>(UPDATE_REALNAME_URL, qs.stringify(request), {
            headers: {
                'content-type': MediaType.APPLICATION_FORM_URLENCODED_VALUE
            }
        })
    }
    const ok = async () => {
        setLoading(true)
        try {
            const { realname, idcardno } = await form.validateFields()
            await updateRealname({ idcardname: realname, idcardno })
            props.onSuccess()
        } finally {
            setLoading(false)
        }
    }
    return (<>
        <Modal visible={props.visible}
            title="实名制"
            footer={[
                <Button key="cancel" onClick={props.onClose} >取消</Button>,
                <Button key="submit" loading={loading} onClick={ok}>确认</Button>
            ]}
        >
            <Form form={form} {...layout}>
                <Form.Item label="真实姓名" name="realname" rules={[{ required: true, message: '真实姓名不能为空！' }, { min: 2, max: 6, message: '姓名应该在两个汉字以上、六个汉字以下！' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="身份证号" name="idcardno" rules={[{ required: true, message: '身份证号不能为空！' }, { len: 18, message: '身份证号应该是18位！' }, { pattern: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, message: '身份证号格式不正确！' }, ({ getFieldValue }) => ({
                    validator(rule, idcardno) {
                        try {
                            idcardno && idcardno.length === 18 && asyncValidatorIdcardNo({ idcardno })
                            return Promise.resolve();
                        } catch {
                            return Promise.reject('请输入正确的身份证号码!');
                        }
                    },
                })]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </>)
}