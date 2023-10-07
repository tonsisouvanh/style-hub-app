import React, { useState } from "react";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
import { addToCart } from "../../feature/cart/CartSlice";
import ClickOutsideHandler from "../ClickOutsideHandler";

interface AddCartModalProps {
  openAddCartModal: boolean;
  handleAddCartModal: (value: boolean, proId: string) => void;
  proId: string;
}

const AddCartModal: React.FC<AddCartModalProps> = ({
  openAddCartModal,
  handleAddCartModal,
  proId,
}) => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state: RootState) => state.products);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const product = products.find((i) => i.id === proId);

  const handleCurrentImage = (value: number) => {
    setCurrentImage(value);
  };

  const handleSelectedSize = (value: string) => {
    setSelectedSize(value);
  };

  const handleAddQuantity = (action: string) => {
    action === "incr"
      ? setQuantity((prev) => prev + 1)
      : quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const handleCloseModal = () => {
    handleAddCartModal(false, "");
    setQuantity(1);
    setSelectedSize("");
  };

  const handleAddToCart = () => {
    const { id, name, price, discount, images } = product || {};
    dispatch(
      addToCart({
        id: id || "",
        images: images || [],
        selectedImg: product?.images[currentImage] || "",
        name: name || "",
        price: price || 0,
        quantity: quantity,
        discount: discount || { type: "", value: 0 },
        selectedSize: selectedSize || "",
        sizes: product?.sizes || [],
      }),
    );

    toast.success("ເພີ່ມແລ້ວ");
    handleCloseModal();
  };
  return (
    <>
      {openAddCartModal && (
        <div
          className={`fixed left-0 top-0 z-20 h-screen w-full overflow-hidden font-notosanslao`}
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-opacity-20 p-2 backdrop-blur-sm backdrop-brightness-50 backdrop-saturate-150 backdrop-filter">
            {/* Modal */}
            <div className="modal-container z-[21] h-fit w-full overflow-hidden rounded bg-white shadow-lg sm:max-w-md">
              <ClickOutsideHandler onClickOutside={handleCloseModal}>
                <div className="modal-content px-6 py-4 text-left">
                  <div className="flex items-center justify-between pb-3">
                    <p className="text-lg font-bold">{product?.name}</p>
                    <div
                      onClick={handleCloseModal}
                      className="modal-close z-[21] cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    {/* main image */}
                    <div className="flex items-end gap-1">
                      <div className="min-h-auto w-[12rem]">
                        <LazyLoadImage
                          className="h-full w-full object-cover"
                          src={
                            product?.images[currentImage] || product?.images[0]
                          }
                          alt={product?.name}
                          effect="blur"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      {/* price */}
                      <div className="flex h-full gap-1 ">
                        <span
                          className={`text-[1rem] text-gray-500  ${
                            product?.discount && "line-through"
                          }`}
                        >
                          {formatPrice(product?.price || 0)}
                        </span>

                        {product?.discount && (
                          <span className="text-[1rem] text-[#024E82]">
                            {formatPrice(
                              calculateDiscountedPrice(
                                product?.price,
                                product.discount,
                              ),
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="no-scrollbar flex max-h-[20rem] flex-col gap-5 overflow-y-scroll border-b border-t py-3">
                      {/* mini image */}
                      <div className="space-y-1">
                        <p className="text-[16px] text-gray-700">
                          ເລືອກແບບເຄື່ອງ:
                        </p>
                        <div className="flex w-full flex-wrap items-center justify-start gap-2">
                          {product?.images.map((item, index) => (
                            <LazyLoadImage
                              key={index}
                              className={`h-[3.5rem] w-[2.5rem] cursor-pointer object-cover hover:border-[0.2rem] hover:border-sky-700 ${
                                index === currentImage &&
                                "border-[0.2rem] border-sky-700"
                              }`}
                              src={item}
                              effect="blur"
                              alt=""
                              onClick={() => handleCurrentImage(index)}
                            />
                          ))}
                        </div>
                      </div>
                      {/* size */}
                      <div className="space-y-1">
                        <p className="text-[16px] text-gray-700">Size:</p>
                        <div className="flex flex-wrap items-center gap-1">
                          {product?.sizes.map((size) => (
                            <span
                              key={size}
                              onClick={() => handleSelectedSize(size)}
                              className={`${
                                selectedSize === size && "bg-sky-700 text-white"
                              } cursor-pointer rounded-sm border px-3 py-1 uppercase hover:border-sky-700`}
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* quantity */}
                      
                      <div className="itemcen flex items-center justify-between">
                        <p className="text-[16px] text-gray-700">ຈຳນວນ</p>
                        <div className="flex items-center gap-1">
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-full border text-lg text-gray-500 hover:bg-sky-200 hover:text-cyan-700 focus:outline-none"
                            onClick={() => handleAddQuantity("decr")}
                          >
                            <AiOutlineMinus />
                          </button>
                          <span className="rounded border border-gray-300 px-3 py-1 text-sm">
                            {quantity}
                          </span>
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-full border text-lg text-gray-500 hover:bg-sky-200 hover:text-cyan-700 focus:outline-none"
                            onClick={() => handleAddQuantity("incr")}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <div className="mt-6 flex justify-end gap-2 pt-2">
                    <button
                      onClick={handleAddToCart}
                      disabled={
                        !selectedSize && selectedSize === "" ? true : false
                      }
                      className={`${
                        !selectedSize && selectedSize === ""
                          ? "cursor-not-allowed bg-gray-300 opacity-50"
                          : "bg-sky-500"
                      } modal-close rounded-lg  p-3 px-4 text-white transition hover:bg-sky-500/75`}
                    >
                      ເພີ່ມເຂົ້າກະເປົາ
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className=" rounded-lg bg-transparent p-3 px-4 text-sky-500 transition hover:bg-rose-500 hover:text-white"
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

export default AddCartModal;
