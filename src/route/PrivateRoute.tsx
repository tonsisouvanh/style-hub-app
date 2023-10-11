import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userStr = sessionStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const auth = user;
  const location = user;

  return auth?.token ? (
    <Outlet />
  ) : auth?.token ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
