import React from "react";
import { FaTags, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { scaleAnimate } from "../../animation";
const Promotion = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={scaleAnimate}
      className="w-full"
    >
      <div className="rounded-div">
        <div className="grid md:grid-cols-2 gap-4">
          {/* first */}
          <div className=" bg-black flex flex-col items-center text-center gap-2 p-16 md:p-28">
            <div className="text-3xl text-white mb-4">
              <FaHeart />
            </div>
            <h3 className="text-[32px] uppercase text-white mb-2">
              Peace of Mind
            </h3>
            <p className="text-white font-lato">
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </p>
            <button className="mt-5 bg-white px-8 py-2 font-lato text-[14px] rounded-sm text-[#024E82]">
              BUY NOW
            </button>
          </div>

          {/* second */}
          <div className=" bg-black flex flex-col items-center text-center gap-2 p-16 md:p-28">
            <div className="text-3xl text-white mb-4">
              <FaTags />
            </div>
            <h3 className="text-[32px] uppercase text-white mb-2">
              Buy 2 Get 1 Free
            </h3>
            <p className="text-white font-lato">
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </p>
            <button className="mt-5 bg-white px-8 py-2 font-lato text-[14px] rounded-sm text-[#024E82]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Promotion;
