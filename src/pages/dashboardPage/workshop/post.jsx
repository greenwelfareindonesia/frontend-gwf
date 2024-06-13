import { camera_icon } from "../../../assets/icons";
import Sidebar from "../../../layouts/dashboard_section/Template";

const Post = () => {
  return (
    <Sidebar>
      <div className="container inset-0 flex items-center w-full bg-white">
        <div className="w-full p-10">
          <div className="flex">
            <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Add Post</h1>
          </div>

          {/* judul event  */}
          <p className="py-2">Judul</p>
          <input className="w-full h-8 rounded-md border-primary-1 border-1" type="text" placeholder="  tulis judul disini"></input>

          {/* deskripsi event  */}
          <p className="py-2">Deskripsi</p>
          <input className="w-full pt-1 rounded-md border-primary-1 pb-36 border-1" type="text" placeholder="  tulis deskripsi disini"></input>

          {/* tanggal event dan photo bersebelahan */}
          <div className="container flex">
            <div className="flex-1">
              <p className="py-2 ">Tanggal Event</p>
              <p className="text-sm">From</p>
              <input className="p-2 px-8 rounded-md border-primary-1 border-1" type="date"></input>
              <p className="pt-2 text-sm">To</p>
              <input className="p-2 px-8 rounded-md border-primary-1 border-1" type="date"></input>
            </div>
            <div className="flex flex-col flex-1 py-2">
              <p className="my-5">Add Photo</p>
              <label
                htmlFor="photo-upload"
                className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
              >
                <div className="text-center">
                  <img src={camera_icon} className="duration-75 hover:scale-150"></img>
                </div>
                <input id="photo-upload" type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* link event  */}
          <p className="py-2">Link Event</p>
          <input className="w-full h-8 rounded-md border-primary-1 border-1 p-2.5" type="url" placeholder="tulis link event disini"></input>

          {/* button untuk finalisasi post */}
          <div>
            <button className="w-full h-8 mt-4 text-xs text-white rounded-md bg-primary-2">Post Event</button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Post;
