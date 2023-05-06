import React from "react";

export default function ItemComponent({ array }) {
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

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    handleAddCart(index, value);
                  }}
                  className="bg-green-300  border-gray-900 w-4/5 text-stone-700 shadow-lg rounded-lg p-3 w-70"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
