import React from "react";

const riceProducts = [
  {
    id: 1,
    name: "Product Name",
    image: "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Product Name",
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Product Name",
    image: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Product Name",
    image: "https://images.pexels.com/photos/3735192/pexels-photo-3735192.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Product Name",
    image: "https://images.pexels.com/photos/143130/pexels-photo-143130.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Product Name",
    image: "https://images.pexels.com/photos/3735193/pexels-photo-3735193.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 7,
    name: "Product Name",
    image: "https://images.pexels.com/photos/102760/pexels-photo-102760.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 8,
    name: "Product Name",
    image: "https://images.pexels.com/photos/3735188/pexels-photo-3735188.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

function Export() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Top title */}
      <div className="w-full bg-white py-8">
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900">
          RICE (EXPORT GRADE)
        </h2>
      </div>

      {/* Cards grid - with smaller, fixed-width cards */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-6">
          {riceProducts.map((product) => (
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

      {/* Bottom CTA section */}
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Looking for a Reliable Product Supply?
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Partner with a manufacturer-backed export company.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold text-white bg-[#f38d39] hover:bg-[#e27d28] rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Build Your Supply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Export;

