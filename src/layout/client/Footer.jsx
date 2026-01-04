import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../public/prodeImage/footerImage.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const products = [
    { name: "Spices Raw", href: "/products/spices-raw" },
    { name: "Spices Powder", href: "/products/spices-powder" },
    { name: "Rice", href: "/products/rice" },
    { name: "Groundnuts", href: "/products/groundnuts" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/people/Nexus-global-overseas/61559839838765/?sk=about", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/nexusglobaloverseas/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/nexus_globalfoods?igsh=MTJ4amprZjk3NHNnaA%3D%3D", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=919574329365&text&type=phone_number&app_absent=0", label: "WhatsApp" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#1B6D8C" }}>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-16 lg:px-20 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">

          {/* Brand Logo */}
          <div className="flex items-start">
            <NavLink to="/" className="inline-block">
              <img
                src={logo}
                alt="Nexus Global Overseas Logo"
                className="w-48 h-auto object-contain"
              />
            </NavLink>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-300 ${isActive
                        ? "text-[#F58634]"
                        : "text-white/80 hover:text-[#F58634]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-1">
              {products.map((product, idx) => (
                <li key={idx}>
                  <NavLink
                    to={product.href}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-300 ${isActive
                        ? "text-[#F58634]"
                        : "text-white/80 hover:text-[#F58634]"
                      }`
                    }
                  >
                    {product.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:Contact@nexusglobaloverseas.com"
                className="flex items-center gap-3 text-white/80 hover:text-[#F58634] transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>Contact@nexusglobaloverseas.com</span>
              </a>

              <div className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Patan, Gujarat, India</span>
              </div>

              <a
                href="tel:+919574329365"
                className="flex items-center gap-3 text-white/80 hover:text-[#F58634] transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 95743 29365</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/80 hover:text-[#F58634] transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: "#41839B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <p className="text-white text-sm text-center flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 border border-white rounded-full text-xs font-semibold">
              C
            </span>
            Copyrights {new Date().getFullYear()} All Rights Reserved nexus Global Overseas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;