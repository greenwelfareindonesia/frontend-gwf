import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../layouts/dashboard_section/Template";
import { edit_icon, delete_icon } from "../../../assets/icons";
import Delete from "./delete"; // Ensure this import path is correct
import { useGetEvents } from "../../../features/events/service";

const Events = () => {
  const [showDeletePopOut, setShowDeletePopOut] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { data } = useGetEvents();

  const openDeleteModal = (eventId) => {
    setSelectedEvent(eventId);
    setShowDeletePopOut(true);
  };

  const closeDeleteModal = () => {
    setShowDeletePopOut(false);
  };

  return (
    <Sidebar titleField={"Events"}>
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/event/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Post Events</button>
        </Link>
      </div>
      <table className="w-full text-left table-fixed text-primary-2">
        <thead>
          <tr className="border-b-1 border-t-1 border-primary-2">
            <th className="p-4">Events</th>
            <th className="p-4 w-80">Judul</th>
            <th className="p-4">Tanggal Post</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((event) => (
            <tr key={event?.ID} className="border-b-1 border-primary-2">
              <td className="py-4">
                <div className="overflow-hidden">
                  <img src={event?.FileName} alt={event?.Title} className="object-cover w-auto h-auto max-w-full" />
                </div>
              </td>
              <td className="p-4">
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold align-text-top">{event?.Title}</p>
                  <p className="text-xs">{event?.EventMessage}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">{event?.created_at}</div>
              </td>
              <td className="p-4">
                <div className="container flex gap-2 overflow-hidden">
                  <Link to={`/dashboard/event/edit/${event?.Slug}`}>
                    <button onClick={() => console.log("Edit button clicked")}>
                      <img src={edit_icon} alt="Edit" />
                    </button>
                  </Link>
                  <div>
                    <button onClick={() => openDeleteModal(event?.Slug)}>
                      <img src={delete_icon} alt="Delete" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Delete visible={showDeletePopOut} setVisible={setShowDeletePopOut} selectedEvent={selectedEvent} onClose={closeDeleteModal} />
    </Sidebar>
  );
};

export default Events;
