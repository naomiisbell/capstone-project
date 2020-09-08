import React from "react";
import axios from "axios";

function DeletePhone({ phoneName, phonePrice, getPhones, phoneId }) {
  async function delPhone(id) {
    try {
      const res = await axios.delete("http://localhost:8080/phone/" + id);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
    getPhones();
  }

  return (
    <div>
      <p>
        {JSON.stringify(phoneName)} : {phonePrice}
      </p>
      <button id={phoneId} onClick={(e) => delPhone(e.target.id)}>
        Remove Item
      </button>
    </div>
  );
}

export default DeletePhone;
