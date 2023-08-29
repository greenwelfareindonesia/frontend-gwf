import Button from "../../components/button";
import { image_veganjourney } from "../../assets/image";
import Container from "../../components/container";
import Image from "../../components/container/Image";
import { motion } from "framer-motion";

const VeganJourney = () => {
  return (
    <Container className="my-0 md:my-16">
      <Image
        src={image_veganjourney}
        className="max-w-screen-xl h-full flex items-center flex-col justify-center py-10 md:py-44 gap-8 px-8 md:px-36 mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-light text-white md:text-6xl mb-4 tracking-tight"
        >
          Start your Vegan journey!
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-center font-light text-lg md:text-xl text-white"
        >
          With just one click, we have the perfect resource for you to start your vegan/vegetarian transition.
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center font-extralight text-white text-base"
        >
          A vegan diet has the lowest carbon footprint at just 1.5 tons CO2e (Carbon Dioxide Equivalent). You can reduce your foodprint by a quarter
          just by consuming a plant-based meal. It&sbquo;s good for the animals too!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="mb-3 flex items-center justify-between gap-8 mt-4"
        >
          <Button className="!bg-[#5F5E36] hover:!bg-[#5F5E3696] text-white hover:text-white/90 font-light">I want to start!</Button>
          <Button className="border border-white !bg-transparent text-white hover:!bg-white hover:text-[#3E3E08]">Vegan Guide</Button>
        </motion.div>
      </Image>
    </Container>
  );
};

export default VeganJourney;
