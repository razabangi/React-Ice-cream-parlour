import React from "react";
import "./site-info.css";

const SiteInfo = () => {
    return(
        <div className="container">
            <div className="site">
                <ul className="site-info">
                    <li>Products</li>
                    <li>Our Story</li>
                    <li>Flavors</li>
                    <li>Our Location</li>
                </ul>
            </div>
        </div>
    );
}

export default SiteInfo;