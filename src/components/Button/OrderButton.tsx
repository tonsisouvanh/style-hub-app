import React from "react";
import { CartItem } from "../../types";
// import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { IoLogoWhatsapp } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";

interface OrderButtonProps {
  productData: CartItem[];
  setOpenConfirmModal: (value: boolean) => void;
  openConfirmModal: boolean;
}

const OrderButton: React.FC<OrderButtonProps> = ({
  productData,
  setOpenConfirmModal,
  // openConfirmModal,
}) => {
  const handleModal = () => {
    setOpenConfirmModal(true);
  };

  return (
    <button
      disabled={productData && productData.length > 0 ? false : true}
      className="font-300 mt-4 flex min-w-[10rem] cursor-pointer items-center justify-center gap-1 bg-[#438642] px-4 py-2 font-notosanslao text-lg text-white transition duration-300 hover:scale-95 hover:bg-[#438642]/70"
      onClick={handleModal}
    >
      <IoLogoWhatsapp className="text-2xl" />

      <span>ສັ່ງເລຍ!</span>
    </button>
  );
};

export default OrderButton;
