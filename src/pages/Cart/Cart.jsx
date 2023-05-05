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

  return (
    <div className="bg-white flex flex-wrap gap-14 shadow-lg rounded-lg">
      {products &&
        products?.map((value, index) => (
          <div
            className="card1 bg-blue-200 p-3 w-64 h-auto flex flex-col rounded-lg h-64 shadow-lg"
            key={index}
          >
            <img className="h-auto w-full rounded-lg shadow-lg" src= {value?.image} alt="" />
           <span>{value?.title}</span>
           <span>{value?.category}</span>
           <span>{value?.description}</span>
           <span>{value?.price}</span>
          </div>
        ))}
     
    </div>
  );
}
