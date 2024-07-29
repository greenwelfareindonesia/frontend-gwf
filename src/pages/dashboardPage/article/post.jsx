// import { Link } from "react-router-dom";
import { camera_icon } from "../../../assets/icons";
import Sidebar from "../../../layouts/dashboard_section/Template";

const post = () => {
  return (
    <section className="bg-white">
      <Sidebar>
        <div className="container fixed inset-0 flex items-center w-auto bg-white ml-60">
          <div className="w-full p-10">
            <div className="flex">
              <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Add Post</h1>
            </div>

            {/* nama  */}
            <p className="py-2">Nama</p>
            <input className="w-full h-8 rounded-md border-primary-1 border-1" type="text" placeholder="  tulis nama disini"></input>

            {/* email  */}
            <p className="py-2">Email</p>
            <input className="w-full h-8 rounded-md border-primary-1 border-1" type="text" placeholder="  tulis email disini"></input>

            {/* Foto */}
            <div className="container flex">
              <div className="flex flex-col flex-1 py-2">
                <p className="my-5">Add Photo</p>
                <label
                  htmlFor="photo-upload"
                  className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
                >
                  <div className="text-center">
                    {" "}
                    <img src={camera_icon} className="duration-75 hover:scale-150"></img>
                  </div>
                  <input id="photo-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>

            {/* topik  */}
            <p className="py-2">Topik</p>
            <input className="w-full h-8 rounded-md border-primary-1 border-1" type="text" placeholder="  tulis topik disini"></input>

            {/* pesan artikel  */}
            <p className="py-2">Pesan Artikel</p>
            <input className="w-full h-8 rounded-md border-primary-1 border-1" type="text" placeholder="  tulis pesan artikel disini"></input>

            {/* button untuk finalisasi post */}
            <div>
              <button className="w-full h-8 mt-4 text-xs text-white rounded-md bg-primary-2">Post Event</button>
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
};

export default post;
