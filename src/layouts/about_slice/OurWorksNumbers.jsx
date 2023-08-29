import Container from "../../components/container";
import { motion } from "framer-motion";

const OurWorksNumbers = () => {
  return (
    <Container className="bg-[#5F5E36] py-28">
      <h2 className="mb-16 text-3xl text-center text-white font-inter">Our Work in Numbers</h2>
      <div className="flex flex-col justify-center ml-4 md:space-x-10 md:flex-row">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
          >
            16,000+
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-white font-thin md:leading-7 h-[4rem]"
          >
            Social media followers
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
          >
            1,500+
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-white font-thin md:leading-7 h-[4rem]"
          >
            Sanitary & Household goods <br /> distributed
          </motion.p>
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
          >
            4,300+
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-white font-thin md:leading-7 h-[4rem]"
          >
            Plant-based meals distributed
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
          >
            20+
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-white font-thin md:leading-7 h-[4rem]"
          >
            Distribution drives
          </motion.p>
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
          >
            4,000+
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-white font-thin md:leading-7 h-[4rem]"
          >
            Youths spoken to about Climate <br /> Change
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
          >
            10+
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-white font-thin md:leading-7 h-[4rem]"
          >
            Environmental events curated
          </motion.p>
        </div>
      </div>
    </Container>
  );
};

export default OurWorksNumbers;
