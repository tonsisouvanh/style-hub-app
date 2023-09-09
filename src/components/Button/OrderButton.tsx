import React from "react";
import { CartItem } from "../../types";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { IoLogoWhatsapp } from "react-icons/io";

interface OrderButtonProps {
  productData: CartItem[];
}

const OrderButton: React.FC<OrderButtonProps> = ({ productData }) => {
  const handleOrderClick = () => {
    const merchantPhoneNumber = "+8562056373308"; // Replace with the merchant's actual phone number

    // Generate the WhatsApp message with cart item details
    let whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າ: \n\n`;

    // Add details of each cart item to the message
    productData.forEach((item) => {
      whatsappMessage += `ລະຫັດ: ${item.id}\n`;
      whatsappMessage += `ຊື່: ${item.name}\n`;
      whatsappMessage += `ລາຄາປົກກະຕຶ: ${item.price} ກີບ\n`;
      whatsappMessage += `ຈຳນວນ: ${item.quantity}\n`;

      if (item.discount) {
        whatsappMessage += `ລາຄາຫຼຸດ: ${formatPrice(
          calculateDiscountedPrice(item.price, item.discount),
        )}%\n`;
      }

      whatsappMessage += `\n`; // Add a line break between items
    });
    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // URL of the image you uploaded to the image hosting service
    const imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraoZ8bi1i0f-lNAEftxMflvBXubbFQEngu_hRgad242WED-XdKOqtvrDji79R-mG5lPI&usqp=CAU";

    // Include the image link in the message
    // const messageWithImage = `${encodedMessage}%0A%0A${encodeURIComponent(
    //   imageUrl,
    // )}`;

    // Create the WhatsApp link with the message and image
    const whatsappLink = `https://wa.me/${merchantPhoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab or window
    window.open(whatsappLink, "_blank");
  };
  return (
    <button
      className="font-300 mt-4 flex w-full items-center justify-center gap-1 bg-[#65D072] py-2 font-notosanslao text-xl text-black transition duration-300 hover:scale-95 hover:bg-[#65D072]/70"
      onClick={handleOrderClick}
    >
      <span>ສັ່ງນຳພໍ່ຄ້າ</span>
      <IoLogoWhatsapp className="" />
    </button>
  );
};

export default OrderButton;
