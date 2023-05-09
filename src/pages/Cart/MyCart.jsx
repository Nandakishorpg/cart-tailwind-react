import { React, useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import ItemComponent from "./ItemComponent";
import { MyContext } from "../../contexts/Cart_Context";

export default function MyCart() {
  const { cartStore, setCartStore } = useContext(MyContext);
  return (
    <>
      <div className="container mx-auto h-full">
        <Nav />
        <div className="bg-white pt-14 h-full  flex-col  shadow-lg rounded-lg">
        {cartStore.length >= 1 && (
          <div className="w-full h-14 flex justify-center content-center shadow-xl rounded-md mb-20 bg-stone-100">
            <span className=" text-black font-medium flex text-lg items-center">
              Your cart
            </span>
          </div>
        )}
        {cartStore?.length >= 1 ? (
          <ItemComponent />
        ) : (
          <span className=" text-red-400 font-medium flex justify-center text-lg items-center">
            Your Cart Is empty!!!!!
          </span>
        )}
      </div>
      </div>
      
    </>
  );
}
