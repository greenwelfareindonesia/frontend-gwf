import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useGetGalleries } from "../../features/gallery/service";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaFacebook, FaTwitter, FaPinterest, FaTumblr, FaCopy } from "react-icons/fa"; // Import required icons
import { PiShareFat } from "react-icons/pi"; // Import required icons
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import Container from "../../components/container";

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute grid w-6 h-6 -translate-y-1/2 rounded-full cursor-pointer md:w-12 md:h-12 top-1/2 bg-light-1 z-1 left-4 place-items-center"
      onClick={onClick}
    >
      <GrPrevious className="w-4 h-4 md:w-8 md:h-8" />
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute grid w-6 h-6 -translate-y-1/2 rounded-full cursor-pointer md:w-12 md:h-12 top-1/2 bg-light-1 z-1 right-4 place-items-center"
      onClick={onClick}
    >
      <GrNext className="w-4 h-4 md:w-8 md:h-8" />
    </div>
  );
};

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [url, setUrl] = useState("");

  const { data } = useGetGalleries();

  const handleShareClick = () => {
    setShowPopup(true);
    // Fetch the URL from API Backend and set it to the state
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard!");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <div>
      <Navbar />
      <Container className="my-16">
        <h1 className="text-3xl font-bold text-center text-primary-1">GALLERY</h1>
        {data?.map((item, index) => (
          <div key={index} className="relative mt-10 space-y-4">
            <h1 className="text-lg font-medium text-primary-1">Events {index + 1}</h1>
            <Slider {...settings}>
              {item?.fileNames?.map((image, index) => (
                <div key={index} className="relative flex items-center justify-center px-2">
                  <img src={image} className="transition-opacity duration-300" />
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-50 opacity-0 hover:opacity-100"
                    onClick={handleShareClick}
                    style={{ cursor: "pointer" }}
                  >
                    <PiShareFat size={30} className="text-gray-700" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}

        {showPopup && (
          <>
            <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
            <div className="fixed z-50 h-64 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 w-600">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold"></h2>
                <button onClick={() => setShowPopup(false)} className="text-gray-600">
                  <IoMdClose size={30} />
                </button>
              </div>
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="flex gap-10 mb-4">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://twitter.com/share" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <FaPinterest size={24} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTumblr size={24} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <MdEmail size={26} />
                  </a>
                </div>
                <div className="flex items-center w-72">
                  <input type="text" value={url} readOnly className="flex-1 p-2 border border-black " />
                  <button onClick={handleCopyClick} className="flex items-center p-3 text-white bg-black">
                    <FaCopy size={18} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Gallery;
