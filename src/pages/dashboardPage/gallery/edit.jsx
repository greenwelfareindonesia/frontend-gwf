import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import { useEditGallery, useGetGalleryById } from "../../../features/gallery/service";

import closeIcon from "../../../assets/icons/close_icon.svg";
import { camera_icon } from "../../../assets/icons";

const EditGallery = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  const { slug } = useParams();

  const { register, handleSubmit } = useForm();

  const { data } = useGetGalleryById(slug);

  const { mutate: editGallery } = useEditGallery();

  const onSubmit = (formData) => {
    const { file1, alt } = formData;

    editGallery({ slug, file1: file1[0], alt });
  };

  return (
    <DashboardSection titleField="Edit Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4 text-xl font-bold text-primary-1">Alt</div>
        <input
          {...register("alt", { required: true })}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis judul disini"
          type="text"
          defaultValue={data?.alt}
        />

        <div className="flex flex-col py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Add First Photo</p>
          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center p-4 my-2 border rounded-md cursor-pointer w-60 border-primary-2 h-36"
          >
            <div className="text-center">
              <img src={camera_icon} className="duration-75 hover:scale-150"></img>
            </div>
            <input id="photo-upload" type="file" className="hidden" {...register("file1")} />
          </label>
        </div>

        {/* Container for the buttons */}
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={handleBack}
            className="px-48 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2"
          >
            Batal
          </button>
          <button type="submit" className="px-48 py-2 font-semibold text-white rounded bg-primary-2">
            Simpan
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default EditGallery;