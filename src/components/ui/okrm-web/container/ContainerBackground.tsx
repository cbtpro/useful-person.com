import React from 'react'

import { Carousel } from 'antd'

const items: {
    id: string,
    cover: string,
    url?: string
}[] = [
    {
        id: '1',
        cover: 'http://img5.imgtn.bdimg.com/it/u=331134153,3887827400&fm=26&gp=0.jpg'
    },
    {
        id: '2',
        cover: 'http://img5.imgtn.bdimg.com/it/u=3796740409,1068808904&fm=26&gp=0.jpg',
        url: 'https://www.baidu.com'
    },
    {
        id: '3',
        cover: 'http://img0.imgtn.bdimg.com/it/u=874189915,901594199&fm=26&gp=0.jpg',
        url: 'https://www.qq.com'
    },
    {
        id: '4',
        cover: 'http://img4.imgtn.bdimg.com/it/u=2641992829,1192908087&fm=26&gp=0.jpg'
    }
]

export default () => {
    return <Carousel dotPosition="top" autoplay={true} effect="fade">
    {
        items.map(item => {
            let { id, cover, url } = item
            let temp: JSX.Element
            let img = <img src={cover} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
            if (url) {
                temp = <a href={url} target="_blank" rel="noopener noreferrer">{img}</a>
            } else {
                temp = img
            }
            return <div key={id} className="container-background">{temp}</div>
        })    
    }
    </Carousel>
}