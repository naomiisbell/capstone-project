import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteItem from "./DeleteItem";
import "./component.css";
import Button from "@material-ui/core/Button";

function Cart() {
  // setting my useState variables 
  const [items, setItems] = useState(null);
  const [total, setTotal] = useState(null);

  // function that grabs all the items from my cart db
  async function grabAllItems() {
    try {
      const res = await axios.get(
        "https://frozen-peak-86991.herokuapp.com/cart"
      );
      setItems(res.data);

      // const res2 = await axios.get("https://frozen-peak-86991.herokuapp.com/television");
      // setItems(res2.data);

      // const res3 = await axios.get("https://frozen-peak-86991.herokuapp.com/computer");
      // setItems(res3.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }

  // getTotal function grabs the getTotal method from my backend to calculate my total
  async function getTotal(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://frozen-peak-86991.herokuapp.com/cart/cartTotal"
      );
      console.error(res.data);
      setTotal(res.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }

  useEffect(() => {
    grabAllItems();
  }, []);

  return (
    <div>
      {/* mapping through the items that are posted in the cart db then i'm calling on the grabAllItems func */}
      <div className="items">
        {items
          ? items.map((item) => (
              <DeleteItem
                itemId={item.id}
                itemName={item.name}
                itemPrice={item.price}
                getItems={grabAllItems}
              />
            ))
          : "Empty"}
      </div>
      <div className="totalBtn">
        <Button fontSize="100px" onClick={(e) => getTotal(e)}>Total</Button>
      </div>
      <h2 className="totalStyle">${total}</h2>
    </div>
  );
}

export default Cart;
