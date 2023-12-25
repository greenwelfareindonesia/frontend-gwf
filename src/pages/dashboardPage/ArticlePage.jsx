import * as React from "react";

import { useAddArticle, useDeleteArticle, useEditArticle, useGetArticleById, useGetArticles } from "../../features/article/service";

import Popup from "reactjs-popup";

import { HiPencil, HiTrash } from "react-icons/hi2";

import DashboardSection from "../../layouts/dashboard_section/Template";
import Button from "../../components/button";
import Input from "../../components/input";
import { useForm } from "react-hook-form";

const ArticlePage = () => {
  const [isEditOpen, setEditOpen] = React.useState(false);
  const [isAddOpen, setAddOpen] = React.useState(false);
  const [slugId, setSlugId] = React.useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { data: articleId, refetch } = useGetArticleById(slugId);

  const { data: articles } = useGetArticles();

  const { mutate: addMutate } = useAddArticle();

  const { mutate: deleteMutate } = useDeleteArticle();

  const { mutate: editMutate } = useEditArticle();

  const onSubmitAddArticle = (data) => {
    const { addSlug: Slug, addEmail: Email, addFullName: FullName, addTopic: Topic, addArticleMessage: ArticleMessage } = data;
    const body = { Slug, Email, FullName, Topic, ArticleMessage };
    addMutate(body);
  };

  const onSubmitEditArticle = (data) => {
    const { editSlug: Slug, editEmail: Email, editFullName: FullName, editTopic: Topic, editArticleMessage: ArticleMessage } = data;
    const body = { Slug, Email, FullName, Topic, ArticleMessage };
    editMutate({ slugId, body });
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  React.useEffect(() => {
    reset(articleId);
  }, [articleId, reset]);

  const openEditModal = (slug) => {
    setEditOpen(!isEditOpen);
    setSlugId(slug);
    refetch();
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const closeEditModal = () => {
    setSlugId(null);
  };

  const headItem = ["Full name", "Email", "Slug", "Topic", "Article Message", "Action"];

  return (
    <DashboardSection titleField="Article" buttonField="Post Article" handlePopUp={openAddModal}>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-primary-2">
          <tr className="uppercase border-y border-y-dark bg-light-2">
            {headItem.map((item, index) => (
              <th key={index} scope="col" className="p-4">
                {item}
              </th>
            ))}
          </tr>

          {articles?.map((item, index) => (
            <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
              <td className="p-4 font-medium">{item.FullName}</td>
              <td className="p-4 font-medium">{item.Email}</td>
              <td className="p-4 font-medium">{item.Slug}</td>
              <td className="p-4 font-medium">{item.Topic}</td>
              <td className="p-4 font-medium">{item.ArticleMessage}</td>
              <td className="flex gap-4 p-4">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    openEditModal(item.Slug);
                  }}
                  className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded"
                >
                  <HiPencil className="w-5 h-5" />
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(item.Slug);
                  }}
                  className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 !p-2 rounded"
                >
                  <HiTrash className="w-5 h-5" />
                </Button>
              </td>
            </tr>
          ))}
        </table>

        {/* post something */}
        <Popup open={isAddOpen} onClose={openAddModal}>
          <div className="flex items-center justify-center mt-2">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Article</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitAddArticle)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
              <Input required register={register} name="addEmail" title="Email" placeholder="input your email" type="email" />
              <Input required register={register} name="addFullName" title="Full Name" placeholder="input your full name" type="text" />
              <Input required register={register} name="addTopic" title="Topic" placeholder="input your topic" type="text" />
              <div className="relative col-span-2">
                <label htmlFor="addArticleMessage" className="block mb-1 font-semibold text-primary-2">
                  Article Message
                </label>
                <textarea
                  id="addArticleMessage"
                  {...register("addArticleMessage")}
                  rows="4"
                  className="block w-full p-2 text-sm border outline-none text-primary-2 bg-light-1 rounded-xl border-primary-2"
                  placeholder="input your article"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>

        {/* edit something */}
        <Popup open={isEditOpen} onClose={closeEditModal} closeOnDocumentClick={closeEditModal}>
          <div className="flex items-center justify-center mt-2">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Edit Article</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitEditArticle)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input
                required
                register={register}
                defaultValue={articleId?.Slug}
                name="editSlug"
                title="Slug"
                placeholder="input your slug"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={articleId?.Email}
                name="editEmail"
                title="Email"
                placeholder="input your email"
                type="email"
              />
              <Input
                required
                register={register}
                defaultValue={articleId?.FullName}
                name="editFullName"
                title="Full Name"
                placeholder="input your full name"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={articleId?.Topic}
                name="editTopic"
                title="Topic"
                placeholder="input your topic"
                type="text"
              />
              <div className="relative col-span-2">
                <label htmlFor="editArticleMessage" className="block mb-1 font-semibold text-primary-2">
                  Article Message
                </label>
                <textarea
                  {...register("editArticleMessage")}
                  defaultValue={articleId?.ArticleMessage}
                  id="editArticleMessage"
                  rows="4"
                  className="block w-full p-2 text-sm border outline-none text-primary-2 bg-light-1 rounded-xl border-primary-2"
                  placeholder="input your article"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>
      </div>
    </DashboardSection>
  );
};

export default ArticlePage;
