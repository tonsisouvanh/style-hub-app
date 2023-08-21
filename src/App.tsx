import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProductPage";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/Products/ProductsPage";
import Test from "./pages/Test";
import AboutPage from "./pages/About/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all-products" element={<ProductsPage />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// export default App;
export default App;
