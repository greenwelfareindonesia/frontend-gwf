import React from "react";
import uploadIcon from "../../../assets/icons/delete-icon-2/lottiefiles.com/animations/question-ESUC7y16es.png";
import Sidebar from "../../../layouts/dashboard_section/Template";
const Delete = () => {
  return (
    <Sidebar>
     <div className="fixed inset-0 container w-auto ml-60 bg-white flex items-center">
      <div className="p-10 w-full">
        <h1 className="text-3xl text-primary-2 pb-5 font-semibold flex-1 ml-270">Apakah Kamu Yakin akan Menghapus Postingan?</h1>
        <img src={uploadIcon} alt="Upload Icon" className="mb-4 ml-460" />
         {/* button untuk finalisasi post */}
         <div className="flex gap-2 ml-80">
          <button className="mt-4 h-8 bg-primary-2 text-white w-60 rounded-md text-xs">Batal</button>
          <button className="mt-4 h-8 text-primary-2 bg-white w-60 rounded-md text-xs border-primary-2 border-1">Hapus</button>
        </div>
      </div>
    </div>
    </Sidebar>
  );
};

export default Delete;
