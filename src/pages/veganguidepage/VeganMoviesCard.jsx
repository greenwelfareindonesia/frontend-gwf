import { motion } from "framer-motion";

function VeganMoviesCard(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className="w-[22rem] h-[30rem] relative"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-xl absolute bottom-8 w-full text-center"
      >
        {props.title}
      </motion.h1>
    </div>
  );
}

export default VeganMoviesCard;
