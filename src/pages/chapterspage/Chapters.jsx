import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import HeroSectionImage from "../../assets/gwfbandung-image/HeroSectionImg.png";

const Chapters = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="items-center justify-center w-screen lg:grid lg:grid-cols-2">
        <img src={HeroSectionImage} alt="Hero Section Image" className="w-full min-h-300 lg:hidden" />
        <div className="flex flex-col items-center h-full pt-28">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-8 text-xl text-center text-primary-1 lg:text-4xl"
          >
            Green Welfare Bandung
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-xl text-center text-primary-1 font-Poppins"
          >
            COMING SOON
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-lg italic font-light text-center text-primary-1 mb-9"
          >
            Site in process
          </motion.h3>
          <motion.a
            href="https://www.instagram.com/greenwelfare.bdg/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center underline font-Poppins-light mb-9 text-primary-1"
          >
            @greenwelfare.bdg
          </motion.a>
          <Link to="/donate">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-5/6 h-12 mb-8 text-sm font-light transition duration-500 ease-in-out rounded-none bg-primary-1 lg:w-300 text-light-1 hover:cursor-pointer hover:bg-opacity-70 "
            >
              Donate to GWF Bandung
            </motion.button>
          </Link>

          <a href="https://www.instagram.com/greenwelfare.bdg/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noreferrer">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="w-5/6 h-12 text-sm font-light transition duration-500 ease-in-out border rounded-none lg:w-300 text-primary-1 border-primary-1 hover:cursor-pointer hover:bg-primary-1 hover:text-light-1"
            >
              Meet the People behind GWF Bandung
            </motion.button>
          </a>
        </div>
        <img src={HeroSectionImage} alt="Hero Section Image" className="hidden lg:inline-block min-h-[600px]" />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};
export default Chapters;
