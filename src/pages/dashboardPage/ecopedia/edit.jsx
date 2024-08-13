import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  Autoformat,
  Bold,
  Italic,
  Underline,
  BlockQuote,
  Base64UploadAdapter,
  CKFinder,
  CKFinderUploadAdapter,
  CloudServices,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
  Alignment,
} from "ckeditor5";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import { useEditEcopedia, useGetEcopediaById } from "../../../features/ecopedia/service";

import { camera_icon } from "../../../assets/icons";
import closeIcon from "../../../assets/icons/close_icon.svg";

const EditEcopedia = () => {
  const [description, setDescription] = useState("");

  const { slug } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const { data } = useGetEcopediaById(slug);

  const { mutate: editEcopedia } = useEditEcopedia();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [imagePreviews, setImagePreviews] = useState(data?.fileNames);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(urls);
    setValue("files", files);
  };

  const onSubmit = (body) => {
    const { files, Reference, SrcFile, SubTitle, Title } = body;
    const mapFile = files.map((image, index) => {
      return { [`file${index + 1}`]: image };
    });

    const mergedFiles = mapFile.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

    editEcopedia({
      slug,
      Description: description || data?.description,
      Reference: Reference || data?.reference,
      SrcFile: SrcFile || data?.srcFile,
      SubTitle: SubTitle || data?.subTitle,
      Title: Title || data?.title,
      ...mergedFiles,
    });
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
        <div className="mb-4 text-xl font-bold text-primary-2">Title</div>
        <input
          {...register("Title")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis judul disini"
          type="text"
          defaultValue={data?.title}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Subtitle</div>
        <input
          {...register("SubTitle")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis deskripsi disini"
          type="text"
          defaultValue={data?.subTitle}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Description</div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [
              Alignment,
              Autoformat,
              BlockQuote,
              Bold,
              CKFinder,
              CKFinderUploadAdapter,
              CloudServices,
              Essentials,
              Heading,
              Image,
              ImageCaption,
              ImageResize,
              ImageStyle,
              ImageToolbar,
              ImageUpload,
              Base64UploadAdapter,
              Indent,
              IndentBlock,
              Italic,
              Link,
              List,
              MediaEmbed,
              Mention,
              Paragraph,
              PasteFromOffice,
              PictureEditing,
              Table,
              TableColumnResize,
              TableToolbar,
              TextTransformation,
              Underline,
            ],
            toolbar: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "alignment",
              "bold",
              "italic",
              "underline",
              "|",
              "link",
              "uploadImage",
              "ckbox",
              "insertTable",
              "blockQuote",
              "mediaEmbed",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "outdent",
              "indent",
            ],
          }}
          onChange={(_, editor) => {
            setDescription(editor.getData());
          }}
          data={data?.description}
        />
        <div className="my-4 text-xl font-bold text-primary-2">Source File</div>
        <input
          {...register("SrcFile")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis asal gambar/file disini"
          type="text"
          defaultValue={data?.srcFile}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Reference</div>
        <input
          {...register("Reference")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis asal referensi disini"
          type="text"
          defaultValue={data?.reference}
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
          <h5 className="text-2xl font-semibold text-primary-2">Preview Photo Ecopedia</h5>
          <div className="flex flex-wrap gap-4">
            {imagePreviews?.map((url, index) => (
              <div key={index}>
                <img alt="preview image" src={url} className="object-cover w-80" />
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

export default EditEcopedia;
