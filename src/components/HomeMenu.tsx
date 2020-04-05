import React from 'react'
import { Menu } from 'antd'

const NavbarMenu = () => {
    return <>
        <style jsx global>{`
            .navbar-menu {
                float: left;
            }
            @media screen and (min-width: 768px) {
                .navbar-menu {
                    float: right;
                }
            }
        `}</style>
    </>
}

export default NavbarMenu
