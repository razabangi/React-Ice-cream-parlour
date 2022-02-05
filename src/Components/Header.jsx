import React from "react";
import "./header.css";
import Logo from "../Assets/images/logo.png";

const Header = () => {
    return (
        <div className="container">
            <header>            
                <div className="logo">
                    <img src={Logo} alt="" width="80" height="80" />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                        <li>Feedbacks</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;