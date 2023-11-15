import { motion } from "framer-motion";

const Icon = ({ src, className, type }) => {
  return (
    <motion.img
      src={src}
      loading="lazy"
      className={type === "unset" ? `${className} cursor-pointer duration-300` : `cursor-pointer w-5 h-5 duration-300 sm:w-6 sm:h-6 ${className}`}
    />
  );
};

export default Icon;
