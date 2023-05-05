import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(products);

  const handleAddCart = (index, value) => {
    const a = { name: value.title, price: value.price };
    console.log(index);

    // localStorage.setItem(index, JSON.stringify(a));
   let g= localStorage.getItem(6);
   console.log(g)
  };

  return (
    <div className="bg-white p-16  flex flex-wrap gap-14 justify-between shadow-lg rounded-lg">
      {products &&
        products?.map((value, index) => (
          <div
            className="card1 bg-blue-200 p-3 w-64 h-auto justify-between  flex flex-col rounded-lg h-64 shadow-lg"
            key={index}
          >
            <img
              className="h-64 w-auto rounded-lg shadow-lg"
              src={value?.image}
              alt=""
            />
            <div className="flex flex-col justify-between  gap-3">
              <span className="text-2xl">{value?.title}</span>
              <span>{value?.category}</span>
              {/* <span>{value?.description}</span> */}
              <span className="text-2xl">{value?.price} $</span>
              <button
                onClick={() => {
                  handleAddCart(index, value);
                }}
                className="bg-black text-white shadow-lg rounded-lg p-3 w-70"
              >
                Add To cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
