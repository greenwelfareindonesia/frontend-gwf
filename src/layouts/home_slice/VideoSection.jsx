import React from "react";
import { BsFillShareFill, BsInfo, BsSearch, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Container from "../../components/container";
import Slider from "react-slick";
import { tumb1, tumb2 } from "../../assets/image";
// import Image from "../../components/container/Image";
// import Button from "../../components/button";

const VideoSection = () => {
  const [slider, setSlider] = React.useState(null);

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
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
    <Container className="max-w-screen-lg my-40 bg-white shadow-none mx-auto px-4">
      <div className="p-0">
        <div className="flex w-full py-4">
          <h2 className="w-full text-xl font-extralight">All Videos</h2>
          <button className="border-r border-black/30 pe-4">
            <BsFillShareFill className="text-[#3E3E08] hover:text-[#3E3E08]/80 duration-200" />
          </button>
          <button className="ps-2">
            <BsInfo className="w-6 h-6 text-[#3E3E08] hover:text-[#3E3E08]/80 duration-200" />
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full relative">
          {/* <Image
            src={tumb1}
            className="aspect-video absolute flex justify-center gap-4 flex-col items-center"
          >
            <h1 className="text-white">All Videos</h1>
            <Button>Play Video</Button>
          </Image> */}
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
        <div className="flex flex-col">
          <div className="w-full my-4 flex gap-3 items-center relative">
            <input
              type="text"
              placeholder="Search video..."
              className="w-full text-sm font-extralight outline-none duration-300 bg-[#5F5E36]/20 placeholder:text-[#3E3E08] placeholder:font-extralight focus:bg-[#5F5E36]/20 pl-10 focus:pl-10 py-3 placeholder-shown:bg-white placeholder-shown:pl-7 peer"
            />
            <i className="text-md absolute left-3 peer-focus:left-3 peer-placeholder-shown:left-0 duration-100">
              <BsSearch />
            </i>
            <div></div>
            <select
              id="countries"
              className="absolute right-0 top-0 bg-white border-b outline-none border-gray-300 transform duration-300 text-[#3E3E08] hover:text-[#3E3E08]/80 text-sm focus:ring-[#5F5E36] focus:border-[#5F5E36] hidden w-full p-3 max-w-max font-extralight peer-focus:hidden peer-placeholder-shown:block cursor-pointer"
              defaultValue="All Categories"
            >
              <option value="All Categories">All Categories</option>
              <option value="US">People & Blogs</option>
            </select>
          </div>
          <div className="w-full">
            <Slider ref={(sliderRef) => setSlider(sliderRef)} {...settings}>
              <div>
                <img src={tumb1} alt="" className="max-w-[230px] w-full h-auto" />
              </div>
              <div>
                <img src={tumb2} alt="" className="max-w-[230px] w-full h-auto" />
              </div>
              <div>
                <img src={tumb1} alt="" className="max-w-[230px] w-full h-auto" />
              </div>
              <div>
                <img src={tumb2} alt="" className="max-w-[230px] w-full h-auto" />
              </div>
              <div>
                <img src={tumb1} alt="" className="max-w-[230px] w-full h-auto" />
              </div>
              <div>
                <img src={tumb2} alt="" className="max-w-[230px] w-full h-auto" />
              </div>
            </Slider>
            <div className="flex w-full justify-between mt-4">
              <button
                className="flex gap-2 font-light text-sm tracking-wide items-center text-[#3E3E08] hover:text-[#3E3E08]/80"
                onClick={() => slider.slickPrev()}
              >
                <BsArrowLeft />
                Prev
              </button>
              <button
                className="flex gap-2 font-light text-sm tracking-wide items-center text-[#3E3E08] hover:text-[#3E3E08]/80"
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
