import { useMutation, useQuery } from "@tanstack/react-query";
import { addEcopedia, deleteEcopedia, editEcopedia, getEcopediaById, getEcopedia } from "../hooks";

export const useGetEcopedia = () => {
  return useQuery({
    queryKey: ["getEcopedias"],
    queryFn: async () => {
      const response = await getEcopedia();
      return response?.data || "";
    },
  });
};

export const useGetEcopediaById = (slug) => {
  return useQuery({
    queryKey: ["getEcopediaById", slug],
    queryFn: async () => {
      const response = await getEcopediaById(slug);
      return response?.data || "";
    },
  });
};

export const useAddEcopedia = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addEcopedia(body);
      return response?.data;
    },
  });
};

export const useEditEcopedia = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editEcopedia(slugId, body);
      return response?.data;
    },
  });
};

export const useDeleteEcopedia = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteEcopedia(slug);
      return response?.data;
    },
  });
};
