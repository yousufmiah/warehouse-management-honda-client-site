// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHookData from "../../Hooks/useHookData";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useHookData([]);
  // const [items, setItems] = useState([]);
  console.log(items);

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://hidden-castle-09326.herokuapp.com/items")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // }, []);

  const handleAllItems = () => {
    navigate("/allItems");
    // console.log("Clicked");
  };

  return (
    <div id="items" className="container mb-5 ">
      <div className="row ">
        <h1 className="text-center text-primary my-5">Items Section</h1>
        <div className="items-container">
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleAllItems()}
          className="btn btn-primary px-5 my-5"
        >
          All Items
        </button>
      </div>
    </div>
  );
};

export default Items;
