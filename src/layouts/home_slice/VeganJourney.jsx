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
        className="flex flex-col items-center justify-center h-full max-w-screen-xl gap-8 px-8 py-10 mx-auto md:py-44 md:px-36"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-light tracking-tight text-center text-white md:text-6xl"
        >
          Start your Vegan journey!
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-lg font-light text-center text-white md:text-xl"
        >
          With just one click, we have the perfect resource for you to start your vegan/vegetarian transition.
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-base text-center text-white font-extralight"
        >
          A vegan diet has the lowest carbon footprint at just 1.5 tons CO2e (Carbon Dioxide Equivalent). You can reduce your foodprint by a quarter
          just by consuming a plant-based meal. It&sbquo;s good for the animals too!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-8 mt-4 mb-3"
        >
          <Button className="!bg-[#5F5E36] hover:!bg-[#5F5E3696] text-white hover:text-white/90 font-light">
            <a href="https://www.21hariveg.org/" target="_blank" rel="noopener noreferrer">
              I want to start!
            </a>
          </Button>
          <Button className="border border-white !bg-transparent text-white hover:!bg-white hover:text-[#3E3E08]">Vegan Guide</Button>
        </motion.div>
      </Image>
    </Container>
  );
};

export default VeganJourney;
