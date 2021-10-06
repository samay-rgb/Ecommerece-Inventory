import React, { useState } from "react";
import Cartitem from "./Cartitem";
import img1 from "./img1.jpg";
export default function Cart() {
  const [cartItems, setCartItem] = useState([
    { imgSrc: img1, productName: "Laptop1", qty: 1, productPrice: 1200, id: 1 },
    { imgSrc: img1, productName: "Laptop2", qty: 1, productPrice: 1550, id: 2 },
    { imgSrc: img1, productName: "Laptop3", qty: 1, productPrice: 2500, id: 3 },
    { imgSrc: img1, productName: "Laptop4", qty: 1, productPrice: 500, id: 4 },
    { imgSrc: img1, productName: "Laptop5", qty: 1, productPrice: 150, id: 5 },
    { imgSrc: img1, productName: "Laptop6", qty: 1, productPrice: 1599, id: 6 },
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
    <>
      <div className="d-flex flex-row">
        <div
          className="container ml-0"
          style={{ width: "60%", margin: "0", padding: "0" }}
        >
          {cartItems.map((item) => {
            return <Cartitem item={item} key={item.id} onRemove={onRemove} />;
          })}
        </div>
        <div
          className="p-2 my-8 container"
          style={{
            width: "35%",
            marginLeft: "50px",
            border: "5px solid",
            height: "20%",
            marginTop: "18px",
            borderRadius: "15px",
          }}
        >
          <h1>Name: Sasuke Uchiha</h1>
          <h3>
            Address: Nowhere Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eum, cum.
          </h3>
          <h3>Total Cost: ${totalCost(cartItems)}</h3>
          <button className="btn btn-success my-3">Procced to buy</button>
        </div>
      </div>
    </>
  );
}
