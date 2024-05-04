import React, { useState } from "react";
import Dummy1 from "../../../assets/workshop-image/dummy1.png";
import Sidebar from "../../../layouts/dashboard_section/Template";
import { Link } from "react-router-dom"

const Edit = () => {
  return (
    <Sidebar>
    <div className="fixed inset-0 container w-full ml-60 bg-white flex items-center">
      <div className="p-10 w-full">
        <div className="flex">
          <h1 className="text-3xl text-primary-2 pb-5 font-semibold flex-1">Edit Post</h1>
        </div>

        {/* judul event */}
        <p className="py-2">Judul</p>
        <input className="border-primary-1 rounded-md h-8 w-full border-1" type="text" placeholder="  tulis judul disini"></input>

        {/* deskripsi event */}
        <p className="py-2">Deskripsi</p>
        <input className="border-primary-1 rounded-md pt-1 pb-36 w-full border-1" type="text" placeholder="  tulis deskripsi disini"></input>

        {/* tanggal event dan photo bersebelahan */}
        <div className="container flex">
          <div className="flex-1">
            <p className="py-2 ">Tanggal Event</p>
            <p className="text-sm">From</p>
            <input className="border-primary-1 rounded-md border-1 p-2 px-8" type="date"></input>
            <p className="text-sm pt-2">To</p>
            <input className="border-primary-1 rounded-md border-1 p-2 px-8" type="date"></input>
          </div>
          <div className="flex-1 flex flex-col py-2">
            <p className="my-5">Add Photo</p>
            <Link to="/Add2">
              <img src={Dummy1} className="container w-217 min-h-140 overflow-hidden rounded-md hover:opacity-40" alt="Dummy"></img>
            </Link>
          </div>
        </div>

        {/* link event */}
        <p className="py-2">Link Event</p>
        <input className="border-primary-1 rounded-md w-full border-1 h-8" type="url" placeholder="   tulis link event disini"></input>

        {/* button untuk finalisasi post */}
        <div className="flex gap-2">
          <button className="mt-4 h-8 text-primary-2 bg-white w-full rounded-md text-xs border-primary-2 border-1">Batal</button>
          <button className="mt-4 h-8 bg-primary-2 text-white w-full rounded-md text-xs">Simpan</button>
        </div>
      </div>
    </div>
  </Sidebar>
  );
};

export default Edit;
