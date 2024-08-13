// import { VscComment, VscEye } from "react-icons/vsc";
// import like from "../../assets/ecopedia-image/like.svg";

import { Link } from "react-router-dom";

import Background from "../../components/background";
import Filter from "../../components/filter";

import WhiteDot from "../../assets/ecopedia-image/whitedot.svg";
import convertDateValue from "../../utils/ConvertDate";

const Post = ({ reference, title, fileNames, createdAt }) => {
  return (
    <Background src={fileNames[0]} className="w-full overflow-hidden rounded max-w-300">
      <Filter intent="secondary" />
      <div className="flex flex-col justify-between w-full h-64 m-7 z-5">
        <div className="flex items-center justify-between w-full text-light-1">
          <div className="text-xs">
            <h1 className="cursor-pointer hover:text-primary-3">{reference}</h1>
            <p>{convertDateValue(createdAt)}</p>
          </div>
          <button className="hover:bg-black">
            <img src={WhiteDot} alt="whitedot" />
          </button>
        </div>
        <div className="space-y-2 text-light-1">
          <Link to="/ecopedia">
            <h1 className="pb-2 text-3xl duration-300 border-b cursor-pointer hover:text-primary-3 line-clamp-2">{title}</h1>
          </Link>
          {/* <div className="flex justify-between text-xs">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1">
                <VscEye size={20} />
                <p>13</p>
              </button>
              <button className="flex items-center gap-1 hover:text-primary-1">
                <VscComment size={20} />
                <p>2</p>
              </button>
            </div>
            <button className="flex items-center gap-1">
              <p>1</p>
              <img src={like} alt="" />
            </button>
          </div> */}
        </div>
      </div>
    </Background>
  );
};

export default Post;
