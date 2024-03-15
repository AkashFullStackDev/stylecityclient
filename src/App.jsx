import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer/ProductsContainer";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import LoginContainer from "./containers/LoginContainer/LoginContainer";
import CartContainer from "./containers/CartContainer/CartContainer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/product" element={<ProductsContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route path="/login" element={<LoginContainer requirement="login"/>}  />
        <Route path="/signup" element={<LoginContainer requirement="signup" />} />
        <Route path="/profile" element="" />
        <Route path="/singleproduct" element="" />
        <Route path="/cart" element={<CartContainer />}  />
        <Route path="/checkout" element="" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
