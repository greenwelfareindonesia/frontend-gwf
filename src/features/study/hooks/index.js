import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getStudy = async () => {
  return await API.get("/kajian/").then((response) => {
    return response.data;
  });
};

export const getStudyById = async (slug) => {
  return await API.get(`/kajian/${slug}`).then((response) => {
    return response.data;
  });
};

export const addStudy = async (body) => {
  return await API.post("/kajian/", body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      SweatAlert("Study has been created successfully", "success");
      ReloadRefresh(2000, "/dashboard/Study");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when create Study", "error");
    });
};

export const editStudy = async (body) => {
  return await API.put(`/kajian/${body.slug}`, body)
    .then(() => {
      SweatAlert("Study has been updated successfully", "success");
      ReloadRefresh(2000, "/dashboard/Study");
    })
    .catch(() => {
      SweatAlert("Error when update Study", "error");
    });
};

export const deleteStudy = async (slug) => {
  return await API.delete(`/kajian/${slug}`)
    .then(() => {
      SweatAlert("Study has been deleted successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete Study", "error");
    });
};
