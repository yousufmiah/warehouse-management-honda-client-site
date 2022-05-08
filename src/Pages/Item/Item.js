import "./Item.css";

const Item = ({ item }) => {
  // console.log(item);
  const { _id, name, description, quantity, supplier, img, price } = item;

  const handleUpdateItem = (id) => {
    const updatedItem = item;
    updatedItem.quantity = quantity - 1;

    // send data to the server
    if (quantity > 0) {
      const url = `https://fast-temple-87800.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Item Delivered successfully!!!");
        });
    }
  };

  return (
    <div className="mb-5">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="w-100" src={img} alt="" />
          </div>
          <div className="flip-card-back">
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <p>{price}</p>
            <button
              onClick={() => handleUpdateItem(_id)}
              className="btn btn-primary"
            >
              Deliver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
