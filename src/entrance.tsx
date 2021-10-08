import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()
  useEffect(() => {
    console.log('正在进入首页')
    const toOkrmWeb = () => {
      history.push('/portal/')
    }
    setTimeout(() => {
      toOkrmWeb()
    }, 1000)
  }, [history])
  
  return <p>正在进入首页</p>
}