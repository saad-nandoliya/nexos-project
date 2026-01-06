import React from "react";

import spice1 from "../../../../public/prodeImage/spice.jpg"
import spice2 from "../../../../public/prodeImage/803bbef1fadd3ad17ccbc86a603287bc9ba04b3b.jpg"
import spice3 from "../../../../public/prodeImage/7ec53cf94f3adcb04a0f401706d14cc0b7c750ca.jpg"
import spice4 from "../../../../public/prodeImage/94c9835b1b9e9e1c85693b11b32d72e60b6cd6e5.jpg"
import spice5 from "../../../../public/prodeImage/f6dbbde14215d8c68a37f1068584c4854d8fefdc.jpg"
import spice6 from "../../../../public/prodeImage/sss.jpg"
import spice7 from "../../../../public/prodeImage/9f067b515d301acc11918a71e9dbc68b85d9d252.jpg"
import spice8 from "../../../../public/prodeImage/3876cf82a665dbfea66e7f82bc10951ed840f196.png"
import spice9 from "../../../../public/prodeImage/5524cb20a3876055a2031fed823ffc4c2dc79450.png"
import spice10 from "../../../../public/prodeImage/852627e292c0de537ed2750ef7fb2adb18f12a0c.png"
import spice11 from "../../../../public/prodeImage/f3537cb1588c7621022e864e1e031fe1dc487d89.png"
import spice12 from "../../../../public/prodeImage/38b939c4ad55e8428842667fbc650922d8ed81d4.png"
import spice13 from "../../../../public/prodeImage/f94dae8878d60359002a2b67875d8814c7cf85de.png"
import spice14 from "../../../../public/prodeImage/4dd05b307971aec6e54e9e956910fac66b660b1a.png"
import spice15 from "../../../../public/prodeImage/95d2c22a62df85975d1e397bbb66c712349779d5.png"
import spice16 from "../../../../public/prodeImage/91c6be6756aaa149f10a4c50e0d1ffe42165a326.png"
import spice17 from "../../../../public/prodeImage/142a924f4684099a6aec5fd62fd2207f5227992a.png"
import spice18 from "../../../../public/prodeImage/1f7bd7ca5672daff165177777d566859cea62f85.png"
import spice19 from "../../../../public/prodeImage/618b879734f4132cfd996ea1b1f5682c25a91135.png"
import spice20 from "../../../../public/prodeImage/ca6baaffe68f640459eeb8927bbec5f026d36920.png"

const spicesProducts = [
  {
    id: 1,
    name: "Turmeric Powder",
    image:spice1
    },
  {
    id: 2,
    name: "Red Chilli Powder",
    image:
      spice2,
  },
  {
    id: 3,
    name: "Coriander Powder",
    image:
      spice3,
  },
  {
    id: 4,
    name: "Cumin Powder",
    image:
      spice4,
  },
  {
    id: 5,
    name: "Garam Masala",
    image:
      spice5,
  },
  {
    id: 6,
    name: "Chicken Masala",
    image:
      spice6,
  },
  {
    id: 7,
    name: "Meat Masala",
    image:
      spice7,
  },
  {
    id: 8,
    name: "Pav Bhaji Masala",
    image:
      spice8,
  },
  {
    id: 9,
    name: "Chaat Masala",
    image:
      spice9,
  },
  {
    id: 10,
    name: "Kitchen King Masala",
    image:
      spice10,
  },
  {
    id: 11,
    name: "Sambhar Masala",
    image:
spice11  },
  {
    id: 12,
    name: "Biryani Masala",
    image:
spice12  },
  {
    id: 13,
    name: "Panipuri Masala",
    image:
spice13  },
  {
    id: 14,
    name: "Tea Masala",
    image:
spice14  ,
  },
  {
    id: 15,
    name: "Fish Masala",
    image:
      spice15,
  },
  {
    id: 16,
    name: "Sabzi Masala",
    image:
      spice16,
  },
  {
    id: 17,
    name: "Rasam Powder",
    image:
      spice17,
  },
  {
    id: 18,
    name: "Curry Powder",
    image:
      spice18,
  },
  {
    id: 19,
    name: "Tandoori Masala",
    image:
      spice19,
  },
  {
    id: 20,
    name: "Chole Masala",
    image:
      spice20,
  },
];

function Domestic() {
  return (
    <div className="min-h-screen w-full bg-white pt-8">
      {/* Top title */}
      <div className="w-full bg-[#EFEFEF] py-4">
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900">
          SPICES & BLENDED MASALA
        </h2>
      </div>

      {/* Cards grid - with smaller, fixed-width cards */}
      <div className="max-w-6xl mx-auto px-6 pb-12 pt-5">
        <div className="flex flex-wrap justify-center gap-6">
          {spicesProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                width: '231px',
                height: '262px',
                borderRadius: '10px'
              }}
            >
              {/* Image box - 194x160 */}
              <div 
                className="bg-gray-100 overflow-hidden mx-auto mt-5 group-hover:scale-105 transition-transform duration-300"
                style={{
                  width: '194px',
                  height: '160px',
                  borderRadius: '10px'
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom button - 186x44 */}
              <div 
                className="mt-auto mb-4 mx-auto bg-[#1a6a84] text-white text-xs font-medium flex items-center justify-center"
                style={{
                  width: '186px',
                  height: '44px',
                  borderRadius: '5px'
                }}
              >
                {product.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA (same as pehle) */}
      <div className="w-full bg-[#F5F5F5] mt-6">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">
            Looking for a Reliable Product Supply?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6">
            Partner with a manufacturer-backed export company.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center px-7 sm:px-12 py-2.5 sm:py-3 text-sm sm:text-base
                       font-semibold text-white bg-[#FF9F32] hover:bg-[#f18a18]
                       rounded-md shadow-md transition-transform transition-colors duration-200 ease-out
                       hover:scale-105"
          >
            Build Your Supply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Domestic;
