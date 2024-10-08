import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getEcopedia = async () => {
  return await API.get("/ecopedia/").then((response) => {
    return response.data;
  });
};

export const getEcopediaById = async (slug) => {
  return await API.get(`/ecopedia/${slug}`).then((response) => {
    return response.data;
  });
};

export const addEcopedia = async (body) => {
  return await API.post("/ecopedia/", body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      SweatAlert("Ecopedia has been created successfully", "success");
      ReloadRefresh(2000, "/dashboard/ecopedia");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when create ecopedia", "error");
    });
};

export const editEcopedia = async (body) => {
  return await API.put(`/ecopedia/${body.slug}`, body)
    .then(() => {
      SweatAlert("Ecopedia has been updated successfully", "success");
      ReloadRefresh(2000, "/dashboard/ecopedia");
    })
    .catch(() => {
      SweatAlert("Error when update ecopedia", "error");
    });
};

export const deleteEcopedia = async (slug) => {
  return await API.delete(`/ecopedia/${slug}`)
    .then(() => {
      SweatAlert("Ecopedia has been deleted successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete ecopedia", "error");
    });
};
