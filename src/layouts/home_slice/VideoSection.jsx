import * as React from "react";

import Slider from "react-slick";

import { BsFillShareFill, BsInfo, BsSearch, BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { tumb1, tumb2 } from "../../assets/image";

import Container from "../../components/container";
import Image from "../../components/image";
// import Background from "../../components/background";
// import Button from "../../components/button";

const VideoSection = () => {
  const [slider, setSlider] = React.useState(null);

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="p-0">
        <div className="flex w-full py-4">
          <h2 className="w-full text-xl font-extralight">All Videos</h2>
          <button className="border-r border-black/30 pe-4">
            <BsFillShareFill className="duration-200 text-primary-2 hover:text-filter-2" />
          </button>
          <button className="ps-2">
            <BsInfo className="w-6 h-6 duration-200 text-primary-2 hover:text-filter-2" />
          </button>
        </div>
        <div className="relative flex items-center justify-center w-full h-full">
          {/* <Background
            src={tumb1}
            className="absolute flex flex-col items-center justify-center gap-4 aspect-video"
          >
            <h1 className="text-light-1">All Videos</h1>
            <Button>Play Video</Button>
          </Background> */}
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        <div className="flex flex-col">
          <div className="relative flex items-center w-full gap-3 my-4">
            <input
              type="text"
              placeholder="Search video..."
              className="w-full py-3 pl-10 text-sm font-light duration-300 outline-none bg-primary-1/20 placeholder:text-primary-2 placeholder:font-light focus:bg-primary-1/20 focus:pl-10 placeholder-shown:bg-white placeholder-shown:pl-7 peer"
            />
            <i className="absolute duration-100 text-md left-3 peer-focus:left-3 peer-placeholder-shown:left-0">
              <BsSearch />
            </i>
            <select
              id="countries"
              className="absolute top-0 right-0 hidden w-full p-3 text-sm font-light duration-300 transform border-b outline-none cursor-pointer bg-light-1 border-light-2 text-primary-2 hover:text-filter-2 max-w-max peer-focus:hidden peer-placeholder-shown:block"
              defaultValue="All Categories"
            >
              <option value="All Categories">All Categories</option>
              <option value="US">People & Blogs</option>
            </select>
          </div>
          <div className="w-full">
            <Slider ref={(sliderRef) => setSlider(sliderRef)} {...settings}>
              <div>
                <Image src={tumb1} description="thumbnail" className="w-full h-auto" />
              </div>
              <div>
                <Image src={tumb2} description="thumbnail" className="w-full h-auto" />
              </div>
              <div>
                <Image src={tumb1} description="thumbnail" className="w-full h-auto" />
              </div>
              <div>
                <Image src={tumb2} description="thumbnail" className="w-full h-auto" />
              </div>
              <div>
                <Image src={tumb1} description="thumbnail" className="w-full h-auto" />
              </div>
              <div>
                <Image src={tumb2} description="thumbnail" className="w-full h-auto" />
              </div>
            </Slider>
            <div className="flex justify-between w-full mt-4">
              <button
                className="flex items-center gap-2 text-sm font-light tracking-wide duration-300 text-primary-2 hover:text-filter-2"
                onClick={() => slider.slickPrev()}
              >
                <BsArrowLeft />
                Prev
              </button>
              <button
                className="flex items-center gap-2 text-sm font-light tracking-wide duration-300 text-primary-2 hover:text-filter-2"
                onClick={() => slider.slickNext()}
              >
                Next
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VideoSection;
