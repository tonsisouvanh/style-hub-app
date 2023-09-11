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
import { CartItem, Option } from "../../types";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import OrderButton from "../../components/Button/OrderButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/cart/CartSlice";
import { RootState } from "../../store/store";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(
    (state: RootState) => state.products,
  );
  const [showReview, setShowReview] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [productData, setProductData] = useState<CartItem[]>([]);
  const { id } = useParams<{ id: string }>();

  const product = products.find((i) => i.id === id);

  const handleSelectChange = (value: string) => {
    setSelectedSize(value);
  };

  const handleCurrentImage = (value: number) => {
    setCurrentImage(value);
  };
  const handleAddToCart = () => {
    const { id, title, price, discount } = product || {};
    dispatch(
      addToCart({
        id: id || "",
        image: product?.images[0] || "",
        name: title || "",
        price: price || 0,
        quantity: 1,
        discount: discount || { type: "", value: 0 },
        selectedSize: product?.sizes[0] || "",
        sizes: product?.sizes || [],
      }),
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) {
      // Create an array with a single item representing the selected product
      const productItem: CartItem = {
        id: product?.id,
        image: product.images[0],
        name: product?.title,
        price: product?.price,
        discount: product?.discount,
        quantity: 1,
        selectedSize: selectedSize,
        sizes: product.sizes,
      };

      // Set the productData as an array with a single item
      setProductData([productItem]);
    }
  }, [selectedSize]);

  const options: Option[] = (product?.sizes || []).map((size) => ({
    label: `${size}`,
    value: `${size}`,
  }));

  return (
    <>
      {status === "loading" ? (
        <LoadingSpinner />
      ) : (
        <div className="py-7">
          <div className="rounded-div space-y-32">
            {/*====================== Product info ======================*/}
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
              {/* Left */}
              <motion.div
                initial={"offscreen"}
                animate={"onscreen"}
                variants={fadeFromTopAnimate}
                className="relative w-[25rem] overflow-hidden border lg:w-[38rem]"
              >
                <motion.img
                  className="h-auto w-full object-cover"
                  src={product?.images[currentImage]}
                  alt=""
                  initial="offscreen"
                  animate="onscreen"
                  variants={fadeFromTopAnimate}
                />
                <div
                  // initial={"offscreen"}
                  // animate={"onscreen"}
                  // transition={{ staggerChildren: 0.2 }}
                  className="no-scrollbar absolute bottom-0 left-0 flex w-full items-center justify-start gap-2 overflow-x-scroll bg-black/50 p-4 pt-5 opacity-80"
                >
                  {product?.images.map((item, index) => (
                    <motion.img
                      variants={scaleAnimate}
                      key={index}
                      className="h-[5rem] w-[4rem] object-cover"
                      src={item}
                      alt=""
                      onClick={() => handleCurrentImage(index)}
                    />
                  ))}
                </div>
              </motion.div>
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
                  {/* <Select options={options} onChange={handleSelectChange} /> */}
                  <span>SIZE:</span>
                  <Select
                    options={options}
                    currOption={product?.sizes[0] || ""}
                    onChange={(value) => handleSelectChange(value, product.id)}
                  />
                  {/* </ClickOutsideHandler> */}
                </motion.div>

                <motion.div
                  className="flex w-fit flex-col gap-2 font-notosanslao text-lg"
                  variants={fadeFromTopAnimate}
                >
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-1 bg-sky-700 px-10 py-5 text-white transition duration-300 hover:scale-95 hover:bg-sky-800"
                  >
                    <span>ເພີ່ມເຂົ້າກະເປົາ</span>
                    <RiShoppingBag2Fill />
                  </button>
                  {/* <button className="flex items-center gap-1 bg-[#024E82] px-10 py-5 text-white">
                  <span>ສົ່ງຫາພໍ່ຄ້າ</span>
                  <IoLogoWhatsapp />
                </button> */}
                  <OrderButton productData={productData} />
                </motion.div>

                <motion.div
                  variants={fadeFromTopAnimate}
                  className="font-lato text-[14px] text-gray-700"
                >
                  <p>
                    <span className="font-bold text-black">Category:</span>{" "}
                    {product?.categories.map((item, index) => (
                      <span key={index}>
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
                  } cursor-pointer border px-6 py-3 font-arimo text-[16px] font-bold`}
                >
                  Description
                </p>
                <p
                  onClick={() => setShowReview(true)}
                  className={`${
                    !showReview && "bg-gray-100 opacity-70"
                  } cursor-pointer border px-6 py-3 font-arimo text-[16px]`}
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
      )}
    </>
  );
};

export default SingleProduct;
