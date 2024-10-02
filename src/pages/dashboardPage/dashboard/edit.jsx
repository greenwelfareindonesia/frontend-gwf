import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import DashboardSection from "../../../layouts/dashboard_section/Template";
import closeIcon from "../../../assets/icons/close_icon.svg";
import { useEditStaff, useGetStaffBySlug } from "../../../features/auth/service";

const Edit = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { register, handleSubmit } = useForm();

  const { data } = useGetStaffBySlug(slug);

  const { mutate: editStaff } = useEditStaff();

  const handleBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { nama, departement, status, role } = data;
    editStaff({
      slug,
      nama: nama || data?.Nama,
      departement: departement || data?.Departement,
      status: status || data?.Status,
      role: role || data?.Role,
    });
  };

  return (
    <DashboardSection titleField="Edit Employee Data">
      <button onClick={handleBack} className="absolute top-0 right-0 mt-24 bg-transparent border-none mr-9">
        <img src={closeIcon} alt="Close" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4 text-xl font-bold text-primary-2">Name</div>
        <input
          {...register("nama")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis nama disini"
          defaultValue={data?.Nama}
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Department</div>
        <input
          {...register("departement")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis department disini"
          defaultValue={data?.Departement}
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Role</div>
        <input
          {...register("role")}
          className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm"
          placeholder="Tulis department disini"
          defaultValue={data?.Role}
        />

        <div className="mb-4 text-xl font-bold text-primary-2">Status</div>
        <select {...register("status")} className="w-full px-3 py-2 mb-4 border rounded-md border-primary-2 sm:text-sm">
          <option value="active" selected={data?.Status === "active" ? true : false}>
            Active
          </option>
          <option value="non-active" selected={data?.Status === "non-active" ? true : false}>
            Non Active
          </option>
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

export default Edit;
