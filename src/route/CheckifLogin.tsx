import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const CheckifLogin = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  // Check if the user is logged in.
  const isLoggedIn = user?.token;

  return isLoggedIn ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="login" state={{ from: location }} />
  );
};

export default CheckifLogin;
