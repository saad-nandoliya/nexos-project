import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Products from "./Product";
import PopularProducts from "./PopularProducts";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="animate-fadeIn">
        <AboutUs />
        <PopularProducts />
        <Products />
      
        <WhyChooseUs />
 
      </div>
    </div>
  );
};

export default Home;
