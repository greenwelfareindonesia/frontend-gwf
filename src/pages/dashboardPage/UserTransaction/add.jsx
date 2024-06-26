import { useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_user/Template";
import cameraIcon from "../../../assets/icons/camera_icon.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

const UserTransaction = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  return (
    <DashboardSection titleField="Add Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <div className="mb-4 text-xl font-bold text-primary-2">Judul</div>
      <input className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-nonesm:text-sm" placeholder="Tulis judul disini" />
      <div className="mb-4 text-xl font-bold text-primary-2">Judul Event</div>
      <input className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm" placeholder="Event 1" />
      <div className="mb-4 text-xl font-bold text-primary-2">Deskripsi</div>
      <input
        className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
        placeholder="Tulis deskripsi disini"
      />
      <div className="flex flex-col flex-1 py-2">
        <p className="my-2 text-xl font-bold text-primary-2">Add Photo</p>
        <label
          htmlFor="photo-upload"
          className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
        >
          <div className="text-center">
            {" "}
            <img src={cameraIcon} className="duration-75 hover:scale-150"></img>
          </div>
          <input id="photo-upload" type="file" className="hidden" />
        </label>
      </div>

      {/* Container for the button */}
      <div className="flex justify-center mt-10">
        <button className="py-2 font-semibold text-white rounded bg-primary-2 px-96">Post Event</button>
      </div>
    </DashboardSection>
  );
};

export default UserTransaction;
