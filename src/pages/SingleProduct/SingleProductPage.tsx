import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Select from "../../components/CustomSelect/Select";
import { motion } from "framer-motion";
import { fadeFromBottomAnimate, fadeFromTopAnimate } from "../../animation";
import { Link, useParams } from "react-router-dom";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { FaHome } from "react-icons/fa";
import { CartItem, Option } from "../../types";
import { RiShoppingBag2Fill } from "react-icons/ri";
import OrderButton from "../../components/Button/OrderButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/cart/CartSlice";
import { RootState } from "../../store/store";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { noimage } from "../../assets/images";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(
    (state: RootState) => state.products,
  );
  const cartItems = useSelector((state: RootState) => state.cart);

  const [showReview, setShowReview] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [productData, setProductData] = useState<CartItem[]>([]);
  const { id } = useParams<{ id: string }>();

  const product = products.find((i) => i.id === id);

  const productFoundInCart = cartItems.findIndex(
    (cart) => cart.id === product?.id,
  );
  const handleSelectChange = (value: string) => {
    setSelectedSize(value);
  };

  const handleCurrentImage = (value: number) => {
    setCurrentImage(value);
  };
  const handleAddToCart = () => {
    const { id, title, price, discount, images } = product || {};
    dispatch(
      addToCart({
        id: id || "",
        images: images || [],
        selectedImg: product?.images[currentImage] || "",
        name: title || "",
        price: price || 0,
        quantity: 1,
        discount: discount || { type: "", value: 0 },
        selectedSize: selectedSize || "",
        sizes: product?.sizes || [],
      }),
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) {
      const productItem: CartItem = {
        id: product?.id,
        images: product.images,
        selectedImg: product.images[currentImage] || "",
        name: product?.title,
        price: product?.price,
        discount: product?.discount,
        quantity: 1,
        selectedSize: selectedSize,
        sizes: product.sizes,
      };

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
        <div className="py-7 font-notosanslao">
          <div className="rounded-div space-y-32">
            {/*====================== Product info ======================*/}
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
              {/* Left */}
              <motion.div
                initial={"offscreen"}
                animate={"onscreen"}
                variants={fadeFromTopAnimate}
                className="md:max-w-[25rem]m relative h-auto overflow-hidden "
              >
                <div className="h-[25rem] w-[20rem]  md:h-[35rem] md:w-[30rem]">
                  <LazyLoadImage
                    className="h-full w-full object-cover"
                    src={product?.images[currentImage]}
                    alt={product?.title}
                    placeholderSrc={noimage}
                    effect="blur"
                    width="100%"
                    height="100%"
                  />
                </div>
              </motion.div>
              {/*====================== Right ======================*/}
              <motion.div
                initial={"offscreen"}
                animate={"onscreen"}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-8"
              >
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
                <motion.div variants={fadeFromTopAnimate} className="space-y-1">
                  <p className="text-[16px] text-gray-700">ເລືອກແບບເຄື່ອງ:</p>

                  <motion.div
                    variants={fadeFromTopAnimate}
                    className="flex w-full flex-wrap items-center justify-start gap-2"
                  >
                    {product?.images.map((item, index) => (
                      <LazyLoadImage
                        key={index}
                        className={`h-[5rem] w-[4rem] cursor-pointer object-cover hover:border-[0.2rem] hover:border-sky-700 ${
                          index === currentImage &&
                          "border-[0.2rem] border-sky-700"
                        }`}
                        src={item}
                        effect="blur"
                        alt=""
                        onClick={() => handleCurrentImage(index)}
                      />
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div variants={fadeFromTopAnimate}>
                  <span>SIZE:</span>
                  <Select
                    options={options}
                    currOption={product?.sizes[0] || ""}
                    onChange={(value) => handleSelectChange(value)}
                    textSize=""
                  />
                </motion.div>

                <motion.div
                  className="flex w-fit flex-col gap-2 text-lg"
                  variants={fadeFromTopAnimate}
                >
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-1 bg-sky-700 px-10 py-5 text-white transition duration-300 hover:scale-95 hover:bg-sky-800"
                  >
                    <RiShoppingBag2Fill className="text-2xl" />
                    <span>
                      {productFoundInCart > -1
                        ? "ເພີ່ມແລ້ວ"
                        : "ເພີ່ມເຂົ້າກະເປົາ"}
                    </span>
                  </button>

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
                <p className="border px-14 py-16">ບໍ່ມີ Review</p>
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
