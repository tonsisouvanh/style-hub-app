import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { toast } from "react-toastify";
import ClickOutsideHandler from "../ClickOutsideHandler";
interface ConfirmModalProps {
  openConfirmModal: boolean;
  hanldeConfirmModal: (value: boolean) => void;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  openConfirmModal,
  hanldeConfirmModal,
}) => {
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleAddCart = () => {
    hanldeConfirmModal(false);
    if (cartItems && cartItems.length > 0) {
      const merchantPhoneNumber = "+8562056300100";
      let whatsappMessage = `ສະບາຍດີຂໍຖາມຂໍ້ມູນສິນຄ້າ: \n\n`;
      let totalOrderAmount = 0;
      cartItems.forEach((item) => {
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
    } else {
      toast.warning("ບໍ່ມີເຄື່ອງໃນກະເປົາ");
    }
  };
  const handleCloseModal = () => {
    hanldeConfirmModal(false);
  };
  return (
    <>
      {openConfirmModal && (
        <div
          className="relative z-[20] font-notosanslao"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <ClickOutsideHandler onClickOutside={handleCloseModal}>
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-sky-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          ສົ່ງຂໍ້ຄວາມ
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            ຂໍ້ມູນເຄື່ອງຈະຖືກສົ່ງໄປຫາພໍ່ຄ້າທາງ WhatsApp
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={handleAddCart}
                      className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto"
                    >
                      ຕົກລົງ
                    </button>
                    <button
                      type="button"
                      onClick={() => hanldeConfirmModal(false)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      ຍົກເລີກ
                    </button>
                  </div>
                </div>
              </ClickOutsideHandler>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
