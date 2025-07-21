import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import { useEditGallery, useGetGalleryById } from "../../../features/gallery/service";
import closeIcon from "../../../assets/icons/close_icon.svg";

const EditEmployees = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { register, handleSubmit, setValue, watch } = useForm();
  const { data } = useGetGalleryById(slug);

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { fullname, department, status } = data;

    editEmployees({ fullname, department, status, });
  };

  useEffect(() => {
    setValue("fullname", data?.fullname);
    setValue("department", data?.department);
    setValue("status", data?.status); 
  }, [data, setValue]);

  return (
    <DashboardSection titleField="Edit Employee Data">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4 text-xl font-bold text-primary-2">Fullname</div>
        <input
          {...register("alt", { required: true })}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis nama disini"
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Department</div>
        <input
          {...register("department", { required: true })}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis department disini"
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Status</div>
        <select
          {...register("status", { required: true })}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
        >
          <option value="" disabled>Pilih status</option>
          <option value="active">Active</option>
          <option value="non-active">Non Active</option>
        </select>

        {/* Container for the buttons */}
        <div className="flex mt-10">
          <button type="submit" className="px-48 py-2 font-semibold text-white rounded bg-primary-2">
            Update
          </button>
        </div>
      </form>
    </DashboardSection>
  );
};

export default EditEmployees;
