import { motion } from "framer-motion";

const Image = ({ src, className, description, ...props }) => {
  return (
    <motion.img
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      src={src}
      loading="lazy"
      alt={description}
      className={`w-full h-auto max-w-full ${className}`}
      {...props}
    />
  );
};

export default Image;
