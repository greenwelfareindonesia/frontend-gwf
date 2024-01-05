import * as React from "react";

import { useForm } from "react-hook-form";

import { useAddWorkshop, useDeleteWorkshop, useEditWorkshop, useGetWorkshopById, useGetWorkshops } from "../../features/workshop/service";

import Popup from "reactjs-popup";
import { HiPencil, HiTrash } from "react-icons/hi2";

import DashboardSection from "../../layouts/dashboard_section/Template";
import Image from "../../components/image";
import Button from "../../components/button";
import Input from "../../components/input";
import convertDateValue from "../../utils/ConvertDate";

const WorkshopPage = () => {
  const [isEditOpen, setEditOpen] = React.useState(false);
  const [isAddOpen, setAddOpen] = React.useState(false);
  const [slugId, setSlugId] = React.useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { data: workshopId, refetch } = useGetWorkshopById(slugId);

  const dateValue = convertDateValue(workshopId?.Date);

  const { data: workshops } = useGetWorkshops();

  const { mutate: addMutate } = useAddWorkshop();

  const { mutate: deleteMutate } = useDeleteWorkshop();

  const { mutate: editMutate } = useEditWorkshop();

  const onSubmitAddWorkshop = (data) => {
    const { addSlug: Slug, addTitle: Title, addDesc: Description, addDate: Date } = data;
    const File = data?.addFileName[0];
    const body = { Slug, Title, Description, Date, File };
    addMutate(body);
  };

  const onSubmitEditWorkshop = (data) => {
    const { editSlug: Slug, editTitle: Title, editDesc: Description, editDate: Date } = data;
    const File = data?.editFileName[0];
    const body = { Slug, Title, Description, Date, File };
    editMutate({ slugId, body });
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  React.useEffect(() => {
    reset(workshopId);
  }, [workshopId, reset]);

  const openEditModal = (slug) => {
    setEditOpen(!isEditOpen);
    setSlugId(slug);
    refetch();
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const closeEditModal = () => {
    setSlugId(null);
  };

  const headItem = ["Slug", "Title", "Description", "Date", "Image", "Action"];

  return (
    <DashboardSection titleField="Workshops" buttonField="Post Workshop" handlePopUp={openAddModal}>
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
            {workshops?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium">{item.Slug}</td>
                <td className="p-4 font-medium">{item.Title}</td>
                <td className="p-4 font-medium">{item.Desc}</td>
                <td className="w-32 p-4 font-medium">{item.Date}</td>
                <td className="w-40 p-4 font-medium">
                  <Image src={item.Image} className="!w-24 !h-24" description={`workshop-${index}`} />
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
          <form onSubmit={handleSubmit(onSubmitAddWorkshop)} className="w-full p-6 space-y-4">
            <div className="flex items-center">
              <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Workshop</h1>
            </div>
            <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
            <Input required register={register} name="addTitle" title="Title" placeholder="input your title" type="text" />
            <Input required register={register} name="addDesc" title="Description" placeholder="input your description" type="text" />
            <Input required register={register} name="addDate" title="Date" placeholder="input your date" type="date" />
            <Input required register={register} name="addFileName" title="Image" placeholder="input your image" type="file" />
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>

        {/* edit something */}

        <Popup open={isEditOpen} onClose={closeEditModal} closeOnDocumentClick={closeEditModal}>
          <form onSubmit={handleSubmit(onSubmitEditWorkshop)} className="w-full p-6 space-y-4">
            <div className="flex items-center">
              <h1 className="mb-2 text-2xl font-semibold text-primary-2">Edit Workshop</h1>
            </div>
            <Input
              required
              register={register}
              defaultValue={workshopId?.Slug}
              name="editSlug"
              title="Slug"
              placeholder="input your slug"
              type="text"
            />
            <Input
              required
              register={register}
              defaultValue={workshopId?.Title}
              name="editTitle"
              title="Title"
              placeholder="input your title"
              type="text"
            />
            <Input
              required
              register={register}
              defaultValue={workshopId?.Desc}
              name="editDesc"
              title="Description"
              placeholder="input your description"
              type="text"
            />
            <Input required register={register} defaultValue={dateValue} name="editDate" title="Date" placeholder="input your date" type="date" />
            <Input required register={register} name="editFileName" title="Image" type="file" />
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>
      </div>
    </DashboardSection>
  );
};

export default WorkshopPage;
