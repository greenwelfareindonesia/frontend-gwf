import { motion } from "framer-motion";

import { our_roots_image } from "../../assets/home-image";
import Background from "../../components/background";
import Container from "../../components/container";

const OurRoots = () => {
  return (
    <Background src={our_roots_image} className="p-4 md:min-h-800 md:py-20">
      <Container className="py-20 space-y-4 text-center bg-primary-1 md:text-start md:space-y-8">
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="font-light text-light-1"
        >
          Our Roots
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-2xl font-light text-light-1 md:text-4xl"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 1.6 }}
          viewport={{ once: true }}
          className="leading-loose text-light-1 font-extralight"
        >
          Here at Green Welfare Indonesia, we know that sometimes all it takes to change the world is a little step of action. Since our founding on
          the 3rd of May 2020, our non-profit organization has been determined to make an impact on a social scale as well as the environment. The
          core of our efforts is to bring young people to step down and lend a helping hand to eco-social issues while being conscious of our climate
          and environment. Through all of our endeavors, we hope to display the conviction behind our beliefs.
        </motion.p>
      </Container>
    </Background>
  );
};

export default OurRoots;
