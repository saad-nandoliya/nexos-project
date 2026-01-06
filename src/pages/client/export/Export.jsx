import React from "react";

import riceBanner from "../../../../public/prodeImage/rice.jpg";
import rice1 from "../../../../public/prodeImage/rice1.jpg";
import rice2 from "../../../../public/prodeImage/rice2.jpg";
import rice3 from "../../../../public/prodeImage/rice3.jpg";
import rice4 from "../../../../public/prodeImage/rice4.jpg";



import rice5 from "../../../../public/prodeImage/683d39b30a0149b066efa4a9f384917bc5f53b4f.png";
import rice6 from "../../../../public/prodeImage/f93bc0bcbe8290d47fd538cd9e048787298c2bdb.jpg";
import rice7 from "../../../../public/prodeImage/92f574b621faaf558587eaa138070321b36ba7f3.jpg";
import rice8 from "../../../../public/prodeImage/e7ae02024c21cabce14c604727ba1af2f53133e1.jpg";

function Export() {
  return (
    <div className="min-h-screen w-full bg-white  pt-8">
      {/* Top title */}
      <div className="w-full bg-[#EFEFEF] py-4">
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900">
          Rice (Export Grade)
        </h2>
      </div>

      {/* Cards grid - with smaller, fixed-width cards */}
      <div className=" mx-auto  pb-12 pt-5">
      <div
  className="w-full h-[250px] bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: `url(${riceBanner})` }}
>
  <h2 className="text-white text-3xl font-extrabold tracking-wide">
    PREMIUM BASMATI RICE
  </h2>
</div>





<div className="bg-white">
  <section className="max-w-5xl mx-auto px-4 py-10">
  
  {/*max-w-6xl mx-auto  Title */}
  <h3 className="text-xl font-bold mb-6">
    1121 Basmati Rice
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { img: rice1, label: "1121 Raw Basmati Rice" },
      { img: rice2, label: "1121 Steam Basmati Rice" },
      { img: rice3, label: "1121 White Sella Basmati Rice" },
      { img: rice4, label: "1121 Golden Sella Basmati Rice" },
    ].map((item, i) => (
      <div key={i}>
        
        {/* Image box */}
        <div className="rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-32 lg:h-36 object-cover"
          />
        </div>

        {/* Caption */}
        <p className="text-sm mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>
</div>

<div className="bg-[#F9F9F9]">
  <section className="max-w-5xl mx-auto px-4 py-10 ">
  
  {/* Title */}
  <h3 className="text-xl font-bold mb-6">
    1718 Premium Basmati Rice
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { img: rice1, label: "1718 Raw Basmati Rice" },
      { img: rice2, label: "1718 Steam Basmati Rice" },
      { img: rice3, label: "1718 White Sella Basmati Rice" },
      { img: rice4, label: "1718 Golden Sella Basmati Rice" },
    ].map((item, i) => (
      <div key={i}>
        
        {/* Image box */}
        <div className="rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-32 lg:h-36 object-cover"
          />
        </div>

        {/* Caption */}
        <p className="text-sm mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>
</div>

<div className="bg-white">
  <section className="max-w-5xl mx-auto px-4 py-10">
  
  {/*max-w-5xl mx-auto  Title */}
  <h3 className="text-xl font-bold mb-6">
    1509 Premium Basmati Rice
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { img: rice2, label: "1509 Steam Basmati Rice" },
      { img: rice3, label: "1509 White Sella Basmati Rice" },
      { img: rice4, label: "1509 Golden Sella Basmati Rice" },
    ].map((item, i) => (
      <div key={i}>
        
        {/* Image box */}
        <div className="rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-32 lg:h-36 object-cover"
          />
        </div>

        {/* Caption */}
        <p className="text-sm mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>
</div>

<div className="bg-[#F9F9F9]">
  <section className="max-w-5xl mx-auto px-4 py-10 ">
  
  {/* Title */}
  <h3 className="text-xl font-bold mb-6">
    1401 Premium Basmati Rice
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { img: rice2, label: "1401 Steam Basmati Rice" },
      { img: rice3, label: "1401 White Sella Basmati Rice" },
      { img: rice4, label: "1401 Golden Sella Basmati Rice" },
    ].map((item, i) => (
      <div key={i}>
        
        {/* Image box */}
        <div className="rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-32 lg:h-36 object-cover"
          />
        </div>

        {/* Caption */}
        <p className="text-sm mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>
</div>

<div className="bg-white">
  <section className="max-w-5xl mx-auto px-4 py-10">
  
  {/*max-w-5xl mx-auto  Title */}
  <h3 className="text-xl font-bold mb-6">
    PUSA Premium Basmati Rice
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { img: rice1, label: "PUSA Raw Basmati Rice" },
      { img: rice2, label: "PUSA Steam Basmati Rice" },
      { img: rice3, label: "PUSA White Sella Basmati Rice" },
      { img: rice4, label: "PUSA Golden Sella Basmati Rice" },
    ].map((item, i) => (
      <div key={i}>
        
        {/* Image box */}
        <div className="rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-32 lg:h-36 object-cover"
          />
        </div>

        {/* Caption */}
        <p className="text-sm mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>
</div>

<div className="bg-[#F9F9F9]">
  <section className="max-w-5xl mx-auto px-4 py-10 ">
  
  {/* Title */}
  <h3 className="text-xl font-bold mb-6">
    Traditional Basmati Rice
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

    {[
      { img: rice1, label: "Traditional Raw Basmati Rice" },
      { img: rice2, label: "Traditional Steam Basmati Rice" },
    ].map((item, i) => (
      <div key={i}>
        
        {/* Image box */}
        <div className="rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-32 lg:h-36 object-cover"
          />
        </div>

        {/* Caption */}
        <p className="text-sm mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>


</div>





   <div
  className="w-full h-[250px] bg-center bg-cover flex items-center justify-center mt-16"
  style={{ backgroundImage: `url(${riceBanner})` }}
>
  <h2 className="text-white text-3xl font-extrabold tracking-wide">
    PREMIUM BASMATI RICE
  </h2>
</div>


<section className="max-w-6xl mx-auto px-4 pt-16 pb-0">

  <div className="flex flex-col md:flex-row justify-around items-start md:items-center">

    {/* LEFT — Text List */}
    <ul className="space-y-4 lg:space-y-6 md:text-lg text-md font-semibold">
      <li>Sugandha Non-Basmati Rice</li>
      <li>Sharbati Non-Basmati Rice</li>
      <li>Sona Masoori Rice</li>
      <li>PR-11 Non-Basmati Rice</li>
      <li>IR-64 Rice</li>
    </ul>

    {/* RIGHT — 2x2 Image Grid */}
    <div className="grid grid-cols-2 gap-4">

      {[rice5, rice6, rice7, rice8].map((img, i) => (
        <div
          key={i}
          className=" overflow-hidden shadow-sm bg-white"
        >
          <img
            src={img}
            alt="Rice Type"
            className="w-full lg:h-40 h-32 object-cover"
          />
        </div>
      ))}

    </div>

  </div>

</section>



      </div>

      {/* Bottom CTA section */}
      <div className="w-full bg-[#F5F5F5] mt-6">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Looking for a Reliable Product Supply?
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Partner with a manufacturer-backed export company.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-semibold text-white bg-[#f38d39] hover:bg-[#e27d28] rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Build Your Supply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Export;

