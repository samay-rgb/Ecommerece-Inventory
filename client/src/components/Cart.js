import React, { useState } from "react";
import Cartitem from "./Cartitem";
import { Link } from "react-router-dom";
export default function Cart() {
  const [cartItems, setCartItem] = useState([
    { imgSrc: "/", productName: "Laptop1", qty: 1, productPrice: 1200, id: 1 },
    { imgSrc: "/", productName: "Laptop2", qty: 1, productPrice: 1550, id: 2 },
    { imgSrc: "/", productName: "Laptop3", qty: 1, productPrice: 2500, id: 3 },
    { imgSrc: "/", productName: "Laptop4", qty: 1, productPrice: 500, id: 4 },
    { imgSrc: "/", productName: "Laptop5", qty: 1, productPrice: 150, id: 5 },
    { imgSrc: "/", productName: "Laptop6", qty: 1, productPrice: 1599, id: 6 },
  ]);
  const onRemove = (item) => {
    console.log("I am the remove of ", item);
    setCartItem(
      cartItems.filter((event) => {
        return event !== item;
      })
    );
  };

  const totalCost = (cartItems) => {
    let cost = 0;
    for (let i = 0; i < cartItems.length; i++) {
      // console.log(cartItems[i]);
      cost += cartItems[i].productPrice * cartItems[i].qty;
    }
    return cost;
  };
  console.log(cartItems);

  console.log(totalCost(cartItems));
  return (
    <div>
      <div className="container">
        <div
          className="container ml-0"
          style={{ width: "60%", margin: "0", padding: "0" }}
        >
          {cartItems.map((item) => {
            return <Cartitem item={item} key={item.id} onRemove={onRemove} />;
          })}
          <Link
            to="/checkout"
            className="btn btn-primary text-center "
            style={{
              marginLeft: "640px",
              width: "175px",
              marginBottom: "10px",
            }}
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
