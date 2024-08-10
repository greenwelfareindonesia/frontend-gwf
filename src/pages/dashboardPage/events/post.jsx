import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAddEvent } from "../../../features/events/service";

import { camera_icon } from "../../../assets/icons";

import closeIcon from "../../../assets/icons/close_icon.svg";

import Sidebar from "../../../layouts/dashboard_section/Template";

const PostEvents = () => {
  const { handleSubmit, register } = useForm();

  const { mutate: addEvents } = useAddEvent();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { title, eventMessage, file } = data;
    addEvents({ file: file[0], title, eventMessage });
  };

  return (
    <Sidebar>
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="container inset-0 flex items-center w-auto bg-white">
          <div className="w-full p-10">
            <div className="flex">
              <h1 className="flex-1 pb-5 text-3xl font-semibold text-primary-2">Add Post</h1>
            </div>

            {/* judul event  */}
            <p className="py-2">Judul</p>
            <input
              {...register("title")}
              className="w-full h-8 px-3 py-2 border rounded-md border-primary-1"
              type="text"
              placeholder="tulis judul disini"
            />

            {/* deskripsi event  */}
            <p className="py-2">Deskripsi</p>
            <textarea
              {...register("eventMessage")}
              className="w-full px-3 py-2 border rounded-md border-primary-1"
              type="text"
              rows={5}
              placeholder="tulis deskripsi disini"
            />

            <div className="flex flex-col gap-2 mt-4">
              <p>Add Photo</p>
              <label
                htmlFor="photo-upload"
                className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
              >
                <div className="text-center">
                  <img src={camera_icon} className="duration-75 hover:scale-150"></img>
                </div>
                <input {...register("file")} id="photo-upload" type="file" className="hidden" />
              </label>
            </div>

            <div className="flex justify-center mt-16">
              <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
                Post Event
              </button>
            </div>
          </div>
        </div>
      </form>
    </Sidebar>
  );
};

export default PostEvents;
