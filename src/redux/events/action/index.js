import { getEvents } from "../hooks";
import { GET_EVENTS } from "./type";

export const getTicketAction = () => {
  return async (dispatch) => {
    const response = await getEvents();
    dispatch({ type: GET_EVENTS, payload: response.data });
  };
};
