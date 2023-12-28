import React from "react";

import Popup from "reactjs-popup";

import { useForm } from "react-hook-form";

import { useAddEvent, useDeleteEvent, useEditEvent, useGetEventById, useGetEvents } from "../../features/events/service";

import { HiPencil, HiTrash } from "react-icons/hi2";

import Button from "../../components/button";
import Input from "../../components/input";
import DashboardSection from "../../layouts/dashboard_section/Template";
import Image from "../../components/image";

const EventsPage = () => {
  const [isEditOpen, setEditOpen] = React.useState(false);
  const [isAddOpen, setAddOpen] = React.useState(false);
  const [slugId, setSlugId] = React.useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { data: eventId, refetch } = useGetEventById(slugId);

  const { data: events } = useGetEvents();

  const { mutate: addMutate } = useAddEvent();

  const { mutate: deleteMutate } = useDeleteEvent();

  const { mutate: editMutate } = useEditEvent();

  const onSubmitAddEvent = (data) => {
    const { addSlug: Slug, addTitle: Title, addEventMessage: EventMessage } = data;
    const File = data?.addFileName[0];
    const body = { Slug, Title, EventMessage, File };
    addMutate(body);
  };

  const onSubmitEditEvent = (data) => {
    const { editSlug: Slug, editTitle: Title, editEventMessage: EventMessage } = data;
    const File = data?.editFileName[0];
    const body = { Slug, Title, EventMessage, File };
    editMutate({ slugId, body });
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  React.useEffect(() => {
    reset(eventId);
  }, [eventId, reset]);

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
    <DashboardSection titleField="Events" buttonField="Post Event" handlePopUp={openAddModal}>
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
            {events?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium">{item.Slug}</td>
                <td className="p-4 font-medium">{item.Title}</td>
                <td className="p-4 font-medium w-96">{item.EventMessage}</td>
                <td className="w-40 p-4 font-medium">
                  <Image src={item.FileName} className="!w-24 !h-24" description={`event-${index}`} />
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
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Event</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitAddEvent)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
              <Input required register={register} name="addTitle" title="Title" placeholder="input your title" type="text" />
              <div className="relative col-span-2">
                <label htmlFor="addEventMessage" className="block mb-1 font-semibold text-primary-2">
                  Event Message
                </label>
                <textarea
                  id="addEventMessage"
                  {...register("addEventMessage")}
                  rows="4"
                  className="block w-full p-2 text-sm border outline-none text-primary-2 bg-light-1 rounded-xl border-primary-2"
                  placeholder="input your event"
                  required
                />
              </div>
              <Input required className="col-span-2" register={register} name="addFileName" title="Image" type="file" />
            </div>
            <Button type="submit" className="!text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg !block w-full">
              Submit
            </Button>
          </form>
        </Popup>

        {/* edit something */}

        <Popup open={isEditOpen} onClose={closeEditModal} closeOnDocumentClick={closeEditModal}>
          <div className="flex items-center justify-center">
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Edit Event</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitEditEvent)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input
                required
                register={register}
                defaultValue={eventId?.Slug}
                name="editSlug"
                title="Slug"
                placeholder="input your slug"
                type="text"
              />
              <Input
                required
                register={register}
                defaultValue={eventId?.Title}
                name="editTitle"
                title="Title"
                placeholder="input your title"
                type="text"
              />
              <div className="relative col-span-2">
                <label htmlFor="editEventMessage" className="block mb-1 font-semibold text-primary-2">
                  Event Message
                </label>
                <textarea
                  {...register("editEventMessage")}
                  defaultValue={eventId?.EventMessage}
                  id="editEventMessage"
                  rows="4"
                  className="block w-full p-2 text-sm border outline-none text-primary-2 bg-light-1 rounded-xl border-primary-2"
                  placeholder="input your event"
                  required
                />
              </div>
              <Input required register={register} name="editFileName" title="Image" type="file" />
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

export default EventsPage;
