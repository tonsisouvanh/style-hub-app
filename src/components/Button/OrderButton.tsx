import React from "react";
import { CartItem } from "../../types";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { IoLogoWhatsapp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { clearCart } from "../../feature/cart/CartSlice";

interface OrderButtonProps {
  productData: CartItem[];
}

const OrderButton: React.FC<OrderButtonProps> = ({ productData }) => {
  const dispatch = useDispatch();
  const handleOrderClick = () => {
    if (productData && productData.length > 0) {
      const merchantPhoneNumber = "+8562056373308";

      let whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າ: \n\n`;

      let totalOrderAmount = 0; // Initialize the total order amount

      // productData.forEach((item) => {
      //   whatsappMessage += `ລະຫັດ: ${item.id}\n`;
      //   whatsappMessage += `ຊື່: ${item.name}\n`;
      //   whatsappMessage += `ລາຄາປົກກະຕຶ: ${formatPrice(item.price)} ກີບ\n`;

      //   // Calculate the subtotal for the current item
      //   let itemSubtotal = item.quantity * item.price;
      //   if (item.discount) {
      //     itemSubtotal =
      //       item.quantity * calculateDiscountedPrice(item.price, item.discount);
      //   }

      //   // Add the current item's subtotal to the total order amount
      //   totalOrderAmount += itemSubtotal;

      //   whatsappMessage += `Size: ${item.selectedSize}      ຈຳນວນ: ${item.quantity}\n`;
      //   whatsappMessage += `Subtotal: ${formatPrice(itemSubtotal)} ກີບ\n`;
      //   whatsappMessage += `\n`;
      // });
      productData.forEach((item) => {
        whatsappMessage += `ລະຫັດ: http://copy.com/${item.id}\n`;

        whatsappMessage += `ຊື່: ${item.name}\n`;

        // Include the image URL for the current product
        whatsappMessage += `ຮູບພາບ: ${item.image}\n`;

        whatsappMessage += `ລາຄາປົກກະຕິ: ${formatPrice(item.price)} ກີບ\n`;

        // Calculate the subtotal for the current item
        let itemSubtotal = item.quantity * item.price;
        if (item.discount) {
          itemSubtotal =
            item.quantity * calculateDiscountedPrice(item.price, item.discount);
        }

        // Add the current item's subtotal to the total order amount
        totalOrderAmount += itemSubtotal;

        whatsappMessage += `Size: ${item.selectedSize}      ຈຳນວນ: ${item.quantity}\n`;
        whatsappMessage += `Subtotal: ${formatPrice(itemSubtotal)} ກີບ\n`;
        whatsappMessage += `\n`;
      });

      whatsappMessage += `ລວມລາຄາທັງໝົດ: ${formatPrice(
        totalOrderAmount,
      )} ກີບ\n`;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      const imageUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraoZ8bi1i0f-lNAEftxMflvBXubbFQEngu_hRgad242WED-XdKOqtvrDji79R-mG5lPI&usqp=CAU";

      // Create the WhatsApp link with the message and image
      const whatsappLink = `https://wa.me/${merchantPhoneNumber}?text=${encodedMessage}`;

      window.open(whatsappLink, "_blank");
      // dispatch(clearCart());
      return;
    }
  };

  return (
    <button
      disabled={productData && productData.length > 0 ? false : true}
      className="font-300 mt-4 flex w-full items-center justify-center gap-1 bg-[#438642] py-2 font-notosanslao text-lg text-white transition duration-300 hover:scale-95 hover:bg-[#438642]/70"
      onClick={handleOrderClick}
    >
      <IoLogoWhatsapp className="text-2xl" />

      <span>Whatsapp Now!</span>
    </button>
  );
};

export default OrderButton;
