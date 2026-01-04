
import wave from "../../../assets/images.prod/wave.png";
import heroBg from "../../../assets/images.prod/hero-bg.png";


export default function ExportPage() {
  return (
    <div className="w-full font-sans">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center min-h-[500px] pb-32"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connecting India's<br />
              <span className="text-gray-800">Manufacturing Strength</span><br />
              <span className="text-gray-700">to Global Markets</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
              Nexus Global Overseas is an export-focused company specializing in the global trade of Indian food products. 
              We are dedicated to delivering high-quality spices, ensuring consistency, compliance, and long-term value with global partners — 
              supported by our own manufacturing foundation in India.
            </p>

            <button className="mt-8  text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                            style={{ backgroundColor: "#F58634" , color: "white", hover: "opacity-80" }}
                 onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}   // darker color
  onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}   // original color
            >
              Export Inquiry
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <StatBox value="50 TPD" label="Production Capacity" bgColor="bg-[#1e5a7d]" />
            <StatBox value="70+" label="Global Countries" bgColor="bg-[#1e5a7d]" />
          </div>
        </div>

        {/* Wave positioned at bottom of hero section, overlapping both sections */}
        <div className="absolute -bottom-30 left-0 right-0 w-full">
          <img src={wave} alt="wave" className="w-full" />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-[150px] px-6 max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wide">Something know About Us.</p>
        <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mt-3 tracking-wide">
          NEXUS GLOBAL OVERSEAS
        </h2>

        <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
          Nexus Global Overseas is a export-focused company specializing in the global trade of Indian food products. 
          We are dedicated to delivering high-quality spices, ensuring consistency, compliance, and long-term value with global partners — 
          supported by our own manufacturing foundation in India.
        </p>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
            Why We Exist
          </h2>
          <p className="text-center text-orange-500 mt-3 text-lg md:text-xl font-medium">
            Why Nexus Global Overseas Was Created
          </p>

          <div className="mt-8 max-w-4xl mx-auto text-center space-y-4">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Nexus Global Overseas was created with a clear purpose — to give India's manufacturing 
              capability a structured, responsible, global presence.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              For years, our manufacturing unit Abaad Masala & Co. produced high-quality spices with 
              discipline and scale. As capacity and expertise grew, we recognized a gap in the export 
              ecosystem — global buyers needed more than products; they needed a partner who could 
              take full export responsibility. That realization led to the creation of Nexus Global Overseas — a 
              dedicated export arm built to bridge Indian manufacturing with international markets through 
              transparency, accountability, and capability.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MANUFACTURING BACKBONE ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto ">
        <p className="text-center text-orange-500 text-base md:text-lg font-medium">
          Manufacturing Backbone
        </p>
        
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Abaad Masala & Co. (India)
        </h2>
        
        <p className="text-center text-gray-600 mt-4 text-sm md:text-base max-w-3xl mx-auto">
          Our export strength is powered by our own large-scale manufacturing infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <InfoCard 
            title="OWN MANUFACTURING FACILITY" 
            description="Complete Production control ensuring consistency, hygiene, and scalability."
          />
          <InfoCard 
            title="60 TPD CAPACITY" 
            description="High-volume output built for bulk export and long-term contracts."
          />
          <InfoCard 
            title="70+ PROFESSIONALS" 
            description="A skilled team managing production, quality and export operations."
          />
        </div>
      </section>

      {/* ================= PRIVATE LABEL ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="mb-12">
            <p className="text-orange-500 text-base md:text-lg font-medium">
              Private Label Exports
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              White Label Solutions for<br />
              Global brand
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                We enable international buyers to launch and scale their own brands with 
                Confidence through our white-label manufacturing and export solutions.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Manufacturing under your brand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Custom packaging & labeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Country-specific compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-3">•</span>
                  <span>Confidential and reliable execution</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-lg">
              <h3 className="font-bold text-2xl md:text-3xl text-orange-500 mb-4">
                You Build the Market.
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We manufacture, pack, and export — end to end.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Let's Build a Long-term Export Partnership
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Your Reliable Partner for Premium Indian Exports
        </p>

        <button className="mt-8 bg-gradient-to-r  text-white px-10 py-4 rounded-lg font-semibold  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        style={{ backgroundColor: "#F58634" , color: "white", hover: "opacity-80" }}
                 onMouseEnter={e => e.target.style.backgroundColor = "#d96b20"}   // darker color
  onMouseLeave={e => e.target.style.backgroundColor = "#F58634"}   // original color
        >
          Contact Export Team
        </button>
      </section>

    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StatBox({ value, label, bgColor = "bg-[#1e5a7d]" }) {
  return (
    <div className={`${bgColor} text-white p-6 rounded-xl min-w-[140px] text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm mt-2 opacity-90">{label}</p>
    </div>
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="bg-white border-2 border-gray-200 p-8 rounded-xl text-center hover:border-orange-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
