import React from "react";
import useHookData from "../../Hooks/useHookData";
import "./Manage.css";

const Manage = () => {
  const [items, setItems] = useHookData();
  console.log(items);

  const handleDelete = (id) => {
    console.log(id);

    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://powerful-citadel-84151.herokuapp.com/item/${id}`;
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
    <div className="text-center">
      <h3>Manage Items</h3>
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">SL. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Images</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <th className="my-5 " scope="row"></th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
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
                    <button className="btn btn-primary">Update</button>
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
