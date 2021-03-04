import React, { useState, useEffect } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import { ColumnProps } from 'antd/lib/table/Column'
import { DatePicker, Table, Button, Form, Row, Col, Input, Select, TablePaginationConfig } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { IUsersResponse, IRole, IUserInfo } from '../../../../interfaces/UserInfo'
import { post } from '../../../../http'
import { IResponseData, IPageable } from '../../../../interfaces/ResponseData'
import { QUERY_USERS_URL } from '../../../../constants/urls'
import { addPane, togglePane } from '../../../../redux/appSettings'
import UserDetail from './UserDetail'

const { RangePicker } = DatePicker
const { Option } = Select

interface IProps {
    panes: IPane[]
    onAddPane(pane: IPane): void
    onTogglePane(key: string): void
}

const Users = (props: IProps) => {
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
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        defaultPageSize: 10,
        position: ['bottomCenter']
    })

    const openUserDetail = (record: IUserInfo) => {
        const panes = props.panes
        const uuid = record.uuid as string
        if (!panes.some(pane => pane.key === uuid)) {
            const name = record.username || record.nickname || ''
            let userInfoPane = {
                name: `用户${name}详情`,
                key: uuid,
                content: <UserDetail userInfo={record} />
            }
            props.onAddPane(userInfoPane)
        }
        props.onTogglePane(uuid)
    }

    const usersColumns: ColumnProps<any>[]  = [
        {
            title: '头像',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar) => <img src={avatar} style={{ width: '32px' }} alt={avatar} />
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            render: (text: string) => text
        },
        {
            title: '昵称',
            dataIndex: 'nickname',
            key: 'nickname'
        },
        {
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday',
            render: (text: string) => text ? moment(text).format('YYYY-MM') : '-'
        },
        {
            title: '实名制',
            dataIndex: 'identityCardNo',
            key: 'identityCardNo',
            render: (text: string) => text ? '已实名' : '未实名',
            sorter: true,
        },
        {
            title: '电子邮件',
            dataIndex: 'email',
            key: 'email',
            render: (text: string) => text ? text : '-'
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
            key: 'mobile',
            render: (text: string) => text ? text : '-'
        },
        // {
        //     title: '位置信息',
        //     dataIndex: 'location',
        //     key: 'location'
        // },
        {
            title: '状态',
            dataIndex: 'enabled',
            key: 'enabled',
            render: (text: boolean) => text === false ? '小黑屋' : '正常'
        },
        {
            title: '类型',
            dataIndex: 'roles',
            key: 'roles',
            filters: [
                { text: '普通用户', value: 'NORMAL' },
                { text: 'VIP用户', value: 'VIP' },
                { text: '机构用户', value: 'ORG' },
                { text: '管理员用户', value: 'ADMIN' },
            ],
            render: (roles: IRole[]) => roles.map(role => role.rolename).join(', ')
        },
        // {
        //     title: '最后登陆时间',
        //     dataIndex: 'lastSigninTime',
        //     key: 'lastSigninTime'
        // },
        {
            title: '注册时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (text: string) => text && moment(text).format('YYYY-MM-DD HH:mm'),
            sorter: true,
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record) => {
                return <>
                    <Button type="link" onClick={() => openUserDetail(record)} >详情</Button>
                </>
            }
        }
    ]
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

const mapStateToProps = (state: any) => ({
    panes: state.appSettings.panes
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    onAddPane: addPane,
    onTogglePane: togglePane
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Users)