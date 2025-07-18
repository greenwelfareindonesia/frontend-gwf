import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getFeedbacks = async () => {
  return await API.get("/feedback/").then((response) => {
    return response.data;
  });
};

export const getFeedbackById = async (slug) => {
  return await API.get(`/feedback/${slug}`).then((response) => {
    return response.data;
  });
};

export const addFeedback = async (body) => {
  return await API.post("/feedback/", body)
    .then(() => {
      SweatAlert("Feedback has been created successfully", "success");
      ReloadRefresh(2000);
    })
    .catch((err) => {
      SweatAlert(err?.response.data.error.message || "Error when create feedback", "error");
    });
};
