import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import { useEditStudy, useGetStudyById } from "../../../features/study/service";

import { camera_icon } from "../../../assets/icons";
import closeIcon from "../../../assets/icons/close_icon.svg";

const EditStudy = () => {
  const [description, setDescription] = useState("");
  const [imagePreviews, setImagePreviews] = useState(null);

  const { slug } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const { data } = useGetStudyById(slug);

  const { mutate: editStudy } = useEditStudy();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => ({ FileName: URL.createObjectURL(file) }));
    setImagePreviews(urls);
    setValue("files", files);
  };

  const onSubmit = (body) => {
    const { files, Title } = body;

    const mapFile = files.map((image, index) => {
      return { [`file${index + 1}`]: image };
    });

    const mergedFiles = mapFile.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

    editStudy({
      slug,
      description: description || data?.description,
      title: Title || data?.title,
      ...mergedFiles,
    });
  };

  useEffect(() => {
    if (data) {
      setImagePreviews(data?.Images);
    }
  }, [data]);

  return (
    <DashboardSection titleField="Edit Post">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-2 text-xl font-bold text-primary-2">Title</div>
        <input {...register("Title")} className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm" placeholder="Tulis judul disini" type="text" defaultValue={data?.Title} />

        <div className="mb-2 text-xl font-bold text-primary-2">Description</div>
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
          data={data?.Description}
        />

        <div className="flex flex-col gap-2 mt-4">
          <p className="text-xl font-bold text-primary-2">Add Photo</p>
          <label htmlFor="photo-upload" className="flex flex-col items-center justify-center p-4 mb-4 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36">
            <div className="text-center">
              <img src={camera_icon} className="duration-75 hover:scale-150" />
            </div>
            <input id="photo-upload" type="file" className="hidden" {...register("files")} multiple accept="image/*" onChange={handleFileChange} />
          </label>
          <h5 className="text-2xl font-semibold text-primary-2">Preview Photo Study</h5>
          <div className="flex flex-wrap gap-4">
            {imagePreviews?.map((image, index) => (
              <div key={index}>
                <img alt="preview image" src={image?.FileName} className="object-cover w-80" />
              </div>
            ))}
          </div>
        </div>

        {/* Container for the buttons */}
        <div className="flex justify-center mt-28">
          <button type="button" className="px-48 py-2 mr-4 font-semibold bg-white border rounded text-primary-2 border-primary-2">
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

export default EditStudy;
