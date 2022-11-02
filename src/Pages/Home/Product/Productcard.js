import React from "react";
import { FaStar } from 'react-icons/fa';

const Productcard = ({ product }) => {
  console.log(product);
  return (
    <div className="card p-4 shadow-xl">
      <figure>
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="text-xl flex justify-center items-center ">
            <FaStar className="text-orange-500"></FaStar>
            <FaStar className="text-orange-500"></FaStar>
            <FaStar className="text-orange-500"></FaStar>
            <FaStar className="text-orange-500"></FaStar>
            <FaStar className="text-orange-500"></FaStar>
            
        </div>
        
        <p className="text-xl font-bold">{product.name}</p>
        <p className="text-xl font-bold">${product.price}</p>

      </div>
    </div>
  );
};

export default Productcard;
