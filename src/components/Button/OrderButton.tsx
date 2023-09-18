import React from "react";
import { CartItem } from "../../types";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { IoLogoWhatsapp } from "react-icons/io";

interface OrderButtonProps {
  productData: CartItem[];
}

const OrderButton: React.FC<OrderButtonProps> = ({ productData }) => {
  const handleOrderClick = () => {
    if (productData && productData.length > 0) {
      const merchantPhoneNumber = "+8562056300100";

      let whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າ: \n\n`;

      let totalOrderAmount = 0;

      productData.forEach((item) => {
        whatsappMessage += `ລະຫັດ: http://copy.com/${item.id}\n`;

        whatsappMessage += `ຊື່: ${item.name}\n`;

        whatsappMessage += `ຮູບພາບ: ${item.selectedImg}\n`;

        whatsappMessage += `ລາຄາປົກກະຕິ: ${formatPrice(item.price)}\n`;

        let itemSubtotal = item.quantity * item.price;
        if (item.discount) {
          whatsappMessage += `ລາຄາ sale: ${formatPrice(
            calculateDiscountedPrice(item?.price, item.discount),
          )}\n`;
          itemSubtotal =
            item.quantity * calculateDiscountedPrice(item.price, item.discount);
        }

        totalOrderAmount += itemSubtotal;

        whatsappMessage += `Size: ${item.selectedSize}      ຈຳນວນ: ${item.quantity}\n`;
        whatsappMessage += `ລວມ: ${formatPrice(itemSubtotal)}\n`;
        whatsappMessage += `\n\n\n`;
      });

      whatsappMessage += `ລວມລາຄາທັງໝົດ: ${formatPrice(totalOrderAmount)}\n`;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      const whatsappLink = `https://wa.me/${merchantPhoneNumber}?text=${encodedMessage}`;

      window.open(whatsappLink, "_blank");
      return;
    }
  };

  return (
    <button
      disabled={productData && productData.length > 0 ? false : true}
      className="font-300 mt-4 flex min-w-fit max-w-full cursor-pointer items-center justify-center gap-1 bg-[#438642] px-4 py-2 font-notosanslao text-lg text-white transition duration-300 hover:scale-95 hover:bg-[#438642]/70"
      onClick={handleOrderClick}
    >
      <IoLogoWhatsapp className="text-2xl" />

      <span>Whatsapp Now!</span>
    </button>
  );
};

export default OrderButton;
