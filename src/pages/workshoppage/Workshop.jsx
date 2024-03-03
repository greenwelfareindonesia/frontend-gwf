import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WorkshopBg from "../../assets/workshop-image/workshop.webp";
import Dummy1 from "../../assets/workshop-image/dummy1.png";
import Dummy2 from "../../assets/workshop-image/dummy2.png";
import Dummy3 from "../../assets/workshop-image/dummy3.png";
import Dummy4 from "../../assets/workshop-image/dummy4.png";
import Slider from "../../components/slider/index";
import Container from "../../components/container";
import { motion } from "framer-motion";
import Background from "../../components/background";
import Filter from "../../components/filter";

const imgSlides = [
  {
    img: Dummy1,
  },
  {
    img: Dummy2,
  },
  {
    img: Dummy3,
  },
  {
    img: Dummy4,
  },
];

export default function Workshop() {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Navbar />
      <Background src={WorkshopBg} className="min-h-500">
        <Filter />
        <div className="max-w-3xl space-y-8 z-1">
          <h1 className="text-5xl text-center text-light-1">Workshops & Classes</h1>
          <h3 className="font-light text-center text-light-1">
            Enroll now to Green Welfare&lsquo;s interactive workshops and virtual classes to enhance your knowledge and skills around agriculture and
            climate!
          </h3>
        </div>
      </Background>
      {/* Workshop & Classes */}
      <section className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap lg:items-stretch lg:justify-normal pt-28 gap-y-8">
        <div className="flex flex-col items-center w-1/4 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center w-[13rem]"
          >
            GWF Climate Education Mentorship & Course 3.0
          </motion.h1>
          <img src={Dummy1} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-[13rem] text-[#3E3E08] text-sm font-light"
          >
            13th June - 18th July 2022 | Administration fee: Donate as you wish | Application Deadline: 7th June 2022 at 18:00 WIB
          </motion.p>
          <button className="bg-[#5F5E36] text-light-1 px-6 py-2 rounded-sm hover:opacity-60 duration-300 ease-in-out">CLOSED</button>
        </div>
        {/*  */}
        <div className="relative flex flex-col items-center w-1/4 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center w-[13rem]"
          >
            Virtual Workshop: Planting from Home 1.0
          </motion.h1>
          <img src={Dummy2} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-[13rem] text-[#3E3E08] text-sm font-light"
          >
            31st Jul 2021 | 09:30 - 11:30 WIB | Paid Class
          </motion.p>
          <button className="bg-[#5F5E36] lg:absolute lg:bottom-0 text-light-1 px-6 py-2 rounded-sm hover:opacity-60 duration-300 ease-in-out">
            CLOSED
          </button>
        </div>
        <div className="relative flex flex-col items-center w-1/4 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center w-[13rem]"
          >
            GWF Climate Education Mentorship & Course 1.0
          </motion.h1>
          <img src={Dummy3} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-[13rem] text-[#3E3E08] text-sm font-light"
          >
            23rd Aug - 01st Oct 2021 | Administration fee: Donate as you wish
          </motion.p>
          <button className="bg-[#5F5E36] lg:absolute lg:bottom-0 text-light-1 px-6 py-2 rounded-sm hover:opacity-60 duration-300 ease-in-out">
            CLOSED
          </button>
        </div>
        <div className="relative flex flex-col items-center w-1/4 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center w-[13rem]"
          >
            GWF Climate Education Mentorship & Course 2.0
          </motion.h1>
          <img src={Dummy4} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-[13rem] text-[#3E3E08] text-sm font-light"
          >
            28th Jan - 4th March 2022 | Administration fee: Donate as you wish
          </motion.p>
          <button className="bg-[#5F5E36] lg:absolute lg:bottom-0 text-light-1 px-6 py-2 rounded-sm hover:opacity-60 duration-300 ease-in-out">
            CLOSED
          </button>
        </div>
        <div className="relative flex flex-col items-center w-1/4 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center w-[13rem]"
          >
            Virtual Workshop: Planting from Home 2.0
          </motion.h1>
          <img src={Dummy2} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-[13rem] text-[#3E3E08] text-sm font-light"
          >
            23rd March 2022 | 09:30 - 11:00 WIB | Paid Class
          </motion.p>
          <button className="bg-[#5F5E36] lg:absolute lg:bottom-0 text-light-1 px-6 py-2 rounded-sm hover:opacity-60 duration-300 ease-in-out">
            CLOSED
          </button>
        </div>
        <div className="flex flex-col items-center w-1/4 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center w-[13rem]"
          >
            GWF Climate Education Mentorship & Course 3.0
          </motion.h1>
          <img src={Dummy2} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-[13rem] text-[#3E3E08] text-sm font-light"
          >
            13th June - 18th July 2022 | Administration fee: Donate as you wish | Application Deadline: 7th June 2022 at 18:00 WIB
          </motion.p>
          <button className="bg-[#5F5E36] text-light-1 px-6 py-2 rounded-sm hover:opacity-60 duration-300 ease-in-out">CLOSED</button>
        </div>
      </section>
      {/* Image Slider */}
      <Container>
        <Slider slides={imgSlides} parentClassName="!h-[100vh]" setCurrentIndex={setIndex} currentIndex={index}>
          <img src={imgSlides[index].img} />
        </Slider>
      </Container>
      <Footer />
    </>
  );
}
