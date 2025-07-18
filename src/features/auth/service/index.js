import { useMutation, useQuery } from "@tanstack/react-query";
import { addStaff, deleteStaff, deleteUser, editStaff, editUser, getAllStaff, getStaffBySlug, login, register } from "../hooks";

export const useGetAllStaff = () => {
  return useQuery({
    queryKey: ["getAllStaff"],
    queryFn: async () => {
      const response = await getAllStaff();
      return response?.payload || "";
    },
  });
};

export const useGetStaffBySlug = (slug) => {
  return useQuery({
    queryKey: ["getStaffBySlug"],
    queryFn: async () => {
      const response = await getStaffBySlug(slug);
      return response?.payload || "";
    },
  });
};

export const useAddStaff = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addStaff(body);
      return response?.payload;
    },
  });
};

export const useEditStaff = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await editStaff(body);
      return response?.payload;
    },
  });
};

export const useDeleteStaff = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteStaff(slug);
      return response?.payload;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await login(body);
      localStorage.setItem("token", response?.payload?.token);
      localStorage.setItem("name", response?.data?.Name);
      return response?.payload;
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await register(body);
      return response?.payload;
    },
  });
};

export const useEditUser = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await editUser(body);
      return response?.payload;
    },
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await deleteUser(body);
      return response?.payload;
    },
  });
};
