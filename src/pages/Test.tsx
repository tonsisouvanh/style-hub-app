import React from "react";
import { motion } from "framer-motion";
import { fadeFromBottomAnimate } from "../animation";

const Test = () => {
  const merchantPhoneNumber = "+8562056037361"; // Replace with the merchant's actual phone number
  const productName = "test";
  const productPrice = 20000;

  const handleOrderClick = () => {
    // Generate the WhatsApp link with the product details
    const whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າໂຕນີ້ແນ່ ${productName} for ${productPrice}.`;
    const whatsappLink = `https://wa.me/${merchantPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    // Open the WhatsApp link in a new tab or window
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <h2>{"product.name"}</h2>
      <p>Price: ${"product.price"}</p>
      <button onClick={handleOrderClick}>Order Now</button>
    </div>
  );
};

export default Test;
