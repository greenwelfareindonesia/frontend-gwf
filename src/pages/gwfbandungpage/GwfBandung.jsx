import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroSectionImage from "../../assets/gwfbandung-image/HeroSectionImg.png";
import { motion } from "framer-motion";

export default function GwfBandung() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="items-center justify-center w-screen lg:grid lg:grid-cols-2">
        <img src={HeroSectionImage} alt="Hero Section Image" className="w-screen h-full lg:hidden" />
        <div className="flex flex-col items-center h-full pt-28">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center text-[#5F5E36] text-xl lg:text-3xl mb-8"
          >
            Green Welfare Bandung
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-center"
          >
            COMING SOON
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-lg italic text-center mb-9"
          >
            Site in process
          </motion.h3>
          <motion.a
            href="https://www.instagram.com/greenwelfare.bdg/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel=""
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center font-light mb-9 text-[#3E3E08] hover:underline cursor-pointer"
          >
            @greenwelfare.bdg
          </motion.a>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-[#3E3E08] lg:w-[19rem] w-5/6 h-[2.8rem] text-light-1 text-sm rounded-md mb-8
            hover:cursor-pointer hover:bg-opacity-70 ease-in-out transition duration-500"
          >
            Donate to GWF Bandung
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="lg:w-[19rem] w-5/6 h-[2.8rem] text-sm text-[#3E3E08] rounded-md border-2 border-[#3E3E08] 
            hover:cursor-pointer hover:bg-[#3E3E08] hover:text-light-1 ease-in-out transition duration-500"
          >
            Meet the People behind GWF Bandung
          </motion.button>
        </div>
        <img src={HeroSectionImage} alt="Hero Section Image" className="hidden h-full lg:block" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
