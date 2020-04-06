import React from 'react'
import DynamicLoadingComponent from '../../../../utils/dynamicLoadingComponent'

const Profile = DynamicLoadingComponent(import('../profile'), true);
const Dashboard = DynamicLoadingComponent(import('../dashboard'), true);
const Map = DynamicLoadingComponent(import('../map'), true);
const RoadMap = DynamicLoadingComponent(import('../roadMap'), true);
const Event = DynamicLoadingComponent(import('../event'), true);
const About = DynamicLoadingComponent(import('../about'), true);


const menu = [
    {
        name: '我的信息',
        icon: 'user',
        key: 'profile'
    },
    {
        name: 'Dashboard',
        icon: 'bulb',
        key: 'dashboard'
    },
    {
        name: '地图',
        icon: 'message',
        key: 'map'
    },
    {
        name: '路线图',
        icon: 'qq',
        key: 'roadMap'
    },
    {
        name: '事件',
        icon: 'qq',
        key: 'event'
    },
    {
        name: '关于',
        icon: 'info-circle',
        key: 'about'
    }
]

const tabs = {
    Profile: <Profile />,
    Dashboard: <Dashboard />,
    Map: <Map />,
    RoadMap: <RoadMap />,
    Event: <Event />,
    About: <About />,

}

export {
    menu,
    tabs
}