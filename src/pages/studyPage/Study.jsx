import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Container from "../../components/container";
import { useGetStudy } from "../../features/study/service";
import { formatDate } from "../../utils/ConvertDate";
import tripsirImage from "../../assets/image/tripsir.jpg";
import greentrip from "../../assets/image/greentrip.jpg";
import greener from "../../assets/image/greener.jpg";

const Study = () => {
  //const { data } = useGetStudy();
  const data = [
    {
      Title: "Greener School 2025",
      Description: "Join as a tutor for Greener School 2025 GWF X Agung Sedayu Group.",
      updated_at: "2025-05-18T12:00:00Z",
      Slug: "https://www.instagram.com/p/DBybeO8SNSR/?img_index=2&igsh=MTgyam44cDJka3Y1Ng==",
      Images: [{ FileName: greener }],
    },
    {
      Title: "Recap of Green Trip: Ramadhan Visit 1446 H",
      Description: "Ramadhan visit to Al-Andalusia Foundation, South Jakarta.",
      updated_at: "2025-03-17T11:30:00Z",
      Slug: "https://www.instagram.com/p/DHTNuByp7Ma/?img_index=2&igsh=ZnhiYmNnMDlhZWcy",
      Images: [{ FileName: greentrip }],
    },
    {
      Title: "TRIPSIR (Transformation for Coastal Areas)",
      Description: "Green Welfare and BEM Vokasi UI 2024 launched the TRIPSIR program in Pantai Bakti Village.",
      updated_at: "2024-10-31T10:15:00Z",
      Slug: "https://www.instagram.com/p/DBybeO8SNSR/?img_index=2&igsh=MTgyam44cDJka3Y1Ng%3D%3D",
      Images: [{ FileName: tripsirImage }],
    },
  ];

  return (
    <>
      <Navbar />
      <Container className="py-0">
        <Container className="my-32 space-y-4 lg:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-normal tracking-wide text-center text-primary-2 lg:text-5xl"
          >
            Event Report
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="text-base font-light leading-6 text-center text-dark lg:text-lg"
          >
            Documentation reports of activities organized by Green Welfare, ranging from social visits, collaborative programs, to environmental actions.
          </motion.p>
        </Container>

        {/* <div className="">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-6xl">
            Welcome to <span className="bg-[#9C9C5E] px-2 py-1 inline-block ">Event Report</span>
          </h1>
          <p className="mt-4 text-base tracking-wide sm:text-lg md:text-xl">
            Documentation reports of activities organized by Green Welfare, ranging from social visits, collaborative programs, to environmental actions.
          </p>
        </div> */}

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
        {/* <div className="grid grid-cols-1 gap-6 my-10">
          {data?.length > 2 && */}
            {/* data?.slice(0, 2).map((report, index) => (
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
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {data.map((report, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-200 rounded-lg shadow-lg p-4 bg-[#B5B5A3] flex flex-col"
          >
            {/* Image */}
            <img
              src={report?.Images?.[0].FileName}
              alt={report.Title}
              className="object-cover w-full mb-4 rounded-md aspect-square"
            />

            {/* Title and Date */}
            <div className="mb-2">
              <h2 className="text-base font-semibold sm:text-lg text-black">{report.Title}</h2>
              <p className="text-sm text-black">{formatDate(report.updated_at)}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-black line-clamp-3 mb-4">{report.Description}</p>

            {/* Button */}
            <div className="mt-auto text-right">
              <a
                href={report.Slug}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black underline hover:text-gray-700"
              >
                See More &gt;
              </a>
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
