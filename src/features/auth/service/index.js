import { useMutation } from "@tanstack/react-query";
import { deleteUser, editUser, login, register } from "../hooks";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await login(body);
      localStorage.setItem("token", response?.data?.Token);
      localStorage.setItem("name", response?.data?.Name);
      return response?.data;
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await register(body);
      return response?.data;
    },
  });
};

export const useEditUser = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await editUser(body);
      return response?.data;
    },
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await deleteUser(body);
      return response?.data;
    },
  });
};
