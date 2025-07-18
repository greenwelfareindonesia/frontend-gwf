import API from "../../../libs/api";
import ReloadRefresh from "../../../utils/ReloadRefresh";
import SweatAlert from "../../../utils/SweetAlert";

export const getAllStaff = async () => {
  return await API.get("/hrd/").then((response) => {
    return response.data;
  });
};

export const getStaffBySlug = async (slug) => {
  return await API.get(`/hrd/${slug}`).then((response) => {
    return response.data;
  });
};

export const addStaff = async (body) => {
  return await API.post("/hrd/", body)
    .then(() => {
      SweatAlert("Hrd has been added successfully", "success");
      ReloadRefresh(2000, "/dashboards");
    })
    .catch(() => {
      SweatAlert("Deleted error", "error");
    });
};

export const editStaff = async (body) => {
  return await API.put(`/hrd/${body?.slug}`, body)
    .then(() => {
      SweatAlert("Hrd has been updated successfully", "success");
      ReloadRefresh(2000, "/dashboards");
    })
    .catch(() => {
      SweatAlert("Updated error", "error");
    });
};

export const deleteStaff = async (body) => {
  return await API.delete(`/hrd/${body.slug}`)
    .then(() => {
      SweatAlert("Hrd has been deleted successfully", "success");
      ReloadRefresh(2000, "/dashboards");
    })
    .catch(() => {
      SweatAlert("Deleted error", "error");
    });
};

export const login = async (body) => {
  return await API.post("/user/login", body)
    .then((response) => {
      SweatAlert("You are successfully logged in", "success");
      ReloadRefresh(2000, "/dashboards");
      return response.data;
    })
    .catch(() => {
      localStorage.clear();
      sessionStorage.clear();
      SweatAlert("Email or password is false", "error");
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

export const deleteUser = async (slug, body) => {
  return await API.delete(`/user/${slug}`, body)
    .then((response) => {
      SweatAlert("Your account has been deleted successfully", "success");
      ReloadRefresh(2000, "/dashboard");
      return response.data;
    })
    .catch(() => {
      SweatAlert("Failed when deleted user", "error");
    });
};
