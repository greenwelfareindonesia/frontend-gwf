import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import Sidebar from "../../../layouts/dashboard_section/Template";

import { useAddWorkshop } from "../../../features/workshop/service";

import { camera_icon } from "../../../assets/icons";
import closeIcon from "../../../assets/icons/close_icon.svg";

const PostWorkshop = () => {
  const { handleSubmit, register, setValue } = useForm();

  const { mutate: addWorkshop } = useAddWorkshop();

  const [imagePreviews, setImagePreviews] = useState([]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(urls);
    setValue("File", files[0]);
  };

  const onSubmit = (data) => {
    const { File, Title, Description, Date, Url, IsOpen } = data;

    addWorkshop({ File, Title, Description, Date, Url, IsOpen: IsOpen === "true" ? true : false });
  };

  return (
    <Sidebar>
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex flex-col w-full bg-white">
          <div className="flex">
            <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Add Post</h1>
          </div>

          {/* judul event  */}
          <p className="py-2">Judul</p>
          <input
            {...register("Title")}
            className="w-full px-3 py-2 border rounded-md border-primary-1"
            type="text"
            placeholder="tulis judul disini"
          />

          {/* deskripsi event  */}
          <p className="py-2">Deskripsi</p>
          <input
            {...register("Description")}
            className="w-full px-3 py-2 border rounded-md border-primary-1 pb-36"
            type="text"
            placeholder="tulis deskripsi disini"
          />

          {/* link event  */}
          <p className="py-2">Link Event</p>
          <input
            {...register("Url")}
            className="w-full px-3 py-2 border rounded-md border-primary-1"
            type="url"
            placeholder="tulis link event disini"
          />

          {/* tanggal event dan photo bersebelahan */}
          <div className="flex gap-16 mt-6">
            <div className="space-y-2">
              <p className="py-2">Event Date</p>
              <input {...register("Date")} className="px-3 py-2 border rounded-md border-primary-1" type="date" />
              <p className="mt-4 text-sm">Is Open</p>
              <select {...register("IsOpen")} className="px-3 py-2 border rounded-md border-primary-1">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="flex flex-1 gap-12 mt-2">
              <div className="space-y-4">
                <p className="text-xl font-semibold text-primary-2">Add Photo</p>
                <label
                  htmlFor="photo-upload"
                  className="flex flex-col items-center justify-center p-4 mb-4 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
                >
                  <div className="text-center">
                    <img src={camera_icon} className="duration-75 hover:scale-150" />
                  </div>
                  <input id="photo-upload" type="file" className="hidden" {...register("File")} accept="image/*" onChange={handleFileChange} />
                </label>
              </div>
              <div className="space-y-4">
                <h5 className="text-xl font-semibold text-primary-2">Preview Photo Workshop</h5>
                <div className="flex flex-wrap gap-4">
                  <img alt="preview image" src={imagePreviews} className="object-cover w-80" />
                </div>
              </div>
            </div>
          </div>

          {/* button untuk finalisasi post */}
          <div className="flex justify-center mt-10">
            <button type="submit" className="w-full py-2 font-semibold text-white rounded bg-primary-2">
              Post Workshop
            </button>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};

export default PostWorkshop;
