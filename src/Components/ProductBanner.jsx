import React from "react";
import "./product-banner.css";
import ProductImage from "../Assets/images/product-slider-removebg-preview.png";

const ProductSlider = () => {
    return (
        <div className="container">
            <section className="product-slider">
                <div className="product-info">
                    <h4>New Flavor</h4>
                    <h2>The Twist of Healthy Yogurt</h2>
                    <div>
                        <p>This website template has been design by Muhammad Raza Bangi.</p>
                        <p>Ice cream Parlour</p>
                        <p>Enjoy the taste with your family & frinds..</p>
                    </div>
                </div>
                <div className="product-image">
                    <img src={ProductImage} alt="" height="auto" width="300" />
                </div>
            </section>
        </div>
    );
}

export default ProductSlider;