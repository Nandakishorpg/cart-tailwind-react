import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Nav from "./Components/Nav/Nav";
import Cart from "./pages/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav/>
      <Cart/>
    </>
  );
}

export default App;
