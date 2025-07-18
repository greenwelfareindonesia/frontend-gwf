import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import { useAddEcopedia } from "../../../features/ecopedia/service";

import cameraIcon from "../../../assets/icons/camera_icon.svg";
import closeIcon from "../../../assets/icons/close_icon.svg";

const Post = () => {
  const [description, setDescription] = useState("");

  const { handleSubmit, register, setValue } = useForm();

  const { mutate: addEcopedia } = useAddEcopedia();

  const [imagePreviews, setImagePreviews] = useState([]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(urls);
    setValue("files", files);
  };

  const onSubmit = (data) => {
    const { files, title, reference, srcFile, subTitle } = data;
    const mapFile = files.map((image, index) => {
      return { [`file${index + 1}`]: image };
    });

    const mergedFiles = mapFile.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

    addEcopedia({ title, description, reference, srcFile, subTitle, ...mergedFiles });
  };

  return (
    <DashboardSection titleField="Add Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4 text-xl font-bold text-primary-2">Title</div>
        <input {...register("title")} className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis judul disini" type="text" />

        <div className="mb-4 text-xl font-bold text-primary-2">Subtitle</div>
        <input {...register("subTitle")} className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis deskripsi disini" type="text" />

        <div className="mb-4 text-xl font-bold text-primary-2">Description</div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            link: {
              decorators: {
                openInNewTab: {
                  mode: "automatic",
                  callback: (url) => url?.startsWith("http") || url?.startsWith("https"),
                  attributes: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
              },
            },
          }}
          onChange={(_, editor) => {
            let data = editor.getData();
            data = data.replace(/href="(?!https?:\/\/)([^"]*)"/g, (_key, p1) => {
              return `href="http://${p1}"`;
            });
            setDescription(data);
          }}
        />

        <div className="my-4 text-xl font-bold text-primary-2">Source File</div>
        <input {...register("srcFile")} className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis asal gambar/file disini" type="text" />

        <div className="mb-4 text-xl font-bold text-primary-2">Reference</div>
        <input {...register("reference")} className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis asal referensi disini" type="text" />

        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-primary-2">Add Photo</p>
          <label htmlFor="photo-upload" className="flex flex-col items-center justify-center p-4 mb-4 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36">
            <div className="text-center">
              <img src={cameraIcon} className="duration-75 hover:scale-150" />
            </div>
            <input id="photo-upload" type="file" className="hidden" {...register("files")} multiple accept="image/*" onChange={handleFileChange} />
          </label>
          <h5 className="text-2xl font-semibold text-primary-2">Preview Photo Ecopedia</h5>
          <div className="flex flex-wrap gap-4">
            {imagePreviews.map((url, index) => (
              <div key={index}>
                <img alt="preview image" src={url} className="object-cover w-80" />
              </div>
            ))}
          </div>
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
