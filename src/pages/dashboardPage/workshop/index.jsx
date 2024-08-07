import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../layouts/dashboard_section/Template";
import { edit_icon, delete_icon } from "../../../assets/icons";
import Delete from "./delete";
import { useGetWorkshops } from "../../../features/workshop/service";

const Workshop = () => {
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
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">
            Post Workshop
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left table-fixed text-primary-2">
          <thead>
            <tr className="border-b-1 border-t-1 border-primary-2">
              <th className="p-4">Workshop</th>
              <th className="p-4 w-80">Judul dan Deskripsi</th>
              <th className="p-4">Tanggal Post</th>
              <th className="p-4">Tanggal Event</th>
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
                  <div className="text-sm font-semibold">{article?.created_at}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{article?.Date}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-semibold">{article?.Url}</div>
                </td>
                <td className="p-4">
                  <div className="container flex gap-2 overflow-hidden">
                    <Link to={`/dashboard/workshop/edit/${article?.Slug}`}>
                      <button onClick={() => console.log("Edit button clicked")}>
                        <img src={edit_icon} alt="Edit" />
                      </button>
                    </Link>
                    <button onClick={() => 
                      openDeleteModal(article?.Slug)}>
                      <img src={delete_icon} alt="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Delete visible={showDeletePopOut} setVisible={setShowDeletePopOut} selectedWorkshop={selectedWorkshop} onClose={closeDeleteModal} />
    </Sidebar>
  );
};

export default Workshop;
