import API from "../../../libs/api";
import SweatAlert from "../../../utils/SweetAlert";

export const getArticle = async () => {
  return await API.get("/artikel")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      SweatAlert(error, "error");
    });
};
