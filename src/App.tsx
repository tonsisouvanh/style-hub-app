import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProductPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/Products/ProductsPage";
import Test from "./pages/Test";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import CartPage from "./pages/Cart/CartPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all-products/:category" element={<ProductsPage />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// export default App;
export default App;
