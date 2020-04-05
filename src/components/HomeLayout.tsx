import React from 'react'
import HomeHeader from './HomeHeader'
import HomeFooter from './HomeFooter'

const HomeLayout: React.FC = (props) => {
  return (
    <>
      <HomeHeader />
      {props.children}
      <HomeFooter />
    </>
  )
}
export default HomeLayout