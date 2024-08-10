import { motion } from "framer-motion";

import { planted_based_image } from "../../assets/involved-image";

import Container from "../../components/container";
import Background from "../../components/background";
import Button from "../../components/button";
import Filter from "../../components/filter";

const PlantedBased = () => {
  return (
    <section className="p-0 md:p-16 bg-primary-1 text-light-1">
      <Container className="hidden my-16 space-y-12 text-center md:block">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto leading-tight tracking-wide text-7xl"
        >
          Switch to plant-based
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-lg font-extralight"
        >
          You can also contribute to our movement&rsquo;s mission by becoming a plant-based hero!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          <Button intent="white">I want to start!</Button>
          <Button intent="secondary">Vegan Guide</Button>
        </motion.div>
      </Container>
      <Background src={planted_based_image} className="flex-col gap-4 px-8 min-h-500">
        <Filter />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="block mb-4 text-4xl tracking-tight text-center md:text-6xl md:hidden z-1"
        >
          Switch to plant-based
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="block text-xl font-light text-center md:text-xl md:hidden z-1"
        >
          You can also contribute to our movement&rsquo;s mission by becoming a plant-based hero!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 my-4 sm:flex-row sm:gap-8 md:hidden z-1"
        >
          <Button intent="white">I want to start!</Button>
          <Button intent="secondary">Vegan Guide</Button>
        </motion.div>
      </Background>
    </section>
  );
};

export default PlantedBased;
