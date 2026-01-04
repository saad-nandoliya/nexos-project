import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../../../../public/prodeImage/heroImage.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Hero Image - Full Width */}
      <img
        src={heroImage}
        alt="Nexus Global Overseas - Exporters of Premium Indian Spices"
        className="w-full h-auto object-contain"
      />

      {/* Content Overlay - Positioned on the image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="max-w-md lg:max-w-lg">
            {/* Main Heading - Line 1 */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-tight">
              Exporters of Premium
            </h1>

            {/* Sub Heading - Line 2 */}
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700 mb-1 sm:mb-2">
              Indian Spices & Food Products{" "}
              <span className="text-[10px] sm:text-xs md:text-sm font-normal">to the</span>{" "}
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">World</span>
            </h2>

            {/* Description with underline */}
            <div className="mb-3 sm:mb-4 md:mb-5">
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 pb-1 sm:pb-2 border-b border-gray-400 inline-block">
                Manufactured by Abaad Masala & Co. (India) || Exported by Nexus Global Overseas
              </p>
            </div>

            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="inline-block px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-white text-[10px] sm:text-xs md:text-sm font-semibold rounded transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#e07b3c" }}
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
