import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Import icons for date and read time
import { instagram, share_link, twitter, whatsapp } from "../../assets/icons";
import Container from "../../components/container";

const DetailStudy = () => {
  return (
    <>
      <Navbar />
      <Container className="pt-16 pb-8">
        {/* Breadcrumb */}
        <p className="mt-4 text-sm text-primary-2">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt; Events Report
        </p>
        <hr className="my-2 border-t border-primary-3" />

        {/* Title */}
        <h1 className="mt-4 font-bold xl:text-3xl sm:text-2xl text-primary-2">Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Eiusmo</h1>

        {/* Metadata */}
        <div className="flex items-center justify-between mt-8 text-xs xl:items-center sm:items-center md:items-center text-primary-3 md:text-sm xl:text-base">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaCalendarAlt />
            <span>9 Sept 2024</span>
            <span>|</span>
            <FaClock />
            <span>2 mins read</span>
          </div>

          {/* Social Share Icons */}
          <div className="flex gap-1 sm:gap-3 bg-primary-3 bg-opacity-50 rounded-full text-primary-2 max-w-300 items-center justify-center p-1.5">
            <strong>Share: </strong>
            <button className="rounded-full">
              <img src={share_link} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
            <button className="rounded-full">
              <img src={twitter} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
            <button className="rounded-full">
              <img src={instagram} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
            <button className="rounded-full">
              <img src={whatsapp} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6">
          <div className="w-full h-64 mb-4 bg-gray-200 sm:h-48"></div> {/* Placeholder for image */}
          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem risus orci velit; luctus dolor arcu ultrices. Facilisi dictum proin sollicitudin phasellus arcu! At vivamus quis in
            aenean nisl.
            {/* More placeholder text here */}
          </p>
        </div>

        {/* More content or sections here if needed */}

        {/* Social Share Icons */}
        <div className="flex gap-1 sm:gap-3 bg-primary-3 bg-opacity-50 rounded-full text-primary-2 my-6 items-center w-max p-1.5">
          <strong className="text-xs sm:text-sm md:text-base">Share: </strong>
          <button className="rounded-full">
            <img src={share_link} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
          <button className="rounded-full">
            <img src={twitter} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
          <button className="rounded-full">
            <img src={instagram} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
          <button className="rounded-full">
            <img src={whatsapp} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default DetailStudy;
