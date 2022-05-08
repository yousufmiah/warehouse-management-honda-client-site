import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useHookData from "../../Hooks/useHookData";
import useItemDetail from "../../Hooks/useItemDetails";
import "./Manage.css";

const Manage = () => {
  const navigate = useNavigate();

  const [items, setItems] = useHookData();

  // update
  const handleUpdateItem = (id) => {
    navigate(`/updateItem/${id}`);
    console.log(id);
  };

  // delete
  const handleDelete = (id) => {
    console.log(id);

    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5001/items/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className=" container text-center">
      <h3>Manage Items</h3>
      <div>
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th scope="col">Sl. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Suppler</th>
              <th scope="col">Quantity</th>
              <th scope="col">Images</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              return (
                <tr>
                  <td className="my-5 " scope="row">
                    {i + 1}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <img
                      style={{ height: "70px", width: "70px" }}
                      src={item.img}
                      alt=""
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateItem(item._id)}
                      className="btn btn-primary"
                    >
                      Update Item
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
