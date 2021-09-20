import React from "react";
import Items from "./Items";

export default function Itemholder() {
  return (
    <div className="container">
      <div className="row">
        <Items price={1500} />
        <Items price={1000} />
        <Items price={1008} />
        <Items price={1005} />
        <Items price={1075} />
        <Items price={1050} />
        <Items price={1200} />
        <Items price={1030} />
        <Items price={1080} />
      </div>
    </div>
  );
}
