import React from 'react';

import lead1 from "../../../../public/prodeImage/lead1.png";
import lead2 from "../../../../public/prodeImage/1dba76b78dbfed39b930b9ba0dbfa3a1a877d544.jpg";
import lead3 from "../../../../public/prodeImage/e31dad5f4882d565bb72dada104a9ae7a6f47bbb.jpg";
import lead4 from "../../../../public/prodeImage/9536bb300fd51480518ac92a9096078b0b6b5e8d.png";
import lead5 from "../../../../public/prodeImage/ef9b13a73e8508b5095405a77bbf620fd3d90158.png";
import lead6 from "../../../../public/prodeImage/f7c5ae2aa2a6b21da41041a500600ddcf1422c2f.png";

const teamMembers = [
  {
    name: "NIZAMUDDIN MANASIYA",
    role: "Founding Executive Director",
    company: "Abaad Masala & Co.",
    desc: "Having started his journey in spice industry, he has worked his way up and has broad experience across different industrial sectors with a strong focus on quality control and export compliance.",
    image: lead1
  },
  {
    name: "BILAL VADANAGRA",
    role: "Director Manufacturing & Projects",
    company: "Abaad Masala & Co.",
    desc: "Specializing in spice manufacturing operations and quality assurance, he has been instrumental in scaling production capacity and maintaining international food safety standards.",
    image: lead2
  },
  {
    name: "RIZWAN VADANAGRA",
    role: "Head - Manufacturing & Operations",
    company: "Abaad Masala & Co.",
    desc: "He started his journey in the spice industry, worked through various manufacturing sectors and holds more than 15 years experience in operational excellence and process optimization.",
    image: lead3
  },
  {
    name: "NASREEN MANENKOTA",
    role: "Head - Plant Operations",
    company: "Abaad Masala & Co.",
    desc: "Brings a wealth of experience in logistics, warehouse management, and inventory control with expertise in maintaining hygiene standards and production efficiency.",
    image: lead4
  },
  {
    name: "M HUSAIN SHELIYA",
    role: "Head - Import/Export Operations",
    company: "Nexus Global Overseas",
    desc: "Handles all international dealings, including logistics, documentation, compliance with foreign trade policies, and building relationships with global buyers.",
    image: lead5
  },
  {
    name: "MOHAMMAD MUNSHI",
    role: "Head - Sales & Business Development",
    company: "Nexus Global Overseas",
    desc: "Works closely with international clients to understand their needs, develop customized export solutions, and ensure long-term partnerships.",
    image: lead6
  },
];

const values = [
  { title: "Integrity", detail: "Ethical Practices, Transparency & Honesty in every shipment." },
  { title: "Accountability", detail: "We stand behind every shipment, customer, and commitment." },
  { title: "Capability", detail: "Manufacturing skill and world-class operations." },
  { title: "Long-Term Vision", detail: "Built for partnerships, not transactions." },
];

const LeadershipTeam = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* --- Header Section --- */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Leadership Team</h1>
        <p className="text-orange-500 text-sm md:text-base font-normal max-w-2xl mx-auto">
          A leadership team built on manufacturing strength, export responsibility,<br className="hidden md:block" />
          and long-term global vision.
        </p>
      </section>

      {/* --- Intro Section --- */}
      <section className="bg-[#F9F9F9] py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Driven by Capability. Guided by Responsibility.
          </h2>
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
        <button 
          className="text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          style={{ backgroundColor: "#F58634", color: "white" }}
          onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}
          onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}
        >
          Connect With Us
        </button>
      </section>
    </div>
  );
};

export default LeadershipTeam;