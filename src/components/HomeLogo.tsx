import React from 'react'
import logoImage from '../../assets/images/logo.png'
// const logoImage = require('../../assets/images/logo.png');

const logoImageStyle = {
  width: 180
}

const Logo = () => {
    return (
      <>
        <img style={logoImageStyle} src={logoImage} alt="生而不庸" />
        <style jsx>{`
        `}</style>
      </>
    );
}
export default Logo;