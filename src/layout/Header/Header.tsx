import React from "react";
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="" />
            </nav>
        </header>
    )
}

export default Header;