import React from "react";
import "./ManageItems.css";

const ManageItems = ({ item }) => {
  const { _id, name, description, quantity, price, img } = item;
  return (
    <div className=" container d-flex my-3 ">
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{quantity}</h3>
      <h3>{price}</h3>
      <img
        style={{ width: "70px", height: "70px" }}
        className="ms-5"
        src={img}
        alt=""
      />
      <button className="btn btn-primary m-2">Delete</button>
      <button className="btn btn-primary m-2">Update</button>
    </div>
  );
};

export default ManageItems;
