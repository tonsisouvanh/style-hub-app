import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Admin/Dashboard";
// import AccessDenied from './pages/AccessDenied'
// import { ROLE } from './features/auth/auth'
// import { selectCurrentUser, selectIsAuthenticated } from './features/auth/authSlice'

interface Props {
  component: React.ComponentType;
  path?: string;
  isCheckLogin?: boolean;
  // roles?: Array<ROLE>;
}

const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  // roles,
  isCheckLogin = false,
}) => {
  const user = "sisouvanh";
  // const user = useSelector(selectCurrentUser);
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  // if (isAuthenticated && userHasRequiredRole) {
  if (user) {
    if (isCheckLogin) {
      return <Navigate to="/admin/dashboard" />;
    }
    return <RouteComponent />;
  }

  // if (isAuthenticated && !userHasRequiredRole) {
  if (!user) {
    return <Login />;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
