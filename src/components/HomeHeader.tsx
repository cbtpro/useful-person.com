import React from 'react'
import { Layout } from 'antd'
import HeaderMenu from './HeaderMenu'
import HomeLogo from './HomeLogo'
import HomeUserInfo from './HomeUserInfo'

export default () => {
  return (
    <Layout.Header>
      <HomeLogo style={{ float: 'left' }} />
      <HomeUserInfo />
      <HeaderMenu style={{ float: 'right' }} />
    </Layout.Header>
  )
}
