import { header_image, vision_image1 } from "../../assets/about-image";
import Container from "../../components/container";
import { motion } from "framer-motion";
import Slider from "../../components/slider";

const slides = [{ src: header_image }, { src: vision_image1 }, { src: vision_image1 }];

const Vision = () => {
  return (
    <Container>
      <Slider slides={slides} arrowClassName="!hidden" parentClassName="h-[300px] sm:h-[400px] md:h-[500px] lg:[600px] xl:h-[700px] !p-0" />
      <div className="w-full h-full bg-[#5F5E36] flex flex-col items-center justify-center text-center gap-8 py-8 sm:py-16 lg:py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="py-4 text-3xl font-light text-white md:text-6xl"
        >
          Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="max-w-screen-lg mx-8 mb-4 italic text-white md:mb-16 text-md font-extralight md:text-lg lg:text-xl"
        >
          “Becoming an organization that engages the younger generation to actively participate and contribute to social issues while spreading
          awareness about the climate and making a significant impact on communities.”
        </motion.p>
      </div>
    </Container>
  );
};

export default Vision;
