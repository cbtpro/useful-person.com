import React, { useEffect, useState } from 'react'
import { Card, Table, Button } from 'antd'
import moment from 'moment'
import { post } from '../../../../http'
import { QUERY_ROLES_URL } from '../../../../constants/urls'
import { IRolesResponse, IRole } from '../../../../interfaces/UserInfo'
import AddRole from './addRole'
import { IResponseData } from '../../../../interfaces/ResponseData'

const columns = [
    {
        title: '角色名称',
        dataIndex: 'rolename',
        key: 'rolename',
        sorter: true,
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        render: (text: string) => text && moment(text).format('YYYY-MM-DD HH:mm'),
        sorter: true,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text: string) => text && moment(text).format('YYYY-MM-DD HH:mm'),
        sorter: true,
    }
]
const RolesManage = () => {
    const [loading, setLoading] = useState(false)
    const [roleModalVisible, setRoleModalVisible] = useState(false)
    const [roles, setRoles] = useState<IRolesResponse>()
    const fetch = async (param = {}) => {
        setLoading(true)
        try {
            const roles = await post<IResponseData<IRole[]>>(QUERY_ROLES_URL, param)
            setRoles(roles as IRole[])
        } finally {
            setLoading(false)
        }
    }
    const onChange = (newPagination: any, filters: any, sorter: any) => {
        fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        })
    }
    const addRoleSuccess = () => {
        setRoleModalVisible(false)
        fetch()
    }
    useEffect(() => {
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
        <Card style={{ margin: '36px' }}>
            <Button onClick={() => {setRoleModalVisible(true)}}>添加角色</Button>
            <Table rowKey="uuid" columns={columns} dataSource={roles} pagination={false} onChange={onChange} loading={loading} className="table" />
            <AddRole visible={roleModalVisible} onCancel={() => {setRoleModalVisible(false)}} onSuccess={addRoleSuccess} />
        </Card>
    </>
}

export default RolesManage
