import React from 'react'
import logoImage from '../assets/images/logo.png'

interface IProps {
  style?: React.CSSProperties
}
let logoImageStyle = {
  width: 180
}

const HomeLogo = (props: IProps) => {
  let { style } = props
  Object.assign(logoImageStyle, style)
  return <img style={logoImageStyle} src={logoImage} alt="生而不庸" />
}

export default HomeLogo
