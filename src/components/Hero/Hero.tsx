import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./Hero.css";

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
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[504px] lg:h-full"
    >
      {slides.map((i, index) => {
        return (
          // <SwiperSlide className="w-full h-full">
          //   <img src={i.image} alt="" className="w-full h-full object-cover" />
          // </SwiperSlide>
          <SwiperSlide key={index} className="w-full h-[50rem]">
            <div className="relative w-full h-full">
              <img
                src={i.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5">
                <div className="bg-white bg-opacity-50 p-7 backdrop-blur-lg rounded drop-shadow-lg space-y-2">
                  <h2 className="font-arimo text-2xl md:text-4xl lg:text-5xl font-bold text-black">
                    Welcome to Our Store
                  </h2>
                  <p className="font-lato text-black md:text-lg">
                    Explore our latest collection
                  </p>
                </div>
                {/* <button className="bg-primary text-white py-2 px-4 mt-4 rounded">
                  Shop Now
                </button> */}

                <Link to="/about" className="font-lato fancy">
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
  );
};

export default Hero;
