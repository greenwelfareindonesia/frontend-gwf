import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import { useAddEcopedia } from "../../../features/ecopedia/service";

import cameraIcon from "../../../assets/icons/camera_icon.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

const Post = () => {
  const { handleSubmit, register } = useForm();

  const { mutate: addEcopedia } = useAddEcopedia();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { description, reference, file1, file2, srcFile, subTitle, title } = data;

    addEcopedia({ title, description, file1, file2, reference, srcFile, subTitle });
  };

  return (
    <DashboardSection titleField="Add Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4 text-xl font-bold text-primary-2">Title</div>
        <input
          {...register("title")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis judul disini"
          type="text"
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Subtitle</div>
        <input
          {...register("subTitle")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis deskripsi disini"
          type="text"
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Description</div>
        <input
          {...register("description")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis deskripsi disini"
          type="text"
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Source File</div>
        <input
          {...register("srcFile")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis asal gambar/file disini"
          type="text"
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Reference</div>
        <input
          {...register("reference")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis asal referensi disini"
          type="text"
        />

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

        <div className="flex flex-col flex-1 py-2">
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
        </div>

        {/* Container for the button */}
        <div className="flex justify-center mt-16">
          <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
            Post Ecopedia
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default Post;
