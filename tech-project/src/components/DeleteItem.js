import React from "react";
import axios from "axios";

function DeleteItem({ itemName, itemPrice, getItems, itemId }) {
  async function delItem(id) {
    try {
      // const res = await axios.delete("https://frozen-peak-86991.herokuapp.com/phone/" + id);
      // console.log(res.data);

      // const res2 = await axios.delete("https://frozen-peak-86991.herokuapp.com/computer/" + id);
      // console.log(res2.data);

      // const res3 = await axios.delete("https://frozen-peak-86991.herokuapp.com/television/" + id);
      // console.log(res3.data);

      const res4 = await axios.delete("https://frozen-peak-86991.herokuapp.com/cart/" + id);
      console.log(res4.data);
      
    } catch (e) {
      console.error(e);
    }
    getItems();
  }

  return (
    <div>
      <p>
        {JSON.stringify(itemName)} : {itemPrice}
      </p>
      <button id={itemId} onClick={(e) => delItem(e.target.id)}>
        Remove Item
      </button>
    </div>
  );
}

export default DeleteItem;
