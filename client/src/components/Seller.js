import React, { useState } from "react";
import Axios from "axios";
export default function Seller() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [pname, setPname] = useState("");
  const [category, setCategory] = useState("Smartphone");
  const [img_url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [products,setProducts] = useState([]);
  Axios.get("http://localhost:3001/getSellerItems").then((response)=>{
      setProducts(response.data);
  });
  const addproduct = () => {
    console.log([pname,quantity,price,img_url,category,description]);
    Axios.post("http://localhost:3001/addproducts", {
      pname: pname,
      quantity: quantity,
      price: price,
      category: category,
      img_url: img_url,
      description:description,
    }).then(() => {
      alert('Product added successfuly');
      console.log("successfuly added the product");
    });
  };
  return (
    <div className="container my-3">
      <h1>Welcome SaiKumar Andure! </h1>
      <h4>Here you can easily manage your products</h4>
      <div className="container my-3">
        <div className="viewproducts">
          <ol className="list-group list-group-numbered">
            {products.map((element) => {
              return (
                <li
                  key={element.pid}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{element.pname}</div>
                    Rate=  <span>&#x20B9;</span>{element.price}
                  </div>
                  <span className="badge bg-primary rounded-pill">
                    {element.quantity}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <hr />
      <div className="addproduct container my-3">
        <h2 className="text-center">
          Add new products or manage existing products
        </h2>
        <form action="" className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setPname(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Description
            </label>
            <textarea class="form-control" id="description" rows="3" onChange={(event)=>{
                setDescription(event.target.value);
            }}></textarea>
          </div>
          <div class="mb-3">
      <label for="Select" class="form-label">Category</label>
      <select id="Select" class="form-select" onChange={(event)=>{setCategory(event.target.value);}}>
        <option>Smartphone</option>
        <option>Laptop</option>
        <option>Wireless</option>
        <option>Camera</option>
        <option>Other</option>
      </select>
    </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="img_url"
              name="img_url"
              aria-describedby="emailHelp"
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={addproduct}
          >
            Add to Catalogue
          </button>
          <button type="submit" className="btn btn-info mx-3">
            Update catalogue
          </button>
        </form>
      </div>
    </div>
  );
}