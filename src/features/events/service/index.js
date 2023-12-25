import { useMutation, useQuery } from "@tanstack/react-query";
import { addEvent, deleteEvent, editEvent, getEventById, getEvents } from "../hooks";

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["getEvents"],
    queryFn: async () => {
      const response = await getEvents();
      return response?.data || "";
    },
  });
};

export const useGetEventById = (slug) => {
  return useQuery({
    queryKey: ["getEventById", slug],
    queryFn: async () => {
      const response = await getEventById(slug);
      return response?.data || "";
    },
  });
};

export const useAddEvent = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addEvent(body);
      return response?.data;
    },
  });
};

export const useEditEvent = () => {
  return useMutation({
    mutationFn: async (data) => {
      const { slugId, body } = data;
      const response = await editEvent(slugId, body);
      return response?.data;
    },
  });
};

export const useDeleteEvent = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteEvent(slug);
      return response?.data;
    },
  });
};
