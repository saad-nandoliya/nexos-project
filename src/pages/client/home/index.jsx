import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Products from "./Product";
import PopularProducts from "./PopularProducts";
import ContactUs from "./ContactSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../leadership/Leadership";
import Showcase from "./Showcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="animate-fadeIn">
        <AboutUs />
        <PopularProducts />
        <Products />
        {/* <Showcase /> */}
        <WhyChooseUs />
        {/* <Testimonials /> */}
        {/* <ContactUs /> */}
      </div>
    </div>
  );
};

export default Home;
