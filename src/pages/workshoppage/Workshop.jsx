import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WorkshopBg from "../../assets/workshop-image/workshop.webp";
import Dummy1 from "../../assets/workshop-image/dummy1.png";
import Dummy2 from "../../assets/workshop-image/dummy2.png";
import Dummy3 from "../../assets/workshop-image/dummy3.png";
import Dummy4 from "../../assets/workshop-image/dummy4.png";
import Dummy5 from "../../assets/workshop-image/dummy5.png";
import Climate1 from "../../assets/about-image/climate-1.webp";
import Climate2 from "../../assets/about-image/climate-2.webp";
import Climate3 from "../../assets/about-image/climate-3.webp";
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
  {
    img: Dummy5,
  },
  {
    img: Climate1,
  }, 
  {
    img: Climate2,
  }, 
  {
    img: Climate3,
  }
];

export default function Workshop() {
  const [index, setIndex] = React.useState(0);

  const [event, setEvent] = React.useState([
    {
      title: 'GWF Climate Education Mentorship & Course 3.0',
      img: Dummy1,
      event: '13th June - 18th July 2022 | Administration fee: Donate as you wish | Application Deadline: 7th June 2022 at 18:00 WIB',
      button: 'Apply Now',
    },
    {
      title: 'Virtual Workshop: Planting from Home 1.0',
      img: Dummy2,
      event: '31st Jul 2021 | 09:30 - 11:30 WIB | Paid Class',
      button: 'CLOSE',
    },
    {
      title: 'GWF Climate Education Mentorship & Course 1.0',
      img: Dummy3,
      event: '23rd Aug - 01st Oct 2021 | Administration fee: Donate as you wish',
      button: 'CLOSE',
    },
    {
      title: 'GWF Climate Education Mentorship & Course 2.0',
      img: Dummy4,
      event: '28th Jan - 4th March 2022 | Administration fee: Donate as you wish',
      button: 'CLOSE',
    },
    {
      title: 'Virtual Workshop: Planting from Home 2.0',
      img: Dummy5,
      event: '23rd March 2022 | 09:30 - 11:00 WIB | Paid Class',
      button: 'CLOSE',
    },
  ]); 

  return (
    <>
      <Navbar />
      <Background src={WorkshopBg} className="min-h-500">
        <Filter />
        <div className="max-w-3xl space-y-8 z-1"> 
          <h1 className="text-4xl text-center text-light-1">Workshops & Classes</h1>
          <h3 className="font-poppins font-light text-sm text-center text-light-1">
            Enroll now to Green Welfare's interactive workshops and virtual classes to enhance your knowledge and skills around agriculture and
            climate!
          </h3>
        </div>
      </Background>


      <section className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:items-stretch lg:justify-normal pt-28 gap-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 pl-20">
      {event.map((events) => (
      <div className="py-3" key={events.title}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-primary-1 text-left w-220">
            <h1 className="pt-10 text-xl">{events.title}</h1>
          </motion.h1>
          <img className="w-60 py-16" src={events.img} alt="" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-220 text-primary-2 text-sm font-light"
          >
            <p>{events.event}</p>
          </motion.p>
          <div className="pt-12">
              <button className="bg-primary-1 text-base text-light-1 px-5 py-2 hover:opacity-60 duration-300 ease-in-out">{events.button}</button>
          </div>
      </div>
      ))}
      </div>
    </section>

      
        <Slider className="max-w-fit" slides={imgSlides} parentClassName="!h-100" setCurrentIndex={setIndex} currentIndex={index} column-2>
          <div className="columns-3">
            <img src={imgSlides[index]?.img} className="hover:opacity-25 justify-items-center"/>
            <img src={imgSlides[index + 1]?.img} className="hover:opacity-25 justify-items-center" />
            <img src={imgSlides[index + 2]?.img} className="hover:opacity-25 justify-items-center" />
          </div>
        </Slider>
     

      <Footer />
    </>
  );
}


