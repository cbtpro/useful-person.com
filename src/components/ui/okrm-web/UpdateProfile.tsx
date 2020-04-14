import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Modal, notification, Row, Upload } from 'antd';
import { RcFile, UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AVATAR_ACCEPT_IMAGE } from '../../../constants/App';
import ReturnCode from '../../../constants/ReturnCode';
import { IUserInfo } from '../../../interfaces/UserInfo';
import { getUserInfoMe } from '../../../redux/userInfo';
import BindEmail from './update/email/bindEmail';
import UnBindEmail from './update/email/unbindEmail';
import BindMobile from './update/mobile/bindMobile';
import UnBindMobile from './update/mobile/unbindMobile';

interface IProps {
    onGetUserInfoMe(callback?: () => void): void;
    close: () => void
    visible: boolean
    userInfo: IUserInfo
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
}

const UpdateProfile = (props: IProps) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined)
    const [modifyEmailOpened, setModifyEmailOpened] = useState(false)
    const [modifyMobileOpened, setModifyMobileOpened] = useState(false)

    useEffect(() => {
        setAvatarUrl(props?.userInfo?.avatar)
    }, [avatarUrl, props])
    useEffect(() => {
        props?.userInfo && form.setFieldsValue(props?.userInfo)
    }, [form, props])
    const handleCancel = () => {
        props.close()
    }
    const handleOk = async () => {
        setLoading(true)
        try {
            await form.validateFields()
            props.close()
        } finally {
            setLoading(false)
        }
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    const beforeUpload = (file: RcFile, fileList: RcFile[]): boolean | PromiseLike<void> => true
    const avatarChange = (info: UploadChangeParam<UploadFile<any>>) => {
        let { file } = info
        let { status, response } = file
        if (status === 'uploading') {
            setLoading(true)
        }
        if (status === 'done') {
            let { code, content, data } = response
            if (code === ReturnCode.CORRECT) {
                notification.info({
                    message: "消息！",
                    description: content,
                })
                setAvatarUrl(data)
                setLoading(false)
            } else {
                notification.error({
                    message: "消息！",
                    description: content,
                })
            }
        }
    }
    const onSuccess = () => {
        props.onGetUserInfoMe()
        setModifyEmailOpened(false)
        setModifyMobileOpened(false)
    }
    return (
        <Modal forceRender
            visible={props.visible}
            title="更新信息"
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>取消</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>保存</Button>,
            ]}>
            <Form form={form} {...layout} onFinish={() => { }}
                initialValues={props?.userInfo}>
                <Form.Item
                    label="头像"
                    name="avatar"
                    rules={[{ required: true, message: '请选择或上传一张用户头像' }]}>
                    <Upload name="avatar" action="/api/upload/image" multiple={false} listType="picture-card" accept={AVATAR_ACCEPT_IMAGE} className="avtar-uploader" showUploadList={false} beforeUpload={beforeUpload} onChange={avatarChange}>
                        {avatarUrl ? <img src={avatarUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item name="username" label="用户名" rules={[{ required: true, message: '用户名不能为空！' }]} >
                    <Input />
                </Form.Item>
                <Form.Item name="nickname" label="昵称" rules={[{ required: true, message: '昵称不能为空！' }]} >
                    <Input />
                </Form.Item>
                <Form.Item label="电子邮箱" rules={[{ required: true }]} >
                    <Row gutter={6}>
                        <Col span={16}>
                            <Form.Item name="email" rules={[{ required: true, message: '电子邮箱不能为空！' }, { type: "email", message: "电子邮箱格式不正确！"}]} noStyle>
                                <Input disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button onClick={() => setModifyEmailOpened(true)}>更改邮箱</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="手机号" >
                    <Row gutter={6}>
                        <Col span={16}>
                            <Form.Item name="mobile" rules={[{ required: true, message: '手机号不能为空！' } ]} noStyle>
                                <Input disabled />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Button onClick={() => setModifyMobileOpened(true)}>更改手机号</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item name="birthday" label="生日" >
                    <DatePicker />
                </Form.Item>
                <Form.Item name="identityCard" label="实名制" >
                    <Input disabled />
                </Form.Item>
            </Form>
            { props?.userInfo?.email ? <UnBindEmail visible={modifyEmailOpened} email={props?.userInfo?.email} onSuccess={onSuccess} onClose={() => setModifyEmailOpened(false)} /> :  <BindEmail visible={modifyEmailOpened} onSuccess={onSuccess} onClose={() => setModifyEmailOpened(false)} /> }
            { props?.userInfo?.mobile ? <UnBindMobile visible={modifyMobileOpened} mobile={props?.userInfo?.mobile} onSuccess={onSuccess} onClose={() => setModifyMobileOpened(false)} /> :  <BindMobile visible={modifyMobileOpened} onSuccess={onSuccess} onClose={() => setModifyMobileOpened(false)} /> }
        </Modal>
    )
}

const mapStateToProps = (state: any) => ({
    userInfo: state.userInfo.userInfo,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onGetUserInfoMe: getUserInfoMe
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProfile)
