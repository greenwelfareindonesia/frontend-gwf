import Background from "../../assets/ecopedia-image/Link.png";
import WhiteDot from "../../assets/ecopedia-image/whitedot.svg";
import view from "../../assets/ecopedia-image/view.svg";
import comment from "../../assets/ecopedia-image/comment.svg";
import like from "../../assets/ecopedia-image/like.svg";

export default function Post() {
  return (
    <div style={{ backgroundImage: `url(${Background})` }} className="h-[18rem] w-[18rem] bg-opacity-80 ">
      <div className="m-7">
        <div className="text-light-1 flex items-center">
          <div className="text-xs">
            <h2>Nifa Rahma</h2>
            <h2>Aug 8 2023 - 5 min</h2>
          </div>
          <div className="ml-auto">
            <img src={WhiteDot} alt="whitedot" />
          </div>
        </div>
        <div className="mt-28 text-light-1">
          <h1 className="text-2xl pb-2 border-b-2 border-white">Types of Plant-Based Diets</h1>
          <div className="flex mt-2 gap-2 text-xs">
            <img src={view} alt="" />
            <p>13</p>
            <img src={comment} alt="" />
            <p>2</p>
            <p className="ml-auto">1</p>
            <img src={like} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
