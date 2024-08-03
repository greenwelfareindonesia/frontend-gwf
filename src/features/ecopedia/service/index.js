import { useMutation, useQuery } from "@tanstack/react-query";
import { addEcopedia, deleteEcopedia, editEcopedia, getEcopediaById, getEcopedia } from "../hooks";

export const useGetEcopedia = () => {
  return useQuery({
    queryKey: ["getEcopedias"],
    queryFn: async () => {
      const response = await getEcopedia();
      return response?.payload || "";
    },
  });
};

export const useGetEcopediaById = (slug) => {
  return useQuery({
    queryKey: ["getEcopediaById", slug],
    queryFn: async () => {
      const response = await getEcopediaById(slug);
      return response?.payload || "";
    },
  });
};

export const useAddEcopedia = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addEcopedia(body);
      return response?.payload;
    },
  });
};

export const useEditEcopedia = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await editEcopedia(data);
      return response?.payload;
    },
  });
};

export const useDeleteEcopedia = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteEcopedia(slug);
      return response?.payload;
    },
  });
};
