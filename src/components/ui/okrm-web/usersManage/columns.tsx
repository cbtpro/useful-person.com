import moment from 'moment'
import { ColumnProps } from 'antd/lib/table/Column'

export const usersColumns: ColumnProps<any>[]  = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
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
        filters: [
            { text: '已实名', value: '' },
            { text: '未实名', value: '' }
        ]
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
        render: (text: boolean) => text ? '正常' : '小黑屋',
        filters: [
            { text: '正常', value: '' },
            { text: '小黑屋', value: '' }
        ]
    },
    {
        title: '类型',
        dataIndex: 'roles',
        key: 'roles',
        filters: [
            { text: '普通用户', value: 'ROLE_NORMAL' },
            { text: '机构用户', value: 'ROLE_ORG' },
            { text: '管理员用户', value: 'ROLE_ADMIN' },
        ],
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
    }
]