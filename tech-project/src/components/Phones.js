import React, { useEffect, useState } from "react";
import axios from "axios";

function Phones() {
  const [nameOfPhone, setNameOfPhone] = useState("");
  const [priceOfPhone, setPriceOfPhone] = useState("");
  const [phoneObject, setPhoneObject] = useState({ name: "", price: "" });


  function handleChange(e) {
    const { value, id } = e.target;
    setPhoneObject({ ...phoneObject, [id]: value });
  }

  async function firstPhone() {
    setNameOfPhone("iPhone 11 128GB Red");
    setPriceOfPhone(749.00);
    // console.error(nameOfPhone);
    // console.error(priceOfPhone);
  }

  async function secondPhone() {
      setNameOfPhone("iPhone 11 128GB Purple");
      setPriceOfPhone(749.00);
      // console.error(nameOfPhone);
      // console.error(priceOfPhone);
  }

  async function thirdPhone() {
      setNameOfPhone("iPhone 11 128GB Green");
      setPriceOfPhone(749.00);
      // console.log(nameOfPhone);
      // console.log(priceOfPhone);
  }

  async function fourthPhone() {
      setNameOfPhone("iPhone 11 Pro Max 256GB Gold");
      setPriceOfPhone(1249);
      // console.log(nameOfPhone);
      // console.log(priceOfPhone);
  }

  async function fifthPhone() {
      setNameOfPhone("iPhone 11 Pro Max 256GB Midnight Green");
      setPriceOfPhone(1249);
      // console.log(nameOfPhone);
      // console.log(priceOfPhone);
  }

  async function sixthPhone() {
      setNameOfPhone("iPhone 11 Pro Max 256GB Silver");
      setPriceOfPhone(1249);
      // console.log(nameOfPhone);
      // console.log(priceOfPhone);
  }

  useEffect(() => {
    firstPhone();
    secondPhone();
    thirdPhone();
    fourthPhone();
    fifthPhone();
    sixthPhone();
  }, []);

  async function postPhone(e) {
    e.preventDefault();
    try {
      
      phoneObject.name = nameOfPhone;
      phoneObject.price = priceOfPhone;

      const res = await axios.post("https://frozen-peak-86991.herokuapp.com/phone", phoneObject);
      console.log(res.data);

      const res2 = await axios.post("https://frozen-peak-86991.herokuapp.com/cart", phoneObject);
      console.log(res2.data);

      // const secondRes = await axios.get('https://frozen-peak-86991.herokuapp.com/cart');
      // setPhoneObject(secondRes.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }

  return (
    <div className="phone">
      <div className="phoneOne">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="400px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763"
          />
          <h2>iPhone 11</h2>
          <h2>128GB Red</h2>
          <h3>$749.00</h3>
          <button
            onClick={(e) => {
              firstPhone(e);
              postPhone(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>

      <div className="phoneTwo">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="400px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082"
          />
          <h2>iPhone 11</h2>
          <h2>128GB Purple</h2>
          <h3>$749.00</h3>
          <button
            onClick={(e) => {
              secondPhone(e);
              postPhone(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>

      <div className="phoneThree">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="400px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144838"
          />
          <h2>iPhone 11</h2>
          <h2>128GB Green</h2>
          <h3>$749.00</h3>
          <button
            onClick={(e) => {
              thirdPhone(e);
              postPhone(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>

      <div className="phoneFour">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="400px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566953859132"
          />
          <h2>iPhone 11 Pro Max</h2>
          <h2>256GB Gold</h2>
          <h3>$1249</h3>
          <button
            onClick={(e) => {
              fourthPhone(e);
              postPhone(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>

      <div className="phoneFive">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="400px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-midnight-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566953859350"
          />
          <h2>iPhone 11 Pro Max</h2>
          <h2>256GB Midnight Green</h2>
          <h3>$1249</h3>
          <button
            onClick={(e) => {
              fifthPhone(e);
              postPhone(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>

      <div className="phoneSix">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="400px"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-silver-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566953858420"
          />
          <h2>iPhone 11 Pro Max</h2>
          <h2>256GB Silver</h2>
          <h3>$1249</h3>
          <button
            onClick={(e) => {
              sixthPhone(e);
              postPhone(e);
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}

export default Phones;
