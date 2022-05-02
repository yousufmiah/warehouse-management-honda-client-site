import React from "react";
import useHookData from "../../Hooks/useHookData";
import ManageItems from "../ManageItems/ManageItems";
import "./Manage.css";

const Manage = () => {
  const [items, setItems] = useHookData([]);
  return (
    <div className="text-center">
      <h3>Manage</h3>
      <div>
        {items.map((item) => (
          <ManageItems item={item} key={item._id}></ManageItems>
        ))}
      </div>
    </div>
  );
};

export default Manage;
