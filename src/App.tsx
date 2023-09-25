import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProductPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/Products/ProductsPage";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import CartPage from "./pages/Cart/CartPage";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all-products/:category" element={<ProductsPage />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
