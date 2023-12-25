import * as React from "react";

import { useForm } from "react-hook-form";

import { useAddEcopedia, useDeleteEcopedia, useEditEcopedia, useGetEcopediaById, useGetEcopedia } from "../../features/ecopedia/service";

import Popup from "reactjs-popup";

import { HiPencil, HiTrash } from "react-icons/hi2";

import Slider from "react-slick";

import Button from "../../components/button";
import Input from "../../components/input";
import DashboardSection from "../../layouts/dashboard_section/Template";
import Image from "../../components/container/Image";

const EcopediaPage = () => {
  const [isEditOpen, setEditOpen] = React.useState(false);
  const [isAddOpen, setAddOpen] = React.useState(false);
  const [slugId, setSlugId] = React.useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { data: ecopediaId, refetch } = useGetEcopediaById(slugId);

  const { data: ecopedias } = useGetEcopedia();

  const { mutate: addMutate } = useAddEcopedia();

  const { mutate: deleteMutate } = useDeleteEcopedia();

  const { mutate: editMutate } = useEditEcopedia();

  const onSubmitAddEcopedia = (data) => {
    const { addTitle: Title, addSubTitle: SubTitle, addSlug: Slug, addDescription: Description, addSource: SrcFile, addReference: Reference } = data;
    const body = { Title, SubTitle, Slug, Description, SrcFile, Reference };
    addMutate(body);
  };

  const onSubmitEditEcopedia = (data) => {
    const {
      editTitle: Title,
      editSubTitle: SubTitle,
      editSlug: Slug,
      editDescription: Description,
      editSrcFile: SrcFile,
      editReference: Reference,
    } = data;
    const body = { Title, SubTitle, Slug, Description, SrcFile, Reference };
    editMutate({ slugId, body });
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  React.useEffect(() => {
    reset(ecopediaId);
  }, [ecopediaId, reset]);

  const openEditModal = (slug) => {
    setEditOpen(!isEditOpen);
    setSlugId(slug);
    refetch();
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const closeEditModal = () => {
    setSlugId(null);
  };

  const headItem = ["Title", "Subtitle", "Description", "Source", "Image", "Action"];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <DashboardSection titleField="Ecopedia" buttonField="Post Ecopedia" handlePopUp={openAddModal}>
      <div className="relative overflow-x-auto overflow-y-hidden">
        <table className="w-full text-sm text-left text-primary-2">
          <thead className="uppercase border-y border-y-dark bg-light-2">
            <tr>
              {headItem.map((item, index) => (
                <th key={index} scope="col" className="p-4">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ecopedias?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium">{item.Title}</td>
                <td className="p-4 font-medium">{item.SubTitle}</td>
                <td className="p-4 font-medium">{item.Description}</td>
                <td className="p-4 font-medium">{item.SrcFile}</td>
                <td className="p-4 font-medium">
                  <Slider {...settings} className="w-24 text-center">
                    {item?.FileNames?.map((child, index) => (
                      <Image key={index} src={child} className="h-24 w-24" />
                    ))}
                  </Slider>
                </td>
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
          </tbody>
        </table>

        {/* post something */}
        <Popup open={isAddOpen} onClose={openAddModal}>
          <div className="flex items-center justify-center mt-2">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Ecopedia</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitAddEcopedia)} className="w-full p-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input required register={register} name="addTitle" title="Title" placeholder="input your title" type="text" />
              <Input required register={register} name="addSubTitle" title="SubTitle" placeholder="input your subtitle" type="text" />
              <Input required register={register} name="addSlug" title="Slug" placeholder="input your Slug" type="text" />
              <Input required register={register} name="addDescription" title="Description" placeholder="input your description" type="text" />
              <Input required register={register} name="addSource" title="Source" placeholder="input your source" type="text" />
              <Input required register={register} name="addReference" title="Reference" placeholder="input your reference" type="text" />
              <Input required register={register} name="addFileNames" title="Image" placeholder="input your image" type="file" />
            </div>
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>

        {/* edit something */}
        <Popup open={isEditOpen} onClose={closeEditModal} closeOnDocumentClick={closeEditModal}>
          <div className="flex items-center justify-center mt-2">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Edit Ecopedia</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitEditEcopedia)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input
                required
                register={register}
                defaultValue={ecopediaId?.Title}
                name="editTitle"
                title="Title"
                placeholder="input your title"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={ecopediaId?.SubTitle}
                name="editSubTitle"
                title="SubTitle"
                placeholder="input your subtitle"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={ecopediaId?.Slug}
                name="editSlug"
                title="Slug"
                placeholder="input your Slug"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={ecopediaId?.Description}
                name="editDescription"
                title="Description"
                placeholder="input your description"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={ecopediaId?.SrcFile}
                name="editSrcFile"
                title="Source"
                placeholder="input your source"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={ecopediaId?.Reference}
                name="editReference"
                title="Reference"
                placeholder="input your reference"
                type="text"
              />
              <Input required register={register} name="editFileName" title="Image" placeholder="input your image" type="file" />
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

export default EcopediaPage;
