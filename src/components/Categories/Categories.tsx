import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import { fadeFromTopAnimate } from "../../animation";
const categories = [
  {
    id: 1,
    title: "ເສື້ອ",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=495&q=80",
    direction: 100,
  },
  {
    id: 2,
    title: "ສົ້ງ",
    image:
      "https://plus.unsplash.com/premium_photo-1671379102281-7225f3d3d97d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    direction: -100,
  },
  {
    id: 3,
    title: "ກະເປົາ",
    image:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    direction: 100,
  },
];

const Categories = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      id="category"
      className="w-full font-notosanslao"
    >
      <div className="rounded-div">
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  y: category.direction,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.5,
                  },
                },
              }}
              key={category.id}
              className={`shadow-lg relative group overflow-hidden flex flex-col items-center $`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full group-hover:scale-110 transition h-[20rem] md:h-[35rem] object-cover"
              />

              <Link to="/category/:${category}" className="absolute translate-y-40 transition duration-700 group-hover:translate-y-0 w-full py-5 bottom-0 text-[2rem] bg-[rgba(27,41,78,0.57)] text-white text-center font-bold  ">
                  <span>{category.title}</span>
                  <div className="absolute bottom-5 right-0">
                    <AiOutlineRight className="text-white text-5xl" />
                  </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Categories;
