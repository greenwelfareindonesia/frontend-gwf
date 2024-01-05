import { useMutation, useQuery } from "@tanstack/react-query";
import { addVeganguide, deleteVeganguide, editVeganguide, getVeganguide, getVeganguideById } from "../hooks";

export const useGetVeganguide = () => {
  return useQuery({
    queryKey: ["getVeganguide"],
    queryFn: async () => {
      const response = await getVeganguide();
      return response?.data || "";
    },
  });
};

export const useGetVeganguideById = (slug) => {
  return useQuery({
    queryKey: ["getVeganguideById", slug],
    queryFn: async () => {
      const response = await getVeganguideById(slug);
      return response?.data || "";
    },
  });
};

export const useAddVeganguide = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addVeganguide(body);
      return response?.data;
    },
  });
};

export const useEditVeganguide = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editVeganguide(slugId, body);
      return response?.data;
    },
  });
};

export const useDeleteVeganguide = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteVeganguide(slug);
      return response?.data;
    },
  });
};
