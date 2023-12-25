import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getVeganguide = async () => {
  return await API.get("/veganguide/")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when fetch vegan guide", "error");
    });
};

export const getVeganguideById = async (slug) => {
  return await API.get(`/veganguide/${slug}`).then((response) => {
    return response.data;
  });
};

export const addVeganguide = async (body) => {
  return await API.post("/veganguide/", body)
    .then(() => {
      SweatAlert("Vegan guide has been created successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when create vegan guide", "error");
    });
};

export const editVeganguide = async (slug, body) => {
  return await API.put(`/veganguide/${slug}`, body)
    .then(() => {
      SweatAlert("Vegan guide has been updated successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when update vegan guide", "error");
    });
};

export const deleteVeganguide = async (slug) => {
  return await API.delete(`/veganguide/${slug}`)
    .then(() => {
      SweatAlert("Vegan guide has been deleted successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete vegan guide", "error");
    });
};
