import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroSectionImage from "../../assets/gwfbandung-image/HeroSectionImg.png"; // Replace with your actual image path

const Eventreport = () => {
  const events = [
    {
      title: "GWF Indonesia - National Environment Day",
      date: "18:00 - 20:00 · Jul 30, 2022",
      description:
        "Satu Lorem ipsum dolor sit amet consectetur. Arcu cursus semper malesuada eu feugiat in porttitor. Et vel volutpat tellus nisi ultrices metus tincidunt. Eti elit volutpat lorem.",
      views: 72,
    },
    {
      title: "GWF Indonesia - National Environment Day",
      date: "18:00 - 20:00 · Jul 30, 2022",
      description:
        "Dua Lorem ipsum dolor sit amet consectetur. Arcu cursus semper malesuada eu feugiat in porttitor. Et vel volutpat tellus nisi ultrices metus tincidunt. Eti elit volutpat lorem.",
      views: 72,
    },
    // Add more event objects as needed
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 max-w-screen-lg">
        {/* Hero Section */}
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
            Welcome to{" "}
            <span className="bg-[#9C9C5E] px-2 py-1 inline-block ">
              Event Report
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl tracking-wide">
            Lorem ipsum dolor sit amet consectetur. Sed ligula nisi placerat
            pharetra gravida donec.
          </p>
        </div>

      {/* Search and Sort Section */}
      <div className="flex flex-row justify-between items-center mb-8 mt-10 w-full">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 pr-4 py-2 rounded-lg placeholder-black border border-primary-1"
          />
        </div>
        <div className="relative w-auto ml-4">
          <button className="flex items-center justify-center px-4 py-2 bg-gray-100 border border-primary-1 rounded-lg">
            Sort By
            <FiChevronDown className="ml-2" />
          </button>
        </div>
      </div>

        {/* Rectangular Event Cards */}
        <div className="grid grid-cols-1 gap-6 mb-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col sm:flex-row"
            >
              <img
                src={HeroSectionImage} 
                alt={event.title}
                className="w-full sm:w-32 h-32 object-cover rounded-md mr-4 mb-4 sm:mb-0"
              />
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold">{event.title}</h2>
                <p className="text-black text-sm sm:mb-2">{event.date}</p>
                <p className="text-black text-sm">{event.description}</p>
                <hr className="border-t-1 border-black my-4" />
                <div className="flex justify-between items-center mt-4">
                  <p className="text-black text-sm flex items-center">
                    <IoEyeOutline className="mr-1" />
                    <span>{event.views}</span>
                  </p>
                  <Link to="#" className="text-sm text-black ">
                    See More &gt;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Square Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col"
            >
              {/* Image */}
              <img
                src={HeroSectionImage} // Replace with dynamic image path
                alt={event.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />

              {/* Title and Date with Dark Green Background */}
              <div className="bg-primary-1 p-4 rounded-md mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-white">{event.title}</h2>
                <p className="text-white text-sm">{event.date}</p>
              </div>

              {/* Description */}
              <div className="flex-1 text-left">
                <p className="text-black text-sm mb-4">{event.description}</p>

                {/* Divider */}
                <hr className="border-t-1 border-black my-4" />

                {/* Views and See More */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-black text-sm flex items-center">
                    <IoEyeOutline className="mr-1" />
                    <span>{event.views}</span>
                  </p>
                  <Link to="#" className="text-sm text-black">
                    See More &gt;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Eventreport;
