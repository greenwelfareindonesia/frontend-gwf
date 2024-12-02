import { useState } from "react";

import DashboardSection from "../../../layouts/dashboard_section/Template";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSort } from "react-icons/md";
import { useDeleteStaff, useGetAllStaff } from "../../../features/auth/service";

const DashboardPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data } = useGetAllStaff();
  const { mutate: deleteStaff } = useDeleteStaff();

  const handleDeleteClick = (id) => {
    setSelectedItem(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    // Handle delete action here
    deleteStaff({ slug: selectedItem });
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <DashboardSection titleField="Dashboard Page">
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboards/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Add Users</button>
        </Link>
      </div>
      <div className="rounded-md border-1 border-primary-1">
        <table className="w-full text-primary-1">
          <thead>
            <tr className="text-left border-b border-primary-2 bg-primary-1 bg-opacity-30">
              <th className="p-4 w-60">Name</th>
              <th className="p-4">Department</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data) => (
              <tr key={data.ID} className="border-b border-primary-2">
                <td className="px-4 py-5">{data?.Nama}</td>
                <td className="px-4">{data?.Departement}</td>
                <td className="px-4 py-2 text-sm font-bold">
                  <span className="inline-flex items-center p-2 text-green-700 bg-green-100 border border-green-500 rounded-md">
                    {data.Status}
                    <MdSort className="ml-2" />
                  </span>
                </td>

                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <Link to={`/dashboards/edit/${data?.Slug}`}>
                      <div className="p-2 rounded-md border-1 bg-light-green-300">
                        <MdOutlineEdit size={20} />
                      </div>
                    </Link>
                    <button className="p-0 bg-transparent border-none" onClick={() => handleDeleteClick(data?.Slug)}>
                      <div className="p-2 bg-red-500 rounded-md border-1">
                        <RiDeleteBin6Line size={20} />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-primary-1 bg-opacity-30">
              <td className="p-6 w-60"></td>
              <td className="p-6"></td>
              <td className="p-6"></td>
              <td className="p-6"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Confirmation Pop-up */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="p-6 bg-white border rounded-md shadow-lg border-primary-2">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center p-2 bg-gray-200 border-2 rounded-full">
                <RiDeleteBin6Line size={24} className="text-red-500" />
              </div>
            </div>
            <p className="mb-2 font-semibold text-center">Are you sure you want to delete this user?</p>
            <p className="mb-4 text-center">You cannot undo this action</p>
            <div className="flex justify-center gap-4 mt-7">
              <button onClick={handleCancelDelete} className="w-40 px-4 py-2 text-gray-700 border-2 rounded-md border-primary-2 hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="w-40 px-4 py-2 text-white bg-red-500 border-2 rounded-md border-primary-2 hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardSection>
  );
};

export default DashboardPage;
