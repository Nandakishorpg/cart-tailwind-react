import React from "react";

export default function Nav() {
  return (
    <>
      <div className="nav_Wrapper h-16 p-5  bg-indigo-400 flex justify-between   border-red-500 ">
        <div className="flex  gap-3 items-center">
          <img
            src="https://media.istockphoto.com/id/1151942531/es/vector/icono-del-carrito-de-compras-vector.jpg?s=612x612&w=0&k=20&c=-WmNQsB-Gf4xwMM8np8x4tFIUgx71Tf-RoDfmRK6XfM="
            className="w-10 h-10 hover:transform hover:scale-110 rounded-lg transition hover:duration-450  cursor-pointer"
            alt=""
          />
          <span className="text-white">Shop Here</span>
        </div>
        <div className="flex gap-3   items-center  text-white">
          <span className="cursor-pointer">Cart</span>
          <span className="cursor-pointer">My-Orders</span>
        </div>
      </div>
    </>
  );
}
