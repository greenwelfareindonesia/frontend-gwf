import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAddArticle } from "../../../features/article/service";

import DashboardSection from "../../../layouts/dashboard_section/Template";

import closeIcon from "../../../assets/icons/close_icon.svg";

const Post = () => {
  const { handleSubmit, register } = useForm();

  const { mutate: addArticles } = useAddArticle();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { fullName, email, topic, articleMessage } = data;
    addArticles({ fullName, email, topic, articleMessage });
  };
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
        <div className="flex justify-center mt-16">
          <button type="submit" className="py-2 font-semibold text-white rounded bg-primary-2 px-96">
            Post Article
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default Post;
