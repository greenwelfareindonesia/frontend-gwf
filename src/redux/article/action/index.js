import { getArticle } from "../hooks";
import { GET_ARTICLE } from "./type";

export const getArticleAction = () => {
  return async (dispatch) => {
    const response = await getArticle();
    dispatch({ type: GET_ARTICLE, payload: response.data });
  };
};
