import React, { useState, useEffect } from 'react'
import { Table, Form, Select, Row, Col, Button, Avatar } from 'antd'
import debounce from 'lodash/debounce';
import { post } from '../../../../http'
import { QUERY_USERS_HASADMIN, QUERY_USERS_URL } from '../../../../constants/urls'
import { IUserInfo } from '../../../../interfaces/UserInfo'
import { SelectValue } from 'antd/lib/select'
import { IResponseData, IPageable } from '../../../../interfaces/ResponseData'
const { Option } = Select

const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        sorter: true
    }
]

export default () => {
    const [normalUsers, setNormalUsers] = useState<IUserInfo[]>()
    const [selectUsers, setSelectUsers] = useState<IUserInfo[]>()
    const [fetching, setFetching] = useState(false)
    const [admins, setAdmins] = useState()
    let fetchUsersHasNoAdmin = debounce(async (value: SelectValue) => {
        setFetching(true)
        setNormalUsers([])
        const { content, totalElements } = await post<IResponseData<IPageable<IUserInfo[]>>>(QUERY_USERS_URL, { username: value }) as IPageable<IUserInfo>
        setNormalUsers(content as IUserInfo[])
    }, 800)
    useEffect(() => {
        const fetchAdmins = async () => {
            await post(QUERY_USERS_HASADMIN, {})
            
        }
        fetchAdmins()
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
    const handleChange = (value: SelectValue) => {
        setFetching(false)
        setNormalUsers([])
    }
    return <>
        <Form>
            <Form.Item >
                <Row gutter={24}>
                    <Col span="16">
                        <Select mode="multiple" placeholder="选择一个需要授权的普通用户" onSearch={fetchUsersHasNoAdmin} onChange={handleChange} optionLabelProp="label">
                            {options}
                        </Select>
                    </Col>
                    <Col span="8">
                        <Button type="danger">添加管理员权限</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
        <Table columns={columns} dataSource={admins}></Table>
    </>
}