import { motion } from "framer-motion";

import { vegan_journey_image } from "../../assets/home-image";

import Button from "../../components/button";
import Container from "../../components/container";
import Background from "../../components/background";
import Filter from "../../components/filter";

const VeganJourney = () => {
  return (
    <Container className="!px-0 !my-0 md:!my-10">
      <Background
        src={vegan_journey_image}
        className="flex flex-col items-center justify-center h-full max-w-screen-xl gap-8 px-8 py-10 mx-auto min-h-1000 text-light-1 md:py-44 md:px-32"
      >
        <Filter />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-light tracking-tight text-center md:text-7xl z-1"
        >
          Start your Vegan journey!
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          viewport={{ once: true }}
          className="text-lg font-light text-center md:text-xl z-1"
        >
          With just one click, we have the perfect resource for you to start your vegan/vegetarian transition.
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-base font-light text-center z-1"
        >
          A vegan diet has the lowest carbon footprint at just 1.5 tons CO2e (Carbon Dioxide Equivalent). You can reduce your foodprint by a quarter
          just by consuming a plant-based meal. It&sbquo;s good for the animals too!
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-8 mt-4 mb-3 z-1"
        >
          <Button label="start-vegan-journey">
            <a href="https://www.21hariveg.org/" target="_blank" rel="noopener noreferrer">
              I want to start!
            </a>
          </Button>
          <Button intent="secondary" label="vegan-guide">
            Vegan Guide
          </Button>
        </motion.div>
      </Background>
    </Container>
  );
};

export default VeganJourney;
