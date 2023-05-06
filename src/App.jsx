import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Nav from "./Components/Nav/Nav";
import Products from "./pages/ProductList/Products";
import MyCart from "./pages/Cart/MyCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/mycart" element={<MyCart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
