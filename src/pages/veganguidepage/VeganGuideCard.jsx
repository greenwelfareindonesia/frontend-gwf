import { motion } from "framer-motion";

function VeganGuideCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-[#3E3E08] w-[18rem] h-[27rem] rounded-md px-10 py-14 flex flex-col justify-between"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white font-medium text-xl"
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
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white py-2 px-5 rounded-sm w-fit hover:opacity-75 ease-in-out duration-300"
        onClick={props.onClick}
      >
        View
      </motion.button>
    </motion.div>
  );
}

export default VeganGuideCard;
