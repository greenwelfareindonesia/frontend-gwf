import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaCalendarAlt } from "react-icons/fa"; // Import icons for date and read time
// import { instagram, share_link, twitter, whatsapp } from "../../assets/icons";
import { share_link } from "../../assets/icons";
import Container from "../../components/container";
import { Link, useParams } from "react-router-dom";
import { useGetStudyById } from "../../features/study/service";
import { formatDate } from "../../utils/ConvertDate";

const DetailStudy = () => {
  const { slug } = useParams();

  const { data, isLoading } = useGetStudyById(slug);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="flex justify-center py-24">
          <div className="loader"></div>
        </div>
      ) : (
        <Container className="pt-16 pb-8">
          {/* Breadcrumb */}
          <p className="mt-4 text-sm text-primary-2">
            <Link to="/report" className="hover:underline">
              Events Reports
            </Link>{" "}
            &gt; {data?.Title}
          </p>
          <hr className="my-2 border-t border-primary-3" />

          {/* Title */}
          <h1 className="mt-4 font-bold xl:text-3xl sm:text-2xl text-primary-2">{data?.Title}</h1>

          {/* Metadata */}
          <div className="flex items-center justify-between mt-8 text-xs xl:items-center sm:items-center md:items-center text-primary-3 md:text-sm xl:text-base">
            <div className="flex items-center gap-1 sm:gap-2">
              <FaCalendarAlt />
              <span>{formatDate(data?.updated_at)}</span>
            </div>

            {/* Social Share Icons */}
            <div className="flex gap-1 sm:gap-3 bg-primary-3 bg-opacity-50 rounded-full text-primary-2 max-w-300 items-center justify-center p-1.5">
              <strong>Share: </strong>
              <button className="rounded-full">
                <img src={share_link} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-6">
            <div className="my-4 dangerous_html" dangerouslySetInnerHTML={{ __html: data?.Description }} />
          </div>

          {/* More content or sections here if needed */}

          {/* Social Share Icons */}
          <div className="flex gap-1 sm:gap-3 bg-primary-3 bg-opacity-50 rounded-full text-primary-2 my-6 items-center w-max p-1.5">
            <strong className="text-xs sm:text-sm md:text-base">Share: </strong>
            <button className="rounded-full">
              <img src={share_link} alt="icons share link" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default DetailStudy;
