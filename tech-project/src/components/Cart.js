import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteItem from "./DeleteItem";

function Cart() {
  const [phones, setPhones] = useState(null);

  async function grabAllPhones() {
    try {
      const res = await axios.get("http://localhost:8080/phone");
      setPhones(res.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }

  useEffect(() => {
    grabAllPhones();
  }, []);

  return (
    <div>
      {phones
        ? phones.map((phone) => (
            <DeleteItem
              phoneId={phone.id}
              phoneName={phone.name}
              phonePrice={phone.price}
              getPhones={grabAllPhones}
            />
          ))
        : "Loading..."}
    </div>
  );
}

export default Cart;
