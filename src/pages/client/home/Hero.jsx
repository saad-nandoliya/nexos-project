import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../../../../public/prodeImage/heroImage.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-white">
      {/* 
        Container is relative. 
        Image is w-full h-auto so it scales naturally without cropping.
        Block display ensures no extra bottom space.
      */}
      <div className="w-full ">
        <img
          src={heroImage}
          alt="Nexus Global Overseas - Exporters of Premium Indian Spices"
          className="w-full h-auto object-contain block relative sm:-top-36 top-0"
        />
      </div>

      {/* 
        Content Overlay 
        Absolute position over the image.
        Uses percent/vw to scale perfectly with the image.
        Flex layout to place text correctly relative to image aspect ratio.
        Changed justify-center -> justify-start + pt-[12%] to move text "thoda upar"
      */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-start pt-[9%] px-[4%]">
        
        {/* Max width container to align with design (approx left half) */}
        <div className="w-[55%] flex flex-col gap-[1vw] sm:gap-[1.5vw]">
          
          {/* Main Heading */}
          <h1 className="font-bold text-gray-900 leading-[1.1]  
            text-[4.5vw] 
            min-[1441px]:text-[60px]"
          >
            Exporters of Premium
          </h1>

          {/* Sub Heading */}
          <h2 className="font-bold text-gray-700 leading-[0.5]
            text-[2.5vw]
            min-[1441px]:text-[35px]"
          >
            Indian Spices & Food Products{" "}
            <span className="font-normal text-[0.6em]">to the</span>{" "}
            <span className="font-bold text-[1.1em]">World</span>
          </h2>

          {/* Divider & Manufacturer Info */}
          <div className="w-[90%] my-[0.5vw]">
            <div className="border-b border-gray-400 w-full mb-[0.5vw]"></div>
            <p className="font-medium text-gray-600 tracking-wide
              text-[1.8vw]
              min-[1441px]:text-[16px]"
            >
              Manufactured by Abaad Masala & Co. (India) || Exported by Nexus Global Overseas
            </p>
            <div className="border-b border-gray-400 w-full mt-[0.5vw]"></div>
          </div>

           {/* CTA Button */}
           <div className="mt-[1vw]">
            <NavLink
              to="/contact"
              className="inline-block rounded font-semibold text-white tracking-wide transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:scale-105
              px-[2.5vw] py-[0.8vw] text-[2.5vw]
              min-[1441px]:px-[32px] min-[1441px]:py-[12px] min-[1441px]:text-[18px]"
              style={{ backgroundColor: "#F58634" }}
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