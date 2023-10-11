import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProductPage";
import ProductsPage from "./pages/Products/ProductsPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import CartPage from "./pages/Cart/CartPage";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/protected/dashboard/Dashboard";
import ClientLayout from "./layout/ClientLayout";
import PrivateRoute from "./route/PrivateRoute";
import Stock from "./pages/protected/item/Stock";
import AdminLayout from "./layout/AdminRootLayout";
import Test from "./pages/Test";
import ProductDetail from "./pages/Products/ProductDetail";
function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
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
        <Route path="/login" element={<Login />} />
        {/* // Public route */}
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="all-products/:category" element={<ProductsPage />} />
          <Route path="single-product/:id" element={<SingleProduct />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="test" element={<Test />} />
        </Route>
        {/* // Protected route */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="items/stock" element={<Stock />} />
            <Route
              path="items/stock/product-detail/:id"
              element={<ProductDetail />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
