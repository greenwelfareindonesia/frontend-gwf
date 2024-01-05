import { useMutation, useQuery } from "@tanstack/react-query";
import { addWorkshop, deleteWorkshop, editWorkshop, getWorkshopById, getWorkshops } from "../hooks";

export const useGetWorkshops = () => {
  return useQuery({
    queryKey: ["getWorkshops"],
    queryFn: async () => {
      const response = await getWorkshops();
      return response?.data || "";
    },
  });
};

export const useGetWorkshopById = (slug) => {
  return useQuery({
    queryKey: ["getWorkshopById", slug],
    queryFn: async () => {
      const response = await getWorkshopById(slug);
      return response?.data || "";
    },
  });
};

export const useAddWorkshop = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addWorkshop(body);
      return response?.data;
    },
  });
};

export const useEditWorkshop = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editWorkshop(slugId, body);
      return response?.data;
    },
  });
};

export const useDeleteWorkshop = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteWorkshop(slug);
      return response?.data;
    },
  });
};
