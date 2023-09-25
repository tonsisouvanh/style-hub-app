import React from "react";
import { CartItem } from "../../../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { noimage } from "../../../assets/images";
// import { fadeFromTopAnimate } from "../../../animation";
import { calculateDiscountedPrice, formatPrice } from "../../../utils/utils";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

interface CartGridProps {
  cartItems: CartItem[];
  handleRemoveProduct: (id: string) => void;
  handleSelectChange: (value: string, id: string) => void;
  handleAddQuantity: (
    id: string,
    size: string,
    img: string,
    action: string | "incr",
  ) => void;
  handleSelectImage: (image: string, proId: string) => void;
}
const CartGrid: React.FC<CartGridProps> = ({
  cartItems,
  handleRemoveProduct,
  // handleSelectChange,
  handleAddQuantity,
  // handleSelectImage,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {cartItems.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between rounded-lg border bg-white p-4"
        >
          <div>
            <div className="mb-2 w-full">
              <LazyLoadImage
                className="h-full w-full rounded object-cover"
                src={product.selectedImg}
                alt={product.name}
                effect="blur"
                placeholderSrc={noimage}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 font-notosanslao text-base font-semibold text-gray-800 md:text-lg">
              {product.name}
            </div>
            <div className="mb-2 font-notosanslao text-base text-gray-600">
              <div className="flex flex-wrap items-center justify-start gap-x-2 text-base text-gray-900 md:gap-x-5 md:text-lg">
                <span className="">ລາຄາ:</span>
                <span
                  className={`text-gray-500 ${
                    product?.discount && "line-through"
                  }`}
                >
                  {formatPrice(product?.price || 0)}
                </span>

                {product?.discount && (
                  <span className="text-[#024E82]">
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
            <div className="mb-2 flex items-center gap-1 font-notosanslao text-base md:gap-12 md:text-lg">
              {/* <div>ຈຳນວນ:</div> */}
              <div className="flex items-center gap-1">
                <button
                  className="flex h-6 w-6 items-center justify-center rounded-full border text-base text-gray-500 hover:bg-sky-200 hover:text-cyan-700 focus:outline-none"
                  onClick={() =>
                    handleAddQuantity(
                      product.id,
                      product.selectedSize,
                      product.selectedImg,
                      "decr",
                    )
                  }
                >
                  <AiOutlineMinus />
                </button>
                <span className="rounded border border-gray-300 px-2 py-0 text-sm">
                  {product.quantity}
                </span>
                <button
                  className="flex h-6 w-6 items-center justify-center rounded-full border text-base text-gray-500 hover:bg-sky-200 hover:text-cyan-700 focus:outline-none"
                  onClick={() =>
                    handleAddQuantity(
                      product.id,
                      product.selectedSize,
                      product.selectedImg,
                      "incr",
                    )
                  }
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div className="mb-2 text-base">
              {product.selectedSize.toLocaleUpperCase()}
            </div>
            <div className="flex items-center justify-between font-notosanslao font-semibold text-cyan-700">
              <span className="text-base md:text-lg">
                ລວມ: {formatPrice(product.price * product.quantity)}
              </span>
              <span
                onClick={() => handleRemoveProduct(product.id)}
                className="group relative"
              >
                <BsTrash className="cursor-pointer text-xl text-red-600 transition duration-300 hover:scale-110 md:text-3xl" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartGrid;
