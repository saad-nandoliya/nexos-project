import React from "react";
import "../assets/css/whatsappButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919574329365"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
