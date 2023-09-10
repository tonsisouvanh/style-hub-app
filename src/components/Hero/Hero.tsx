import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./Hero.css";
import { fadeFromTopAnimate } from "../../animation";

interface SlideProps {
  slides: Slide[];
}

interface Slide {
  id: number;
  image: string;
  caption: string;
}

const Hero: React.FC<SlideProps> = ({ slides }) => {
  return (
    <motion.div
      variants={fadeFromTopAnimate}
      initial={"offscreen"}
      animate={"onscreen"}
      className="w-full"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper hero-swiper-button lg:h-full"
      >
        {slides.map((i, index) => {
          return (
            <SwiperSlide
              key={index}
              className="h-[25rem] w-full lg:h-[50rem]"
              // className="w-full"
            >
              <div className="relative h-full w-full">
                <img
                  src={i.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5">
                  {/* <div className="bg-white bg-opacity-50 p-7 backdrop-blur-lg rounded drop-shadow-lg space-y-2">
                    <h2 className="font-arimo text-2xl md:text-4xl lg:text-5xl font-bold text-black">
                      Welcome to Our Store
                    </h2>
                    <p className="font-lato text-black md:text-lg">
                      Explore our latest collection
                    </p>
                  </div> */}
                  <Link
                    to="/all-products/all"
                    className="fancy mb-5 bg-white font-lato"
                  >
                    <span className="top-key"></span>
                    <span className="text">Shop Now!</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Hero;
