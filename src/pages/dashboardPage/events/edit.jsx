import closeIcon from "../../../assets/icons/close_icon.svg";
import Sidebar from "../../../layouts/dashboard_section/Template";
import { useForm } from "react-hook-form";
import { useEditEvent, useGetEventById } from "../../../features/events/service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Edit = () => {
  const { slug } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const { data } = useGetEventById(slug);

  const { mutate: editEvent } = useEditEvent();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [previewImage, setPreviewImage] = useState(data?.FileName || "");

  useEffect(() => {
    if (data) {
      setValue("title", data?.Title);
      setValue("eventMessage", data?.EventMessage);
      setPreviewImage(data?.FileName || "");
    }
  }, [data, setValue]);

  const onSubmit = (data) => {
    const { title, eventMessage, file } = data;

    editEvent({ slug, title, eventMessage, file: file[0]});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file[0])); // Show file preview
      setValue("file", file[0]); // Update form value
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
              <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Edit Post</h1>
            </div>

            {/* Title */}
            <p className="py-2">Title</p>
            <input
              {...register("title", { required: true })}
              className="w-full h-8 rounded-md border-primary-1 border-1"
              type="text"
              placeholder="Write title here"
            />

            {/* Event Description */}
            <p className="py-2">Description</p>
            <textarea
              {...register("eventMessage", { required: true })}
              className="w-full pt-1 rounded-md border-primary-1 pb-36 border-1"
              placeholder="Write description here"
            />

            {/* Photo Upload */}
            <div className="container flex flex-col py-2">
              <p className="my-5">Add Photo</p>
              <input
                type="file"
                className="mb-4"
                onChange={handleFileChange}
                {...register("file")}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  className="container overflow-hidden rounded-md w-217 min-h-140 hover:opacity-40"
                  alt="Event"
                />
              )}
            </div>

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
