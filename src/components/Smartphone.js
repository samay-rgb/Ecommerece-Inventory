import React from "react";
import Items from "./Items";
import sm from "./sm.jpeg";
export default function Smartphone() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">
          Find best selling smartphones according to your budget. Get additional
          10% off on prepaid orders
        </h1>
        <div className="row">
          <Items image={sm} price={100} />
          <Items image={sm} price={150} />
          <Items image={sm} price={1000} />
          <Items image={sm} price={200} />
          <Items image={sm} price={300} />
          <Items image={sm} price={500} />
        </div>
      </div>
    </div>
  );
}
