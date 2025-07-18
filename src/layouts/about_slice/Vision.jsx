import * as React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { header_image, vision_image1 } from "../../assets/about-image";
import Background from "../../components/background";
import Container from "../../components/container";

const slides = [header_image, vision_image1];

const Vision = () => {
  const [activeDots, setActiveDots] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next) => setActiveDots(next),
    afterChange: (current) => setActiveDots(current),
    appendDots: (dots) => <div style={{ bottom: "50px" }}>{dots}</div>,
    customPaging: (index) => <div className="text-3xl cursor-pointer">{index === activeDots ? <>&#9702;</> : <>&#8226;</>}</div>,
  };
  return (
    <section className="bg-primary-1">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <Background key={index} src={item} className="min-h-400 md:min-h-600" />
        ))}
      </Slider>
      <Container className="py-8 space-y-12 text-center text-light-1 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl font-light md:text-7xl"
        >
          Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="mx-8 mb-4 italic font-extralight md:mb-16 text-md md:text-lg lg:text-xl"
        >
          "Our mission is to strengthen the contribution of Indonesian youths and local communities
          in achieving Golden Indonesia by 2045 through actively engaging in environmental and 
          social actions."
        </motion.p>
      </Container>
    </section>
  );
};

export default Vision;
