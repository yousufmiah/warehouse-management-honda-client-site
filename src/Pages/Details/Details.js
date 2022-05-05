import React from "react";
import { useParams } from "react-router-dom";
import useHookData from "../../Hooks/useHookData";
import "./Details.css";

const Details = () => {
  const { itemId } = useParams();
  return (
    <div className="text-center">
      <h2>Delivered Item: {itemId}</h2>
    </div>
  );
};

export default Details;
