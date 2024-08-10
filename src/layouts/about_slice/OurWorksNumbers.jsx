import { motion } from "framer-motion";
import { workNumbers } from "../../constant/information";
import Container from "../../components/container";

const OurWorksNumbers = () => {
  return (
    <section className="py-16 md:py-32 bg-primary-1">
      <h2 className="mb-8 text-3xl text-center md:mb-16 text-light-1 font-inter">Our Work in Numbers</h2>
      <Container className="grid grid-cols-1 gap-16 p-4 md:gap-8 md:grid-cols-3">
        {workNumbers.map((item, index) => (
          <div key={index} className="space-y-2 md:max-w-300">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-4xl text-light-1 font-inter md:text-6xl"
            >
              {item.value}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-xl font-extralight text-light-1 md:text-base md:leading-7"
            >
              {item.title}
            </motion.p>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default OurWorksNumbers;
