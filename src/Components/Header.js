import React from "react";
import './Header.css';
import HeaderLogo from '../Images/logo.png'

function Header() {
    return (
        <div className="header">
            <p className="header-title">SKELETONS OF FORGOTTEN BLOCKCHAIN</p>
            <img className="header-logo" src={HeaderLogo} />
            <div className="header-metamask">
                <p className="header-metamask_title">Connect with Metamask</p>
            </div>
        </div>
    );
}

export default Header;