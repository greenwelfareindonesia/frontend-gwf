import { motion } from "framer-motion";

import { resourceContent } from "../../utils/resourceContent";

import Button from "../../components/button";
import Container from "../../components/container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Background from "../../components/background";

const Resource = () => {
  return (
    <>
      <Navbar />
      <Container className="space-y-4 lg:space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-normal tracking-wide text-center text-primary-2 lg:text-5xl"
        >
          Resource Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-base font-light leading-6 text-center text-dark lg:text-lg"
        >
          We&apos;re here to help you with the basic resources you need to start your climate journey!
        </motion.p>
      </Container>
      <div className="flex flex-col my-16 lg:flex-row">
        {resourceContent.map((item, index, last) => (
          <Background key={index} src={item.image} className="flex-col text-center min-h-400 lg:min-h-800 lg:justify-end">
            <div className="p-0 space-y-4 bg-transparent lg:px-12 lg:py-32 lg:bg-filter-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0 }}
                viewport={{ once: true }}
                className="text-3xl text-light-1 whitespace-nowrap"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                className="text-base font-light leading-8 text-light-1"
              >
                {item.desc}
              </motion.p>
              <Button intent="white" className="mx-auto">
                {last.length === index + 1 ? "IN PROGRESS" : "View"}
              </Button>
            </div>
          </Background>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Resource;
