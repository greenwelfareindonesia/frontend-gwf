import { Navigate, Outlet } from "react-router-dom";
import { useGetAllStaff } from "../features/auth/service";

const ProtectedAdmin = () => {
  const token = localStorage.getItem("token");

  const { data } = useGetAllStaff();

  if (!data) {
    return null;
  }

  return token && data ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedAdmin;
