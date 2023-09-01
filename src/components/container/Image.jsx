import { motion } from "framer-motion";

const Image = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${props.src})` }}
      className={`w-full bg-center bg-no-repeat bg-cover ${props.className} items-center justify-center flex`}
    >
      {props.children ? props.children : null}
    </motion.div>
  );
};

export default Image;
