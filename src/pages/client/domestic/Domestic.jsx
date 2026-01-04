import React from "react";

const spicesProducts = [
  {
    id: 1,
    name: "Turmeric Powder",
    image:
      "https://images.pexels.com/photos/1438447/pexels-photo-1438447.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Red Chilli Powder",
    image:
      "https://images.pexels.com/photos/47347/chilli-ras-el-hanout-spices-spice-47347.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Coriander Powder",
    image:
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Cumin Powder",
    image:
      "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Garam Masala",
    image:
      "https://images.pexels.com/photos/3730947/pexels-photo-3730947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Chicken Masala",
    image:
      "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Meat Masala",
    image:
      "https://images.pexels.com/photos/1473728/pexels-photo-1473728.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Pav Bhaji Masala",
    image:
      "https://images.pexels.com/photos/3642717/pexels-photo-3642717.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Chaat Masala",
    image:
      "https://images.pexels.com/photos/6542791/pexels-photo-6542791.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "Kitchen King Masala",
    image:
      "https://images.pexels.com/photos/6542790/pexels-photo-6542790.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Sambhar Masala",
    image:
      "https://images.pexels.com/photos/4109900/pexels-photo-4109900.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Biryani Masala",
    image:
      "https://images.pexels.com/photos/5117639/pexels-photo-5117639.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    name: "Panipuri Masala",
    image:
      "https://images.pexels.com/photos/4611425/pexels-photo-4611425.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    name: "Tea Masala",
    image:
      "https://images.pexels.com/photos/4820740/pexels-photo-4820740.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    name: "Fish Masala",
    image:
      "https://images.pexels.com/photos/3296273/pexels-photo-3296273.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    name: "Sabzi Masala",
    image:
      "https://images.pexels.com/photos/763934/pexels-photo-763934.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 17,
    name: "Rasam Powder",
    image:
      "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 18,
    name: "Curry Powder",
    image:
      "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 19,
    name: "Tandoori Masala",
    image:
      "https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 20,
    name: "Chole Masala",
    image:
      "https://images.pexels.com/photos/4611428/pexels-photo-4611428.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function Domestic() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Top title */}
      <div className="w-full bg-white py-8">
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900">
          SPICES & BLENDED MASALA
        </h2>
      </div>

      {/* Cards grid - with smaller, fixed-width cards */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
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
