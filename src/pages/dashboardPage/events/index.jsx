import { useState } from "react";

import { Link } from "react-router-dom";

import Sidebar from "../../../layouts/dashboard_section/Template";

import Delete from "./delete";

import { useGetEvents } from "../../../features/events/service";

import { edit_icon, delete_icon } from "../../../assets/icons";

import convertDateValue from "../../../utils/ConvertDate";

const EventsDashboard = () => {
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
    <Sidebar titleField="Events">
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/event/post">
          <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">Post Events</button>
        </Link>
      </div>
      <table className="w-full text-left table-fixed text-primary-1">
        <thead>
          <tr className="border-b-1 border-t-1 border-primary-2">
            <th className="p-4 w-60">Event Images</th>
            <th className="p-4">Title and Description</th>
            <th className="p-4">Post Date</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((event) => (
            <tr key={event?.ID} className="border-b-1 border-primary-2">
              <td className="p-4">
                <div className="overflow-hidden">
                  <img src={event?.FileName} alt={event?.Title} className="object-cover w-auto h-auto max-w-full" />
                </div>
              </td>
              <td className="p-4">
                <div className="overflow-hidden">
                  <p className="text-lg font-semibold align-text-top">{event?.Title}</p>
                  <p className="text-sm">{event?.EventMessage}</p>
                </div>
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">{convertDateValue(event?.created_at)}</div>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Link to={`/dashboard/event/edit/${event?.Slug}`}>
                    <img src={edit_icon} alt="Edit" />
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
      <Delete visible={showDeletePopOut} closeDeleteModal={closeDeleteModal} selectedEvent={selectedEvent} />
    </Sidebar>
  );
};

export default EventsDashboard;
