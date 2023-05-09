import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cart_Context from "./contexts/Cart_Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cart_Context>
      <App />
    </Cart_Context>
  </React.StrictMode>
);
