import { useMutation, useQuery } from "@tanstack/react-query";
import { addFeedback, getFeedbacks, getFeedbackById } from "../hooks";

export const useGetFeedbacks = () => {
  return useQuery({
    queryKey: ["getFeedbacks"],
    queryFn: async () => {
      const response = await getFeedbacks();
      return response?.data || "";
    },
  });
};

export const useGetFeedbackById = (slug) => {
  return useQuery({
    queryKey: ["getFeedbackById", slug],
    queryFn: async () => {
      const response = await getFeedbackById(slug);
      return response?.data || "";
    },
  });
};

export const useAddFeedback = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addFeedback(body);
      return response?.data;
    },
  });
};
