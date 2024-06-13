import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import cameraIcon from "../../../assets/icons/camera_icon.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

const GalleryPageAdd = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1);  // Use navigate with -1 to go back to the previous page
  };

  return (
    <DashboardSection titleField="Add Post">
    <button onClick={handleBack} className="absolute top-0 right-0 mt-24 mr-9 bg-transparent border-none">
        <img src={closeIcon} alt="Close" />
      </button>
    <div className="text-xl font-bold  text-primary-2 mb-4">Judul</div>
    <input className="w-full px-3 py-2 border-primary-2 border rounded-md mb-4 focus:outline-nonesm:text-sm" placeholder="Tulis judul disini" />
    <div className="text-xl font-bold  text-primary-2 mb-4">Judul Event</div>
    <input className="w-full px-3 py-2 border-primary-2 border rounded-md mb-4 focus:outline-none sm:text-sm" placeholder="Event 1" />
    <div className="text-xl font-bold  text-primary-2 mb-4">Deskripsi</div>
    <input className="w-full px-3 py-2 border-primary-2 border rounded-md mb-4 focus:outline-none sm:text-sm" placeholder="Tulis deskripsi disini" />
    <div classNameName= "flex-1 flex flex-col py-2">
     <p className="my-2 text-xl font-bold text-primary-2">Add Photo</p>
     <label htmlFor="photo-upload" className="flex flex-col items-center justify-center w-60
     border-1 border-primary-2 p-4 my-2 h-36 rounded-md cursor-pointer">
      <div className="text-center"> <img src={cameraIcon} className= "hover:scale-150 duration-75"></img></div>
      <input id="photo-upload" type="file" className="hidden"/>
     </label>
    </div>
  
    {/* Container for the button */}
      <div className="flex justify-center mt-10">
      <button className="bg-primary-2 text-white font-semibold py-2 px-96 rounded">
        Post Event
      </button>
      </div>
    </DashboardSection>
  );
};

export default GalleryPageAdd;