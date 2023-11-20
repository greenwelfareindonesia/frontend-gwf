import { motion } from "framer-motion";

function VeganDietCard(props) {
  return (
    <div className="bg-[#5F5E36] w-[18rem] h-[27rem] rounded-md px-10 py-14 space-y-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white font-medium text-xl h-[4.8rem]"
      >
        {props.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white font-light"
      >
        {props.desc}
      </motion.p>
    </div>
  );
}

export default VeganDietCard;
