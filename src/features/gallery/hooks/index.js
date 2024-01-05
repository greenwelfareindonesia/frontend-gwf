import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getGalleries = async () => {
  return await API.get("/gallery/")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when fetch galleries", "error");
    });
};

export const getGalleryById = async (slug) => {
  return await API.get(`/gallery/${slug}`).then((response) => {
    return response.data;
  });
};

export const addGallery = async (body) => {
  return await API.post("/gallery/", body)
    .then(() => {
      SweatAlert("gallery has been created successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when create gallery", "error");
    });
};

export const editGallery = async (slug, body) => {
  return await API.put(`/gallery/${slug}`, body)
    .then(() => {
      SweatAlert("gallery has been updated successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when update gallery", "error");
    });
};

export const deleteGallery = async (slug) => {
  return await API.delete(`/gallery/${slug}`)
    .then(() => {
      SweatAlert("gallery has been deleted successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete gallery", "error");
    });
};
