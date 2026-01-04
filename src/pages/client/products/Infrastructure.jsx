import React from 'react';

const stats = [
  { value: "60+", label: "Metric Tons / Day Capacity" },
  { value: "70+", label: "Skilled Workforce" },
  { value: "Multiple", label: "Automated Processing Lines" },
  { value: "Export", label: "Grade Infrastructure" },
];

const processSteps = [
  "Raw Material Selection",
  "Cleaning & Sorting",
  "Grinding & Blending",
  "Packaging & Inspection",
  "Export Dispatch"
];

const Infrastructure = () => {
  return (
    <div className="bg-[#f8f9fa] font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#1a6a84] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-[#418ca4] text-xs px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Manufacturing Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Built to Manufacture. Ready to Export.</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our infrastructure is designed to support large-scale manufacturing, strict quality control, and uninterrupted export supply for global markets.
          </p>
        </div>
      </section>

      {/* --- FACILITY OVERVIEW --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[#1a6a84] text-xs font-semibold uppercase tracking-wider mb-3 block">
              Infrastructure Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Abaad Masala & Co. –<br />
              Manufacturing Facility
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              The manufacturing backbone of Nexus Global Overseas operates under Abaad Masala & Co. in India. 
              Our facility is equipped with modern machinery, scalable production lines, and export-focused systems 
              to meet global demand efficiently.
            </p>
          </div>
          
          {/* Image Grid with Real Photos */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Production line"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1267362/pexels-photo-1267362.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Quality control"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1267364/pexels-photo-1267364.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Packaging area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS CARDS --- */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-4xl md:text-5xl font-bold text-[#1a6a84] mb-3">{stat.value}</h3>
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESS FLOW --- */}
      <section className="py-20 px-6 bg-white text-center">
        <span className="text-[#f38d39] text-xs font-semibold uppercase tracking-wider mb-3 block">
          Process Flow
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          From Raw Material to Global Shipment
        </h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {processSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white px-6 py-8 rounded-xl shadow-md border border-gray-200 flex-1 min-w-[180px] hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-sm font-semibold text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- QUALITY SYSTEMS --- */}
      <section className="bg-[#1a6a84] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <span className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2 block">Quality & Safety</span>
            <h2 className="text-3xl font-bold mb-6">Export-Grade Quality Systems</h2>
            <p className="text-blue-100 mb-6 text-sm">
              Our infrastructure follows strict hygiene, safety, and quality protocols to ensure compliance with international food standards and buyer specifications:
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center">
                <span className="mr-2 text-blue-300">•</span> Controlled production environment
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-300">•</span> Batch-wise quality monitoring
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-300">•</span> Export-compliant packaging areas
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-300">•</span> Traceability & documentation systems
              </li>
            </ul>
          </div>
          {/* Quality Control Image */}
          <div className="lg:w-1/2 w-full h-80 bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Quality control laboratory"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure That Supports Global Growth</h2>
        <p className="text-gray-500 mb-10 text-lg">Manufacturing strength you can rely on for long-term export partnerships.</p>
        <button className="bg-[#f38d39] hover:bg-[#e27d28] text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl">
          Contact Our Team
        </button>
      </section>
    </div>
  );
};

export default Infrastructure;