import API from "../../../libs/api";
import SweatAlert from "../../../utils/SweetAlert";

export const getEvents = async () => {
  try {
    const response = await API.get("/events");
    return response;
  } catch (error) {
    SweatAlert(error, "error");
  }
};
