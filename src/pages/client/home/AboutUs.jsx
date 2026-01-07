import React from "react";
import { NavLink } from "react-router-dom";
import aboutImage from "../../../../public/prodeImage/aboutImafe.png";

const AboutUsSection = () => {
  return (
    <section className="py-10 md:py-0 mt-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">

          {/* Image Section - Left */}
          {/* Image Section - Left Desktop, Bottom Mobile */}
          <div className="flex justify-center lg:justify-start  order-2 lg:order-1">
            <img
              src={aboutImage}
              loading="lazy"
              alt="Nexus Global Overseas - Premium Spices"
              className="w-1/2 max-w-2xl md:w-md lg:w-lg h-auto object-contain mx-auto"
            />
          </div>

          {/* Content Section - Right Desktop, Top Mobile */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Title with double underline */}
            <div className="mb-3 md:mb-4">

  {/* Heading */}
  <h2 className="
    text-2xl md:text-3xl lg:text-4xl 
    font-bold text-gray-800 
    inline-flex items-center gap-1
  ">
    <span style={{ color: "#1a5a6e" }}>Who We Are</span>

    {/* ? with color + shadow */}
    <span
      style={{
        color: "white",
        textShadow: "0px 1px 2px rgba(0,0,0,0.35)",
        fontWeight: 700,
        fontSize: "4rem",
        fontFamily: "Calibri",
        borderRadius: "50%"
      }}
    >
      ?
    </span>
  </h2>

  {/* Double underline — mobile center / desktop left */}
  <div className="
    flex flex-col gap-[3px] mt-1
    items-center md:items-start
  ">
    <div
      className="h-[2px] w-24 sm:w-28 md:w-52"
      style={{ backgroundColor: "#1a5a6e" }}
    ></div>

    <div
      className="h-[2px] w-16 sm:w-20 md:w-52"
      style={{ backgroundColor: "#1a5a6e" }}
    ></div>
  </div>
</div>


            {/* Description */}
            <div className="space-y-3 mb-4 md:mb-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span style={{ color: "#F58634" }} className="font-medium ">Nexus Global Overseas</span>{" "}
                is a trusted Indian export company specializing in premium spices and food products. With strong manufacturing support from{" "}
                <span style={{ color: "#F58634" }} className="font-medium">Abaad Masala & Co.</span>, we deliver consistent quality products to international markets under our export brand,{" "}
                <span style={{ color: "#F58634" }} className="font-medium">Nexus Global Foods</span>.
              </p>
            </div>

            {/* CTA Button */}
            <NavLink
              to="/about"
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 text-white text-sm md:text-base font-semibold rounded-lg border-2 transition-all duration-300 hover:bg-white"
              style={{ backgroundColor: "#F58634" , color: "white", hover: "opacity-80" }}
                 onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}   // darker color
  onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}   // original color
            >
              EXPLORE OUR STORY
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
