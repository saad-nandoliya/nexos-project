import React from "react";
import { NavLink } from "react-router-dom";

// Brands section
import image1 from "../../../../public/prodeImage/image1.png"; // Decoration line for headers
import image2 from "../../../../public/prodeImage/image2.png"; // Brand logo 1 - ABAAD
import image3 from "../../../../public/prodeImage/image3.png"; // Brand logo 2 - NEXUS GLOBAL FOODS
import image4 from "../../../../public/prodeImage/image4.png"; // Brand logo 3 - NEXUS GLOBAL OVERSEAS

// Product Range section
import image5 from "../../../../public/prodeImage/image5.png";  // Decoration line for Product Range header
import image6 from "../../../../public/prodeImage/image6.png";  // Product 1 - Spices Raw
import image7 from "../../../../public/prodeImage/image7.png";  // Product 2 - Spices Powder
import image8 from "../../../../public/prodeImage/image8.png";  // Product 3 - Rice
import image9 from "../../../../public/prodeImage/image9.png";  // Product 4 - Groundnuts
import image10 from "../../../../public/prodeImage/image10.png"; // Background for Product Range section

// Why Choose US section
import image11 from "../../../../public/prodeImage/image11.png"; // Complete Export Solution
import image12 from "../../../../public/prodeImage/image12.png"; // Trusted Manufacturing Partner
import image13 from "../../../../public/prodeImage/image13.png"; // Private Label & Customization Support
import image14 from "../../../../public/prodeImage/image14.png"; // Reliable & Timely Deliveries

// Export Countries section
import image15 from "../../../../public/prodeImage/image15.png"; // World map with flags

// Let's Do Business section
import image16 from "../../../../public/prodeImage/image16.png"; // Background for business CTA

// Membership & Certification section
import image17 from "../../../../public/prodeImage/image17.png"; // GST Council
import image18 from "../../../../public/prodeImage/image18.png"; // Udyog Aadhaar
import image19 from "../../../../public/prodeImage/image19.png"; // APEDA
import image20 from "../../../../public/prodeImage/image20.png"; // Halal
import image21 from "../../../../public/prodeImage/image21.png"; // Spices Board India
import image22 from "../../../../public/prodeImage/image22.png"; // MSME

