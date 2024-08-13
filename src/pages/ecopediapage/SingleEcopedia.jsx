import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useGetEcopedia, useGetEcopediaById } from "../../features/ecopedia/service";

import Container from "../../components/container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import { FaFacebook, FaTwitter, FaLinkedin, FaShareAlt, FaSearch, FaComment, FaEye, FaFeather } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

import convertDateValue from "../../utils/ConvertDate";

const SingleEcopedia = () => {
  const { slug } = useParams();

  const { data: datas } = useGetEcopedia();

  const { data } = useGetEcopediaById(slug);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchBar = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = () => {
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };

  return (
    <>
      <Navbar />
      <Container className="grid w-full grid-cols-2 mt-24">
        <Link to="/ecopedia" className="text-xl text-primary-1">
          <p>All Posts</p>
        </Link>
        <div className="flex justify-end">
          <div className="relative">
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Search"
                className="p-2 border rounded outline-none focus:border-2 focus:border-primary-2"
                value={searchTerm}
                onChange={handleSearchBar}
                onClick={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit();
                  }
                }}
              />
            )}
            <button className="ml-2" onClick={handleSearchClick}>
              <FaSearch />
            </button>
          </div>
        </div>
      </Container>
      <Container className="my-10 border md:border-primary-1 md:text-primary-1">
        <div className="w-full max-w-3xl p-4 mx-auto my-10">
          <div className="flex items-center gap-4 text-sm font-light">
            <span className="flex gap-1">
              <p>{data?.reference}</p>
              <FaFeather />
            </span>
            <span className="flex gap-1">• {convertDateValue(data?.createdAt)}</span>
            <span className="flex gap-1">• 2 min read</span>
          </div>
          <img src={data?.fileNames?.[0]} alt={data?.title} className="object-cover w-full my-8 h-96" />
          <h2 className="my-8 text-3xl font-bold">{data?.title}</h2>
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: data?.description }} />
          <hr className="w-full my-5 border-gray-300" />
          <div className="flex gap-8">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaLinkedin />
            </button>
            <button>
              <FaShareAlt />
            </button>
          </div>
          <hr className="w-full my-5 border-gray-300" />
          <div className="relative flex items-center gap-5">
            <p>6 views</p>
            <p>0 comments</p>
            <AiFillLike />
          </div>
        </div>
      </Container>
      <Container className="mb-10 !px-0 space-y-8">
        <div className="flex items-center justify-between w-full px-4 sm:px-0">
          <h2 className="text-lg font-light text-primary-1">Recent Posts</h2>
          <Link to="/ecopedia" className="text-sm font-light text-primary-1">
            <p>See All</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {datas?.map((item, index) => (
            <div key={index} className="rounded border-1 border-primary-1 text-primary-1">
              <div className="p-2">
                <img src={item.fileNames?.[0]} className="object-cover w-full h-48" />
              </div>
              <p className="mx-8 my-3 text-lg text-left line-clamp-2">{item.title}</p>
              <hr className="w-full border-gray-300" />
              <div className="flex items-center justify-between mx-8 my-4">
                <div className="flex items-center gap-2">
                  <FaEye />
                  <p className="text-xs">0</p>
                  <FaComment />
                  <p className="text-xs">0</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs">0</p>
                  <AiFillLike />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container className="py-10 md:border md:border-primary-1">
        <p>Comments</p>
        <hr className="w-full my-5 border-gray-300" />
        <input type="text" placeholder="Write a comment..." className="w-full p-3 border-1 border-primary-1" />
      </Container>
      <Footer />
    </>
  );
};

export default SingleEcopedia;
