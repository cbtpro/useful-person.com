import React, { useState } from 'react'

import UserQueryForm from '../components/queryForm/UserQueryForm'
import { Card, Table, Pagination, Button } from 'antd'

import { usersColumns } from './columns';
import { IUsersResponse, IUserInfo } from '../../../../interfaces/UserInfo';
import { PaginationProps } from 'antd/lib/pagination';

export default () => {
    const [users, setUsers] = useState<IUsersResponse>(undefined)
    const [pagination, setPagination] = useState({
        total: 0,
        current: 1,
        pageSize: 10,
        hideOnSinglePage: false,
        pageSizeOptions: ['10', '20', '50', '100'],
        showQuickJumper: true
    })
    const paginationChange = (page: number, pageSize?: number | undefined) => {
        setPagination({ ...pagination, ...{ current: page } })
        // 需重构
        // @ts-ignore
        submitButton.current && submitButton.current.handleClick()
    }
    const onDataChange = (users: IUserInfo[], pagination: any) => {
        setUsers(users);
        setPagination(pagination);
    }
    const submitButton = React.createRef<Button>()
    return <div style={{ padding: 36 }}>
        <Card bordered={true}>
            <UserQueryForm onDataChange={onDataChange} pagination={pagination} submitButton={submitButton} />
            <Table rowKey="uuid" columns={usersColumns} dataSource={users} pagination={pagination} className="table" onChange={(pagination, filters, sorter, extra) => {
                console.log(pagination, filters, sorter, extra)
            }} />
            {/* <Pagination onChange={paginationChange} {...pagination} /> */}
        </Card>
    </div>
}