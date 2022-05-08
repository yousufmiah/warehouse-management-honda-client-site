import { useNavigate } from "react-router-dom";
import useHookData from "../../Hooks/useHookData";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useHookData([]);
  console.log(items);

  const sliceItems = items.slice(0, 6);
  console.log(sliceItems);

  const navigate = useNavigate();
  const handleAllItems = () => {
    navigate("/allItems");
    // console.log("Clicked");
  };

  return (
    <div id="items" className="container">
      <div className="row ">
        <h1 className="text-center text-primary my-5">Items Section</h1>
        <div className="items-container">
          {sliceItems.map((item) => (
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
