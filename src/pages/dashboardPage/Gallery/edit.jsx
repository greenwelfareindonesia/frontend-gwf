import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";

const GalleryPageEdit = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleBack = () => {
    navigate('/galleryDashboard/');  // Use navigate with -1 to go back to the previous page
  };

  return (
    <DashboardSection titleField="Edit Post">
    <button onClick = {handleBack} className="absolute top-0 right-0 mt-24 mr-9 bg-transparent border-none">
    <img src={closeIcon} alt="Close" />
    </button>
    <div className="text-xl font-bold  text-primary-1 mb-4">Judul</div>
    <input className="w-full px-3 py-2 border-primary-2 border rounded-md mb-4 sm:text-sm" placeholder="Tulis judul disini" />
    <div className="text-xl font-bold  text-primary-2 mb-4">Judul Event</div>
    <input className="w-full px-3 py-2 border-primary-2 border rounded-md mb-4 focus:outline-none sm:text-sm" placeholder="Event 1" />
    <div className="text-xl font-bold  text-primary-1 mb-4">Deskripsi</div>
    <input className="w-full px-3 py-2 border-primary-2 border rounded-md mb-4 sm:text-sm" placeholder="Tulis deskripsi disini" />
    
    <div className= "flex-1 flex flex-col py-2">
     <p className="my-2 text-xl font-bold text-primary-2">Photo</p>
    <img src={image1} style={{ width: "200px", height: "100px" }}></img>
    </div>

    {/* Container for the buttons */}
    <div className="flex justify-center mt-20">
    <button className="mr-4 bg-white text-primary-2 font-semibold py-2 px-48 rounded border border-primary-2">
        Batal
    </button>
    <button className="bg-primary-2 text-white font-semibold py-2 px-48 rounded">
        Simpan
    </button>
    </div>
    </DashboardSection>
  );
};

export default GalleryPageEdit;