import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Footer from "./components/Footer/Footer";
import Test from "./pages/Test";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
