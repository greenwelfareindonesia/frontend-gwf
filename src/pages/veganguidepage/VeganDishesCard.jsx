import { motion } from "framer-motion";

function VeganDishesCard(props) {
  return (
    <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#5F5E36] text-2xl"
        >
          {props.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#3E3E08] w-[28rem] leading-8 font-light text-sm"
        >
          {props.desc}
        </motion.p>
      </div>
      <img src={props.img} alt="" className="w-fit h-full max-w-[28rem]" />
    </div>
  );
}

export default VeganDishesCard;
