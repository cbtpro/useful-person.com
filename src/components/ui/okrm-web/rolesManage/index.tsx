import React, { useEffect, useState } from 'react'
import { Table, Button, Popconfirm } from 'antd'
import moment from 'moment'
import { post, del } from '../../../../http'
import { QUERY_ROLES_URL, DEL_ROLE_URL } from '../../../../constants/urls'
import { IRolesResponse, IRole } from '../../../../interfaces/UserInfo'
import SaveRole from './saveRole'
import { IResponseData } from '../../../../interfaces/ResponseData'

const RolesManage = () => {
    const [loading, setLoading] = useState(false)
    const [addRoleVisible, setAddRoleVisible] = useState(false)
    const [roleModalVisible, setRoleModalVisible] = useState(false)
    const [roles, setRoles] = useState<IRolesResponse>()
    const [selectRole, setSelectRole] = useState<IRole>()

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
        },
        {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text: string, record: IRole) => {
                return <>
                    <Button type="link" onClick={() => { updateRole(record) }}>修改</Button>
                    <Popconfirm title="确认删除？" onConfirm={() => deleteRole(record)}>
                        <Button type="link">删除</Button>
                    </Popconfirm>
                </>
            }
        }
    ]
    const updateRole = async (role: IRole) => {
        setSelectRole(role)
        setRoleModalVisible(true)
    }
    const deleteRole = async (role: IRole) => {
        setLoading(true)
        try {
            await del(DEL_ROLE_URL, {uuid: role.uuid})
            fetch()
        } finally {
            setSelectRole(undefined)
            setLoading(false)
        }
    }

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
    const addRole = async () => {
        setAddRoleVisible(true)
    }
    const addRoleCancel = async () => {
        setAddRoleVisible(false)
    }
    const addRoleSuccess = () => {
        setAddRoleVisible(false)
        fetch()
    }
    const saveRoleCancel = () => {
        setSelectRole(undefined)
        setRoleModalVisible(false)
    }
    const saveRoleSuccess = () => {
        setRoleModalVisible(false)
        fetch()
    }
    useEffect(() => {
        fetch()
    }, [])
    return <>
        <Button onClick={addRole}>添加角色</Button>
        <Table rowKey="uuid" columns={columns} dataSource={roles} pagination={false} onChange={onChange} loading={loading} className="table" />
        <SaveRole key="addRole" visible={addRoleVisible} onCancel={addRoleCancel} onSuccess={addRoleSuccess} />
        <SaveRole key="updateRole" visible={roleModalVisible} role={selectRole} onCancel={saveRoleCancel} onSuccess={saveRoleSuccess} />
    </>
}

export default RolesManage
