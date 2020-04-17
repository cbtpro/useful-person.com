import React, { useState } from 'react'

import UserQueryForm from '../components/queryForm/UserQueryForm'
import { Card, Table } from 'antd'

import { usersColumns } from './colums';
import { IUsersResponse } from '../../../../interfaces/UserInfo';

export default () => {
    const [users, setUsers] = useState<IUsersResponse>(undefined)
    return <div style={{ padding: 36 }}>
        <Card bordered={true}>
            <UserQueryForm onDataChange={(users) => { setUsers(users)}} />
            <Table columns={usersColumns} dataSource={users} className="table" />
        </Card>
    </div>
}