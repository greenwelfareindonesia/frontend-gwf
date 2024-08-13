import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getArticles = async () => {
  return await API.get("/article/")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when fetch articles", "error");
    });
};

export const getArticleById = async (slug) => {
  return await API.get(`/article/${slug}`).then((response) => {
    return response.data;
  });
};

export const addArticle = async (body) => {
  return await API.post("/article/", body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => {
      SweatAlert("Article has been created successfully", "success");
      return response.data;
    })
    .catch((err) => {
      SweatAlert(err?.response.data.error.message || "Error when add article", "error");
    });
};

export const editArticle = async (slug, body) => {
  return await API.put(`/article/${slug}`, body)
    .then(() => {
      SweatAlert("Article has been created successfully", "success");
      ReloadRefresh(2000, "/dashboard/article");
    })
    .catch(() => {
      SweatAlert("Error when update article", "error");
    });
};

export const deleteArticle = async (slug) => {
  return await API.delete(`/article/${slug}`)
    .then((response) => {
      SweatAlert(response.data.data, "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete article", "error");
    });
};
