import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProductPage";
import ProductsPage from "./pages/Products/ProductsPage";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import CartPage from "./pages/Cart/CartPage";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Admin/Dashboard";
import RootLayout from "./layout/RootLayout";
import { ReactNode } from "react";
import PrivateRoute from "./route/PrivateRoute";
function App() {
  const { currentUser } = { currentUser: "" };

  return (
    <>
      <Router>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Flip}
        />
        <Routes>
          <Route
            path="/"
            element={
              <RootLayout>
                <Home />
              </RootLayout>
            }
          />
          <Route
            path="/about"
            element={
              <RootLayout>
                <AboutPage />
              </RootLayout>
            }
          />
          <Route
            path="/all-products/:category"
            element={
              <RootLayout>
                <ProductsPage />
              </RootLayout>
            }
          />
          <Route
            path="/single-product/:id"
            element={
              <RootLayout>
                <SingleProduct />
              </RootLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <RootLayout>
                <CartPage />
              </RootLayout>
            }
          />
          <Route
            path="/404"
            element={
              <RootLayout>
                <NotFoundPage />
              </RootLayout>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
            <PrivateRoute component={Dashboard} />
          }
          />
          <Route
            path="/admin/login"
            element={<PrivateRoute isCheckLogin={true} component={Login} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
