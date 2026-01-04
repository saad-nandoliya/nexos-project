import React from 'react';
import { motion } from 'framer-motion';

const productCategories = [
  {
    title: "Spices & Blended Masalas",
    desc: "Premium quality spices sourced from the best farms to ensure the authenticity of taste globally.",
    link: "Read Product"
  },
  {
    title: "Rice (Export Grade)",
    desc: "Long grain Basmati & Non-Basmati rice suitable for global cuisines and long-term distribution.",
    link: "Read Product"
  }
];

const features = [
  { title: "Export Only", detail: "Dedicated to international shipping" },
  { title: "In-House", detail: "Production at Abaad Masala & Co" },
  { title: "Custom", detail: "Tailored specifications" },
  { title: "Global", detail: "Meeting international demand" }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const ProductPortfolio = () => {
  return (
    <div className="bg-white font-sans text-gray-800 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#1a6a84] text-white py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <span className="bg-[#418ca4] text-[10px] md:text-xs px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Export Product Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Products Crafted for Global Markets</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Manufactured in India at Abaad Masala & Co. and exported worldwide by Nexus Global Overseas under our international export brand Nexus Global Foods.
          </p>
        </div>
      </motion.section>

      {/* --- PRODUCT RANGE SECTION --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#f38d39] text-xs font-bold uppercase tracking-[0.2em] mb-3 block"
          >
            Our Product Range
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Export-Grade Product Categories
          </motion.h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-12">
            Our product portfolio is developed exclusively for international buyers, distributors, and private-label partners.
          </p>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {productCategories.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden text-left"
              >
                <div className="h-56 bg-gray-200"></div> {/* Placeholder for Image */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <button className="text-[#f38d39] text-[10px] font-bold uppercase tracking-widest hover:underline">
                    {item.link} &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- WHITE LABEL SECTION --- */}
      <section className="bg-[#1a6a84] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-white"
          >
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full h-72 md:h-96 bg-gray-300 rounded-2xl shadow-2xl"
          ></motion.div>
        </div>
      </section>

      {/* --- MINI FEATURES GRID --- */}
      <section className="py-16 px-6 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-xl text-center border border-gray-100"
            >
              <h4 className="text-base font-bold text-gray-900 mb-1">{f.title}</h4>
              <p className="text-gray-500 text-[10px] md:text-xs leading-tight">{f.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 text-center bg-white border-t border-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Looking for a Reliable Product Supply?</h2>
          <p className="text-gray-500 mb-10">Partner with a manufacturer-backed export company.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f38d39] hover:bg-[#e27d28] text-white px-12 py-4 rounded-lg font-bold shadow-lg transition-colors"
          >
            Build Your Supply
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
};

export default ProductPortfolio;