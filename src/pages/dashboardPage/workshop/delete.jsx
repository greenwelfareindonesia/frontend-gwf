import React from "react";
import uploadIcon from "../../../assets/icons/delete-icon-2/lottiefiles.com/animations/question-ESUC7y16es.png";
import Sidebar from "../../../layouts/dashboard_section/Template";

const Delete = () => {
  return (
    <Sidebar>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-10 w-00 rounded-lg">
          <h1 className="text-3xl text-primary-2 pb-5 font-semibold">Apakah Kamu Yakin akan Menghapus Postingan?</h1>
          <img src={uploadIcon} alt="Upload Icon" className="mb-4 mx-auto" />
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 bg-primary-2 text-white rounded-md text-xs" onClick={() => console.log("Batal")}>Batal</button>
            <button className="px-4 py-2 text-primary-2 bg-white border-primary-2 border rounded-md text-xs" onClick={() => console.log("Hapus")}>Hapus</button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Delete;
