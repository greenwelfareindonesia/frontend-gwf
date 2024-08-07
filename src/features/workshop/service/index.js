import { useMutation, useQuery } from "@tanstack/react-query";
import { addWorkshop, deleteWorkshop, editWorkshop, getWorkshopById, getWorkshops } from "../hooks";

export const useGetWorkshops = () => {
  return useQuery({
    queryKey: ["getWorkshops"],
    queryFn: async () => {
      const response = await getWorkshops();
      return response?.payload || "";
    },
  });
};

export const useGetWorkshopById = (slug) => {
  return useQuery({
    queryKey: ["getWorkshopById", slug],
    queryFn: async () => {
      const response = await getWorkshopById(slug);
      return response?.payload || "";
    },
  });
};

export const useAddWorkshop = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addWorkshop(body);
      return response?.payload;
    },
  });
};

export const useEditWorkshop = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await editWorkshop(data);
      return response?.payload;
    },
  });
};

export const useDeleteWorkshop = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteWorkshop(slug);
      return response?.payload;
    },
  });
};
