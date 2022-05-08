import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./AllItem.css";

const AllItem = ({ item }) => {
  console.log(item);
  const { _id, name, description, quantity, img, price } = item;
  const navigate = useNavigate();

  const handleUpdateItem = (id) => {
    const updatedItem = item;
    updatedItem.quantity = quantity - 1;

    // send data to the server
    if (quantity > 0) {
      const url = `https://fast-temple-87800.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      Swal.fire({
        icon: "success",
        text: "Delivered Success.",
        showConfirmButton: false,
        timer: 2000,
      });
    }

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
              onClick={() => handleUpdateItem(_id)}
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

export default AllItem;
