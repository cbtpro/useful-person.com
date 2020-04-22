import React, { useState } from 'react'

import UserQueryForm from '../components/queryForm/UserQueryForm'
import { Card, Table } from 'antd'

import { usersColumns } from './columns';
import { IUsersResponse, IUserInfo } from '../../../../interfaces/UserInfo';
import { PaginationProps } from 'antd/lib/pagination';

export default () => {
    const [users, setUsers] = useState<IUsersResponse>(undefined)
    const [pagination, setPagination] = useState<PaginationProps>({
        total: 0,
        current: 1,
        pageSize: 10,
        hideOnSinglePage: false,
        pageSizeOptions: ['10', '20', '50', '100'],
        showQuickJumper: true
    })
    // const paginationChange = (page: number, pageSize?: number | undefined) => {
    //     setPagination({ ...pagination, ...{ current: page } })
    // }
    const onDataChange = (users: IUserInfo[], pagination: PaginationProps) => {
        setUsers(users);
        setPagination(pagination);
    }
    return <div style={{ padding: 36 }}>
        <Card bordered={true}>
            <UserQueryForm onDataChange={onDataChange} pagination={pagination} pageChange={() => {}} />
            <Table rowKey="uuid" onChange={async (pagination, filters, sorter, extra) => {
                await setPagination(pagination)
            }} columns={usersColumns} dataSource={users} pagination={pagination} className="table" />
            {/* <Pagination onChange={paginationChange} {...pagination} /> */}
        </Card>
    </div>
}