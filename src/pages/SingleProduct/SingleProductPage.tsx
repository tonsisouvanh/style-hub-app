import React, { useEffect, useState } from "react";
import { singlepro } from "../../assets/images";
import { newArrivalProducts, topSellers } from "../../data/data";
import { AiFillStar } from "react-icons/ai";
import Select from "../../components/CustomSelect/Select";
import { motion } from "framer-motion";
import {
  fadeFromBottomAnimate,
  fadeFromTopAnimate,
  scaleAnimate,
} from "../../animation";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const [showReview, setShowReview] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const options = [
    { label: "Small S", value: "Option 1" },
    { label: "Medium M", value: "Option 2" },
    { label: "Large L", value: "Option 3" },
    { label: "Extra Large XL", value: "Option 4" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allpros = [...newArrivalProducts, ...topSellers];
  const singleproimg = allpros.find((i) => i.id === parseInt(id!));

  return (
    <>
      <div className="py-7">
        <div className="rounded-div space-y-32">
          {/*====================== Product info ======================*/}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10">
            {/* Left */}
            <div className="overflow-hidden w-[25rem] lg:w-[38rem] px-5">
              <motion.img
                className="w-full h-[32rem] object-cover"
                src={singleproimg?.image}
                alt=""
                initial="offscreen"
                animate="onscreen"
                variants={fadeFromTopAnimate}
              />
              <motion.div
                initial={"offscreen"}
                animate={"onscreen"}
                transition={{ staggerChildren: 0.2 }}
                className="flex items-center gap-2 pt-5 overflow-x-scroll no-scrollbar"
              >
                {[...Array(4)].map((_, index) => (
                  <motion.img
                    variants={scaleAnimate}
                    key={index}
                    className="w-full h-[7rem] object-cover"
                    src={singlepro}
                    alt=""
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
              <motion.p
                variants={fadeFromTopAnimate}
                className="uppercase font-arimo font-bold text-gray-500"
              >
                home / shop / women / <span className="text-black">shop</span>{" "}
              </motion.p>
              <motion.h2
                variants={fadeFromTopAnimate}
                className="text-[36px] font-arimo font-bold"
              >
                Plain White Shirt
              </motion.h2>
              <motion.div
                variants={fadeFromTopAnimate}
                className="flex items-center"
              >
                {[...Array(5)].map((_, index) => (
                  <AiFillStar
                    key={index}
                    className={`text-orange-700 text-lg ${
                      index === 4 ? "opacity-50" : null
                    }`}
                  />
                ))}
                <span>(15)</span>
              </motion.div>
              <motion.div
                variants={fadeFromTopAnimate}
                className="font-lato font-[500] text-[24px]"
              >
                <span className="text-gray-500">$69.00</span>{" "}
                <span className="text-[#024E82]">$59.00</span>
              </motion.div>
              <motion.p
                variants={fadeFromTopAnimate}
                className="text-[16px] text-gray-700"
              >
                A classic t-shirt never goes out of style. This is our most
                premium collection of shirt. This plain white shirt is made up
                of pure cotton and has a premium finish.
              </motion.p>
              <motion.div variants={fadeFromTopAnimate}>
                <Select options={options} onChange={handleSelectChange} />
              </motion.div>
              <motion.button
                variants={fadeFromTopAnimate}
                className="bg-[#024E82] text-white px-10 py-5"
              >
                ADD TO CART
              </motion.button>
              <motion.div
                variants={fadeFromTopAnimate}
                className="text-[14px] text-gray-700 font-lato"
              >
                <p>
                  <span className="text-black font-bold">Category:</span> Women,
                  Polo, Casual
                </p>
                <p>
                  <span className="text-black font-bold">Tags:</span> Modern,
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
                  showReview && "opacity-70 bg-gray-100"
                } border font-bold text-[16px] font-arimo px-6 py-3`}
              >
                Description
              </p>
              <p
                onClick={() => setShowReview(true)}
                className={`${
                  !showReview && "opacity-70 bg-gray-100"
                } border text-[16px] font-arimo px-6 py-3`}
              >
                Reviews(0)
              </p>
            </div>
            {showReview ? (
              <p className="px-14 py-16 border">great shirt</p>
            ) : (
              <p className="px-14 py-16 border">
                A key objective is engaging digital marketing customers and
                allowing them to interact with the brand through servicing and
                delivery of digital media. Information is easy to access at a
                fast rate through the use of digital communications. Users with
                access to the Internet can use many digital mediums, such as
                Facebook, YouTube, Forums, and Email etc. Through Digital
                communications it creates a Multi-communication channel where
                information can be quickly exchanged around the world by anyone
                without any regard to whom they are.[28] Social segregation
                plays no part through social mediums due to lack of face to face
                communication and information being wide spread instead to a
                selective audience.{" "}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
