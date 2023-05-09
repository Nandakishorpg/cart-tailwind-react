import { createContext } from "react";

export const MyContext = createContext();

import { React, useState } from "react";

export default function Cart_Context({ children }) {
  const [cartStore, setCartStore] = useState([]);
  const value = { cartStore, setCartStore };
  return (
    <>
      <MyContext.Provider value={value}>{children}</MyContext.Provider>
    </>
  );
}
