import BackgroundImage from "../../assets/veganguide-image/foodstoeat/yogurts.webp";
import Views from "../../assets/ecopedia-image/views.png";
import Comments from "../../assets/ecopedia-image/comments.png";
import Like from "../../assets/ecopedia-image/like.png";

export default function Post2() {
  return (
    <>
    <div className="border-1 border-primary-1 text-primary-1 m-5">
      <img src={BackgroundImage}/>
      <div className="p-3">
        <p className="text-left my-3 text-xs mx-5">Analisis Perbandingan Manajemen dan Kuantitas Municipal Solid Waste di Indonesia dan Malaysia</p>
        <hr className="w-full border-gray-300 my-3" />
        <div className="relative">
          <div className="flex gap-2 mx-2">
            <img src={Views} className="w-4 h-4"/>
            <p className="text-xs">47</p>
            <img src={Comments} className="w-4 h-4"/>
            <p className="text-xs">0</p>
            <div className="absolute right-4 flex gap-1">
              <p className="text-xs">3</p>
              <img src={Like} className="w-4 h-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