const WhyChooseUs = () => {

  const brands = [
    { img: image2, label: "Trusted Manufacture in India" },
    { img: image3, label: "Exported Worldwide" },
    { img: image4, label: "Your Global Export Partner" }
  ];

  const products = [
    { img: image6, label: "Spices Raw" },
    { img: image7, label: "Spices Powder" },
    { img: image8, label: "Rice" },
    { img: image9, label: "Groundnuts" }
  ];

  const features = [
    { img: image11, title: "Complete\nExport Solution" },
    { img: image12, title: "Trusted Manufacturing\nPartner" },
    { img: image13, title: "Private Label &\nCustomization Support" },
    { img: image14, title: "Reliable & Timely\nDeliveries" }
  ];

  return (
    <>
      {/* ===== BRANDS & PARTNERS ===== */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header with decorative line */}
          <div className="relative mb-10 w-full">
            <img src={image1} alt="decoration" className="w-full h-4 md:h-5 object-contain" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-700 text-base md:text-lg font-medium whitespace-nowrap">
              Our Brands & Partners
            </h2>
          </div>

          {/* 3 Brand logos */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-end">
            {brands.map((b, i) => (
              <div key={i} className="text-center">
                <img src={b.img} alt={b.label} className="h-16 md:h-20 mx-auto mb-3 object-contain" />
                <div className="inline-block px-3 py-1 border border-gray-300 rounded text-[10px] md:text-xs text-gray-600">
                  {b.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== PRODUCT RANGE ===== */}
      <section
        className="py-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image10})` }}
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* Header with decorative line */}
          <div className="relative mb-8 w-full">
            <img src={image5} alt="decoration" className="w-full h-4 md:h-5 object-contain" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-white text-base md:text-lg font-semibold whitespace-nowrap" style={{ backgroundColor: "#1a5a6e" }}>
              Our Product Range
            </h2>
          </div>

          {/* 4 Product images */}
          <div className="grid grid-cols-4 gap-3 md:gap-4 mb-8 px-12">
            {products.map((p, i) => (
              <div key={i} className="text-center">
                <div className="rounded-lg overflow-hidden mb-2 shadow-lg">
                  <img src={p.img} alt={p.label} className="w-full h-[180px]" />
                </div>
                <div
                  className="inline-block px-3 py-1 text-white text-[9px] md:text-xs font-medium rounded relative bottom-5 w-[152px]"
                  style={{ backgroundColor: "#e07b3c" }}
                >
                  {p.label}
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <NavLink
              to="/products"
              className="inline-block px-8 py-2.5 bg-white text-gray-800 text-sm font-semibold rounded shadow-lg hover:bg-gray-100 transition-all"
            >
              View All Products
            </NavLink>
          </div>

        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header with decorative line */}
          <div className="relative mb-10 w-full">
            <img src={image1} alt="decoration" className="w-full h-4 md:h-5 object-contain" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-700 text-base md:text-lg font-medium whitespace-nowrap">
              Why choose US
            </h2>
          </div>

          {/* 4 Feature icons with vertical dividers */}
          <div className="flex justify-center items-start">
            {features.map((f, i) => (
              <div key={i} className="flex items-start">
                <div className="text-center px-4 md:px-8">
                  <img src={f.img} alt={f.title} className="h-16 md:h-20 mx-auto mb-3 object-contain" />
                  <p className="text-xs md:text-sm text-gray-700 font-medium whitespace-pre-line leading-tight">
                    {f.title}
                  </p>
                </div>
                {i < features.length - 1 && (
                  <div className="w-px h-24 bg-gray-300 self-center"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== OUR TRUSTED CLIENTS ===== */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our trusted Client's
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Nexus Global Overseas is trusted by importers, distributors, and brand owners worldwide.
            We work closely with our clients across international markets to build long-term,
            reliable partnerships based on trust, quality, and consistency.
          </p>
        </div>
      </section>

      {/* ===== WE EXPORT TO 5+ COUNTRIES ===== */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-16">
          <div className="flex flex-col md:flex-row  items-center gap-6">

            {/* Left - Text */}
            <div className="md:w-1/3 text-center md:text-left">
              <p className="italic text-base md:text-lg mb-1" style={{ color: "#1a5a6e" }}>
                We Export to Over
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#1a5a6e" }}>
                5+ <span className="uppercase">Countries</span>
              </h3>
              <p className="text-xl md:text-2xl font-semibold uppercase" style={{ color: "#1a5a6e" }}>
                Worldwide
              </p>
            </div>

            {/* Right - World Map Image */}
            <div className="md:w-2/3">
              <img
                src={image15}
                alt="We export to 5+ countries worldwide"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ===== LET'S DO BUSINESS TOGETHER ===== */}
      <section
        className="py-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image16})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 italic">
            LET'S DO BUSINESS TOGETHER
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-6">
            Connecting Indian quality with global markets
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-3 text-white text-sm font-semibold rounded transition-all hover:opacity-90"
            style={{ backgroundColor: "#e07b3c" }}
          >
            Contact US
          </NavLink>
        </div>
      </section>

      {/* ===== MEMBERSHIP & CERTIFICATION ===== */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            Membership & Certification
          </h2>
          <div className="flex flex-wrap justify-between items-center gap-6 md:gap-10">
            <img src={image17} alt="GST Council" className="h-14 md:h-20 object-contain" />
            <img src={image18} alt="Udyog Aadhaar" className="h-14 md:h-20 object-contain" />
            <img src={image19} alt="APEDA" className="h-14 md:h-20 object-contain" />
            <img src={image20} alt="Halal Certified" className="h-14 md:h-20 object-contain" />
            <img src={image21} alt="Spices Board India" className="h-14 md:h-20 object-contain" />
            <img src={image22} alt="MSME" className="h-14 md:h-20 object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

