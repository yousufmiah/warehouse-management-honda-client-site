import { useEffect, useState } from "react";

const useHookData = () => {
  const [items, setItems] = useState([]);

  // console.log(items);
  useEffect(() => {
    fetch("http://localhost:5001/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);
  return [items, setItems];
};

export default useHookData;
