import { useNavigate } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import cameraIcon from "../../../assets/icons/camera_icon.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";
import { useForm } from "react-hook-form";
import { useAddGallery } from "../../../features/gallery/service";

const AddGallery = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  const { handleSubmit, register } = useForm();

  const { mutate: addGallery } = useAddGallery();

  const onSubmit = (data) => {
    const { file1, alt } = data;
    addGallery({ file1: file1[0], alt  });
  };

  return (
    <DashboardSection titleField="Add Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className="mb-4 text-xl font-bold text-primary-2">alt</div>
      <input 
      {...register("alt")} 
      className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-nonesm:text-sm" 
      placeholder="Tulis judul disini" 
      type="text"/>
      {/* <div className="mb-4 text-xl font-bold text-primary-2">Judul Event</div>
      <input className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm" placeholder="Event 1" />
      <div className="mb-4 text-xl font-bold text-primary-2">Deskripsi</div>
      <input
        className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 focus:outline-none sm:text-sm"
        placeholder="Tulis deskripsi disini"
      /> */}
      <div className="flex flex-col flex-1 py-2">
        <p className="my-2 text-xl font-bold text-primary-2">Add First Photo</p>
        <label
          htmlFor="photo-upload"
          className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
        >
          <div className="text-center">
            <img src={cameraIcon} className="duration-75 hover:scale-150"></img>
          </div>
          <input id="photo-upload" type="file" className="hidden" {...register("file1")} />
        </label>
      </div>
      
      {/*<div className="flex flex-col flex-1 py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Add Second Photo</p>
          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
          >
            <div className="text-center">
              <img src={cameraIcon} className="duration-75 hover:scale-150"></img>
            </div>
            <input id="photo-upload" type="file" className="hidden" {...register("file2")} />
          </label>
        </div> */}
        
      {/* Container for the button */}
      <div className="flex justify-center mt-10">
          <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
            Post Event
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default AddGallery;
