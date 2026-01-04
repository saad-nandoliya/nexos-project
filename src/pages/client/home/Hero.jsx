import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../../../../public/prodeImage/heroImage.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Image - Full Width with top cropped on desktop */}
      <img
        src={heroImage}
        alt="Nexus Global Overseas - Exporters of Premium Indian Spices"
        className="w-full h-[60vh] md:h-auto object-cover bg-white md:-mt-[110px]"
      />

      {/* Content Overlay - Positioned on the image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center md:items-start">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full md:pt-28 lg:pt-36">
          <div className="max-w-md lg:max-w-lg bg-transparent p-4 md:p-0">
            {/* Main Heading - Line 1 */}
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-tight">
              Exporters of Premium
            </h1>

            {/* Sub Heading - Line 2 */}
            <h2 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700 mb-3 sm:mb-2 ">
              Indian Spices & Food Products{" "}
              <span className="text-sm sm:text-xs md:text-sm font-normal">to the</span>{" "}
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl font-bold">World</span>
            </h2>
            <div className="border-b border-gray-400 w-3/4 mb-3"></div>
            
            {/* Description with underline */}
            <div className="mb-5 sm:mb-4 md:mb-5">
              <p className="text-xs sm:text-[10px] md:text-xs text-gray-600 pb-1 sm:pb-2 border-b border-gray-400 inline-block font-medium">
                Manufactured by Abaad Masala & Co. (india) || Exported by Nexus Global Oversaes
              </p>
            </div>

            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="inline-block px-6 md:px-6 py-2.5 md:py-2.5 text-white text-sm md:text-sm font-semibold rounded transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#F58634", color: "white" }}
              onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}
              onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}
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
