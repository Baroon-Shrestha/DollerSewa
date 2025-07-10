import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Pages/contact";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Components/ProductsComponents/Cart";
import { Toaster } from "react-hot-toast";
import FAQmain from "./Components/FAQ/FAQmain";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQmain />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
