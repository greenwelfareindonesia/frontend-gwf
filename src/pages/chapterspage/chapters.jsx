import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroSectionImage from "../../assets/gwfbandung-image/HeroSectionImg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; //tambahan

export default function Chapters() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="items-center justify-center w-screen lg:grid lg:grid-cols-2">
        <img src={HeroSectionImage} alt="Hero Section Image" className="w-full min-h-[300px] lg:hidden" />
        <div className="flex flex-col items-center h-full pt-28">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center  text-primary-1 text-xl lg:text-4xl mb-8"
          >
          Green Welfare Bandung
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-xl text-primary-1 font-Poppins text-center"
          >
          COMING SOON
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-lg  text-primary-1 font-light italic text-center mb-9"
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
            className="text-center font-Poppins-light mb-9 text-primary-1 underline"
          >
          @greenwelfare.bdg
          </motion.a>
          <Link to="/ecopediaDashboard"> 
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="bg-primary-1 lg:w-300 w-5/6 h-12 font-light text-light-1 text-sm rounded-none mb-8
            hover:cursor-pointer hover:bg-opacity-70 ease-in-out transition duration-500 "
          >
          Donate to GWF Bandung
          </motion.button>
          </Link>

          <Link to="/galleryDashboard"> 
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }} 
            className="lg:w-300 w-5/6 h-12 text-sm font-light text-primary-1 rounded-none border border-primary-1 
            hover:cursor-pointer hover:bg-primary-1 hover:text-light-1 ease-in-out transition duration-500"
          >
          Meet the People behind GWF Bandung
          </motion.button>
          </Link>
        </div>
        <img src={HeroSectionImage} alt="Hero Section Image" className="hidden lg:inline-block min-h-[600px]" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
