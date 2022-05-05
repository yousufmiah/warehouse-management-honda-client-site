import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  console.log(item);
  const { _id, name, description, quantity, img, price } = item;

  const navigate = useNavigate();

  const navigateItem = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className="mb-5 ">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Quantity: {quantity}</p>
            <p>{price}</p>
            <button
              onClick={() => navigateItem(_id)}
              className="btn btn-primary"
            >
              Deliver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
