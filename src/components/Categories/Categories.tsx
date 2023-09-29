import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import { coat, jean } from "../../assets/images";
const categories = [
  {
    id: "tops",
    title: "ເສື້ອ",
    image: coat,
    direction: 100,
  },
  {
    id: "bottoms",
    title: "ສົ້ງ",
    image: jean,
    direction: -100,
  },
  {
    id: "shoes",
    title: "ເກີບ",
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
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
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
              className={`group relative flex flex-col items-center overflow-hidden shadow-lg`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-auto w-full object-cover transition group-hover:scale-110 md:h-[35rem]"
              />

              <Link
                to={`/all-products/${category.id}`}
                className="absolute bottom-0 w-full translate-y-40 bg-[rgba(27,41,78,0.57)] py-5 text-center text-[2rem] font-bold text-white transition duration-700 group-hover:translate-y-0  "
              >
                <span>{category.title}</span>
                <div className="absolute bottom-5 right-0">
                  <AiOutlineRight className="text-5xl text-white" />
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
