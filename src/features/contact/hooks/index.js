import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getContact = async () => {
  return await API.get("/contact/")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      SweatAlert("Error when fetch contact", "error");
    });
};

export const getContactById = async (slug) => {
  return await API.get(`/contact/${slug}`).then((response) => {
    return response.data;
  });
};

export const addContact = async (body) => {
  return await API.post("/contact/", body)
    .then(() => {
      SweatAlert("Contact has been created successfully", "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when add contact", "error");
    });
};

// export const editArticle = async (slug, body) => {
//   return await API.put(`/article/${slug}`, body)
//     .then((response) => {
//       SweatAlert(response.data.data, "success");
//       return response.data;
//     })
//     .catch(() => {
//       SweatAlert("Error when update article", "error");
//     });
// };

export const deleteContact = async (slug) => {
  return await API.delete(`/contact/${slug}`)
    .then((response) => {
      SweatAlert(response.data.data, "success");
      ReloadRefresh(2000);
    })
    .catch(() => {
      SweatAlert("Error when delete contact", "error");
    });
};
