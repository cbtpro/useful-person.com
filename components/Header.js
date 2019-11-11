import Logo from './Logo.js'
import Language from './Language.js';
import NavbarMenu from './NavbarMenu.js'
import MiniMenu from './MiniMenu.js'
// import UserInfo from './UserInfo.js'

const Header = () => {
    return (<div className="navbar">
        <style jsx>{`
            
        `}</style>
        <div className="navbar-brand">
            <div className="" >
                <Logo />
            </div>
            <NavbarMenu />
            {/* <div className="navbar-item navbar-title navbar-language">
                <Language />
            </div> */}
            {/* <UserInfo /> */}
            <MiniMenu />
        </div>
    </div>)
};

export default Header;
