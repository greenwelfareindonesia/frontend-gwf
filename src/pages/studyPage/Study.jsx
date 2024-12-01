import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroSectionImage from "../../assets/gwfbandung-image/HeroSectionImg.png"; // Replace with your actual image path
import Container from "../../components/container";

const Study = () => {
  const events = [
    {
      title: "GWF Indonesia - National Environment Day",
      date: "18:00 - 20:00 · Jul 30, 2022",
      description: "Satu Lorem ipsum dolor sit amet consectetur. Arcu cursus semper malesuada eu feugiat in porttitor. Et vel volutpat tellus nisi ultrices metus tincidunt. Eti elit volutpat lorem.",
      views: 72,
    },
    {
      title: "GWF Indonesia - National Environment Day",
      date: "18:00 - 20:00 · Jul 30, 2022",
      description: "Dua Lorem ipsum dolor sit amet consectetur. Arcu cursus semper malesuada eu feugiat in porttitor. Et vel volutpat tellus nisi ultrices metus tincidunt. Eti elit volutpat lorem.",
      views: 72,
    },
    // Add more event objects as needed
  ];

  return (
    <>
      <Navbar />
      <Container className="py-12">
        {/* Hero Section */}
        <div className="">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-6xl">
            Welcome to <span className="bg-[#9C9C5E] px-2 py-1 inline-block ">Event Report</span>
          </h1>
          <p className="mt-4 text-base tracking-wide sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur. Sed ligula nisi placerat pharetra gravida donec.</p>
        </div>

        {/* Search and Sort Section */}
        <div className="flex flex-row items-center justify-between w-full mt-10 mb-8">
          <div className="relative flex-grow">
            <FaSearch className="absolute transform -translate-y-1/2 left-3 top-1/2" />
            <input type="text" placeholder="Search here" className="w-full py-2 pl-10 pr-4 placeholder-black border rounded-lg border-primary-1" />
          </div>
          <div className="relative w-auto ml-4">
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 border rounded-lg border-primary-1">
              Sort By
              <FiChevronDown className="ml-2" />
            </button>
          </div>
        </div>

        {/* Rectangular Event Cards */}
        <div className="grid grid-cols-1 gap-6 mb-10">
          {events.map((event, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col sm:flex-row">
              <img src={HeroSectionImage} alt={event.title} className="object-cover w-full h-32 mb-4 mr-4 rounded-md sm:w-32 sm:mb-0" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold sm:text-xl">{event.title}</h2>
                <p className="text-sm text-black sm:mb-2">{event.date}</p>
                <p className="text-sm text-black line-clamp-2">{event.description}</p>
                <hr className="my-4 border-black border-t-1" />
                <div className="flex items-center justify-between mt-4">
                  <p className="flex items-center text-sm text-black">
                    <IoEyeOutline className="mr-1" />
                    <span>{event.views}</span>
                  </p>
                  <Link to="/study/detail" className="text-sm text-black ">
                    See More &gt;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Square Event Cards */}
        <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2">
          {events.map((event, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col">
              {/* Image */}
              <img
                src={HeroSectionImage} // Replace with dynamic image path
                alt={event.title}
                className="object-cover w-full h-32 mb-4 rounded-md"
              />

              {/* Title and Date with Dark Green Background */}
              <div className="p-4 mb-4 rounded-md bg-primary-1">
                <h2 className="text-base font-semibold text-white sm:text-lg">{event.title}</h2>
                <p className="text-sm text-white">{event.date}</p>
              </div>

              {/* Description */}
              <div className="flex-1 text-left">
                <p className="h-16 mb-4 text-sm text-black line-clamp-3">{event.description}</p>

                {/* Divider */}
                <hr className="my-4 border-black border-t-1" />

                {/* Views and See More */}
                <div className="flex items-center justify-between mt-4">
                  <p className="flex items-center text-sm text-black">
                    <IoEyeOutline className="mr-1" />
                    <span>{event.views}</span>
                  </p>
                  <Link to="/study/detail" className="text-sm text-black">
                    See More &gt;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Study;
