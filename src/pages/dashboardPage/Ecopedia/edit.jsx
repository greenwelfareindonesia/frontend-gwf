import { useNavigate, useParams } from "react-router-dom";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import image1 from "../../../assets/dashboard-image/Rectangle7.svg";
import { camera_icon } from "../../../assets/icons";
import { useForm } from "react-hook-form";
import { useEditEcopedia, useGetEcopediaById } from "../../../features/ecopedia/service";

const EditEcopedia = () => {
  const { slug } = useParams();

  const { register, handleSubmit } = useForm();

  const { data } = useGetEcopediaById(slug);

  const { mutate: editEcopedia } = useEditEcopedia();

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1); // Use navigate with -1 to go back to the previous page
  };

  const onSubmit = (data) => {
    const { Description, Reference, file1, SrcFile, SubTitle, Title } = data;

    editEcopedia({ slug, Description, Reference, file1, SrcFile, SubTitle, Title });
  };

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
        <input
          {...register("Description")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis deskripsi disini"
          type="text"
          defaultValue={data?.description}
        />
        <div className="mb-4 text-xl font-bold text-primary-2">Source File</div>
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

        <div className="flex flex-col flex-1 py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Photo</p>
          <img src={image1} style={{ width: "200px", height: "100px" }}></img>
        </div>

        <div className="flex flex-col flex-1 py-2">
          <p className="my-2 text-xl font-bold text-primary-2">Add First Photo</p>
          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
          >
            <div className="text-center">
              <img src={camera_icon} className="duration-75 hover:scale-150"></img>
            </div>
            <input id="photo-upload" type="file" className="hidden" {...register("file1")} />
          </label>
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
