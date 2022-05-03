import { useEffect, useState } from "react";

const useHookData = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://secret-inlet-51070.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useHookData;
