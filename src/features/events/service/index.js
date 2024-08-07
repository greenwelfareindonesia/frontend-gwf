import { useMutation, useQuery } from "@tanstack/react-query";
import { addEvent, deleteEvent, editEvent, getEventById, getEvents } from "../hooks";

export const useGetEvents = () => {
  return useQuery({
    queryKey: ["getEvents"],
    queryFn: async () => {
      const response = await getEvents();
      return response?.payload || "";
    },
  });
};

export const useGetEventById = (slug) => {
  return useQuery({
    queryKey: ["getEventById", slug],
    queryFn: async () => {
      const response = await getEventById(slug);
      return response?.payload || "";
    },
  });
};

export const useAddEvent = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addEvent(body);
      return response?.payload;
    },
  });
};

export const useEditEvent = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await editEvent(data);
      return response?.payload;
    },
  });
};

export const useDeleteEvent = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteEvent(slug);
      return response?.payload;
    },
  });
};
