import * as React from "react";

import Slider from "react-slick";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Container from "../../components/container";
import Button from "../../components/button";
import Image from "../../components/image";
import { involved } from "../../constant/involved";

const InvolvedCarousel = () => {
  const [slider, setSlider] = React.useState(null);
  const [activeDots, setActiveDots] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next) => setActiveDots(next),
    afterChange: (current) => setActiveDots(current),
    appendDots: (dots) => <div style={{ bottom: "-60px" }}>{dots}</div>,
    customPaging: (index) => <div className="text-3xl cursor-pointer">{index === activeDots ? <>&#9702;</> : <>&#8226;</>}</div>,
  };

  return (
    <Container className="!max-w-screen-xl my-32">
      <Slider {...settings} ref={(sliderRef) => setSlider(sliderRef)}>
        {involved.map((item, index) => (
          <div key={index} className="!flex flex-col lg:flex-row gap-4 px-0 lg:px-16">
            <div className="flex-1">
              <Image src={item.image} description={item.title} className="w-full max-w-lg" />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 text-center lg:gap-8">
              <h1 className="w-full text-xl italic font-normal text-primary-2">{item.title}</h1>
              <p className="w-full text-base italic font-light leading-8 text-primary-2">{item.desc}</p>
              <Button className="mx-auto">Get in Touch</Button>
            </div>
          </div>
        ))}
      </Slider>

      <button className="absolute left-0 hidden top-1/2 lg:flex" onClick={() => slider.slickPrev()}>
        <BsChevronCompactLeft size={30} />
      </button>
      <button className="absolute right-0 hidden top-1/2 lg:flex" onClick={() => slider.slickNext()}>
        <BsChevronCompactRight size={30} />
      </button>
    </Container>
  );
};

export default InvolvedCarousel;
