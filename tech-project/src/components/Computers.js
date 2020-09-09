import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import './component.css';

function Computers() {
  const [nameOfComp, setNameOfComp] = useState("");
  const [priceOfComp, setPriceOfComp] = useState("");
  const [compObject, setCompObject] = useState({ name: "", price: "" });

  function handleChange(e) {
    const { value, id } = e.target;
    setCompObject({ ...compObject, [id]: value });
  }

  async function firstComp() {
    setNameOfComp("MacBook Air Gold 13 inch 8GB Memory - 256GB SSD Storage");
    setPriceOfComp(999.0);
  }

  async function secondComp() {
    setNameOfComp("MacBook Air Silver 13 inch 8GB Memory - 256GB SSD Storage");
    setPriceOfComp(999.0);
  }

  async function thirdComp() {
    setNameOfComp(
      "MacBook Air Space Gray 13 inch 8GB Memory - 256GB SSD Storage"
    );
    setPriceOfComp(999.0);
  }

  async function fourthComp() {
    setNameOfComp(
      "Surface Laptop 3 Sandstone 13.5 inch 8GB Memory - 256GB SSD Storage"
    );
    setPriceOfComp(1299.99);
  }

  async function fifthComp() {
    setNameOfComp(
      "Surface Laptop 3 Black 13.5 inch 8GB Memory - 256GB SSD Storage"
    );
    setPriceOfComp(1299.99);
  }

  async function sixthComp() {
    setNameOfComp(
      "Surface Laptop 3 Cobalt Blue 13.5 inch 8GB Memory - 256GB SSD Storage"
    );
    setPriceOfComp(1299.99);
  }

  useEffect(() => {
    firstComp();
    secondComp();
    thirdComp();
    fourthComp();
    fifthComp();
    sixthComp();
  }, []);

  async function postComp(e) {
    e.preventDefault();
    try {
      compObject.name = nameOfComp;
      compObject.price = priceOfComp;

      const res = await axios.post(
        "https://frozen-peak-86991.herokuapp.com/computer",
        compObject
      );
      console.log(res.data);

      const res2 = await axios.post(
        "https://frozen-peak-86991.herokuapp.com/cart",
        compObject
      );
      console.log(res2.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }
  return (
    <div>
      <div className="compSecOne">
        <div className="compOne">
          <form onChange={(e) => handleChange(e)}>
            <img
              alt=""
              width="350px"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713859040"
            />
            <h2>MacBook Air Gold 13 inch</h2>
            <h2>8GB Memory - 256GB SSD</h2>
            <h3>$999.00</h3>
            <div className="btnOne">
              <Button
                onClick={(e) => {
                  firstComp(e);
                  postComp(e);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>

        <div className="compTwo">
          <form onChange={(e) => handleChange(e)}>
            <img
              alt=""
              width="350px"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713861325"
            />
            <h2>MacBook Air Silver 13 inch</h2>
            <h2>8GB Memory - 256GB SSD</h2>
            <h3>$999.00</h3>
            <div className="btnTwo">
              <Button
                onClick={(e) => {
                  secondComp(e);
                  postComp(e);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>

        <div className="compThree">
          <form onChange={(e) => handleChange(e)}>
            <img
              alt=""
              width="350px"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713862468"
            />
            <h2>MacBook Air Space Gray 13 inch</h2>
            <h2>8GB Memory - 256GB SSD</h2>
            <h3>$999.00</h3>
            <div className="btnThree">
              <Button
                onClick={(e) => {
                  thirdComp(e);
                  postComp(e);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>
      </div>

    <div className="compSecTwo">
      <div className="compFour">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="350px"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYj5?ver=0b43&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true"
          />
          <h2>Surface Laptop 3 Sandstone 13.5 inch</h2>
          <h2>8GB Memory - 256GB SSD</h2>
          <h3>$1299.99</h3>
          <div className="btnFour">
            <Button
              onClick={(e) => {
                fourthComp(e);
                postComp(e);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </form>
      </div>

      <div className="compFive">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="350px"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oQuB?ver=28af&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true"
          />
          <h2>Surface Laptop 3 Black 13.5 inch</h2>
          <h2>8GB Memory - 256GB SSD</h2>
          <h3>$1299.99</h3>
          <div className="btnFive">
            <Button
              onClick={(e) => {
                fifthComp(e);
                postComp(e);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </form>
      </div>

      <div className="compSix">
        <form onChange={(e) => handleChange(e)}>
          <img
            alt=""
            width="350px"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYk9?ver=0da5&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true"
          />
          <h2>Surface Laptop 3 Cobalt Blue 13.5 inch</h2>
          <h2>8GB Memory - 256GB SSD</h2>
          <h3>$1299.99</h3>
          <div className="btnSix">
            <Button
              onClick={(e) => {
                sixthComp(e);
                postComp(e);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Computers;
