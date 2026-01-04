import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    country: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your own form submission logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        country: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#1a6a84] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="bg-[#418ca4] text-xs px-3 py-1 rounded mb-4 inline-block">
            Contact Nexus Global Overseas
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Build a Global Trade Partnership
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm md:text-base">
            Reach out to us for export inquiries, private label opportunities, or long-term supply partnerships.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info */}
          <div className="space-y-6">
            <div>
              <span className="text-gray-500 text-xs font-semibold uppercase block mb-2">
                Get In Touch
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                We're Ready to Support Your<br />Export Needs
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Nexus Global Overseas works exclusively with international buyers and partners. 
                Our team responds promptly to all export-related inquiries.
              </p>
            </div>

            <div className="text-sm md:text-base space-y-3 text-gray-700">
              <p>
                <span className="font-bold">Company:</span> Nexus Global Overseas
              </p>
              <p>
                <span className="font-bold">Export Brand:</span> Nexus Global Foods
              </p>
              <p>
                <span className="font-bold">Manufacturing Unit:</span> Abaad Masala & Co. (India)
              </p>
              <p>
                <span className="font-bold">Email:</span> contact@nexusglobaloverseas.com
              </p>
              <p>
                <span className="font-bold">Phone / WhatsApp:</span> +91 XXXXX XXXXX
              </p>
              <p className="leading-relaxed">
                <span className="font-bold">Location:</span> Survey No 1767, Manasiya Motar Garej,<br />
                Patan-deesa Highway, Lakshmipura, Vadani, Gujarat-384265
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 inline-block">
              <p className="text-xs font-bold text-gray-500 mb-2">Business Hours</p>
              <p className="text-sm text-gray-700">Monday – Saturday</p>
              <p className="text-sm text-gray-700">10:00 AM – 6:00 PM (IST)</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send Us Your Inquiry
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-700 font-semibold mb-2">Thank you for your inquiry!</p>
                <p className="text-green-600 text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700 block mb-2">
                    Full Name
                  </label>
                  <input 
                    id="fullName"
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a6a84] focus:border-transparent outline-none bg-white transition-all text-gray-900" 
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="text-sm font-medium text-gray-700 block mb-2">
                    Company Name
                  </label>
                  <input 
                    id="companyName"
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a6a84] focus:border-transparent outline-none bg-white transition-all text-gray-900" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a6a84] focus:border-transparent outline-none bg-white transition-all text-gray-900" 
                  />
                </div>

                <div>
                  <label htmlFor="country" className="text-sm font-medium text-gray-700 block mb-2">
                    Country
                  </label>
                  <input 
                    id="country"
                    type="text" 
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a6a84] focus:border-transparent outline-none bg-white transition-all text-gray-900" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 block mb-2">
                    Message / Requirement
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a6a84] focus:border-transparent outline-none bg-white transition-all resize-none text-gray-900"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#f38d39] hover:bg-[#e27d28] text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  Submit Export Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;