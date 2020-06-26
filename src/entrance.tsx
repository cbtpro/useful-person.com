import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  let history = useHistory()
  useEffect(() => {
    console.log('正在进入首页')
    setTimeout(() => {
      toOkrmWeb()
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const toOkrmWeb = () => {
    history.push('/portal/')
  }
  return <p>正在进入首页</p>
}