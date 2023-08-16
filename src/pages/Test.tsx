import React from "react";
import { motion } from "framer-motion";
import { fadeFromBottomAnimate } from "../animation";
const Test = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      // viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div variants={fadeFromBottomAnimate}>Component 1</motion.div>
      <motion.div variants={fadeFromBottomAnimate}>Component 2</motion.div>
      <motion.div variants={fadeFromBottomAnimate}>Component 3</motion.div>
    </motion.div>
  );
};

export default Test;
