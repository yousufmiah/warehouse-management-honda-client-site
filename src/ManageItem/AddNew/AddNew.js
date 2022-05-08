import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddNew.css";

const AddNew = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const url = `https://fast-temple-87800.herokuapp.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    Swal.fire({
      icon: "success",
      text: "Item has been saved.",
      showConfirmButton: false,
      timer: 2000,
    });
    reset();
  };

  return (
    <div className="w-25 mx-auto">
      <div className="text-center my-4 font-bold">
        <h3>Add New Item</h3>
      </div>
      <form
        className=" add-new d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Description" {...register("description")} />
        <input placeholder="Quantity" type="number" {...register("quantity")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Image URL" type="text" {...register("img")} />
        <input placeholder="Supplier" type="text" {...register("supplier")} />
        <input className="btn btn-primary" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddNew;
