import { motion } from "framer-motion";
import { mission_image } from "../../assets/about-image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const Mision = () => {
  return (
    <Container className="relative block lg:flex">
      <Image src={mission_image} className="h-[110vh] lg:h-auto" />
      <div className="absolute lg:relative flex justify-center items-center flex-col gap-8 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0 w-80 sm:w-[480px] md:w-[680px] lg:w-full h-full lg:text-start px-0 lg:px-16 py-0 lg:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="pb-4 text-3xl font-medium text-white lg:text-[#3E3E08] md:text-4xl w-full"
        >
          Mission
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-lg font-normal text-white lg:text-[#3E3E08] drop-shadow-2xl md:text-2xl"
        >
          Our missions at Green Welfare Indonesia come in three parts:
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, delay: 1.4 }}
          viewport={{ once: true }}
          className="font-light text-white lg:text-black text-md md:leading-relaxed"
        >
          To spread environmental education among the youths of Indonesia as a course of action to protect our climate future and be more
          eco-conscious.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 1.6 }}
          viewport={{ once: true }}
          className="font-light text-white lg:text-black text-md md:leading-relaxed"
        >
          To promote sustainable and environmental friendly consumption lifestyles for the benefit of the environment, specifically on raising
          awareness about the link in animal agriculture and climate change, as well as to promote sustainable urban agriculture.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.3, delay: 1.8 }}
          viewport={{ once: true }}
          className="font-light text-white lg:text-black text-md md:leading-relaxed"
        >
          To motivate young people to contribute to society by addressing important issues related to social and environmental problems through active
          engagement, advocacy, and collaboration with various stakeholders.
        </motion.p>
      </div>
    </Container>
  );
};

export default Mision;
