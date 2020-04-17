import React from 'react'
import { UserOutlined, DashboardOutlined, QuestionOutlined, InfoCircleOutlined, TeamOutlined, CompassOutlined, EyeOutlined } from '@ant-design/icons'

// import AsyncLoadComponet from '../../../../utils/dynamicLoadingComponent'
import AsyncLoadComponet from '../../../../utils/asyncComponent'

const Profile = AsyncLoadComponet(import('../profile'))
const Dashboard = AsyncLoadComponet(import('../dashboard'))
const UsersManage = AsyncLoadComponet(import('../usersManage'))
const Map = AsyncLoadComponet(import('../map'))
const RoadMap = AsyncLoadComponet(import('../roadMap'))
const Event = AsyncLoadComponet(import('../event'))
const About = AsyncLoadComponet(import('../about'))

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
        name: '注册用户列表',
        key: 'user',
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
    'profile': <Profile />,
    'dashboard': <Dashboard />,
    'user': <UsersManage />,
    'map': <Map />,
    'roadMap': <RoadMap />,
    'event': <Event />,
    'about': <About />
}

export {
    menu,
    tabs
}