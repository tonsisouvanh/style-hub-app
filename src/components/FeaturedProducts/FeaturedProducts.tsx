import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeFromTopAnimate } from "../../animation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./FeaturedProduct.css";
import { Product } from "../../types";
import { noimage } from "../../assets/images";
import { calculateDiscountedPrice, formatPrice } from "../../utils/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProductProps {
  products: Product[];
  featuredTitle: string;
  featuredDesc: string;
  showButton: boolean;
  isScrollX: boolean;
  showType: string;
}

const FeaturedProducts: React.FC<ProductProps> = ({
  products,
  featuredTitle = "No title",
  featuredDesc = "No description",
  showButton,
  isScrollX = false,
  showType,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();

  useEffect(() => {
    switch (showType) {
      case "newarrival":
        setFilteredProducts(
          products.filter((item) => item.isNewArrival === true),
        );
        break;
      case "bestsell":
        setFilteredProducts(products.filter((item) => item.ratings >= 5));
        break;
      case "sale":
        setFilteredProducts(
          products.filter((item) => item.discount !== null && item.discount),
        );
        break;

      default:
        setFilteredProducts([]);
        break;
    }
  }, [showType, products]);
  return (
    <>
      {isScrollX ? (
        <motion.section
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className=""
        >
          <div className="rounded-div">
            <div className="">
              <motion.div
                transition={{ staggerChildren: 0.2 }}
                className="font-notosanslao"
              >
                <motion.h1
                  variants={fadeFromTopAnimate}
                  className="text-center text-xl font-bold sm:text-2xl lg:text-3xl"
                >
                  {featuredTitle}
                </motion.h1>
                <motion.p
                  variants={fadeFromTopAnimate}
                  className="mb-4 mt-2 text-center text-base sm:text-lg lg:text-xl"
                >
                  {featuredDesc}
                </motion.p>
              </motion.div>

              {/* card container */}
              <motion.div
                variants={fadeFromTopAnimate}
                className="no-scrollbar flex items-start gap-4 overflow-x-scroll"
              >
                {filteredProducts && filteredProducts.length > 0 ? (
                  <Swiper
                    slidesPerView={3}
                    allowSlidePrev={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper feature-product-swiper-button w-full lg:h-full"
                    breakpoints={{
                      320: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {filteredProducts?.map((product) => (
                      <SwiperSlide key={product.id} className="">
                        <Link
                          to={`/single-product/${product.id}`}
                          key={product.id}
                        >
                          <div className="flex flex-col items-center transition duration-300 hover:scale-105 ">
                            <div className="">
                              <LazyLoadImage
                                className="h-full w-full object-cover"
                                src={product.images[0] || noimage}
                                alt={product.name}
                                effect="blur"
                                placeholderSrc={noimage}
                              />
                            </div>
                            <div className="font-notosanslao">
                              <p className="mt-2 text-sm font-bold leading-none transition hover:text-gray-600 md:text-base">
                                {product.name}
                              </p>
                              <div className="flex flex-col items-center justify-center ">
                                <span
                                  className={`text-base text-gray-500  lg:text-lg ${
                                    product?.discount && "line-through"
                                  }`}
                                >
                                  {formatPrice(product?.price || 0)}
                                </span>

                                {product?.discount && (
                                  <span className="text-base text-[#024E82] lg:text-lg">
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
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <p className="w-full text-center">No products found.</p>
                )}
                {/* card */}
              </motion.div>
            </div>
          </div>
        </motion.section>
      ) : (
        <motion.section
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full"
        >
          <div className="rounded-div">
            <div className="flex flex-col items-center">
              <motion.div
                transition={{ staggerChildren: 0.2 }}
                className="flex flex-col items-center font-notosanslao"
              >
                <motion.h1
                  variants={fadeFromTopAnimate}
                  className={`text-2xl font-bold`}
                >
                  {featuredTitle}
                </motion.h1>
                <motion.p
                  variants={fadeFromTopAnimate}
                  className="mb-10 mt-4 text-center text-lg"
                >
                  {featuredDesc}
                </motion.p>
              </motion.div>
              {/* card container */}
              <motion.div
                variants={fadeFromTopAnimate}
                className="grid grid-flow-row gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {/* card */}
                {products.map((product) => (
                  <Link
                    to={`/single-product/${product.id}`}
                    key={product.id}
                    className=" flex flex-col items-center transition duration-300 hover:scale-105"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-[17rem] w-full object-cover"
                    />
                    <p className="mt-2 text-lg font-bold leading-none transition hover:text-gray-600">
                      {product.name}
                    </p>
                    <p className="text-[15px] text-[#024E82]">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </motion.div>

              {showButton && (
                <button className="mt-20 whitespace-nowrap bg-[#024E82] px-10 py-4 text-lg text-white transition hover:bg-[#024E82]/90">
                  SHOP NOW
                </button>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default FeaturedProducts;
