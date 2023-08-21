import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeFromTopAnimate } from "../../animation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./FeaturedProduct.css";

interface ProductProps {
  products: Product[];
  featuredTitle: string;
  featuredDesc: string;
  showButton: boolean;
  isScrollX: boolean;
}

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const FeaturedProducts: React.FC<ProductProps> = ({
  products,
  featuredTitle = "Discover NEW Arrivals",
  featuredDesc = "Recently added shirts!",
  showButton,
  isScrollX = false,
}) => {
  // const featuredProducts = [
  //   {
  //     id: 1,
  //     name: "T-Shirt",
  //     image: sample,
  //     size: ["S", "M", "L"],
  //     colors: ["Red", "Blue", "Black"],
  //     description: "A comfortable and stylish t-shirt for everyday wear.",
  //     price: 24.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Jeans",
  //     image: sample,
  //     size: ["S", "M", "L", "XL"],
  //     colors: ["Blue", "Black"],
  //     description: "Classic denim jeans for a trendy and casual look.",
  //     price: 49.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 4,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 6,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   // Add more products as needed
  // ];

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
                  className={`text-[36px] font-bold text-center`}
                >
                  {featuredTitle}
                </motion.h1>
                <motion.p
                  variants={fadeFromTopAnimate}
                  className="text-[18px] mt-4 mb-10 text-center"
                >
                  {featuredDesc}
                </motion.p>
              </motion.div>
              {/* card container */}
              <motion.div
                variants={fadeFromTopAnimate}
                className="flex items-start gap-4 overflow-x-scroll no-scrollbar"
              >
                {/* card */}
                <Swiper
                  slidesPerView={3}
                  allowSlidePrev={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper lg:h-full w-full feature-product-swiper-button"
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
                  {products.map((product) => (
                    <SwiperSlide key={product.id} className="">
                      <Link
                        to={`/single-product/${product.id}`}
                        key={product.id}
                      >
                        <div className="transition duration-300 hover:scale-105 flex flex-col items-center ">
                          <div className="">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="font-notosanslao">
                            <p className="mt-2 leading-none text-[0.8rem] md:text-[0.9rem] hover:text-gray-600 transition font-bold">
                              {product.title}
                            </p>
                            <p className="text-[#024E82]text-[15px]">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* {showButton && (
                <button className="bg-[#024E82] hover:bg-[#024E82]/90 transition text-[16px] text-white py-4 font-lato px-10 whitespace-nowrap mt-20">
                  SHOP NOW
                </button>
              )} */}
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
                  className={`text-[36px] font-bold`}
                >
                  {featuredTitle}
                </motion.h1>
                <motion.p
                  variants={fadeFromTopAnimate}
                  className="text-[18px] mt-4 mb-10 text-center"
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
                    className=" transition duration-300 hover:scale-105 flex flex-col items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[17rem] object-cover"
                    />
                    <p className="mt-2 text-[0.9rem] text-lg hover:text-gray-600 transition font-poppins font-bold">
                      {product.title}
                    </p>
                    <p className="text-[#024E82] font-lato text-[15px]">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </motion.div>

              {showButton && (
                <button className="bg-[#024E82] hover:bg-[#024E82]/90 transition text-[16px] text-white py-4 font-lato px-10 whitespace-nowrap mt-20">
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
