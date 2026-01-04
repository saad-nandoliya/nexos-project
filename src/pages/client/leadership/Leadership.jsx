import React from 'react';

const teamMembers = [
  {
    name: "NIZAMUDDIN MANASIYA",
    role: "Founding Executive Director",
    company: "Abaad Masala & Co.",
    desc: "Having started his journey in spice industry, he has worked his way up and has broad experience across different industrial sectors with a strong focus on quality control and export compliance.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "BILAL VADANAGRA",
    role: "Director Manufacturing & Projects",
    company: "Abaad Masala & Co.",
    desc: "Specializing in spice manufacturing operations and quality assurance, he has been instrumental in scaling production capacity and maintaining international food safety standards.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "RIZWAN VADANAGRA",
    role: "Head - Manufacturing & Operations",
    company: "Abaad Masala & Co.",
    desc: "He started his journey in the spice industry, worked through various manufacturing sectors and holds more than 15 years experience in operational excellence and process optimization.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "NASREEN MANENKOTA",
    role: "Head - Plant Operations",
    company: "Abaad Masala & Co.",
    desc: "Brings a wealth of experience in logistics, warehouse management, and inventory control with expertise in maintaining hygiene standards and production efficiency.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "M HUSAIN SHELIYA",
    role: "Head - Import/Export Operations",
    company: "Nexus Global Overseas",
    desc: "Handles all international dealings, including logistics, documentation, compliance with foreign trade policies, and building relationships with global buyers.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "MOHAMMAD MUNSHI",
    role: "Head - Sales & Business Development",
    company: "Nexus Global Overseas",
    desc: "Works closely with international clients to understand their needs, develop customized export solutions, and ensure long-term partnerships.",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
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
    <div className="bg-white min-h-screen font-sans">
      {/* --- Header Section --- */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Leadership Team</h1>
        <p className="text-orange-500 text-sm md:text-base font-normal max-w-2xl mx-auto">
          A leadership team built on manufacturing strength, export responsibility,<br className="hidden md:block" />
          and long-term global vision.
        </p>
      </section>

      {/* --- Intro Section --- */}
      <section className="bg-white py-12 px-6">
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              {/* Circular Avatar with Image */}
              <div className="w-28 h-28 bg-gray-100 rounded-full mb-6 overflow-hidden border-2 border-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-base font-bold text-gray-900 uppercase leading-tight mb-2">
                {member.name}
              </h3>
              
              <p className="text-orange-500 text-xs font-semibold mb-1">
                {member.role}
              </p>
              
              {member.company && (
                <p className="text-gray-500 text-xs mb-4 italic">
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
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {values.map((v, i) => (
            <div key={i}>
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">{v.title}</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer / CTA --- */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Leadership You Can Trust
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Backed by manufacturing. Focused on global growth.
        </p>
        <button className=" text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        style={{ backgroundColor: "#F58634" , color: "white", hover: "opacity-80" }}
                 onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}   // darker color
  onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}   // original color
        >
          Connect With Us
        </button>
      </section>
    </div>
  );
};

export default LeadershipTeam;