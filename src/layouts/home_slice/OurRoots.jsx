import { motion } from "framer-motion";
import { image_our_roots } from "../../assets/image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const OurRoots = () => {
  return (
    <Container>
      <Image src={image_our_roots} className="h-full flex items-center justify-center py-10 md:py-20">
        <div className="mx-4 md:mx-20 bg-[#5F5E36] p-16 max-w-screen-lg w-full text-center md:text-start">
          <motion.h5
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true }}
            className="font-light text-white text-md md:text-lg"
          >
            Our Roots
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 1.3 }}
            viewport={{ once: true }}
            className="mt-2 text-xl font-light text-white md:mt-8 md:text-4xl"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.1, delay: 1.6 }}
            viewport={{ once: true }}
            className="py-2 mt-2 text-sm leading-5 text-white md:leading-7 md:mt-8 font-extralight"
          >
            Here at Green Welfare Indonesia, we know that sometimes all it takes to change the world is a little step of action. Since our founding on
            the 3rd of May 2020, our non-profit organization has been determined to make an impact on a social scale as well as the environment. The
            core of our efforts is to bring young people to step down and lend a helping hand to eco-social issues while being conscious of our
            climate and environment. Through all of our endeavors, we hope to display the conviction behind our beliefs.
          </motion.p>
        </div>
      </Image>
    </Container>
  );
};

export default OurRoots;
