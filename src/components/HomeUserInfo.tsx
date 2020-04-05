import React, { CSSProperties } from 'react'
import { Avatar } from 'antd'

interface IProps {
  style?: CSSProperties
}

const HomeUserInfo = (props: IProps) => {
  return <Avatar size="large" style={{ ...props.style }} />
}

export default HomeUserInfo