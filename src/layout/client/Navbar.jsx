import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Mail,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../../public/prodeImage/logo.png";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Products", href: "/product-portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/people/Nexus-global-overseas/61559839838765/?sk=about", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/nexusglobaloverseas/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/nexus_globalfoods?igsh=MTJ4amprZjk3NHNnaA%3D%3D", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=919574329365&text&type=phone_number&app_absent=0", label: "WhatsApp" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Track screen height changes for better responsiveness
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header Container - Always Sticky */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "backdrop-blur-lg shadow-xl"
          : ""
          }`}
        style={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.15)" : "transparent"
        }}
      >
        {/* Top Bar - Teal with contact info - Hidden on mobile */}
        <div className="hidden md:block" style={{ backgroundColor: isScrolled ? "rgba(26, 90, 110, 0.85)" : "#1a5a6e" }}>
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2">
            <div className="flex items-center justify-around gap-2">
              {/* Left - Contact Info */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-white text-[10px] sm:text-xs md:text-sm">
                <a href="tel:+919574329365" className="flex items-center gap-1.5 sm:gap-2 hover:text-white/80 transition-colors">
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>+91 95743 29365</span>
                </a>
                <a href="mailto:Contact@nexusglobaloverseas.com" className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact@nexusglobaloverseas.com</span>
                </a>
                <div className="hidden lg:flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Patan, Gujarat, India</span>
                </div>
              </div>

              {/* Right - Social Icons */}
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.slice(0, 4).map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white hover:text-white/80 transition-colors duration-300"
                  >
                    <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                ))}
                {/* Show remaining icons only on larger screens */}
                {socialLinks.slice(4).map((social, idx) => (
                  <a
                    key={idx + 4}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hidden sm:block text-white hover:text-white/80 transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header - White Background */}
        <div
          className={`w-full transition-all duration-500 ${isScrolled
            ? "bg-white/20 backdrop-blur-lg"
            : "bg-white"
            }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-16 py-2 sm:py-3 flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex-shrink-0">
              <img
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                src={logo}
                alt="Nexus Global Overseas Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 ${isActive
                      ? "text-[#e07b3c]"
                      : "text-gray-700 hover:text-[#e07b3c]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Business Enquiry Button */}
            <div className="hidden md:flex items-center">
              <NavLink
                to="/contact"
                className="px-6 py-2.5 text-white text-sm font-semibold rounded-md transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#e07b3c" }}
              >
                Business Enquiry
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[60px] md:h-[108px]"></div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{
            width: `min(80vw, 320px)`,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          {/* Mobile Menu Header */}
          <div
            className="border-b border-gray-100 mb-2"
            style={{
              backgroundColor: "#1a5a6e",
              padding: "16px",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="Nexus Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="px-4 space-y-2 overflow-y-auto"
            style={{
              maxHeight: `${screenHeight * 0.55}px`,
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between w-full p-3 rounded-xl transition-all duration-300 ${isActive
                    ? "bg-[#e07b3c] text-white shadow-lg"
                    : "text-gray-700 hover:bg-[#e07b3c]/10 hover:text-[#e07b3c]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-medium text-sm">{item.name}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-300 ${isActive
                        ? "text-white translate-x-1"
                        : "text-gray-400 group-hover:text-[#e07b3c] group-hover:translate-x-1"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Contact Section */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-4 border-t border-gray-100 bg-gray-50/50">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500 mb-2">Contact Us</div>
                <a
                  href="tel:+919574329365"
                  className="flex items-center space-x-3 p-3 rounded-xl font-semibold hover:bg-[#1a5a6e]/10 transition-all duration-300"
                  style={{ backgroundColor: "rgba(26, 90, 110, 0.1)", color: "#1a5a6e" }}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+91 95743 29365</span>
                </a>
                <a
                  href="mailto:Contact@nexusglobaloverseas.com"
                  className="flex items-center space-x-3 p-3 font-semibold"
                  style={{ color: "#1a5a6e" }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Contact@nexusglobaloverseas.com</span>
                </a>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full p-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#e07b3c" }}
              >
                <span>Business Enquiry</span>
                <ArrowRight className="w-5 h-5" />
              </NavLink>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 pt-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="transition-colors duration-300"
                    style={{ color: "#1a5a6e" }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Scroll Lock */}
      {isMenuOpen && (
        <style>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  );
};

export default Navbar;
