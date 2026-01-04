import React from "react";
import missionIcon from "../../../../public/prodeImage/misson.png";
import visionIcon from "../../../../public/prodeImage/vision.png";
import valueIcon from "../../../../public/prodeImage/value.png";

const MissionVisionValue = () => {
  const sections = [
    {
      icon: missionIcon,
      title: "OUR MISSION",
      description: `Our mission at Nexus Global Overseas is to connect the richness of Indian food and spices with global markets by delivering products that meet international quality, safety, and reliability standards
We aim to build long-term partnerships with our global clients by offering consistent quality, transparent business practices, and efficient export solutions.
Backed by strong manufacturing support from Abaad Masala & Co. (India) and represented through our export brand Nexus Global Foods, we strive to be a trusted name in the international food export industry.`
    },
    {
      icon: visionIcon,
      title: "OUR VISION",
      description: `Our vision at Nexus Global Overseas is to become a globally recognized Indian export company known for quality, reliability, and long-term partnerships in the international food and spice industry.
We envision taking authentic Indian flavors to every corner of the world by continuously improving our export capabilities, expanding global reach, and maintaining uncompromising standards of quality and compliance.
Through our export brand Nexus Global Foods and manufacturing strength from Abaad Masala & Co. (India), we aim to set new benchmarks in global food exports.`
    },
    {
      icon: valueIcon,
      title: "OUR VALUE PROPOSITION",
      description: `Our mission at Nexus Global Overseas is to connect the richness of Indian food and spices with global markets by delivering products that meet international quality, safety, and reliability standards.
We aim to build long-term partnerships with our global clients by offering consistent quality, transparent business practices, and efficient export solutions.
Backed by strong manufacturing support from Abaad Masala & Co. (India) and represented through our export brand Nexus Global Foods, we strive to be a trusted name in the international food export industry.`
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 tracking-wide">
                {section.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValue;
