import { motion } from "framer-motion";
import Background from "../../components/background";
import { header_image } from "../../assets/home-image";

const Header = () => {
  return (
    <Background src={header_image} className="justify-center h-auto py-0 bg-fixed md:py-20 lg:justify-end">
      <div className="w-full px-20 py-32 mx-0 text-center md:mx-20 bg-filter-1 md:px-10 max-w-none md:max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-light-1 md:font-normal leading-1 md:text-7xl"
        >
          Green Welfare Indonesia
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 1.3 }}
          viewport={{ once: true }}
          className="py-2 mt-4 text-xl leading-10 text-light-1 md:mt-10 font-extralight"
        >
          Connecting youth-led climate solutions through food security, climate education and sustainable agriculture
        </motion.p>
      </div>
    </Background>
  );
};

export default Header;
