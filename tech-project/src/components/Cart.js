import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteItem from "./DeleteItem";

function Cart() {
  const [items, setItems] = useState(null);

  async function grabAllItems() {
    try {
      const res = await axios.get("https://frozen-peak-86991.herokuapp.com/cart");
      setItems(res.data);

      // const res2 = await axios.get("https://frozen-peak-86991.herokuapp.com/television");
      // setItems(res2.data);

      // const res3 = await axios.get("https://frozen-peak-86991.herokuapp.com/computer");
      // setItems(res3.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }

  useEffect(() => {
    grabAllItems();
  }, []);

  return (
    <div>
      {items
        ? items.map((item) => (
            <DeleteItem
              itemId={item.id}
              itemName={item.name}
              itemPrice={item.price}
              getItems={grabAllItems}
            />
          ))
        : "Loading..."}
    </div>
  );
}

export default Cart;
