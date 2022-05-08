import { useEffect, useState } from "react";
// import useHookData from "../../Hooks/useHookData";
import Item from "../Item/Item";
import "./AllItems.css";

const AllItems = () => {
  // const [items, setItems] = useHookData([]);
  const [items, setItems] = useState([]);
  console.log(items);

  const [limit, setLimit] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const url = `http://localhost:5001/items?limit=${limit}&pageNumber=${pageNumber}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [limit, pageNumber]);

  return (
    <div id="items" className="container mb-5 ">
      <div className="row ">
        <h1 className="text-center text-primary my-5">All Items</h1>
        <div className="items-container">
          {items?.length ? (
            items.map((item) => <Item key={item._id} item={item}></Item>)
          ) : (
            <div className=" text-center">
              <h4>data not found</h4>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 my-3 d-flex justify-content-end">
        {[...Array(5).keys()].map((number) => (
          <div
            onClick={() => setPageNumber(number)}
            className={`mx-3 border border-black px-2 cursor-pointer ${
              pageNumber === number ? "bg-black text-white" : ""
            }`}
          >
            {number + 1}
          </div>
        ))}
        <select onChange={(e) => setLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllItems;
