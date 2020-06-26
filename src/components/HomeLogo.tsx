import React, { CSSProperties } from 'react'
import logoImage from '../assets/images/logo.png'

interface IProps {
  style?: CSSProperties
}
let logoImageStyle: CSSProperties = {
  width: 180
}

const HomeLogo = (props: IProps) => {

  return <img src={logoImage} alt="生而不庸" style={{...logoImageStyle, ...props.style}} />
}

export default HomeLogo
