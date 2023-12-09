import { GET_EVENTS } from "../action/type";

const initialState = {
  events: [],
  isLoading: true,
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        isLoading: false,
        events: action.payload.data,
      };
    default:
      return state;
  }
};

export default events;
