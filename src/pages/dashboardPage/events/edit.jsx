import { useState } from "react";
import Dummy1 from "../../../assets/workshop-image/dummy1.png";
import Sidebar from "../../../layouts/dashboard_section/Template";
import AddModal from "./add";

const Edit = () => {
  const [showAddPopOut, setShowAddPopOut] = useState(false);
  return (
    <Sidebar>
      <div className="container inset-0 flex items-center w-full bg-white">
        <div className="w-full p-10">
          <div className="flex">
            <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Edit Post</h1>
          </div>

          {/* judul event */}
          <p className="py-2">Judul</p>
          <input className="w-full h-8 rounded-md border-primary-1 border-1" type="text" placeholder="  tulis judul disini"></input>

          {/* deskripsi event */}
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
              <button onClick={() => setShowAddPopOut(true)}>
                <img src={Dummy1} className="container overflow-hidden rounded-md w-217 min-h-140 hover:opacity-40" alt="Dummy"></img>
              </button>
            </div>
          </div>

          {/* link event */}
          <p className="py-2">Link Event</p>
          <input className="w-full h-8 rounded-md border-primary-1 border-1 p-2.5" type="url" placeholder="tulis link event disini"></input>

          {/* button untuk finalisasi post */}
          <div className="flex gap-2">
            <button className="w-full h-8 mt-4 text-xs bg-white rounded-md text-primary-2 border-primary-2 border-1">Batal</button>
            <button className="w-full h-8 mt-4 text-xs text-white rounded-md bg-primary-2">Simpan</button>
          </div>
        </div>
      </div>
      <AddModal visible={showAddPopOut} />
    </Sidebar>
  );
};

export default Edit;
