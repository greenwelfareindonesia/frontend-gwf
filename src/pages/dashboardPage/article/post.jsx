// import { Link } from "react-router-dom";
import { useAddArticle } from "../../../features/article/service";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import closeIcon from "../../../assets/icons/close_icon.svg";
import DashboardSection from "../../../layouts/dashboard_section/Template";

const post = () => {
  const {handleSubmit, register} = useForm();
  const {mutate: addArticles} = useAddArticle();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1)
  }

  const onSubmit = (data) => {
    const{fullName, email, topic, articleMessage} = data;
    addArticles({fullName, email, topic, articleMessage})
  }
  return (
        <DashboardSection titleField="Add Post">
        <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
          <img src={closeIcon} alt="Close" />
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* nama  */}
          <div className="mb-4 text-xl font-bold text-primary-2">Nama</div>
          <input
            {...register("fullName")}
            className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
            placeholder="Tulis nama disini"
            type="text"
          />
          {/* email  */}
          <div className="mb-4 text-xl font-bold text-primary-2">Email</div>
          <input
            {...register("email")}
            className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
            placeholder="Tulis email disini"
            type="text"
          />

            {/* Foto 
            <div className="container flex">
              <div className="flex flex-col flex-1 py-2">
                <p className="my-5">Add Photo</p>
                <label
                  htmlFor="photo-upload"
                  className="flex flex-col items-center justify-center p-4 my-2 rounded-md cursor-pointer w-60 border-1 border-primary-2 h-36"
                >
                  <div className="text-center">
                    {" "}
                    <img src={camera_icon} className="duration-75 hover:scale-150"></img>
                  </div>
                  <input id="photo-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>  */}

          {/* topik  */}
          <div className="mb-4 text-xl font-bold text-primary-2">Topik</div>
          <input
            {...register("topic")}
            className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
            placeholder="Tulis topik disini"
            type="text"
          />

          {/* pesan artikel  */}
          <div className="mb-4 text-xl font-bold text-primary-2">Pesan Artikel</div>
          <input
            {...register("articleMessage")}
            className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
            placeholder="Tulis pesan artikel disini"
            type="text"
          />
            {/* button untuk finalisasi post */}
            <div>
              <button className="w-full h-8 mt-4 text-xs text-white rounded-md bg-primary-2">Post Event</button>
            </div>
          </form>
        </DashboardSection>
  );
};

export default post;
