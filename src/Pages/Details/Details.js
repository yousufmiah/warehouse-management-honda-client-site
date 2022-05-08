import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { itemId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5001/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [itemId]);
  return (
    <div className="text-center">
      <h2>Delivered Item Name: {items.name}</h2>
      <img src={items.img} alt="" />
      <p>
        <strong>Price:</strong> {items.price}
      </p>
    </div>
  );
};

export default Details;
