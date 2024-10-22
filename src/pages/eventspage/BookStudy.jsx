import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Import icons for date and read time
import { WhatsApp, Twitter, Instagram, AddLink } from "@mui/icons-material"; // MUI icons

const BookStudy = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-2">
        {/* Breadcrumb */}
        <p className="text-primary-2 text-sm mt-4">
          <a href="/" className="hover:underline">Home</a> &gt; Events Report
        </p>
        <hr className="border-t border-primary-3 my-2" />

        {/* Title */}
        <h1 className="xl:text-3xl sm:text-2xl font-bold mt-4 text-primary-2">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Eiusmo
        </h1>

        {/* Metadata */}
        <div className="flex flex-col sm:flex-row justify-between xl:items-center sm:items-center md:items-center mt-2 text-primary-3 xl:text-sm text-xs">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <FaCalendarAlt />
            <span>9 Sept 2024</span>
            <span>|</span>
            <FaClock />
            <span>2 mins read</span>
          </div>

          {/* Social Share Icons */}
          <div className="xl:flex md:flex space-x-3 bg-primary-3 bg-opacity-50 rounded-full text-primary-2 max-w-300 items-center justify-center p-1.5 hidden">
            <strong className="">Share: </strong>
            <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
              <AddLink className="" />
            </button>
            <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
              <Instagram className="" />
            </button>
            <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
              <Twitter className="" />
            </button>
            <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
              <WhatsApp className="" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6">
          <div className="bg-gray-200 w-full h-64 sm:h-48 mb-4"></div> {/* Placeholder for image */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem risus orci velit; luctus dolor arcu ultrices. Facilisi dictum proin sollicitudin phasellus arcu! At vivamus quis in aenean nisl.
            {/* More placeholder text here */}
          </p>
        </div>

        {/* More content or sections here if needed */}

        {/* Social Share Icons */}
        <div className="flex space-x-3 bg-primary-3 bg-opacity-50 rounded-full text-primary-2 max-w-300 my-5 items-center justify-center p-1.5">
          <strong className="">Share: </strong>
          <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
            <AddLink className="" />
          </button>
          <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
            <Instagram className="" />
          </button>
          <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
            <Twitter className="" />
          </button>
          <button className="bg-gray-200 p-0.5 rounded-full hover:bg-gray-300">
            <WhatsApp className="" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookStudy;
