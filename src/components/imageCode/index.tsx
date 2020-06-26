import { LoadingOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

const ImageCode = () => {
    const [now, setNow] = useState<number>(0)
    let src = `/api/code/captcha.jpg?_t=${now}`
    const [loading, setLoading] = useState(true)
    return (<>
        <img src={src}
            className={`captcha ${loading ? 'hidden' : ''}`}
            onClick={() => {
                setNow(Date.now())
                setLoading(true)
            }}
            onLoad={() => {
                setLoading(false)
            }}
            onError={() => {
                setLoading(false)
            }}
            alt="点击刷新"
            title="点击刷新"
        />
        <div className={`${loading ? '' : 'hidden'}`}><LoadingOutlined />加载中...</div>
    </>
    )
}

export default ImageCode