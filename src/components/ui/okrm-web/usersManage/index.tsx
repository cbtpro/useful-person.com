import React, { useState, useEffect } from 'react'

import { DatePicker, Table, Button, Form, Row, Col, Input, Select } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

import { usersColumns } from './columns';
import { IUsersResponse, IUserInfo } from '../../../../interfaces/UserInfo';

import { post } from '../../../../http'
import { IResponseData, IPageable } from '../../../../interfaces/ResponseData'
import { QUERY_USERS_URL } from '../../../../constants/urls'
import { PaginationConfig } from 'antd/lib/pagination/Pagination';

const { RangePicker } = DatePicker
const { Option } = Select

export default () => {
    let [expand, setExpand] = useState(false)
    let [loading, setLoading] = useState(false)
    let [username, setUserName] = useState('')
    let [nickname, setNickname] = useState('')
    let [mobile, setMobile] = useState('')
    let [email, setEmail] = useState('')
    let [registerTimeFrom, setRegisterTimeFrom] = useState<string | number | undefined>()
    let [registerTimeTo, setRegisterTimeTo] = useState<string | number | undefined>()
    let [enabled, setEnabled] = useState<"true" | "false" | undefined>(undefined)
    const [users, setUsers] = useState<IUsersResponse>(undefined)
    const [pagination, setPagination] = useState<PaginationConfig>({
        defaultPageSize: 10,
        position: ['bottomCenter']
    })
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
        queryUsers()
    }
    const queryUsers = async (params = {}) => {
        setLoading(true)
        try {
            let queryParams = {
                username,
                nickname,
                mobile,
                email,
                registerTimeFrom,
                registerTimeTo,
                enabled
            }
            const { content, totalElements } = await post<IResponseData<IPageable<IUserInfo>>>(QUERY_USERS_URL, {...params, ...queryParams}) as IPageable<IUserInfo>
            setPagination({...pagination, ...{total: totalElements}})
            setUsers(content as IUserInfo[]);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        queryUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onChange = (newPagination: any, filters: any, sorter: any) => {
        setPagination({...pagination, ...{current: newPagination.current}})
        queryUsers({
            results: newPagination.pageSize,
            page: newPagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        })
    }
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
                                <RangePicker onChange={dates => {
                                    if (dates) {
                                        setRegisterTimeFrom(dates[0]?.valueOf())
                                        setRegisterTimeTo(dates[1]?.valueOf())
                                    } else {
                                        setRegisterTimeFrom(undefined)
                                        setRegisterTimeTo(undefined)
                                    }
                                }} placeholder={["注册开始日期", "注册结束日期"]} allowEmpty={[true, true]} allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Select onChange={(value) => setEnabled(value)} placeholder="用户状态" optionLabelProp="label" value={enabled} allowClear style={{ width: '100%' }}>
                                    <Option value="true" label="正常">
                                        正常
                            </Option>
                                    <Option value="false" label="小黑屋">
                                        小黑屋
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
        <Table rowKey="uuid" columns={usersColumns} dataSource={users} pagination={pagination} loading={loading} onChange={onChange} className="table" />
    </>
}