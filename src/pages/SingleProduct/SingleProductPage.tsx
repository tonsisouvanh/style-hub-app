import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Select from "../../components/CustomSelect/Select";
import { motion } from "framer-motion";
import {
  fadeFromBottomAnimate,
  fadeFromTopAnimate,
  scaleAnimate,
} from "../../animation";
import { Link, useParams } from "react-router-dom";
import { mockProducts } from "../../data/data";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { FaHome } from "react-icons/fa";
import { Option } from "../../types";
const SingleProduct = () => {
  const [showReview, setShowReview] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  // const options = [
  //   { label: "Small S", value: "Option 1" },
  //   { label: "Medium M", value: "Option 2" },
  //   { label: "Large L", value: "Option 3" },
  //   { label: "Extra Large XL", value: "Option 4" },
  // ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleCurrentImage = (value: number) => {
    setCurrentImage(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const product = mockProducts.find((i) => i.id === id);

  const options: Option[] = (product?.sizes || []).map((size) => ({
    label: `${size}`,
    value: `${size}`,
  }));

  return (
    <>
      <div className="py-7">
        <div className="rounded-div space-y-32">
          {/*====================== Product info ======================*/}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
            {/* Left */}
            <div className="w-[25rem] overflow-hidden px-5 lg:w-[38rem]">
              <motion.img
                className="h-[32rem] w-full object-cover"
                src={product?.images[currentImage]}
                alt=""
                initial="offscreen"
                animate="onscreen"
                variants={fadeFromTopAnimate}
              />
              <motion.div
                initial={"offscreen"}
                animate={"onscreen"}
                transition={{ staggerChildren: 0.2 }}
                className="no-scrollbar flex items-center justify-start gap-2 overflow-x-scroll pt-5"
              >
                {product?.images.map((item, index) => (
                  <motion.img
                    variants={scaleAnimate}
                    key={index}
                    className="h-[12rem] w-[10rem] object-cover"
                    src={item}
                    alt=""
                    onClick={() => handleCurrentImage(index)}
                  />
                ))}
              </motion.div>
            </div>
            {/*====================== Right ======================*/}
            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-8"
            >
              {/* <motion.p
                variants={fadeFromTopAnimate}
                className="uppercase font-arimo font-bold text-gray-500"
              >
                home / shop / women / <span className="text-black">shop</span>{" "}
              </motion.p> */}
              <motion.div
                variants={fadeFromTopAnimate}
                className="font-roboto bg-transparent"
              >
                <div className="flex items-center gap-x-2 text-lg text-gray-600 md:text-xl">
                  <div className="flex items-center gap-x-1 text-[#024E82]">
                    <FaHome />
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </div>
                  <span className=""> / </span>
                  <div className="flex items-center gap-x-1 text-[#024E82]">
                    <Link to="/all-products/all" className="hover:underline">
                      All
                    </Link>
                  </div>
                  <span className=""> / </span>
                  {product?.title}
                </div>
              </motion.div>
              <motion.h2
                variants={fadeFromTopAnimate}
                className="font-notosanslao text-[36px] font-bold"
              >
                {product?.title}
              </motion.h2>
              <motion.div
                variants={fadeFromTopAnimate}
                className="flex items-center"
              >
                {[...Array(5)].map((_, index) => (
                  <AiFillStar
                    key={index}
                    className={`text-lg text-orange-700 ${
                      index === 4 ? "opacity-50" : null
                    }`}
                  />
                ))}
                <span>(15)</span>
              </motion.div>
              <motion.div
                variants={fadeFromTopAnimate}
                className="space-x-4 font-lato text-[24px] font-[500]"
              >
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
              </motion.div>
              <motion.p
                variants={fadeFromTopAnimate}
                className="text-[16px] text-gray-700"
              >
                {product?.description}
              </motion.p>
              <motion.div variants={fadeFromTopAnimate}>
                {/* <ClickOutsideHandler > */}
                <Select options={options} onChange={handleSelectChange} />
                {/* </ClickOutsideHandler> */}
              </motion.div>
              <motion.button
                variants={fadeFromTopAnimate}
                className="bg-[#024E82] px-10 py-5 text-white"
              >
                ADD TO CART
              </motion.button>
              <motion.div
                variants={fadeFromTopAnimate}
                className="font-lato text-[14px] text-gray-700"
              >
                <p>
                  <span className="font-bold text-black">Category:</span>{" "}
                  {product?.categories.map((item, index) => (
                    <span>
                      {item}
                      {index < product.categories.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p>
                  <span className="font-bold text-black">Tags:</span> Modern,
                  Design, cotton
                </p>
              </motion.div>
            </motion.div>
          </div>
          {/* product desc */}
          <motion.div
            initial="offscreen"
            animate="onscreen"
            variants={fadeFromBottomAnimate}
            className=""
          >
            <div className="flex">
              <p
                onClick={() => setShowReview(false)}
                className={`${
                  showReview && "bg-gray-100 opacity-70"
                } border px-6 py-3 font-arimo text-[16px] font-bold`}
              >
                Description
              </p>
              <p
                onClick={() => setShowReview(true)}
                className={`${
                  !showReview && "bg-gray-100 opacity-70"
                } border px-6 py-3 font-arimo text-[16px]`}
              >
                Reviews(0)
              </p>
            </div>
            {showReview ? (
              <p className="border px-14 py-16 font-notosanslao">
                ບໍ່ມີ Review
              </p>
            ) : (
              <p className="border px-14 py-16 ">{product?.description}</p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
