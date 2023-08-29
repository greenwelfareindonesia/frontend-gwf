import { motion } from "framer-motion";
import { image_prime_goals } from "../../assets/image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const PrimeGoals = () => {
  return (
    <Container className="my-20 flex items-center justify-center">
      <div className="relative flex items-center flex-col lg:flex-row gap-8 w-full h-full max-w-screen-lg">
        <Image className="max-w-lg h-[500px]" src={image_prime_goals} />
        <div className="relative lg:absolute lg:right-0 bg-transparent lg:bg-[#5F5E36] w-full max-w-lg px-8 md:px-20 py-0 md:py-20 text-center flex items-center flex-col gap-8">
          <motion.h5
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-2xl font-normal text-[#3E3E08] lg:text-white lg:text-3xl"
          >
            Prime Goals
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="text-sm leading-7 text-[#3E3E08] lg:text-white font-light lg:text-xl"
          >
            Achieve Food Security, Ensure Sustainable Agriculture and Promote Climate Education
          </motion.p>
        </div>
      </div>
    </Container>
  );
};

export default PrimeGoals;
