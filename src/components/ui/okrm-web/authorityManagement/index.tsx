import React, { useState, useEffect } from 'react'
import { Table, Form, Select, Row, Col, Button, Avatar, Space, Popconfirm, TablePaginationConfig } from 'antd'
import debounce from 'lodash/debounce';
import { post, put, del } from '../../../../http'
import { QUERY_USERS_HASADMIN, QUERY_USERS_URL, ADD_USERS_TO_ADMIN_ROLE, REMOVE_USER_FROM_ADMIN_ROLE } from '../../../../constants/urls'
import { SelectValue } from 'antd/lib/select'
import moment from 'moment'
const { Option } = Select

export default () => {
    let [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        defaultPageSize: 10,
        position: ['bottomCenter']
    })
    const [normalUsers, setNormalUsers] = useState<IUserInfo[]>()
    const [selectUsernames, setSelectUsernames] = useState<string[]>([])
    const [fetching, setFetching] = useState(false)
    const [admins, setAdmins] = useState<IUsersResponse>()
    let fetchUsersHasNoAdmin = debounce(async (value: SelectValue) => {
        setFetching(true)
        setNormalUsers([])
        const { content } = await post<IResponseData<IPageable<IUserInfo[]>>>(QUERY_USERS_URL, { username: value }) as IPageable<IUserInfo>
        setNormalUsers(content as IUserInfo[])

    }, 800)
    const fetchAdmins = async (params = {}) => {
        setLoading(true)
        try {
            const { content, totalElements } = await post(QUERY_USERS_HASADMIN, {...params}) as IPageable<IUserInfo>
            setPagination({...pagination, ...{total: totalElements}})
            setAdmins(content)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchAdmins()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const options = normalUsers ? normalUsers.map(userInfo => {
        let { uuid, username, nickname, avatar } = userInfo
        return <Option key={uuid} value={username as string} label={username as string}>
            <div>
                <Avatar src={avatar} />
                {` ${username} - ${nickname}`}
            </div>
        </Option>
    }) : <></>

    const removeUserFromAdmin = async (uuid: string) => {
        if (uuid && uuid !== '') {
            await del<IResponseData<string>>(REMOVE_USER_FROM_ADMIN_ROLE,  { uuid: uuid })
            fetchAdmins()
        }
    }
    const handleChange = (value: SelectValue) => {
        setFetching(false)
        setSelectUsernames(value as string[])
    }
    const addUserToAdminRole = async () => {
        if (selectUsernames.length > 0) {
            await put<IResponseData<string>>(ADD_USERS_TO_ADMIN_ROLE, selectUsernames)
            fetchAdmins()
        }
    }

    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            sorter: true
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
        {
            title: '状态',
            dataIndex: 'enabled',
            key: 'enabled',
            render: (text: boolean) => text === false ? '小黑屋' : '正常'
        },
        {
            title: '注册时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (text: string) => text && moment(text).format('YYYY-MM-DD HH:mm'),
            sorter: true,
        },
        {
            title: '操作',
            key: 'action',
            render: (text: string, record: IUserInfo) => (
                <Space size="middle">
                    <Popconfirm
                        title={`要移除${record.username}的管理员权限吗?`}
                        onConfirm={() => removeUserFromAdmin(record.uuid as string)}
                        onCancel={() => {}}
                        okText='要移除'
                        cancelText='不'
                    >
                        <Button type="link">移除{record.username}管理员权限</Button>
                    </Popconfirm>
                </Space>
            ) 
        }
    ]

    const paging = (newPagination: any, filters: any, sorter: any) => {
        setPagination({...pagination, ...{current: newPagination.current}})
        fetchAdmins({
            results: newPagination.pageSize,
            page: newPagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        })
    }
    return <>
        <Form
            onFinish={addUserToAdminRole}
        >
            <Form.Item label="用户" name="username">
                <Row gutter={24}>
                    <Col span="16">
                        <Select mode="multiple" placeholder="选择一个需要授权的普通用户" onSearch={fetchUsersHasNoAdmin} onChange={handleChange} loading={fetching} optionLabelProp="label">
                            {options}
                        </Select>
                    </Col>
                    <Col span="8">
                        <Button type="primary" danger htmlType="submit">添加管理员权限</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
        <Table rowKey="uuid" columns={columns} dataSource={admins} pagination={pagination} loading={loading} onChange={paging}></Table>
    </>
}