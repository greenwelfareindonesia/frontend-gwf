import { useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";

const EditDonaturTransaction = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  return (
    <DashboardSection titleField="Edit Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <div className="mb-4 text-xl font-bold text-primary-1">Judul</div>
      <input className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis judul disini" />
      <div className="mb-4 text-xl font-bold text-primary-2">Judul Event</div>
      <input className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm" placeholder="Event 1" />
      <div className="mb-4 text-xl font-bold text-primary-1">Deskripsi</div>
      <input className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis deskripsi disini" />

      <div className="flex flex-col flex-1 py-2">
        <p className="my-2 text-xl font-bold text-primary-2">Photo</p>
        <img src={image1} style={{ width: "200px", height: "100px" }}></img>
      </div>

      {/* Container for the buttons */}
      <div className="flex justify-center mt-20">
        <button className="px-48 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2">Batal</button>
        <button className="px-48 py-2 font-semibold text-white rounded bg-primary-2">Simpan</button>
      </div>
    </DashboardSection>
  );
};

export default EditDonaturTransaction;
