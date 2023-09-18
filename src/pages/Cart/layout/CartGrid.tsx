import React, { useState } from "react";
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
  handleSelectImage: (image: string, proId: string) => void;
}
const CartGrid: React.FC<CartGridProps> = ({
  cartItems,
  handleRemoveProduct,
  handleSelectChange,
  handleAddQuantity,
  handleSelectImage,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {cartItems.map((product) => (
        <div key={product.id} className="rounded-lg border bg-white p-4">
          <div className=" mb-4 w-full">
            <LazyLoadImage
              className="h-full w-full rounded object-cover"
              src={product.selectedImg}
              alt={product.name}
              effect="blur"
              placeholderSrc={noimage}
            />
          </div>
          <motion.div
            variants={fadeFromTopAnimate}
            className="mb-2 flex w-full flex-wrap items-center justify-start gap-2"
          >
            {product?.images.map((image, index) => (
              <LazyLoadImage
                key={index}
                className={`h-[2rem] w-full cursor-pointer object-cover hover:border-[0.2rem] hover:border-sky-700 sm:h-[3rem]
                ${
                  image === product.selectedImg &&
                  "border-[0.2rem] border-sky-700"
                }`}
                src={image}
                effect="blur"
                alt=""
                onClick={() => handleSelectImage(image, product.id)}
              />
            ))}
          </motion.div>
          <div className="mb-2 text-sm font-semibold text-gray-800 md:text-lg">
            {product.name}
          </div>
          <div className="mb-2 font-notosanslao text-sm text-gray-600">
            <div className="flex flex-wrap items-center justify-start gap-x-2 text-sm text-gray-900 md:gap-x-5 md:text-lg ">
              <span className="">ລາຄາ:</span>
              <span
                className={`  text-gray-500 ${
                  product?.discount && "line-through"
                }`}
              >
                {formatPrice(product?.price || 0)}
              </span>

              {product?.discount && (
                <span className=" text-[#024E82]">
                  {formatPrice(
                    calculateDiscountedPrice(product?.price, product.discount),
                  )}
                </span>
              )}
            </div>
          </div>
          <div className="mb-2 flex items-center gap-1 font-notosanslao text-sm md:gap-12 md:text-lg">
            {/* <span>Size: {product.selectedSize}</span> */}
            <div>
              ຈຳນວນ:
              <span className="mx-2 border px-3 py-0">{product.quantity}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
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
              textSize={"text-sm"}
            />
          </div>

          <div className="flex items-center justify-between font-notosanslao font-semibold text-cyan-700">
            <span className="text-sm md:text-lg">
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
      ))}
    </div>
  );
};

export default CartGrid;
