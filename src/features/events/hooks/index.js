import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getEvents = async () => {
  return await API.get("/event/")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when fetch events", "error");
    });
};

export const getEventById = async (slug) => {
  return await API.get(`/event/${slug}`).then((response) => {
    return response.data;
  });
};

export const addEvent = async (body) => {
  return await API.post("/event/", body, { headers: { "Content-Type": "multipart/form-data" } })
    .then(() => {
      SweatAlert("Event has been created successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when create event", "error");
    });
};

export const editEvent = async (slug, body) => {
  return await API.put(`/event/${slug}`, body, { headers: { "Content-Type": "multipart/form-data" } })
    .then(() => {
      SweatAlert("Event has been updated successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when update event", "error");
    });
};

export const deleteEvent = async (slug) => {
  return await API.delete(`/event/${slug}`)
    .then(() => {
      SweatAlert("Event has been deleted successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete event", "error");
    });
};
