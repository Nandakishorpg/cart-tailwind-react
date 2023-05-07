import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function ItemComponent({ array, handle_remove }) {
  const handleRemoveCart = (index, value) => {
    console.log(value);
    handle_remove(value.id);
  };
  return (
    <div className="flex flex-row gap-14 flex-wrap justify-center">
      {array &&
        array.map((value, index) => (
          <div
            className="card1 bg-stone-100 p-4 w-64  justify-between  flex flex-col rounded-lg shadow-lg mb-4 border"
            key={index}
          >
            <img
              className="h-56 w-auto rounded-lg shadow-lg"
              src={value?.image}
              alt=""
            />
            <div className="flex flex-col justify-center  gap-3">
              <span className="text-1xl">{value?.title}</span>
              <span className="text-green-400">{value?.price} $</span>

              <span>{value?.category}</span>

              <div className="flex gap-8 justify-center">
                <button
                  onClick={() => {
                    handleAddCart(index, value);
                  }}
                  className="bg-fuchsia-950 h-12  border-gray-900 w-4/5 text-white shadow-lg rounded-lg p-3 w-70"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    handleRemoveCart(index, value);
                  }}
                  className="bg-red-400 h-12 flex    items-center  border-gray-900 w-4/5 text-white shadow-lg rounded-lg p-3 w-70"
                >
                  <span>Remove</span>

                  <MdRemoveShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
