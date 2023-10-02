import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const initialState = {
  name: "auth",
  token: "aljsfo3u029",
  roles: [2001, 201],
};
// const initialState = {
//   name: "",
//   token: "",
//   roles: [],
// };

const PrivateRoute = (props: Props) => {
  const auth = initialState;
  // const { name, roles } = auth;
  const location = initialState;

  return auth?.roles?.includes(2001) ? (
    <Outlet />
  ) : auth?.token ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
