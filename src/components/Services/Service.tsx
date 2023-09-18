import { FaLock, FaShippingFast, FaMoneyBill } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { scaleAnimate, scaleAnimateReverse } from "../../animation";

const services = [
  {
    icon: <FaShippingFast />,
    title: "Shipping",
    description: "ລູກຄ້າໃຊ້ບໍລິການຂົນສົ່ງທີ່ສະດວກ ແລະ ເກັບຄ່າສົ່ງປາຍທາງ",
  },
  {
    icon: <BsWhatsapp />,
    title: "ຕິດຕໍ່",
    description: "ສາມາດແຊັດຫາພໍ່ຕ້າໂດຍຕົງຜ່ານ WhatsApp",
  },
  {
    icon: <FaMoneyBill />,
    title: "ການຊຳລະຄ່າເຄື່ອງ",
    description: "ລູກຄ້າຊຳລະຜ່ານ BCEL ONE",
  },
];

const Service = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={scaleAnimate}
      className="w-full"
    >
      <div className="rounded-div w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div className=" grid gap-8 font-notosanslao md:grid-cols-fluid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={scaleAnimateReverse}
              >
                <div className="mb-4 text-4xl text-[#024E82]">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
