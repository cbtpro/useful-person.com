import React from 'react'
import { Avatar } from 'antd'

interface IProps {
  style: React.CSSProperties
}

const HomeUserInfo = (props: IProps) => {
  return <Avatar style={props.style} size="large" />
}

export default HomeUserInfo