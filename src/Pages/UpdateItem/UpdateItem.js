import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useItemDetail from "../../Hooks/useItemDetails";
import "./UpdateItem.css";

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { updateId } = useParams();
  console.log(updateId);

  const [item, setItem] = useItemDetail(updateId);
  // console.log(item);

  const onSubmit = (data) => {
    // Post New Data to server
    const url = `https://fast-temple-87800.herokuapp.com/updateItem/${updateId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("item Updated successfully!!!");
        setItem(data);
      });
    reset();
  };

  return (
    <div className="w-25 mx-auto">
      <div className="text-center my-4 font-bold">
        <h3>Updating Item</h3>
      </div>
      <form
        className=" add-new d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          defaultValue={item.name}
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          defaultValue={item.description}
          {...register("description")}
        />
        <input
          defaultValue={item.quantity}
          type="number"
          {...register("quantity")}
        />
        <input defaultValue={item.price} type="text" {...register("price")} />
        <input defaultValue={item.img} type="text" {...register("img")} />
        <input className="btn btn-primary" type="submit" value="Update Item" />
      </form>
    </div>
  );
};

export default UpdateItem;
