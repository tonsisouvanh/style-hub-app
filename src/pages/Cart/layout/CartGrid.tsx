import React from "react";
import { CartItem } from "../../../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { noimage } from "../../../assets/images";
import { fadeFromTopAnimate } from "../../../animation";
import { motion } from "framer-motion";
import { calculateDiscountedPrice, formatPrice } from "../../../utils/utils";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Select from "../../../components/CustomSelect/Select";
import { BsTrash } from "react-icons/bs";

interface CartGridProps {
  cartItems: CartItem[];
  handleRemoveProduct: (id: string) => void;
  handleSelectChange: (value: string, id: string) => void;
  handleAddQuantity: (id: string, action: string | "incr") => void;
}
const CartGrid: React.FC<CartGridProps> = ({
  cartItems,
  handleRemoveProduct,
  handleSelectChange,
  handleAddQuantity,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cartItems.map((product) => (
        <div key={product.id} className="rounded-lg border bg-white p-4">
          <div className="h-50 mb-4 w-full">
            <LazyLoadImage
              className="h-full w-full rounded object-cover"
              // src={currentImage?.img || product.selectedImg}
              src={product.selectedImg}
              alt={product.name}
              effect="blur"
              // width="100%"
              // height="100%"
              placeholderSrc={noimage}
            />
          </div>
          <motion.div
            variants={fadeFromTopAnimate}
            className="flex w-full flex-wrap items-center justify-start gap-2"
          >
            {/* {product?.images.map((item, index) => (
            <LazyLoadImage
              key={index}
              className={`h-[5rem] w-[4rem] cursor-pointer object-cover hover:border-[0.2rem] hover:border-sky-700 ${
                item === currentImage?.img &&
                product.id === currentImage.proId &&
                "border-[0.2rem] border-sky-700"
              }`}
              src={item}
              effect="blur"
              alt=""
              onClick={(img: string, proId: string) =>
                handleCurrentImage(img, proId)
              }
            />
          ))} */}
            {/* {product?.images.map((item, index) => (
            <LazyLoadImage
              key={index}
              className={`h-[5rem] w-[4rem] cursor-pointer object-cover hover:border-[0.2rem] hover:border-sky-700 ${
                item === currentImage?.img &&
                currentImage?.proId === product?.id
                  ? "border-[0.2rem] border-sky-700"
                  : ""
              }`}
              src={item}
              effect="blur"
              alt=""
              onClick={() => handleCurrentImage(item, product.id)}
            />
          ))} */}
          </motion.div>
          <div className="mb-2 text-lg font-semibold text-gray-800">
            {product.name}
          </div>
          <div className="mb-2 font-notosanslao text-sm text-gray-600">
            <div className="flex items-center justify-start gap-x-5  text-gray-900 ">
              <span className="text-lg">ລາຄາ:</span>
              <span
                className={`text-lg  text-gray-500 ${
                  product?.discount && "line-through"
                }`}
              >
                {formatPrice(product?.price || 0)}
              </span>

              {product?.discount && (
                <span className="text-lg text-[#024E82]">
                  {formatPrice(
                    calculateDiscountedPrice(product?.price, product.discount),
                  )}
                </span>
              )}
            </div>
          </div>
          <div className="mb-2 flex items-center gap-12 font-notosanslao">
            {/* <span>Size: {product.selectedSize}</span> */}
            <div>
              ຈຳນວນ:
              <span className="mx-2 border px-3 py-0">{product.quantity}</span>
              ໂຕ
            </div>
            <div className="flex items-center gap-5">
              <AiOutlinePlus
                className="cursor-pointer hover:text-cyan-700"
                onClick={() => handleAddQuantity(product.id, "incr")}
              />
              <AiOutlineMinus
                className="cursor-pointer hover:text-cyan-700"
                onClick={() => handleAddQuantity(product.id, "decr")}
              />
            </div>
          </div>
          <div className="mb-2">
            <Select
              options={product.sizes.map((size) => ({
                value: size,
                label: size,
              }))}
              currOption={product.selectedSize}
              onChange={(value) => handleSelectChange(value, product.id)}
            />
          </div>

          <div className="flex items-center justify-between font-notosanslao text-lg font-semibold text-cyan-700">
            <span>ລວມ: {formatPrice(product.price * product.quantity)}</span>
            <span
              onClick={() => handleRemoveProduct(product.id)}
              className="group relative"
            >
              <BsTrash className="cursor-pointer text-3xl text-red-600 transition duration-300 hover:scale-110" />
              {/* <p className="absolute -left-[0.8rem] -top-[2rem] whitespace-nowrap px-1 text-[0.7rem] text-black opacity-0 group-hover:opacity-100">
              ລົບສິນຄ້າ
            </p> */}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartGrid;
