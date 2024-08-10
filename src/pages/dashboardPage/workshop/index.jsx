import { useState } from "react";

import { Link } from "react-router-dom";

import Sidebar from "../../../layouts/dashboard_section/Template";

import Delete from "./delete";

import { useGetWorkshops } from "../../../features/workshop/service";

import { edit_icon, delete_icon } from "../../../assets/icons";

const WorkshopDashboard = () => {
  const [showDeletePopOut, setShowDeletePopOut] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const { data } = useGetWorkshops();

  const openDeleteModal = (workshopId) => {
    setSelectedWorkshop(workshopId);
    setShowDeletePopOut(true);
  };

  const closeDeleteModal = () => {
    setShowDeletePopOut(false);
  };

  return (
    <Sidebar titleField="Workshop">
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/workshop/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Post Workshop</button>
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left table-fixed text-primary-1">
          <thead>
            <tr className="border-b-1 border-t-1 border-primary-2 whitespace-nowrap">
              <th className="p-4 w-60">Workshop</th>
              <th className="p-4 w-60">Title dan Description</th>
              <th className="p-4">Event Date</th>
              <th className="p-4">Link Event</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((article) => (
              <tr key={article?.ID} className="border-b-1 border-primary-2">
                <td className="px-4">
                  <img src={article?.Image} alt={article?.Title} className="object-cover w-56 py-2 h-36" />
                </td>
                <td className="p-4">
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold align-text-top">{article?.Title}</p>
                    <p className="text-xs">{article?.Desc}</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{article?.Date}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{article?.Url}</div>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 overflow-hidden">
                    <Link to={`/dashboard/workshop/edit/${article?.Slug}`}>
                      <img src={edit_icon} alt="Edit" />
                    </Link>
                    <button onClick={() => openDeleteModal(article?.Slug)}>
                      <img src={delete_icon} alt="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Delete visible={showDeletePopOut} selectedWorkshop={selectedWorkshop} closeDeleteModal={closeDeleteModal} />
    </Sidebar>
  );
};

export default WorkshopDashboard;
