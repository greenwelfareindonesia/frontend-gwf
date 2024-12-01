import { useMutation, useQuery } from "@tanstack/react-query";
import { addStudy, deleteStudy, editStudy, getStudyById, getStudy } from "../hooks";

export const useGetStudy = () => {
  return useQuery({
    queryKey: ["getStudys"],
    queryFn: async () => {
      const response = await getStudy();
      return response?.payload || "";
    },
  });
};

export const useGetStudyById = (slug) => {
  return useQuery({
    queryKey: ["getStudyById", slug],
    queryFn: async () => {
      const response = await getStudyById(slug);
      return response?.payload || "";
    },
  });
};

export const useAddStudy = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addStudy(body);
      return response?.payload;
    },
  });
};

export const useEditStudy = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await editStudy(body);
      return response?.payload;
    },
  });
};

export const useDeleteStudy = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteStudy(slug);
      return response?.payload;
    },
  });
};
