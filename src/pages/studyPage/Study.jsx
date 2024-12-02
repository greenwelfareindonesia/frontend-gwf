import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Container from "../../components/container";
import { useGetStudy } from "../../features/study/service";
import { formatDate } from "../../utils/ConvertDate";

const Study = () => {
  const { data } = useGetStudy();

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
        {/* <div className="flex flex-row items-center justify-between w-full mt-10 mb-8">
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
        </div> */}

        {/* Rectangular Event Cards */}
        <div className="grid grid-cols-1 gap-6 my-10">
          {data?.length > 2 &&
            data?.slice(0, 2).map((report, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col sm:flex-row">
                <img src={report?.Images?.[0].FileName} alt={report.title} className="object-cover w-full mb-4 rounded-lg sm:w-40 sm:mb-0 sm:mr-4 aspect-video sm:aspect-square" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold sm:text-xl">{report.Title}</h2>
                  <p className="text-sm text-black sm:mb-2">{formatDate(report.updated_at)}</p>
                  <div className="text-sm text-black line-clamp-2" dangerouslySetInnerHTML={{ __html: report.Description }} />
                  <hr className="my-4 border-black border-t-1" />
                  <div className="flex items-center justify-end mt-4">
                    <Link to={`/report/detail/${report.Slug}`} className="text-sm text-black ">
                      See More &gt;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          {data?.length <= 2 &&
            data?.map((report, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col sm:flex-row">
                <img src={report?.Images?.[0].FileName} alt={report.title} className="object-cover w-full mb-4 rounded-lg sm:w-40 sm:mb-0 sm:mr-4 aspect-video sm:aspect-square" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold sm:text-xl">{report.Title}</h2>
                  <p className="text-sm text-black sm:mb-2">{formatDate(report.updated_at)}</p>
                  <div className="text-sm text-black line-clamp-2" dangerouslySetInnerHTML={{ __html: report.Description }} />
                  <hr className="my-4 border-black border-t-1" />
                  <div className="flex items-center justify-end mt-4">
                    <Link to={`/report/detail/${report.Slug}`} className="text-sm text-black ">
                      See More &gt;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Square Event Cards */}
        <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2">
          {data?.length > 2 &&
            data?.slice(2, data?.length).map((report, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] w-full flex flex-col">
                {/* Image */}
                <img
                  src={report?.Images?.[0].FileName} // Replace with dynamic image path
                  alt={report.Title}
                  className="object-cover w-full mb-4 rounded-md aspect-video"
                />

                {/* Title and Date with Dark Green Background */}
                <div className="p-4 mb-4 rounded-md bg-primary-1">
                  <h2 className="text-base font-semibold text-white sm:text-lg">{report.Title}</h2>
                  <p className="text-sm text-white">{formatDate(report.updated_at)}</p>
                </div>

                {/* Description */}
                <div className="flex-1 text-left">
                  <div className="h-10">
                    <div className="text-sm text-black line-clamp-2" dangerouslySetInnerHTML={{ __html: report.Description }} />
                  </div>

                  {/* Divider */}
                  <hr className="my-4 border-black border-t-1" />

                  {/* Views and See More */}
                  <div className="flex items-center justify-end mt-4">
                    <Link to={`/report/detail/${report.Slug}`} className="text-sm text-black">
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
