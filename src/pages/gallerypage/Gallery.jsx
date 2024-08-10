import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import foto1 from "../../assets/gallery-image/gallery1.png";
import foto2 from "../../assets/gallery-image/gallery2.png";
import foto3 from "../../assets/gallery-image/gallery3.png";
import foto4 from "../../assets/gallery-image/gallery4.png";
import foto5 from "../../assets/gallery-image/gallery1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../../assets/icons/NextItem.png";
import Previous from "../../assets/icons/PreviousItem.png";
import { FaFacebook, FaTwitter, FaPinterest, FaTumblr, FaCopy } from 'react-icons/fa'; // Import required icons
import { PiShareFat } from 'react-icons/pi'; // Import required icons
import { IoMdClose } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { SlArrowLeft, SlArrowRight} from 'react-icons/sl'

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-6 mt-44 z-10 flex items-center justify-center h-full cursor-pointer"
      onClick={onClick}
      style={{ width: "30px", height: "30px" }}
    >
      <img src={Previous} alt="Previous" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-3 mb-32 z-10 flex items-center justify-center h-full cursor-pointer"
      onClick={onClick}
      style={{ width: "30px", height: "30px", bottom: "55px", transform: "translateY(-50%)" }}
    >
      <img src={Next} alt="Next" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [url, setUrl] = useState('');

  const handleShareClick = () => {
    setShowPopup(true);
    // Fetch the URL from API Backend and set it to the state
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  const images = [foto1, foto2, foto3, foto4, foto5];

  return (
    <div>
      <Navbar />
      <div className="p-16">
        <h1 className= "text-center text-3xl font-bold ">GALLERY</h1>
        <h1 className="mt-10 mb-3">Events 1</h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-2"
            >
              <img
                src={image}
                style={{ height: "400px", width: "100%", margin: "0 8px" }}
                className="transition-opacity duration-300"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleShareClick}
                style={{ cursor: "pointer" }}
              >
                <PiShareFat size={30} className="text-gray-700" />
              </div>
            </div>
          ))}
        </Slider>

        <h1 className="mt-10 mb-3">Events 2</h1>

        {/* Second Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-2"
            >
              <img
                src={image}
                style={{ height: "400px", width: "100%", margin: "0 8px" }}
                className="transition-opacity duration-300"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleShareClick}
                style={{ cursor: "pointer" }}
              >
                <PiShareFat size={30} className="text-gray-700" />
              </div>
            </div>
          ))}
        </Slider>

        <h1 className="mt-10 mb-3">Events 3</h1>

        {/* Third Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-2"
            >
              <img
                src={image}
                style={{ height: "400px", width: "100%", margin: "0 8px" }}
                className="transition-opacity duration-300"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleShareClick}
                style={{ cursor: "pointer" }}
              >
                <PiShareFat size={30} className="text-gray-700" />
              </div>
            </div>
          ))}
        </Slider>

        <h1 className="mt-10 mb-3">Events 4</h1>

        {/* Fourth Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-2"
            >
              <img
                src={image}
                style={{ height: "400px", width: "100%", margin: "0 8px" }}
                className="transition-opacity duration-300"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleShareClick}
                style={{ cursor: "pointer" }}
              >
                <PiShareFat size={30} className="text-gray-700" />
              </div>
            </div>
          ))}
        </Slider>

        <h1 className="mt-10 mb-3">Events 5</h1>

        {/* Fifth Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center px-2"
            >
              <img
                src={image}
                style={{ height: "400px", width: "100%", margin: "0 8px" }}
                className="transition-opacity duration-300"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                onClick={handleShareClick}
                style={{ cursor: "pointer" }}
              >
                <PiShareFat size={30} className="text-gray-700" />
              </div>
            </div>
          ))}
        </Slider>

        {showPopup && (
          <>
            <div className="fixed inset-0 bg-black opacity-60 z-40"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 z-50 w-600 h-64">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold"></h2>
                <button onClick={() => setShowPopup(false)} className="text-gray-600">
                    <IoMdClose size={30}/>
                </button>
              </div>
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="flex gap-10 mb-4">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com/share" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24}  />
                </a>
                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={24}  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTumblr size={24} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <MdEmail size={26} />
                </a>
              </div>
              <div className="flex items-center w-72">
                <input 
                  type="text" 
                  value={url} 
                  readOnly 
                  className="flex-1 p-2 border border-black "
                />
              <button 
                onClick={handleCopyClick} 
                className="bg-black text-white p-3 flex items-center"
              >
                <FaCopy size={18} />
              </button>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
