import closeIcon from "../../../assets/icons/close_icon.svg";
import Sidebar from "../../../layouts/dashboard_section/Template";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEditWorkshop, useGetWorkshopById } from "../../../features/workshop/service";
import { useEffect, useState } from "react";

const Edit = () => {
  const { slug } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const { data } = useGetWorkshopById(slug);

  const { mutate: editWorkshop } = useEditWorkshop();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [previewImage, setPreviewImage] = useState(data?.FileName || "");

  useEffect(() => {
    if (data) {
      setValue("Title", data?.Title);
      setValue("Description", data?.Description);
      setValue("Date", data?.Date);
      setValue("Url", data?.Url);
      setValue("IsOpen", data?.IsOpen);
      setPreviewImage(data?.FileName || "");
    }
  }, [data, setValue]);

  const onSubmit = (data) => {
    const { Title, Description, Date, Url, IsOpen, File } = data;
    editWorkshop({ 
      slug, 
      Title, 
      Description, 
      Date, 
      Url, 
      IsOpen, 
      File: File[0] 
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // Show file preview
      setValue("File", file); // Update form value
    }
  };

  return (
    <Sidebar>
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="container inset-0 flex items-center w-full bg-white">
          <div className="w-full p-10">
            <div className="flex">
              <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Edit Workshop</h1>
            </div>

            {/* Title */}
            <p className="py-2">Title</p>
            <input
              {...register("Title", { required: true })}
              className="w-full h-8 rounded-md border-primary-1 border-1"
              type="text"
              placeholder="Enter title here"
            />

            {/* Description */}
            <p className="py-2">Description</p>
            <textarea
              {...register("Description", { required: true })}
              className="w-full pt-1 rounded-md border-primary-1 pb-36 border-1"
              placeholder="Enter description here"
            />

            {/* Date and Photo */}
            <div className="container flex">
              <div className="flex-1">
                <p className="py-2">Event Date</p>
                <input
                  {...register("Date")}
                  className="p-2 px-8 rounded-md border-primary-1 border-1"
                  type="date"
                />
              </div>
              <div className="flex flex-col flex-1 py-2">
                <p className="my-5">Add Photo</p>
                <input
                  type="file"
                  className="mb-4"
                  onChange={handleFileChange}
                  {...register("File")}
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    className="container overflow-hidden rounded-md w-217 min-h-140 hover:opacity-40"
                    alt="Workshop"
                  />
                )}
              </div>
            </div>

            {/* URL */}
            <p className="py-2">Event Link</p>
            <input
              {...register("Url")}
              className="w-full h-8 rounded-md border-primary-1 border-1"
              type="url"
              placeholder="Enter event link here"
            />

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-full h-8 mt-4 text-xs bg-white rounded-md text-primary-2 border-primary-2 border-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full h-8 mt-4 text-xs text-white rounded-md bg-primary-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};

export default Edit;
