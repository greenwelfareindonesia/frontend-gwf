import { useMutation, useQuery } from "@tanstack/react-query";
import { addContact, deleteContact, getContact, getContactById } from "../hooks";

export const useGetContacts = () => {
  return useQuery({
    queryKey: ["getContacts"],
    queryFn: async () => {
      const response = await getContact();
      return response?.data || "";
    },
  });
};

export const useGetContactById = (slug) => {
  return useQuery({
    queryKey: ["getContactById", slug],
    queryFn: async () => {
      const response = await getContactById(slug);
      return response?.data || "";
    },
  });
};

export const useAddContact = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await addContact(body);
      return response?.data;
    },
  });
};

// export const useEditContact = () => {
//   return useMutation({
//     mutationFn: async (data) => {
//       const { slugId, body } = data;
//       const response = await editContact(slugId, body);
//       return response?.data;
//     },
//   });
// };

export const useDeleteContact = () => {
  return useMutation({
    mutationFn: async (slug) => {
      const response = await deleteContact(slug);
      return response?.data;
    },
  });
};
