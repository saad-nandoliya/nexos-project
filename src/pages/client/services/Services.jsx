import React from 'react';

import service from "../../../../public/prodeImage/service.jpg";


const services = [
  {
    title: "Manufacturing Coordination",
    description: "Direct manufacturing support through our in-house facility Abaad Masala & Co., ensuring consistent quality and scalable production."
  },
  {
    title: "Private Label & White Label",
    description: "Custom branding, packaging, and confidential white-label manufacturing for global brands and distributors."
  },
  {
    title: "Export Documentation",
    description: "Complete handling of export paperwork, compliance, and buyer-country documentation."
  },
  {
    title: "Quality Control & Inspection",
    description: "Batch-wise quality checks, export-grade standards, and pre-shipment inspection processes."
  },
  {
    title: "Logistics & Global Shipping",
    description: "Container planning, shipment coordination, and smooth delivery to international ports."
  },
  {
    title: "Long-Term Supply Partnerships",
    description: "Structured supply models designed for consistent, long-term export relationships."
  }
];

const features = [
  "Scalable supply capabilities",
  "Export-only operational focus",
  "Transparent & compliant processes",
  "In-house manufacturing backbone"
];

const Services = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#1a6a84] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-[#418ca4] text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block font-semibold">
            Export Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">End-to-End Export Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            From manufacturing coordination to global delivery, Nexus Global Overseas handles every stage of the export process with responsibility and precision.
          </p>
        </div>
      </section>

      {/* --- CORE SERVICES --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Export Services
            </h2>
            <p className="text-gray-600">
              Designed exclusively for international buyers, distributors, and private-label partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESPONSIBLE PARTNER --- */}
      <section className="bg-[#1a6a84] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              More Than Services — <br />
              A Responsible Export Partner
            </h2>
            <p className="text-blue-100 mb-8 text-base leading-relaxed">
              We don't operate as brokers or traders. Our services are backed by real manufacturing, real infrastructure, and real accountability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-[#2d768f] bg-opacity-50 text-white text-xs font-semibold px-4 py-3 rounded-lg text-center border border-[#4d8fa5]">
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Box */}
          <div className="lg:w-1/2 w-full h-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src={service} 
              alt="Global shipping and logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Looking for a Reliable Export Service Partner?
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Let's build a long-term, manufacturing-backed export partnership.
        </p>
        <button className="bg-[#f38d39] hover:bg-[#e27d28] text-white px-10 py-3.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
          Build Your Supply With Us
        </button>
      </section>
    </div>
  );
};

export default Services;
