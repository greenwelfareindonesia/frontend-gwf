import * as React from "react";

import { useForm } from "react-hook-form";

import { useAddContact, useDeleteContact, useGetContacts } from "../../features/contact/service";

import Popup from "reactjs-popup";

import { HiTrash } from "react-icons/hi2";

import DashboardSection from "../../layouts/dashboard_section/Template";
import Button from "../../components/button";
import Input from "../../components/input";

const ContactPage = () => {
  const [isAddOpen, setAddOpen] = React.useState(false);

  const { register, handleSubmit } = useForm();

  const { data: contacts } = useGetContacts();

  const { mutate: addMutate } = useAddContact();

  const { mutate: deleteMutate } = useDeleteContact();

  const onSubmitAddContact = (data) => {
    const { addSlug: Slug, addEmail: Email, addName: Name, addSubject: Subject, addMessage: Message } = data;
    const body = { Slug, Email, Name, Subject, Message };
    addMutate(body);
  };

  const handleDelete = (slug) => {
    deleteMutate(slug);
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const headItem = ["Name", "Email", "Slug", "Subject", "Message", "Action"];

  return (
    <DashboardSection titleField="Contact" buttonField="Post Contact" handlePopUp={openAddModal}>
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
            {contacts?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium">{item.Name}</td>
                <td className="p-4 font-medium">{item.Email}</td>
                <td className="p-4 font-medium">{item.Slug}</td>
                <td className="p-4 font-medium">{item.Subject}</td>
                <td className="p-4 font-medium">{item.Message}</td>
                <td className="flex gap-4 p-4">
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
            <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Contact</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmitAddContact)} className="w-full px-6 py-2">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
              <Input required register={register} name="addEmail" title="Email" placeholder="input your email" type="email" />
              <Input required register={register} name="addName" title="Name" placeholder="input your name" type="text" />
              <Input required register={register} name="addSubject" title="Subject" placeholder="input your topic" type="text" />
              <div className="relative col-span-2">
                <label htmlFor="addMessage" className="block mb-1 font-semibold text-primary-2">
                  Message
                </label>
                <textarea
                  id="addMessage"
                  {...register("addMessage")}
                  rows="4"
                  className="block w-full p-2 text-sm border outline-none text-primary-2 bg-light-1 rounded-xl border-primary-2"
                  placeholder="input your message"
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

export default ContactPage;
