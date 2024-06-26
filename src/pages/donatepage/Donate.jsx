import { motion } from "framer-motion";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button";
import Container from "../../components/container";
import { DonateBg, FundingReceivedIcon, FundingUsedIcon } from "../../assets/donate-image";
import Background from "../../components/background";
import Filter from "../../components/filter";

export default function Donate() {
  return (
    <>
      <Navbar />
      <div className="bg-primary-1">
        <h1 className="py-8 text-lg text-center text-light-1 lg:text-4xl">15k IDR = 1 plant-based meal donated!</h1>
      </div>
      {/* Donate */}
      <Container className="space-y-32">
        <div className="flex flex-col items-center">
          <h1 className="mb-8 text-xl lg:text-3xl text-primary-1">Donate</h1>
          <p className="max-w-screen-md text-sm font-light text-center text lg:text-base">
            By donating to Green Welfare Indonesia, you are giving back to the community and contributing to our environment one plant-based meal at a
            time. Support us!
          </p>
        </div>
        

      </Container>
      {/* Image Headline */}
      <Background src={DonateBg} className="flex-col gap-16 min-h-800">
        <Filter />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-3xl text-center z-1 text-light-1 lg:text-6xl"
        >
          Every Support is <br /> NEEDED.
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-light-1 lg:text-lg z-1"
        >
          Make a Difference Today
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:flex-row"
        >
        <a href="/form-donation">
          <Button intent="secondary">Donate Instead</Button>
        </a>
        </motion.div>
      </Background>
      {/* Fundings Section */}
      <Container className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            src={FundingReceivedIcon}
            alt="FundingReceivedIcon"
          />
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mt-8 mb-3 text-3xl text-center text-primary-1 lg:text-7xl"
          >
            + <br /> $8,948 USD
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-light text-center text-primary-1"
          >
            Funding Received
          </motion.h3>
        </div>
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            src={FundingUsedIcon}
            alt="FundingUsedIcon"
          />
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mt-8 mb-3 text-3xl text-center text-primary-1 lg:text-7xl"
          >
            + <br /> $7,572 USD
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-light text-center text-primary-1"
          >
            Funding Used
          </motion.h3>
        </div>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
}
