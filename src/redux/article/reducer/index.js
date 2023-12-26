import { GET_ARTICLE } from "../action/type";

const initialState = {
  article: [],
  isLoading: true,
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        ...state,
        isLoading: false,
        article: action.payload.data,
      };
    default:
      return state;
  }
};

export default article;
