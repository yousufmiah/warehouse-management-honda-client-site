import { useEffect, useState } from "react";

const useItemDetail = (itemId) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://fast-temple-87800.herokuapp.com/item/${itemId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item, setItem];
};

export default useItemDetail;
