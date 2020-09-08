import React, { useState, useEffect } from "react";
import axios from "axios";

function Televisions() {
  const [nameOfTv, setNameOfTv] = useState("");
  const [priceOfTv, setPriceOfTv] = useState("");
  const [tvObject, setTvObject] = useState({ name: "", price: "" });

  function handleChange(e) {
    const { value, id } = e.target;
    setTvObject({ ...tvObject, [id]: value });
  }

  async function firstTv() {
    setNameOfTv("LG TV");
    setPriceOfTv(379.99);
  }

  useEffect(() => {
    firstTv();
  }, []);

  async function postTv(e) {
    e.preventDefault();
    try {
      tvObject.name = nameOfTv;
      tvObject.price = priceOfTv;

      const res = await axios.post(
        "http://localhost:8080/television",
        tvObject
      );
      console.log(res.data);

      const res2 = await axios.post("http://localhost:8080/cart", tvObject);
      console.log(res2.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }
  return (
    <div className="television">
      <div className="tvOne">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="375px"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6345/6345462_sd.jpg;maxHeight=640;maxWidth=550"
          />
          <h2>SmartCast TV</h2>
          <h2>50"</h2>
          <h3>$379.99</h3>
          <button
            onClick={(e) => {
              firstTv(e);
              postTv(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}

export default Televisions;
