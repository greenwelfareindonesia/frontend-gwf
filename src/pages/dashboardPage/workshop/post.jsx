import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {camera_icon} from "../../../assets/icons";
import Sidebar from "../../../layouts/dashboard_section/Template";

const Post = () => {
  return(
    <Sidebar>
      <div className="fixed inset-0 container w-auto ml-60 bg-white flex items-center">
        <div className="p-10 w-full">
          <div className="flex">
            <h1 className="text-3xl text-primary-2 pb-5 font-semibold flex-1">Add Post</h1>
          </div>

          {/* judul event  */}
          <p className="py-2">Judul</p>
          <input className="border-primary-1 rounded-md h-8 w-full border-1" type="text" placeholder="  tulis judul disini"></input>

          {/* deskripsi event  */}
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
              <p clasName="my-5">Add Photo</p>
              <label htmlFor="photo-upload" className="flex flex-col items-center justify-center w-60 border-1 border-primary-2 p-4 my-2 h-36 rounded-md cursor-pointer">
                <div className="text-center"> <img src={camera_icon} className="hover:scale-150 duration-75"></img></div>
                <input id="photo-upload" type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* link event  */}
          <p className="py-2">Link Event</p>
          <input className="border-primary-1 rounded-md w-full border-1 h-8" type="url" placeholder="   tulis link event disini">
          </input>

          {/* button untuk finalisasi post */}
          <div>
            <button className="mt-4 h-8 bg-primary-2 text-white w-full rounded-md text-xs">Post Event</button>
          </div>
        </div>
      </div>
    </Sidebar>
    );
  };

export default Post;