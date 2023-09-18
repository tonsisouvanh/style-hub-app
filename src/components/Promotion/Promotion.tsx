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
        <div className="grid gap-4 md:grid-cols-2">
          {/* first */}
          <div className=" flex flex-col items-center gap-2 bg-black p-16 text-center md:p-28">
            <div className="mb-4 text-3xl text-white">
              <FaHeart />
            </div>
            <h3 className="mb-2 text-[32px] uppercase text-white">
              Peace of Mind
            </h3>
            <p className="font-lato text-white">
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </p>
            <button className="mt-5 whitespace-nowrap rounded-sm bg-white px-8 py-2 font-lato text-[14px] text-[#024E82]">
              BUY NOW
            </button>
          </div>

          {/* second */}
          <div className=" flex flex-col items-center gap-2 bg-black p-16 text-center md:p-28">
            <div className="mb-4 text-3xl text-white">
              <FaTags />
            </div>
            <h3 className="mb-2 text-[32px] uppercase text-white">
              Buy 2 Get 1 Free
            </h3>
            <p className="font-lato text-white">
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </p>
            <button className="mt-5 whitespace-nowrap rounded-sm bg-white px-8 py-2 font-lato text-[14px] text-[#024E82]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Promotion;
