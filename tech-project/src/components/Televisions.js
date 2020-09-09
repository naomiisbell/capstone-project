import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./component.css";

function Televisions() {
  const [nameOfTv, setNameOfTv] = useState("");
  const [priceOfTv, setPriceOfTv] = useState("");
  const [tvObject, setTvObject] = useState({ name: "", price: "" });

  function handleChange(e) {
    const { value, id } = e.target;
    setTvObject({ ...tvObject, [id]: value });
  }

  async function firstTv() {
    setNameOfTv('SmartCast TV 50 inch');
    setPriceOfTv(379.99);
  }

  async function secondTv() {
    setNameOfTv('Samsung TV 65 inch');
    setPriceOfTv(899.99);
  }

  async function thirdTv() {
    setNameOfTv('Toshiba TV 43 inch');
    setPriceOfTv(229.99);
  }

  async function fourthTv() {
    setNameOfTv('Insignia TV 40 inch');
    setPriceOfTv(129.99);
  }

  async function fifthTv() {
    setNameOfTv('Hisense TV 70 inch');
    setPriceOfTv(499.99);
  }

  async function sixthTv() {
    setNameOfTv('LG TV 75 inch');
    setPriceOfTv(749.99);
  }

  useEffect(() => {
    firstTv();
    secondTv();
    thirdTv();
    fourthTv();
    fifthTv();
    sixthTv();
  }, []);

  async function postTv(e) {
    e.preventDefault();
    try {
      tvObject.name = nameOfTv;
      tvObject.price = priceOfTv;

      const res = await axios.post(
        "https://frozen-peak-86991.herokuapp.com/television",
        tvObject
      );
      console.log(res.data);

      const res2 = await axios.post(
        "https://frozen-peak-86991.herokuapp.com/cart",
        tvObject
      );
      console.log(res2.data);
    } catch (e) {
      console.error(e, e.message);
    }
  }
  return (
    <div>
      <div className="tvSecOne">
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
            <div className="btnOne">
              <Button
                onClick={(e) => {
                  firstTv(e);
                  postTv(e);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>

        <div className="tvTwo">
          <form onChange={(e) => handleChange(e)}>
            <img
              alt=""
              width="375px"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6325/6325564_sd.jpg;maxHeight=640;maxWidth=550"
            />
            <h2>Samsung TV</h2>
            <h2>65"</h2>
            <h3>$899.99</h3>
            <div className="btnTwo">
              <Button
                onClick={(e) => {
                  secondTv(e);
                  postTv(e);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>

        <div className="tvThree">
          <form onChange={(e) => handleChange(e)}>
            <img
              alt=""
              width="375px"
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398129_sd.jpg;maxHeight=640;maxWidth=550"
            />
            <h2>Toshiba TV</h2>
            <h2>43"</h2>
            <h3>$229.99</h3>
            <div className="btnThree">
              <Button
                onClick={(e) => {
                  thirdTv(e);
                  postTv(e);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>
      </div>  

        <div className="tvSecTwo">
          <div className="tvFour">
            <form onChange={(e) => handleChange(e)}>
              <img
                alt=""
                width="375px"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398122_sd.jpg;maxHeight=640;maxWidth=550"
              />
              <h2>Insignia TV</h2>
              <h2>40"</h2>
              <h3>$129.99</h3>
              <div className="btnFour">
                <Button
                  onClick={(e) => {
                    fourthTv(e);
                    postTv(e);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </form>
          </div>

          <div className="tvFive">
            <form onChange={(e) => handleChange(e)}>
              <img
                alt=""
                width="375px"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404002_sd.jpg;maxHeight=640;maxWidth=550"
              />
              <h2>Hisense TV</h2>
              <h2>70"</h2>
              <h3>$499.99</h3>
              <div className="btnFive">
                <Button
                  onClick={(e) => {
                    fifthTv(e);
                    postTv(e);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </form>
          </div>

          <div className="tvSix">
            <form onChange={(e) => handleChange(e)}>
              <img
                alt=""
                width="375px"
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417303_sd.jpg;maxHeight=640;maxWidth=550"
              />
              <h2>LG TV</h2>
              <h2>75"</h2>
              <h3>$749.99</h3>
              <div className="btnSix">
                <Button
                  onClick={(e) => {
                    sixthTv(e);
                    postTv(e);
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

export default Televisions;
