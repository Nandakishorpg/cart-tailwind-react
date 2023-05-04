import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-3 bg-white shadow-lg rounded-lg">
      <div>
        <div className="card1 bg-blue-200 w-44 rounded-lg h-44 shadow-lg"></div>
      </div>
      class
    </div>
  );
}
