import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getWorkshops = async () => {
  return await API.get("/workshop/")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when fetch workshops", "error");
    });
};

export const getWorkshopById = async (slug) => {
  return await API.get(`/workshop/${slug}`).then((response) => {
    return response.data;
  });
};

export const addWorkshop = async (body) => {
  return await API.post("/workshop/", body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      SweatAlert("Workshop has been created successfully", "success");
      ReloadRefresh(2000, "/dashboard/workshop");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when create workshop", "error");
    });
};

export const editWorkshop = async (body) => {
  return await API.put(`/workshop/${body.slug}`, body, { headers: { "Content-Type": "multipart/form-data" } })
    .then(() => {
      SweatAlert("Workshop has been updated successfully", "success");
      ReloadRefresh(2000, "/dashboard/workshop");
    })
    .catch(() => {
      SweatAlert("Error when update workshop", "error");
    });
};

export const deleteWorkshop = async (slug) => {
  return await API.delete(`/workshop/${slug}`)
    .then(() => {
      SweatAlert("Workshop has been deleted successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete workshop", "error");
    });
};
