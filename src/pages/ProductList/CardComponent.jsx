import { React, useContext } from "react";
import { MyContext } from "../../contexts/Cart_Context";

export default function CardComponent({ array }) {
  // let addToCart = [];
  const { cartStore, setCartStore } = useContext(MyContext);
  // console.log(cartStore);
  const handleAddCart = (index, value) => {
    const addToCart = {
      id: value.id,
      title: value.title,
      price: value.price,
      image: value.image,
    };

    console.log(index);
    const uniqueId = cartStore.filter((array) => array.id === value.id);
    console.log(uniqueId);
    if (uniqueId.length >= 1) {
      console.log("present")
    } else {
      setCartStore([...cartStore, addToCart]);
    }
  };
  console.log("cartStore",cartStore);
  return (
    <div className="flex flex-row gap-14 flex-wrap justify-center">
      {array &&
        array.map((value, index) => (
          <div
            className="card1 bg-stone-100 p-4 w-64  justify-between  flex flex-col rounded-lg shadow-lg mb-4 border"
            key={index}
          >
            <img
              className="h-48 w-auto rounded-lg shadow-lg"
              src={value?.image}
              alt=""
            />
            <div className="flex flex-col justify-center  gap-3">
              <span className="text-1xl">{value?.title}</span>
              <span className="text-green-400">{value?.price} $</span>

              <span>{value?.category}</span>
              {/* <span>{value?.description}</span> */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    handleAddCart(index, value);
                  }}
                  className="bg-green-300  border-gray-900 w-3/5 text-stone-700 shadow-lg rounded-lg p-3 w-70"
                >
                  Add To cart
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
