import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import Header from "./Components/Header.jsx";
import Slider from "./Components/Slider.jsx";
import ProductBanner from "./Components/ProductBanner.jsx";
import SiteInfo from "./Components/SiteInfo.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductBanner />
      <SiteInfo />
      <Footer />
    </>
  )
}

export default App;