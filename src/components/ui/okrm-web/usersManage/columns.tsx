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
        render: (text: string) => text ? '已实名' : '未实名'
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
        render: (text: boolean) => text ? '正常' : '小黑屋'
    },
    {
        title: '类型',
        dataIndex: 'roles',
        key: 'roles'
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
        render: (text: string) => text && moment(text).format('YYYY-MM-DD HH:mm')
    }
]