import { useNavigate } from "react-router-dom";
import useHookData from "../../Hooks/useHookData";
import Item from "../Item/Item";
import "./AllItems.css";

const AllItems = () => {
  const [items, setItems] = useHookData([]);
  // const [items, setItems] = useState([]);
  console.log(items);

  // const navigate = useNavigate();
  // const handleAllItems = () => {
  //   navigate("/allItems");
  //   // console.log("Clicked");
  // };

  return (
    <div id="items" className="container mb-5 ">
      <div className="row ">
        <h1 className="text-center text-primary my-5">All Items</h1>
        <div className="items-container">
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;

// ==========================
// ==========================
// ==========================
// import React, { useEffect, useState } from "react";
// import "./AllItems.css";

// const AllItems = () => {
//   const [allitems, setAllitems] = useState([]);
//   console.log(allitems);

//   useEffect(() => {
//     fetch("hondaData.json")
//       .then((res) => res.json())
//       .then((data) => setAllitems(data));
//   }, []);

//   return (
//     <div className="container">
//       <div className="text-center my-4">
//         <h2>All Items</h2>
//       </div>
//       <div className="text-center">
//         {allitems.map((item) => (
//           <div className="my-4">
//             {item.name}, {item.price}{" "}
//             <button className="ms-2 btn btn-primary">Delivery</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllItems;
