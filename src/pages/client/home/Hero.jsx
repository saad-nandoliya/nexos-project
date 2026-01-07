import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../../../../public/prodeImage/heroImage.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white bottom-0">

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Nexus Global Overseas - Exporters of Premium Indian Spices"
        className="w-full h-[55vh] sm:h-[58vh] md:h-[60vh] lg:h-auto object-cover bg-white lg:-mt-[110px]"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex md:items-start 2xl:top-52 lg:left-40  md:bottom-28 top-20 left-2 sm:top-0  ">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-12 sm:pt-14 md:pt-24 lg:pt-36">
          <div className="max-w-md lg:max-w-lg">

            {/* Heading */}
            <h1 className="text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-gray-800 leading-tight"
             style={{ fontFamily: "Aparajita" }}
            >
              Exporters of Premium
            </h1>

            {/* Sub Heading */}
            <h2 className="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-2xl 3xl:text-3xl font-bold text-gray-700 mt-1 mb-2"
            style={{ fontFamily: "Aparajita" }}
            >
              Indian Spices & Food Products {" "}
              <span className="text-xs md:text-sm lg:text-sm font-normal"
              style={{ fontFamily: "Aparajita" }}
              >to the</span>{" "}
              <span className="text-xs md:text-sm lg:text-md xl:text-lg  font-bold"
              style={{ fontFamily: "Aparajita" }}
              >
                World
              </span>
            </h2>


<div className="mb-7">
            {/* Divider */}
            <div className="border-b border-gray-400 md:w-3/4 w-2/4 2xl:w-full "></div>
              <p className="text-[5px] md:text-[9.7px]  2xl:text-[12.8px] 3xl:text-[14px] text-gray-600 pb-1  inline-block font-medium tracking-wide"
              style={{ fontFamily: "Arial" }}
              >
                Manufactured by Abaad Masala & Co. (India) || Exported by Nexus Global Overseas
              </p>
            <div className="border-b border-gray-400 md:w-3/4 w-2/4 2xl:w-full mb-2"></div>


</div>

            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="inline-block px-5 md:px-6 py-2 md:py-2.5 text-white text-xs sm:text-sm md:text-sm font-semibold rounded transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#F58634" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d96b20")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#F58634")}
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
