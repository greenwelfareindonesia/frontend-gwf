import { useEffect, useState } from "react";

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

  const { register, handleSubmit, setValue } = useForm();

  const { data } = useGetGalleryById(slug);

  const [imagePreviews, setImagePreviews] = useState(data?.fileNames);

  const { mutate: editGallery } = useEditGallery();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(urls);
    setValue("files", files);
  };

  const onSubmit = (data) => {
    const { files, alt } = data;
    const mapFile = files.map((image, index) => {
      return { [`file${index + 1}`]: image };
    });

    const mergedFiles = mapFile.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

    editGallery({ alt, ...mergedFiles });
  };

  useEffect(() => {
    setImagePreviews(data?.fileNames);
  }, [data]);

  return (
    <DashboardSection titleField="Edit Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4 text-xl font-bold text-primary-2">Alt</div>
        <input
          {...register("alt", { required: true })}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis judul disini"
          type="text"
          defaultValue={data?.alt}
        />

        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-primary-2">Add Photo</p>
          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center p-4 mb-4 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
          >
            <div className="text-center">
              <img src={camera_icon} className="duration-75 hover:scale-150" />
            </div>
            <input id="photo-upload" type="file" className="hidden" {...register("files")} multiple accept="image/*" onChange={handleFileChange} />
          </label>
          <h5 className="text-2xl font-semibold text-primary-2">Preview Photo Gallery</h5>
          <div className="flex flex-wrap gap-4">
            {imagePreviews?.map((url, index) => (
              <div key={index}>
                <img alt="preview image" src={url} className="object-cover w-80" />
              </div>
            ))}
          </div>
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
