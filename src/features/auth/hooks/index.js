import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const login = async (body) => {
  return await API.post("/user/login/", body)
    .then((response) => {
      SweatAlert("You are successfully logged in", "success");
      ReloadRefresh(2000, "/dashboard");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Failed when logged in, please try again", "error");
    });
};

export const register = async (body) => {
  return await API.post("/user/register/", body)
    .then((response) => {
      SweatAlert("You are successfully logged in", "success");
      ReloadRefresh(2000, "/dashboard");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Failed when registration, please try again", "error");
    });
};

export const editUser = async (slug, body) => {
  return await API.put(`/user/${slug}`, body)
    .then((response) => {
      SweatAlert("Your account has been updated successfully", "success");
      ReloadRefresh(2000, "/dashboard");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Failed when updated user", "error");
    });
};

export const deleteUser = async (body) => {
  return await API.post("/user/login/", body)
    .then((response) => {
      SweatAlert("Your account has been deleted successfully", "success");
      ReloadRefresh(2000, "/dashboard");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Failed when deleted user", "error");
    });
};
