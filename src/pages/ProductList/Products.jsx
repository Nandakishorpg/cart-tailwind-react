import { React, useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import CardComponent from "./CardComponent";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(products);

  return (
    <>
      <div className="container  mx-auto">
        <div className="pt-4 ">
          <Nav />
        </div>
        <div className="bg-white pt-14 flex-col  shadow-lg rounded-lg">
          <div className="w-full h-14 flex justify-center content-center shadow-xl rounded-md mb-20 bg-stone-100">
            <span className=" text-black font-medium flex text-lg items-center">
              Products Listing
            </span>
          </div>
          <CardComponent array={products} />
        </div>
      </div>
    </>
  );
}
