import { motion } from "framer-motion";

function EnvironmentalCard(props) {
  return (
    <div className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[#5F5E36] font-medium xl:text-xl text-lg"
      >
        {props.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[#3E3E08] font-light text-sm leading-7"
      >
        {props.desc}
      </motion.p>
    </div>
  );
}

export default EnvironmentalCard;
