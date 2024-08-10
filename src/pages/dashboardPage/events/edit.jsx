import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import Sidebar from "../../../layouts/dashboard_section/Template";

import { useEditEvent, useGetEventById } from "../../../features/events/service";

import closeIcon from "../../../assets/icons/close_icon.svg";
import { camera_icon } from "../../../assets/icons";

const Edit = () => {
  const { slug } = useParams();

  const { register, handleSubmit } = useForm();

  const { data } = useGetEventById(slug);

  const { mutate: editEvent } = useEditEvent();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { title, eventMessage, file } = data;

    editEvent({ slug, title, eventMessage, file: file[0] });
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
              defaultValue={data?.Title}
              {...register("title", { required: true })}
              className="w-full px-3 py-2 border rounded-md border-primary-1"
              type="text"
              placeholder="Write title here"
            />

            {/* Event Description */}
            <p className="py-2">Description</p>
            <textarea
              defaultValue={data?.EventMessage}
              {...register("eventMessage", { required: true })}
              rows={5}
              className="w-full px-3 py-2 border rounded-md border-primary-1"
              placeholder="Write description here"
            />

            {/* Photo Upload */}
            <div className="flex flex-col gap-2 mt-4">
              <p>Add Photo</p>
              <label
                htmlFor="photo-upload"
                className="flex flex-col items-center justify-center p-4 my-2 border rounded-md cursor-pointer w-60 border-primary-2 h-36"
              >
                <div className="text-center">
                  <img src={camera_icon} className="duration-75 hover:scale-150"></img>
                </div>
                <input {...register("file")} id="photo-upload" type="file" className="hidden" />
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <button type="button" onClick={handleBack} className="w-full py-1.5 mt-4 bg-white rounded-md text-primary-2 border-primary-2 border">
                Cancel
              </button>
              <button type="submit" className="w-full py-1.5 mt-4 text-white rounded-md bg-primary-2">
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
