import React from "react";
import { NavLink } from "react-router-dom";
import aboutImage from "../../../../public/prodeImage/aboutImafe.png";

const AboutUsSection = () => {
  return (
    <section className="py-2 md:py-0 md:-mt-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Image Section - Left */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImage}
              loading="lazy"
              alt="Nexus Global Overseas - Premium Spices"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

          {/* Content Section - Right */}
          <div className="text-center lg:text-left">
            {/* Title with double underline */}
            <div className="mb-3 md:mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 inline-block">
                <span style={{ color: "#1a5a6e" }}>Who We Are</span>
                <span style={{ color: "#e07b3c" }}>?</span>
              </h2>
              {/* Two lines under heading */}
              <div className="flex flex-col gap-0.5 mt-1">
                <div className="h-0.5 w-28 md:w-52" style={{ backgroundColor: "#1a5a6e" }}></div>
                <div className="h-0.5 w-20 md:w-52" style={{ backgroundColor: "#1a5a6e" }}></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 mb-4 md:mb-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <span style={{ color: "#1a5a6e" }} className="font-medium">Nexus Global Overseas</span>{" "}
                is a trusted Indian export company specializing in premium spices and food products. With strong manufacturing support from{" "}
                <span style={{ color: "#e07b3c" }} className="font-medium">Abaad Masala & Co.</span>, we deliver consistent quality products to international markets under our export brand,{" "}
                <span style={{ color: "#1a5a6e" }} className="font-medium italic">Nexus Global Foods</span>.
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
