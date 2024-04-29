import React from "react";
import { Link } from "react-router-dom";
import uploadIcon from "../../../assets/icons/cloud-icon/https_/lottiefiles.com/animations/upload-QShqflcTLk.png";
import Sidebar from "../../../layouts/dashboard_section/Template";

const Add = () => {
  return (
    <Sidebar>
    <div className="fixed inset-0 container w-auto ml-60 bg-white flex items-center">
      <div className="p-10 w-full ml-300">
        <img src={uploadIcon} alt="Upload Icon" className="mb-4 ml-40" />
        <p className="ml-20">Tarik lalu lepas file Foto yang ingin diupload</p>
        <button className="h-10 mt-4 ml-52 bg-primary-2 text-white rounded px-4" type="button">Pilih Foto</button>
      </div>
    </div>
    </Sidebar>
  );
};

export default Add;
