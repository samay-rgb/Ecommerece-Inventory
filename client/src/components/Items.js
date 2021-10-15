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
      <div className="card" style={{ maxWidth: "18rem" ,height: "37rem",position:'relative'}}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title my-2">{props.name}</h5>
          <h6>{props.category}</h6>
          <p className="card-text" style={{maxHeight: "5rem",overflowY:'scroll'}}>{props.description}</p>
          <div style={{position:"absolute",bottom:'1rem',left:'1rem'}}>
          <h3 className="price my-3"><span>&#x20B9;</span>{props.price}</h3>
          <button href="/" className="btn btn-primary">
            Add to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
