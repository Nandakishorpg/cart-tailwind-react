import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav_Wrapper  h-16  px-6 container mx-auto rounded-md  bg-indigo-200 flex justify-between   border-red-500 ">
        <div className="flex  gap-3 items-center">
          <img
            src="https://media.istockphoto.com/id/1151942531/es/vector/icono-del-carrito-de-compras-vector.jpg?s=612x612&w=0&k=20&c=-WmNQsB-Gf4xwMM8np8x4tFIUgx71Tf-RoDfmRK6XfM="
            className="w-10 h-10 hover:transform hover:scale-110 rounded-lg transition hover:duration-450  cursor-pointer"
            alt=""
          />
          <span className="text-black">Shop Here</span>
        </div>
        <div className="flex gap-3   items-center  text-white">
          <Link to="/">
            {" "}
            <span className="text-black">Products</span>
          </Link>
          <Link to="/mycart">
            <span className="text-green-900">My Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
}
