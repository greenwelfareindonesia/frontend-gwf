import React from "react";
import Slider from "react-slick";
import Container from "../../components/container";
import Image from "../../components/container/Image";
import { tumb1, tumb2 } from "../../assets/image";
import { GrNext, GrPrevious } from "react-icons/gr";

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
      <div className="relative w-full h-full group px-4">
        <Slider {...settings} ref={(sliderRef) => setSlider(sliderRef)}>
          <div>
            <Image src={tumb1} className="aspect-video" />
          </div>
          <div>
            <Image src={tumb2} className="aspect-video" />
          </div>
        </Slider>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 justify-between px-8 w-full hidden group-hover:flex duration-300">
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
