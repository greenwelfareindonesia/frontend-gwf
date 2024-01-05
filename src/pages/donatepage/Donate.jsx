import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DonateBg from "../../assets/donate-image/DonateBg.png";
import FundingReceivedIcon from "../../assets/donate-image/FundingReceived.svg";
import FundingUsedIcon from "../../assets/donate-image/FundingUsed.svg";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#5F5E36]">
        <h1 className="text-lg text-center text-light-1 lg:text-2xl">15k IDR = 1 plant-based meal donated!</h1>
      </div>
      {/* Donate */}
      <section className="pt-28 pb-28">
        <div className="flex flex-col items-center">
          <h1 className="text-xl lg:text-3xl text-[#5F5E36] mb-8">Donate</h1>
          <p className="text text-center max-w-[41rem] text-sm lg:text-base leading-7 mb-32 font-light">
            By donating to Green Welfare Indonesia, you are giving back to the community and contributing to our environment one plant-based meal at a
            time. Support us!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-20 mb-16 lg:flex-row">
          <div className="lg:w-[27rem] flex flex-col items-center space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-center text-xl"
            >
              Donate through Bank Transfer
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] text-center font-light"
            >
              Bank Central Asia (BCA)
            </motion.h4>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="bg-[#5F5E36] py-3 px-5 font-light text-light-1 rounded-sm hover:opacity-60 transition-opacity duration-500"
            >
              Click Here
            </motion.button>
          </div>
          <div className="lg:w-[27rem] flex flex-col items-center space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-center text-xl"
            >
              Donate through Bank Transfer
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] text-center font-light"
            >
              Bank Mandiri, Permata Bank, BNI
            </motion.h4>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="bg-[#5F5E36] py-3 px-5 font-light text-light-1 rounded-sm hover:opacity-60 transition-opacity duration-500"
            >
              Click Here
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20 mb-20 lg:flex-row">
          <div className="lg:w-[27rem] flex flex-col items-center space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-center text-xl"
            >
              Donate through E-Wallets
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] text-center font-light"
            >
              Go-Pay, Ovo, Dana, LinkAja
            </motion.h4>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="bg-[#5F5E36] py-3 px-5 font-light text-light-1 rounded-sm hover:opacity-60 transition-opacity duration-500"
            >
              Click Here
            </motion.button>
          </div>
          <div className="lg:w-[27rem] flex flex-col items-center space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-center text-xl"
            >
              Donate through PayPal
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] text-center font-light"
            >
              Suitable for CC & International Payments
            </motion.h4>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="bg-[#5F5E36] py-3 px-5 font-light text-light-1 rounded-sm hover:opacity-60 transition-opacity duration-500"
            >
              Click Here
            </motion.button>
          </div>
        </div>
        <h3 className="text-xl italic font-semibold text-center underline">Download Donor Brochure</h3>
      </section>
      {/* Image Headline */}
      <motion.section
        style={{ backgroundImage: `url(${DonateBg})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[20rem] lg:h-[35rem] bg-cover flex flex-col items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-light-1 text-center text-3xl lg:text-5xl lg:leading-[4rem] mb-7"
        >
          Every Support is <br /> NEEDED.
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mb-12 text-light-1"
        >
          Make a Difference Today
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-5 lg:flex-row"
        >
          <button className="px-5 py-3 text-[#3E3E08] text-sm bg-white rounded-sm hover:opacity-60 transition-opacity duration-300">
            Explore Merch
          </button>
          <button
            className="px-5 py-3 text-light-1 text-sm rounded-sm border border-white hover:bg-white hover:text-[#3E3E08]
          transition-all duration-300"
          >
            Donate Instead
          </button>
        </motion.div>
      </motion.section>
      {/* Fundings Section */}
      <section className="flex flex-col lg:flex-row justify-evenly pt-28 pb-28">
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
            className="text-[#5F5E36] text-3xl lg:text-7xl text-center mt-8 mb-3"
          >
            + <br /> $8,948 USD
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-[#5F5E36] font-light"
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
            className="text-[#5F5E36] text-3xl lg:text-7xl text-center mt-8 mb-3"
          >
            + <br /> $7,572 USD
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-[#5F5E36] font-light"
          >
            Funding Used
          </motion.h3>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
