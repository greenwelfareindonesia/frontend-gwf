import { useMutation, useQuery } from "@tanstack/react-query";
import { addArticle, deleteArticle, editArticle, getArticleById, getArticles } from "../hooks";

export const useGetArticles = () => {
  return useQuery({
    queryKey: ["getArticles"],
    queryFn: async () => {
      const response = await getArticles();
      return response?.data || "";
    },
  });
};

export const useGetArticleById = (slug) => {
  return useQuery({
    queryKey: ["getArticleById", slug],
    queryFn: async () => {
      const response = await getArticleById(slug);
      return response?.data || "";
    },
  });
};

export const useAddArticle = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addArticle(body);
      return response?.data;
    },
  });
};

export const useEditArticle = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editArticle(slugId, body);
      return response?.data;
    },
  });
};

export const useDeleteArticle = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteArticle(slug);
      return response?.data;
    },
  });
};
