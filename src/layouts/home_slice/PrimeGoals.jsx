import { motion } from "framer-motion";

import { prime_goals_image } from "../../assets/home-image";

import Container from "../../components/container";
import Image from "../../components/image";

const PrimeGoals = () => {
  return (
    <Container className="flex flex-col items-center w-full h-full gap-8 lg:flex-row">
      <Image src={prime_goals_image} className="!w-550" description="prime-goals" />
      <div className="relative flex flex-col w-full max-w-lg gap-8 px-8 py-0 text-center bg-transparent lg:text-start lg:absolute lg:right-0 lg:bg-primary-2 md:p-16">
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-2xl font-normal text-primary-2 lg:text-light-1 lg:text-xl"
        >
          Prime Goals
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-xl font-light tracking-wide text-primary-2 lg:text-light-1 lg:text-2xl"
        >
          Promote Food Security, Ensure Sustainable Agriculture and Promote Climate Education
        </motion.p>
      </div>
    </Container>
  );
};

export default PrimeGoals;
