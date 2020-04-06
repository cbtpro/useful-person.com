import React, { useState } from 'react'

const ImageCode = () => {
    const [ now, setNow ] = useState<number>(0)
    let src = `/api/code/captcha.jpg?_t=${now}`
    return (<img src={src}
        className="captcha"
        onClick={() => {
            setNow(Date.now())
        }}
        alt="点击刷新"
    />)
}

export default ImageCode