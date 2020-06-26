import React, { Suspense } from 'react'
import { UserOutlined, DashboardOutlined, QuestionOutlined, InfoCircleOutlined, TeamOutlined, CompassOutlined, EyeOutlined, KeyOutlined } from '@ant-design/icons'
import Loading from '../../../loading'

const Profile = React.lazy(() => import('../profile'))
const Dashboard = React.lazy(() => import('../dashboard'))
const RolesManage = React.lazy(() => import('../rolesManage'))
const AuthorityManagement = React.lazy(() => import('../authorityManagement'))
const Users = React.lazy(() => import('../users'))
const Map = React.lazy(() => import('../map'))
const RoadMap = React.lazy(() => import('../roadMap'))
const Event = React.lazy(() => import('../event'))
const About = React.lazy(() => import('../about'))

export interface IMenu {
    name: string;
    key: string;
    icon: any
}

const menu: IMenu[] = [
    {
        name: '我的信息',
        key: 'profile',
        icon: <UserOutlined />
    },
    {
        name: '上帝视角',
        key: 'dashboard',
        icon: <EyeOutlined />
    },
    {
        name: '角色管理',
        key: 'roleManagement',
        icon: <KeyOutlined />
    },
    {
        name: '权限管理',
        key: 'authorityManagement',
        icon: <KeyOutlined />
    },
    {
        name: '注册用户列表',
        key: 'users',
        icon: <TeamOutlined />
    },
    {
        name: '地图',
        key: 'map',
        icon: <DashboardOutlined />
    },
    {
        name: '路线图',
        key: 'roadMap',
        icon: <CompassOutlined />
    },
    {
        name: '事件',
        key: 'event',
        icon: <QuestionOutlined />
    },
    {
        name: '关于',
        key: 'about',
        icon: <InfoCircleOutlined />
    }
]

const tabs: ITabs = {
    'profile': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><Profile /></Suspense>,
    'dashboard': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><Dashboard /></Suspense>,
    'roleManagement': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><RolesManage /></Suspense>,
    'authorityManagement': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><AuthorityManagement /></Suspense>,
    'users': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><Users /></Suspense>,
    'map': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><Map /></Suspense>,
    'roadMap': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><RoadMap /></Suspense>,
    'event': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><Event /></Suspense>,
    'about': <Suspense fallback={<Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />}><About /></Suspense>
}

export {
    menu,
    tabs
}