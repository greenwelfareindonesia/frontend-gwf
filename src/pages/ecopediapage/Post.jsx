import { VscComment, VscEye } from "react-icons/vsc";

import BackgroundImage from "../../assets/veganguide-image/foodstoeat/yogurts.webp";
import WhiteDot from "../../assets/ecopedia-image/whitedot.svg";
import like from "../../assets/ecopedia-image/like.svg";
import Background from "../../components/background";

import Filter from "../../components/filter";

export default function Post() {
  return (
    <Background src={BackgroundImage} className="w-full max-w-300">
      <Filter intent="secondary" />
      <div className="space-y-24 m-7 z-5">
        <div className="flex items-center text-light-1">
          <div className="text-xs">
            <h1 className="cursor-pointer hover:text-primary-3">Nifa Rahma</h1>
            <p>Aug 8 2023 - 5 min</p>
          </div>
          <button className="ml-auto">
            <img src={WhiteDot} alt="whitedot" />
          </button>
        </div>
        <div className="space-y-2 text-light-1">
          <h1 className="pb-2 text-2xl border-b cursor-pointer hover:text-primary-3">Types of Plant-Based Diets</h1>
          <div className="flex justify-between text-xs">
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
          </div>
        </div>
      </div>
    </Background>
  );
}
