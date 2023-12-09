import React from "react";
import { motion } from "framer-motion";

function FoodsToEatCard(props) {
  return (
    <div className="flex flex-col xl:items-center xl:gap-y-8 gap-y-6 mb-8 xl:mb-0">
      <img src={props.img} alt="" className="w-[45rem] h-[25rem] " />
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="xl:text-center text-left text-[#5F5E36] xl:text-2xl text-xl"
      >
        {props.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="xl:text-center text-left w-[27rem] xl:text-base text-sm"
      >
        {props.desc}
      </motion.p>
    </div>
  );
}

export default FoodsToEatCard;
