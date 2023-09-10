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
      const merchantPhoneNumber = "+8562056300100";

      let whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າ: \n\n`;

      productData.forEach((item) => {
        whatsappMessage += `ລະຫັດ: ${item.id}\n`;
        whatsappMessage += `ຊື່: ${item.name}\n`;
        whatsappMessage += `ລາຄາປົກກະຕຶ: ${formatPrice(item.price)} ກີບ\n`;
        whatsappMessage += `Size: ${item.selectedSize}      ຈຳນວນ: ${item.quantity}\n`;

        if (item.discount) {
          whatsappMessage += `ລາຄາຫຼຸດ: ${formatPrice(
            calculateDiscountedPrice(item.price, item.discount),
          )}%\n`;
        }
        console.log(whatsappMessage);
        whatsappMessage += `\n`;
      });
      const encodedMessage = encodeURIComponent(whatsappMessage);

      const imageUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraoZ8bi1i0f-lNAEftxMflvBXubbFQEngu_hRgad242WED-XdKOqtvrDji79R-mG5lPI&usqp=CAU";

      // Include the image link in the message
      // const messageWithImage = `${encodedMessage}%0A%0A${encodeURIComponent(
      //   imageUrl,
      // )}`;

      // Create the WhatsApp link with the message and image
      const whatsappLink = `https://wa.me/${merchantPhoneNumber}?text=${encodedMessage}`;

      window.open(whatsappLink, "_blank");
      dispatch(clearCart());
      return;
    }
    console.log("No info to send");
  };
  return (
    <button
      className="font-300 mt-4 flex w-full items-center justify-center gap-1 bg-[#438642] py-2 font-notosanslao text-lg text-white transition duration-300 hover:scale-95 hover:bg-[#438642]/70"
      onClick={handleOrderClick}
    >
      <IoLogoWhatsapp className="" />

      <span>Whatsapp Now!</span>
    </button>
  );
};

export default OrderButton;
