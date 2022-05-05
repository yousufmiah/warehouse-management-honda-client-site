import useHookData from "../../Hooks/useHookData";
import Item from "../Item/Item";
import "./AllItems.css";

const AllItems = () => {
  const [items, setItems] = useHookData([]);
  console.log(items);

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
