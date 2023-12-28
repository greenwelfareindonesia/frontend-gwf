import React from "react";
import Slider from "react-slick";
import Container from "../../components/container";
import { tumb1, tumb2 } from "../../assets/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "../../components/image";

const VideoSectionSlider = () => {
  const [slider, setSlider] = React.useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container className="max-w-screen-lg mx-auto my-20">
      <div className="relative w-full h-full px-4 group">
        <Slider {...settings} ref={(sliderRef) => setSlider(sliderRef)}>
          <div>
            <Image src={tumb1} className="aspect-video" />
          </div>
          <div>
            <Image src={tumb2} className="aspect-video" />
          </div>
        </Slider>
        <div className="absolute left-0 justify-between hidden w-full px-8 duration-300 -translate-y-1/2 top-1/2 group-hover:flex">
          <button onClick={() => slider.slickPrev()}>
            <GrPrevious className="w-8 h-8" color="white" />
          </button>
          <button onClick={() => slider.slickNext()}>
            <GrNext className="w-8 h-8" color="white" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default VideoSectionSlider;
