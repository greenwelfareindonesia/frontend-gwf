import * as React from "react";

import Slider from "react-slick";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Container from "../../components/container";
import { messages } from "../../constant/message";

const CarouselMessage = () => {
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
    <Container className="my-32">
      <Slider className="px-2" {...settings} ref={(sliderRef) => setSlider(sliderRef)}>
        {messages.map((item, index) => (
          <div key={index} className="w-full space-y-4 italic text-center text-primary-2">
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className="text-sm font-light leading-7">{item.desc}</p>
          </div>
        ))}
      </Slider>

      <button className="absolute left-0 flex top-1/2" onClick={() => slider.slickPrev()}>
        <BsChevronCompactLeft size={30} />
      </button>
      <button className="absolute right-0 flex top-1/2" onClick={() => slider.slickNext()}>
        <BsChevronCompactRight size={30} />
      </button>
    </Container>
  );
};

export default CarouselMessage;
