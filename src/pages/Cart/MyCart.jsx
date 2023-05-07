import { React, useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import ItemComponent from "./ItemComponent";

export default function MyCart() {
  const [cartState, setCartState] = useState();
  useEffect(() => {
    let cartItems = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("ProductItem-")) {
        const cartItemsJson = localStorage.getItem(key);
        const cartItem = cartItemsJson ? JSON.parse(cartItemsJson) : null;
        if (cartItem) {
          cartItems = cartItems.concat(cartItem);
        }
      }
    }
    setCartState(cartItems);
    
  }, []);
  console.log("state>>>>",cartState);
  const handleRemoveCart = async (index) => {
    console.log(index)
    const key = `ProductItem-${index}`;
    console.log("Key of Item to remove>>", key);
    localStorage.removeItem(key);
  
    window.location.reload()
   
  };

  return (
    <>
      <div className="px-16">
        <Nav />
      </div>
      <div className="bg-white p-16 flex-col  shadow-lg rounded-lg">
        <div className="w-full h-14 flex justify-center content-center shadow-xl rounded-md mb-20 bg-stone-100">
          <span className=" text-black font-medium flex text-lg items-center">
            Your cart
          </span>
        </div>

        <ItemComponent handle_remove={handleRemoveCart} array={cartState} />
      </div>
    </>
  );
}
