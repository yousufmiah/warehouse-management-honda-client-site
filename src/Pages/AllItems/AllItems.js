import React, { useEffect, useState } from "react";
import "./AllItems.css";

const AllItems = () => {
  const [allitems, setAllitems] = useState([]);
  console.log(allitems);

  useEffect(() => {
    fetch("hondaData.json")
      .then((res) => res.json())
      .then((data) => setAllitems(data));
  }, []);

  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>All Items</h2>
      </div>
      <div className="text-center">
        {allitems.map((item) => (
          <div className="my-4">
            {item.name}, {item.price}{" "}
            <button className="ms-2 btn btn-primary">Delivery</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
