import { useEffect, useState } from "react";

const useHookData = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch("https://hidden-castle-09326.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useHookData;
