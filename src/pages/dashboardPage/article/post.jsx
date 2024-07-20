// import { Link } from "react-router-dom";
import {camera_icon} from "../../../assets/icons";
import Sidebar from "../../../layouts/dashboard_section/Template";

const post = () => {
  return(
    <section className="bg-white">

    <Sidebar>
      <div className="fixed inset-0 container w-auto ml-60 bg-white flex items-center">
        <div className="p-10 w-full">
          <div className="flex">
            <h1 className="text-3xl text-primary-2 pb-5 font-semibold flex-1">Add Post</h1>
          </div>

          {/* nama  */}
          <p className="py-2">Nama</p>
          <input className="border-primary-1 rounded-md h-8 w-full border-1" type="text" placeholder="  tulis nama disini"></input>

          {/* demail  */}
          <p className="py-2">Email</p>
          <input className="border-primary-1 rounded-md h-8 w-full border-1" type="text" placeholder="  tulis email disini"></input>

          {/* Foto */}
          <div className="container flex">
            <div className="flex-1 flex flex-col py-2">
              <p className="my-5">Add Photo</p>
              <label htmlFor="photo-upload" className="flex flex-col items-center justify-center w-60 border-1 border-primary-2 p-4 my-2 h-36 rounded-md cursor-pointer">
                <div className="text-center"> <img src={camera_icon} className="hover:scale-150 duration-75"></img></div>
                <input id="photo-upload" type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* topik  */}
          <p className="py-2">Topik</p>
          <input className="border-primary-1 rounded-md h-8 w-full border-1" type="text" placeholder="  tulis topik disini"></input>

          {/* pesan artikel  */}
          <p className="py-2">Pesan Artikel</p>
          <input className="border-primary-1 rounded-md h-8 w-full border-1" type="text" placeholder="  tulis pesan artikel disini"></input>

          {/* button untuk finalisasi post */}
          <div>
            <button className="mt-4 h-8 bg-primary-2 text-white w-full rounded-md text-xs">Post Event</button>
          </div>
        </div>
      </div>
    </Sidebar>
    </section>
    );
  };

export default post;