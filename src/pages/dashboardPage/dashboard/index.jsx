import { useState } from "react";

import DashboardSection from "../../../layouts/dashboard_section/Template";
import { Link } from "react-router-dom";
import { edit_icon, delete_icon } from "../../../assets/icons";

const dummyData = [
  {
    ID: 1,
    fullName: 'John Doe1',
    department: 'Engineering',
    status: 'Active',
    createdAt: new Date().toISOString(),
    slug: 'john-doe',
  },
  {
    ID: 2,
    fullName: 'John Doe2',
    department: 'Engineering',
    status: 'Active',
    createdAt: new Date().toISOString(),
    slug: 'john-doe',
  },
  {
    ID: 3,
    fullName: 'John Doe3',
    department: 'Engineering',
    status: 'Active',
    createdAt: new Date().toISOString(),
    slug: 'john-doe',
  },
];

// import { Link } from "react-router-dom";
import { FaSort, FaSearch } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSort } from "react-icons/md";
import { useDeleteStaff, useGetAllStaff } from "../../../features/auth/service";

const DashboardPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data } = useGetAllStaff();
  const { mutate: deleteStaff } = useDeleteStaff();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
      <div className="rounded-md border-1 border-primary-1">
        <div className="flex items-center p-5">
          <div className="relative">
            <button className="flex items-center py-2 pl-4 pr-8 border rounded-md border-primary-2" onClick={toggleDropdown}>
              <FaSort className="mr-2" />
              <p>Sort</p>
            </button>
            {dropdownOpen && (
              <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg border-primary-2">
                <ul className="py-1">
                  <li className="px-4 py-2 cursor-pointer hover:bg-primary-1 hover:bg-opacity-20" onClick={() => console.log("Sort A-Z")}>
                    A-Z
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-primary-1 hover:bg-opacity-20" onClick={() => console.log("Sort Z-A")}>
                    Z-A
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center p-2 ml-4 bg-gray-200 rounded-md w-96">
            <FaSearch className="mr-2 text-gray-500" />
            <input type="text" placeholder="Search Users by Name, Email or Date" className="w-full placeholder-gray-500 bg-gray-200 outline-none" />
          </div>
        </div>
        <table className="w-full border-t border-primary-2 text-primary-1">
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
              <button
                onClick={handleConfirmDelete}
                className="w-40 px-4 py-2 text-white bg-red-500 border-2 rounded-md border-primary-2 hover:bg-red-600"
              >
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
