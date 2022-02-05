import React from "react";
import SliderImage from "../Assets/images/slider.jpg";

const Slider = () => {
    return (
        <div className="slider container">
            <img src={SliderImage} alt="" width="100%" height="auto" />
        </div>
    );
}

export default Slider;