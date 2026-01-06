import React from 'react';
import { useNavigate } from 'react-router-dom';


import prod1 from "../../../../public/prodeImage/924342857fa40bb07a6345bca455cad1c9245e25.jpg"
import prod2 from "../../../../public/prodeImage/c99428351b90d4895ca97e521cd662010c831f3f.jpg"
import prod3 from "../../../../public/prodeImage/794ff34af8b87a14d56322ff16ee0defe76d4d9d.jpg"

const productCategories = [
  {
    title: "Spices & Blended Masalas",
    desc: "Premium quality spices sourced from the best farms to ensure the authenticity of taste globally.",
    link: "Read Product",
    path: "/Spices&BlendedMasalas",
    image: prod1
  },
  {
    title: "Rice (Export Grade)",
    desc: "Long grain Basmati & Non-Basmati rice suitable for global cuisines and long-term distribution.",
    link: "Read Product",
    path: "/RiceExportGrade",
    image: prod2
  }
];

const features = [
  { title: "Export Only", detail: "Dedicated to international shipping" },
  { title: "In-House", detail: "Production at Abaad Masala & Co" },
  { title: "Custom", detail: "Tailored specifications" },
  { title: "Global", detail: "Meeting international demand" }
];

const ProductPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-sans text-gray-800 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#1a6a84] text-white py-20 px-6 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <span className="bg-[#418ca4] text-[10px] md:text-xs px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Export Product Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Products Crafted for Global Markets</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Manufactured in India at Abaad Masala & Co. and exported worldwide by Nexus Global Overseas under our international export brand Nexus Global Foods.
          </p>
        </div>
      </section>

      {/* --- PRODUCT RANGE SECTION --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#f38d39] text-xs font-bold uppercase tracking-[0.2em] mb-3 block animate-fade-in">
            Our Product Range
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up delay-100">
            Export-Grade Product Categories
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-12">
            Our product portfolio is developed exclusively for international buyers, distributors, and private-label partners.
          </p>

      <div className="flex flex-wrap justify-center gap-10">
  {productCategories.map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden w-full max-w-md hover:shadow-lg transition-all duration-300"
    >
      {/* Image container like screenshot */}
      <div className="p-3">
  <div className="rounded-2xl overflow-hidden bg-white h-72 flex items-center justify-center">
    <img
      src={item.image}
      alt={item.title}
      className={`w-full h-full ${
        item.title.includes("Rice")
          ? "object-fill"   // rice full visible
          : "object-cover"     // others remain cropped nicely
      }`}
    />
  </div>
</div>

      {/* Content */}
      <div className="px-5 pb-5">
        <h3 className="text-base font-extrabold text-gray-900 mb-1">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 align-start">
          {item.desc}
        </p>

        <button
          onClick={() => navigate(item.path)}
          className="text-[#f38d39] text-xs font-semibold tracking-wider hover:underline"
        >
          {item.link}
        </button>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* --- WHITE LABEL SECTION --- */}
      <section className="bg-[#1a6a84] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white animate-slide-in-left">
            <span className="text-[#f38d39] text-xs font-bold uppercase tracking-widest mb-4 block">
              Private Label Solutions
            </span>
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              White Label & Custom Export Products
            </h2>
            <p className="text-blue-100 mb-8 text-sm">
              We support global brands in building their own offering through our comprehensive custom export services:
            </p>
            <ul className="space-y-4 text-sm">
              {["Manufacturing under buyer's brand", "Customized packaging & labeling", "Tailored product specifications", "Reliable pick & pack & bulk supply"].map((text, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#f38d39] rounded-full mr-3"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
<div className="lg:w-1/2 w-full">
  <div className=" rounded-2xl shadow-xl">
    <div className="rounded-xl overflow-hidden">
      <img
        src={prod3}
        alt="Private label products"
        className="w-full h-60 md:h-80 object-cover"
      />
    </div>
  </div>
</div>
        </div>
      </section>

      {/* --- MINI FEATURES GRID --- */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div 
              key={i}
              className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100 hover:bg-gray-100 transition-colors duration-300"
            >
              <h4 className="text-base font-bold text-gray-900 mb-1">{f.title}</h4>
              <p className="text-gray-500 text-[10px] md:text-xs leading-tight">{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 text-center bg-white border-t border-gray-50">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Looking for a Reliable Product Supply?</h2>
          <p className="text-gray-500 mb-10">Partner with a manufacturer-backed export company.</p>
          <button 
            className="bg-[#f38d39] hover:bg-[#e27d28] text-white px-12 py-4 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Build Your Supply
          </button>
        </div>
      </section>

    </div>
  );
};

export default ProductPortfolio;