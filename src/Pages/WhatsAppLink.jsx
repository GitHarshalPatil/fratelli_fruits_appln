import React from 'react'
import whatsAppLogo from '../assets/whatsapp/w-logo.jpeg'
const WhatsAppLink = () => {
    const handleWhatsAppClick = () => {
        const message = 'Hello'; // Your predefined message
        const phoneNumber = '8698878010';
        const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;
        // window.open(whatsappLink, '_blank');
      };
  return (
    <div>
    <img
      src={whatsAppLogo}
      alt="WhatsApp"
      width={"70px"}
      height={"70px"}
      style={{ float: "right", marginRight: "30px", cursor: "pointer" }}
      onClick={handleWhatsAppClick}
    />
  </div>
  )
}

export default WhatsAppLink