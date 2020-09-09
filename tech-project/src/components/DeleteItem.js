import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


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
      {/* i used JSON.stringify() to convert my objects to a string when displayed on the page */}
      <p>
        {JSON.stringify(itemName)} : {itemPrice}
      </p>
      <Button id={itemId} onClick={(e) => delItem(e.target.id)}>
        Remove Item
      </Button>
    </div>
  );
}

export default DeleteItem;
