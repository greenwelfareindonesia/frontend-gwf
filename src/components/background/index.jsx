import { motion } from "framer-motion";

const Background = ({ src, className, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${src})` }}
      className={`w-full bg-center bg-no-repeat bg-cover items-center justify-center flex relative ${className ?? ""}`}
    >
      {children ?? null}
    </motion.div>
  );
};

export default Background;
