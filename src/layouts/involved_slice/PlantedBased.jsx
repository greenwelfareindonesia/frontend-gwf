import Container from "../../components/container";
import Image from "../../components/container/Image";
import { image_plantbased } from "../../assets/involved-image";
import Button from "../../components/button";
import { motion } from "framer-motion";

const PlantedBased = () => {
  return (
    <Container className="bg-[#5F5E36] p-0 lg:p-16">
      <div className="flex-col items-center justify-center max-w-screen-lg mx-auto gap-4 hidden lg:flex">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-normal text-white tracking-wide max-w-md leading-tight"
        >
          Switch to plant-based
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-center font-extralight text-lg text-white"
        >
          You can also contribute to our movement&rsquo;s mission by becoming a plant-based hero!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="my-8 flex items-center flex-row justify-between gap-4 sm:gap-8"
        >
          <Button className="!bg-white hover:!bg-gray-400 text-[#3E3E08] hover:text-[#3E3E08] font-light">Start Now</Button>
          <Button className="border border-white !bg-transparent text-white hover:!bg-white hover:text-[#3E3E08]">Vegan Guide</Button>
        </motion.div>
      </div>
      <Image src={image_plantbased} className="h-[500px] flex-col px-16 mt-0 lg:mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-normal text-white md:text-6xl mb-4 tracking-tight block lg:hidden"
        >
          Switch to plant-based
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-center font-extralight text-xl md:text-xl text-white block lg:hidden"
        >
          You can also contribute to our movement&rsquo;s mission by becoming a plant-based hero!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="mb-3 flex items-center flex-col sm:flex-row justify-between gap-4 sm:gap-8 mt-4 lg:hidden"
        >
          <Button className="!bg-[#5F5E36] hover:!bg-[#5F5E3696] text-white hover:text-white/90 font-light">I want to start!</Button>
          <Button className="border border-white !bg-transparent text-white hover:!bg-white hover:text-[#3E3E08]">Vegan Guide</Button>
        </motion.div>
      </Image>
    </Container>
  );
};

export default PlantedBased;
