import React, { useState } from 'react';
import DashboardSection from "../../../layouts/dashboard_section/Template";
import { Link } from "react-router-dom";
import { FaSort, FaSearch } from 'react-icons/fa'; 
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdSort } from "react-icons/md";

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

const EmployeesDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDeleteClick = (id) => {
    setSelectedItem(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    // Handle delete action here
    console.log('Deleted item with ID:', selectedItem);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <DashboardSection titleField="Employees">
      <div className="border-1 border-primary-1 rounded-md">
        <div className="p-5 flex items-center">
          <div className="relative">
            <button
              className="flex items-center border border-primary-2 p-2 rounded-md"
              onClick={toggleDropdown}
            >
              <FaSort className="mr-2" />
              <p>Sort</p>
            </button>
            {dropdownOpen && (
              <div className="absolute mt-1 w-full bg-white border border-primary-2 rounded-md shadow-lg">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 hover:bg-primary-1 hover:bg-opacity-20 cursor-pointer"
                    onClick={() => console.log("Sort A-Z")}
                  >
                    A-Z
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-primary-1 hover:bg-opacity-20 cursor-pointer"
                    onClick={() => console.log("Sort Z-A")}
                  >
                    Z-A
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="ml-4 flex items-center bg-gray-200 rounded-md p-2 w-96">
            <FaSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Users by Name, Email or Date"
              className="bg-gray-200 outline-none placeholder-gray-500 w-full"
            />
          </div>
        </div>
        <table className="w-full border-t border-primary-2 text-primary-1">
          <thead>
            <tr className="text-left border-b border-primary-2 bg-primary-1 bg-opacity-30">
              <th className="p-4 w-60">Full Name</th>
              <th className="p-4">Department</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr key={data.ID} className="border-b border-primary-2">
                <td className="px-4 py-5">{data.fullName}</td>
                <td className="px-4">{data.department}</td>
                <td className="px-4 py-2 text-sm font-bold">
                    <span className="inline-flex items-center bg-green-100 border border-green-500 rounded-md p-2 text-green-700">
                        {data.status}
                        <MdSort className="ml-2" />
                    </span>
                </td>

                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <Link to={`/dashboard/employees/edit/${data.ID}`}>
                      <div className="p-2 border-1 bg-light-green-300 rounded-md">
                        <MdOutlineEdit size={20} />
                      </div>
                    </Link>
                    <button className="p-0 bg-transparent border-none" onClick={() => handleDeleteClick(data.ID)}>
                      <div className="p-2 border-1 bg-red-500 rounded-md">
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
          <div className="bg-white border border-primary-2 rounded-md shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="p-2 border-2 rounded-full bg-gray-200 flex items-center justify-center">
                <RiDeleteBin6Line size={24} className="text-red-500" />
              </div>
            </div>
            <p className="mb-2 text-center font-semibold">Are you sure you want to delete this user?</p>
            <p className="mb-4 text-center">You cannot undo this action</p>
            <div className="flex justify-center mt-7 gap-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 border-2 border-primary-2 rounded-md text-gray-700 hover:bg-gray-100 w-40"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 border-2 border-primary-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-40"
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

export default EmployeesDashboard;
