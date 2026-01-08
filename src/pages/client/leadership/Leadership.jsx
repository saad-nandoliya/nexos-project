import React from 'react';

import lead1 from "../../../../public/prodeImage/lead1.png";
import lead2 from "../../../../public/prodeImage/1dba76b78dbfed39b930b9ba0dbfa3a1a877d544.jpg";
import lead3 from "../../../../public/prodeImage/e31dad5f4882d565bb72dada104a9ae7a6f47bbb.jpg";
import lead4 from "../../../../public/prodeImage/9536bb300fd51480518ac92a9096078b0b6b5e8d.png";
import lead5 from "../../../../public/prodeImage/ef9b13a73e8508b5095405a77bbf620fd3d90158.png";
import lead6 from "../../../../public/prodeImage/f7c5ae2aa2a6b21da41041a500600ddcf1422c2f.png";
import { NavLink } from 'react-router-dom';

const teamMembers = [
  {
    name: "NIZAMUDDIN MANASIYA",
    role: "Founder & Managing Director",
    company: "Nexus Global Overseas",
    desc: "Visionary behind Nexus Global Overseas, leading manufacturing-backed exports with a focus on scale, quality, and long-term international partnerships.",
    image: lead1
  },
  {
    name: "BILAL VADANAGRA",
    role: "Owner & Manufcturing Principal",
    company: "Abaad Masala & Co.",
    desc: "Founder and owner of Abaad Masala & Co., providing the manufacturing backbone for Nexus Global Overseas. Oversees production vision, quality philosophy, and long-term manufacturing growth.",
    image: lead2
  },
  {
    name: "RIZWAN VADANAGRA",
    role: "Head – Manufacturing & Operations",
    company: "Abaad Masala & Co.",
    desc: "Oversees day-to-day production and operations at Abaad Masala & Co., ensuring export-grade quality, operational efficiency, and timely execution.",
    image: lead3
  },
  {
    name: "NAUMAN MANKNOJIYA",
    role: "Head – Export Operations",
    // company: "Abaad Masala & Co.",
    desc: "Manages export documentation, logistics coordination, and compliance to ensure smooth and reliable international shipments.",
    image: lead4
  },
  {
    name: "M.HUSAIN SHELIYA",
    role: "Head – Accounts & Digital Operations (Design & Documentation)",
    // company: "Nexus Global Overseas",
    desc: "Handles export documentation design, packaging visuals, branding assets, and oversees website management and digital presence.",
    image: lead5
  },
  {
    name: "MOHAMMAD MUNSHI",
    role: "Head – Sales & Business Development",
    // company: "Nexus Global Overseas",
    desc: "Leads the sales team, manages global buyer relationships, and drives market expansion andlong-term export growth.",
    image: lead6
  },
];

const values = [
  { title: "Integrity", detail: "Honest decisions. Transparent leadership." },
  { title: "Accountability", detail: "We stand behind every shipment." },
  { title: "Capability", detail: "Manufacturing-led export decisions." },
  { title: "Long-Term Vision", detail: "Built for partnerships, not transactions." },
];

const LeadershipTeam = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* --- Header Section --- */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
        >Leadership Team</h1>
        <p className="text-orange-500 text-sm md:text-base font-normal max-w-2xl mx-auto">
          
A leadership team built on manufacturing strength, export responsibility, 
and long-term global vision.
        </p>
      </section>

      {/* --- Intro Section --- */}
      <section className="bg-[#F9F9F9] py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
Driven by Capability. Guided by Responsibility.          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-4xl mx-auto">
            At Nexus Global Overseas, leadership is not about titles — it is about accountability. Our leadership team 
brings together deep manufacturing knowledge and hands-on export expertise to ensure every shipment 
reflects consistency, quality, and trust.
          </p>
        </div>
      </section>

      {/* --- Team Grid --- */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 w-full max-w-[300px] hover:-translate-y-1"
            >
              {/* Circular Avatar with Image */}
              <div className="w-24 h-24 bg-gray-100 rounded-full mb-5 overflow-hidden border-2 border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <h3 className="text-sm font-bold text-gray-900 uppercase leading-tight mb-2">
                {member.name}
              </h3>
              
              <p className="text-orange-500 text-[11px] font-bold uppercase mb-1">
                {member.role}
              </p>
              
              {member.company && (
                <p className="text-gray-400 text-[10px] mb-4 italic">
                  {member.company}
                </p>
              )}
              
              <p className="text-gray-600 text-xs leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Core Values --- */}
      <section className="py-16 px-6 bg-[#F9F9F9] border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {values.map((v, i) => (
            <div key={i} className="hover:scale-105 transition-transform duration-300">
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">{v.title}</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer / CTA --- */}
      <section className="py-16 px-6 text-center bg-[#F9F9F9]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Leadership You Can Trust
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Backed by manufacturing. Focused on global growth.
        </p>
    <NavLink to="/contact" >
          <button 
          className="text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          style={{ backgroundColor: "#F58634", color: "white" }}
          onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}
          onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}
        >
          Connect With Us
        </button>
    </NavLink>
      </section>
    </div>
  );
};

export default LeadershipTeam;