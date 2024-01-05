import { useMutation, useQuery } from "@tanstack/react-query";
import { addGallery, deleteGallery, editGallery, getGalleries, getGalleryById } from "../hooks";

export const useGetGalleries = () => {
  return useQuery({
    queryKey: ["getGalleries"],
    queryFn: async () => {
      const response = await getGalleries();
      return response?.data || "";
    },
  });
};

export const useGetGalleryById = (slug) => {
  return useQuery({
    queryKey: ["getGalleryById", slug],
    queryFn: async () => {
      const response = await getGalleryById(slug);
      return response?.data || "";
    },
  });
};

export const useAddGallery = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addGallery(body);
      return response?.data;
    },
  });
};

export const useEditGallery = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editGallery(slugId, body);
      return response?.data;
    },
  });
};

export const useDeleteGallery = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteGallery(slug);
      return response?.data;
    },
  });
};
