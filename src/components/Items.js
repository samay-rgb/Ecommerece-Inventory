import React from "react";
export default function Items(props) {
  /*const [counter, setCount] = useState(0);
  const handleDec = () => {
    if (counter) setCount(counter - 1);
  };
  const handleInc = () => {
    setCount(counter + 1);
  };
  const changeOne = () => {
    setCount(1);
  };*/
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">HP Pavillion Laptop</h5>
          <p className="card-text">
            HP 15 11th Gen Intel Core i3 Processor 15.6" (39.62cms) FHD Laptop
            with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MS
            Office/Natural Silver/1.76 Kg), 15s-du3038TU
          </p>
          <h3 className="price">Price = ${props.price}</h3>
          <button href="/" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
