import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-center my-10">
      <p className="text-orange-600 text-xl font-bold">Popular Products</p>
      <h1 className="text-4xl font-bold py-4">Browse Our Products</h1>
      <p className="text-center my-5 text-gray-500">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        products.map(product=> <Productcard key={product.id} product={product}></Productcard>)
      }
      </div>
    </div>
  );
};

export default Product;
