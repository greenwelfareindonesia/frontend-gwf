import { Card, CardBody, Typography } from "@material-tailwind/react";
import { BsFillShareFill, BsInfo, BsSearch } from "react-icons/bs";

const VideoSection = () => {
  return (
    <>
      <Card className="max-w-screen-lg w-full h-full my-20 bg-white shadow-none mx-auto">
        <CardBody className="p-0">
          <div className="flex w-full py-4">
            <Typography variant="h2" className="w-full text-xl font-extralight">
              All Videos
            </Typography>
            <button className="border-r border-black/30 pe-4">
              <BsFillShareFill className="text-[#4c4c0d] hover:text-[#4c4c0dbd] duration-200" />
            </button>
            <button className="ps-2">
              <BsInfo className="w-6 h-6 text-[#4c4c0d] hover:text-[#4c4c0dbd] duration-200" />
            </button>
          </div>
          <div className="flex items-center justify-center w-full h-full bg-blue-900">
            <iframe className="w-full aspect-video " src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
          <div className="w-full my-4 flex gap-3 items-center">
            <i className="text-md">
              <BsSearch />
            </i>
            <input
              type="text"
              placeholder="Search video..."
              className="w-full text-sm font-extralight outline-none border-none placeholder:text-[#4c4c0d] placeholder:font-extralight"
            />
          </div>
        </CardBody>
      </Card>
      {/* <div className="flex items-center justify-center w-full h-full my-20 bg-white">
      <div className="relative flex flex-col items-center w-full h-full max-w-screen-lg">
        <div className="flex w-full py-4">
          <Typography variant="h2" className="w-full text-xl font-extralight">
            All Videos
          </Typography>
          <button className="border-r border-black/30 pe-4">
            <BsFillShareFill className="text-[#4c4c0d]" />
          </button>
          <button className="ps-2">
            <BsInfo className="w-6 h-6 text-[#4c4c0d]" />
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full bg-blue-900">
          <iframe className="w-full aspect-video " src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        <div className="w-full">
          <input type="text" placeholder="Search video..." />
        </div>
      </div>
    </div> */}
    </>
  );
};

export default VideoSection;
