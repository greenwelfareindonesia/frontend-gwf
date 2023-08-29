import { motion } from "framer-motion";
import { image_header } from "../../assets/image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const Header = () => {
  return (
    <Container>
      <Image src={image_header} className="h-auto bg-fixed py-0 md:py-20 flex items-center justify-center lg:justify-end">
        <div className="mx-0 md:mx-20 text-center bg-[#6B6B0E]/20 md:bg-[#6B6B0E]/30 py-32 px-20 md:px-10 max-w-none md:max-w-xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-light md:font-normal text-white leading-1 md:text-7xl"
          >
            Green Welfare Indonesia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 1.3 }}
            viewport={{ once: true }}
            className="py-2 mt-4 md:mt-10 text-xl leading-10 text-white font-extralight"
          >
            Connecting youth-led climate solutions through food security, climate education and sustainable agriculture
          </motion.p>
        </div>
      </Image>
    </Container>
  );
};

export default Header;
