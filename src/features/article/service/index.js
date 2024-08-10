import { useMutation, useQuery } from "@tanstack/react-query";
import { addArticle, deleteArticle, editArticle, getArticleById, getArticles } from "../hooks";
import ReloadRefresh from "../../../utils/ReloadRefresh";

export const useGetArticles = () => {
  return useQuery({
    queryKey: ["getArticles"],
    queryFn: async () => {
      const response = await getArticles();
      return response?.payload || "";
    },
  });
};

export const useGetArticleById = (slug) => {
  return useQuery({
    queryKey: ["getArticleById", slug],
    queryFn: async () => {
      const response = await getArticleById(slug);
      return response?.payload || "";
    },
  });
};

export const useAddArticle = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addArticle(body);
      ReloadRefresh(2000, "/dashboard/article");
      return response?.payload;
    },
  });
};

export const useAddArticleInMainPage = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addArticle(body);
      ReloadRefresh(2000);
      return response?.payload;
    },
  });
};

export const useEditArticle = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editArticle(slugId, body);
      return response?.payload;
    },
  });
};

export const useDeleteArticle = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteArticle(slug);
      return response?.payload;
    },
  });
};
