import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    
      <div className="card card-compact w-96 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-xl font-semibold">Price $ {price}</p>
          <div className="card-actions justify-end">
            
            <Link to={`/checkOut/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
          </div>
        </div>
      </div>
  );
};

export default ServiceCard;
