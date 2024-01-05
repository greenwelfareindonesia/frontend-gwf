import * as React from "react";

import { useForm } from "react-hook-form";

import Popup from "reactjs-popup";

import { useAddVeganguide, useDeleteVeganguide, useEditVeganguide, useGetVeganguide, useGetVeganguideById } from "../../features/veganguide/service";

import { HiPencil, HiTrash } from "react-icons/hi2";

import DashboardSection from "../../layouts/dashboard_section/Template";
import Image from "../../components/image";
import Button from "../../components/button";
import Input from "../../components/input";

const VeganguidePage = () => {
  const [isEditOpen, setEditOpen] = React.useState(false);
  const [isAddOpen, setAddOpen] = React.useState(false);
  const [slugId, setSlugId] = React.useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { data: veganGuideId, refetch } = useGetVeganguideById(slugId);

  const { data: veganGuides } = useGetVeganguide();

  const { mutate: addMutate } = useAddVeganguide();

  const { mutate: deleteMutate } = useDeleteVeganguide();

  const { mutate: editMutate } = useEditVeganguide();

  const onSubmitAddVeganguide = (data) => {
    const { addSlug: Slug, addTitle: Title, addEventMessage: EventMessage } = data;
    const body = { Slug, Title, EventMessage };
    addMutate(body);
  };

  const onSubmitEditVeganguide = (data) => {
    const { editSlug: Slug, editTitle: Title, editEventMessage: EventMessage } = data;
    const body = { Slug, Title, EventMessage };
    editMutate({ slugId, body });
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  React.useEffect(() => {
    reset(veganGuideId);
  }, [veganGuideId, reset]);

  const openEditModal = (slug) => {
    setEditOpen(!isEditOpen);
    setSlugId(slug);
    refetch();
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const closeEditModal = () => {
    setSlugId(null);
  };

  const headItem = ["Slug", "Title", "Events Message", "Image", "Action"];

  return (
    <DashboardSection titleField="Vegan Guide" buttonField="Post Vegan Guide" handlePopUp={openAddModal}>
      <div className="relative overflow-x-auto">
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
            {veganGuides?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium">{item.Slug}</td>
                <td className="p-4 font-medium">{item.Title}</td>
                <td className="p-4 font-medium w-96">{item.EventMessage}</td>
                <td className="w-40 p-4 font-medium">
                  <Image src={item.FileName} className="!w-24 !h-24" description={`vegan-${index}`} />
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
          <form onSubmit={handleSubmit(onSubmitAddVeganguide)} className="w-full p-6 space-y-4">
            <div className="flex items-center">
              <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Event</h1>
            </div>
            <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
            <Input required register={register} name="addTitle" title="Title" placeholder="input your title" type="text" />
            <Input required register={register} name="addFileName" title="Image" placeholder="input your image" type="file" />
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>

        {/* edit something */}

        <Popup open={isEditOpen} onClose={closeEditModal} closeOnDocumentClick={closeEditModal}>
          <form onSubmit={handleSubmit(onSubmitEditVeganguide)} className="w-full p-6 space-y-4">
            <div className="flex items-center">
              <h1 className="mb-2 text-2xl font-semibold text-primary-2">Edit Event</h1>
            </div>
            <Input
              required
              register={register}
              defaultValue={veganGuideId?.Slug}
              name="editSlug"
              title="Slug"
              placeholder="input your slug"
              type="text"
            />
            <Input
              required
              register={register}
              defaultValue={veganGuideId?.Title}
              name="editTitle"
              title="Title"
              placeholder="input your title"
              type="text"
            />
            <Input
              required
              register={register}
              defaultValue={veganGuideId?.FullName}
              name="editFullName"
              title="Full Name"
              placeholder="input your full name"
              type="file"
            />
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>
      </div>
    </DashboardSection>
  );
};

export default VeganguidePage;
