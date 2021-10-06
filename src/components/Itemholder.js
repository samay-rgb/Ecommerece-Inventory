import React from "react";
import Items from "./Items";
import img1 from "./img1.jpg";
export default function Itemholder() {
  return (
    <div className="container">
      <div className="row">
        <Items price={1500} image={img1} />
        <Items price={1000} image={img1} />
        <Items price={1008} image={img1} />
        <Items price={1005} image={img1} />
        <Items price={1075} image={img1} />
        <Items price={1050} image={img1} />
        <Items price={1200} image={img1} />
        <Items price={1030} image={img1} />
        <Items price={1080} image={img1} />
      </div>
    </div>
  );
}
