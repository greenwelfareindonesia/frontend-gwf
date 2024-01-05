import * as React from "react";

import { useForm } from "react-hook-form";

import Popup from "reactjs-popup";

import DashboardSection from "../../layouts/dashboard_section/Template";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAddFeedback, useGetFeedbacks } from "../../features/feedback/service";

const FeedbackPage = () => {
  const [isAddOpen, setAddOpen] = React.useState(false);

  const { register, handleSubmit } = useForm();

  const { data: feedbacks } = useGetFeedbacks();

  const { mutate: addMutate } = useAddFeedback();

  const onSubmitAddFeedback = (data) => {
    const { addSlug: Slug, addEmail: Email, addText: Text } = data;
    const body = { Slug, Email, Text };
    addMutate(body);
  };

  const openAddModal = () => setAddOpen(!isAddOpen);

  const headItem = ["Email", "Slug", "Text"];

  return (
    <DashboardSection titleField="Feedback" buttonField="Post Feedback" handlePopUp={openAddModal}>
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
            {feedbacks?.map((item, index) => (
              <tr key={index} className="bg-white border-b border-b-dark text-primary-2">
                <td className="p-4 font-medium">{item.Email}</td>
                <td className="p-4 font-medium">{item.Slug}</td>
                <td className="p-4 font-medium w-[500px]">{item.Text}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* post something */}
        <Popup open={isAddOpen} onClose={openAddModal}>
          <form onSubmit={handleSubmit(onSubmitAddFeedback)} className="w-full p-6 space-y-4">
            <div className="flex items-center">
              <h1 className="mb-2 text-2xl font-semibold text-primary-2">Add Feedback</h1>
            </div>
            <Input required register={register} name="addSlug" title="Slug" placeholder="input your slug" type="text" />
            <Input required register={register} name="addEmail" title="Email" placeholder="input your email" type="email" />
            <div className="relative">
              <label htmlFor="addText" className="block mb-1 font-semibold text-primary-2">
                Message
              </label>
              <textarea
                id="addText"
                {...register("addText")}
                rows="4"
                className="block w-full p-2 text-sm border outline-none text-primary-2 bg-light-1 rounded-xl border-primary-2"
                placeholder="input your message"
                required
              />
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

export default FeedbackPage;
