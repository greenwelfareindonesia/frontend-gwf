import React from "react";
import Slider from "react-slick";
import Container from "../../components/container";
import { tumb1, tumb2 } from "../../assets/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from "../../components/button";

const VideoSectionSlider = () => {
  const [slider, setSlider] = React.useState(null);
  const iframeRef = React.useRef(null);
  const [show, setShow] = React.useState(true);

  const handlePlay = () => {
    const iframe = iframeRef.current;
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: [],
      }),
      "*"
    );
    setShow(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container className="my-32">
      <div className="relative w-full h-full px-4 group">
        <Slider {...settings} ref={(sliderRef) => setSlider(sliderRef)}>
          <div className="relative w-full h-0 pb-[50%]">
            <iframe
              ref={iframeRef}
              title="YouTube video player"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?enablejsapi=1"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {show && (
              <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full cursor-pointer" onClick={handlePlay}>
                <img src={tumb1} alt="Play" className="object-cover w-full h-full" />
                <div className="absolute p-4 space-y-8 text-center">
                  <h4 className="text-4xl text-light-1">All Videos</h4>
                  <Button intent="white" className="mx-auto">
                    Play Video
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="relative w-full h-0 pb-[50%]">
            <iframe
              ref={iframeRef}
              title="YouTube video player"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?enablejsapi=1"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            {show && (
              <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full cursor-pointer" onClick={handlePlay}>
                <img src={tumb2} alt="Play" className="object-cover w-full h-full" />
                <div className="absolute p-4 space-y-8 text-center">
                  <h4 className="text-4xl text-light-1">All Videos</h4>
                  <Button intent="white" className="mx-auto">
                    Play Video
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Slider>
        <div className="absolute left-0 justify-between hidden w-full px-8 duration-300 -translate-y-1/2 top-1/2 group-hover:flex">
          <button className="grid w-10 h-10 rounded-full bg-light-1 place-items-center" onClick={() => slider.slickPrev()}>
            <GrPrevious className="w-8 h-8" />
          </button>
          <button className="grid w-10 h-10 rounded-full bg-light-1 place-items-center" onClick={() => slider.slickNext()}>
            <GrNext className="w-8 h-8" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default VideoSectionSlider;
