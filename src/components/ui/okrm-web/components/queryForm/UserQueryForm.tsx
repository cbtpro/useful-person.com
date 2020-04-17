import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Input, Button, DatePicker, Select } from 'antd'
import { FormProps } from 'antd/lib/form'
import { IUserInfo, IUsersRequest } from '../../../../../interfaces/UserInfo'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import './UserQueryForm.less'
import { get } from '../../../../../http'
import { IResponseData } from '../../../../../interfaces/ResponseData'
import { QUERY_USERS_URL } from '../../../../../constants/urls'

const { RangePicker } = DatePicker
const { Option } = Select

interface IProps extends FormProps {
    onDataChange(data: IUserInfo[]): void
}

const UserQueryForm = (props: IProps) => {
    let [expand, setExpand] = useState(false)
    let [username, setUserName] = useState('')
    let [nickname, setNickname] = useState('')
    let [mobile, setMobile] = useState('')
    let [email, setEmail] = useState('')
    const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }
    const handleNicknameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setNickname(e.currentTarget.value)
    }
    const handleMobileChange = (e: React.FormEvent<HTMLInputElement>) => {
        setMobile(e.currentTarget.value)
    }
    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const handleSubmit = () => {
        queryUsers({})
    }
    const queryUsers = async (param: IUsersRequest) => {
        const users = await get<IResponseData<IUserInfo[]>>(QUERY_USERS_URL, param)
        props.onDataChange(users as IUserInfo[])
    }
    useEffect(() => {
        queryUsers({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
        <Form>
            <Row gutter={24}>
                <Col>
                    <Form.Item>
                        <Input placeholder="用户名" allowClear value={username} onChange={handleUsernameChange} />
                    </Form.Item></Col>
                <Col>
                    <Form.Item>
                        <Input placeholder="昵称" allowClear value={nickname} onChange={handleNicknameChange} />
                    </Form.Item></Col>
                <Col>
                    <Form.Item>
                        <Input placeholder="手机号" allowClear value={mobile} onChange={handleMobileChange} />
                    </Form.Item></Col>
                <Col>
                    <Form.Item>
                        <Input placeholder="邮箱" allowClear value={email} onChange={handleEmailChange} />
                    </Form.Item></Col>

            </Row>
            {
                expand ?
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item>
                            <RangePicker placeholder={["注册开始日期", "注册结束日期"]} allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item>
                            <Select placeholder="用户状态" optionLabelProp="label" defaultValue={['enabled']} allowClear style={{ width: '100%' }}>
                                <Option value="enabled" label="启用">
                                    启用
                                </Option>
                                <Option value="disabled" label="禁用">
                                    禁用
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row> : ''
            }
            <Row>
                <Col>
                    <Form.Item>
                        <Button type="primary" onClick={handleSubmit}>查询</Button>
                    </Form.Item>
                </Col>
                <Col>                
                    <Button type="link" style={{ fontSize: 12 }} onClick={() => { setExpand(!expand); }} >
                        {expand ? <UpOutlined /> : <DownOutlined />} Collapse
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
}

export default UserQueryForm