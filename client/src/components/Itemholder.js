import React,{useState} from "react";
import Items from "./Items";
// import img1 from "./img1.jpg";
// import lap1 from "./lap1.jpeg";
// import lap2 from "./lap3.jpeg";
// import lap3 from "./lap3.jpeg";
import Axios from 'axios';
export default function Itemholder() { 
  const [productList,setProductList] = useState([]);
  Axios.get("http://localhost:3001/products/getproducts").then((response)=>{
      setProductList(response.data);
  });
  if(productList.length)
  {
    return (
      <div className="container">
        <div className="row">
          {productList.map((element) => {
            return (
              <Items
                key={element.pid}
                price={element.price}
                image={element.img_url}
                name={element.pname}
                category={element.category}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
  else 
  {
    return(
        <div className="container text-center my-3">
          No Items in the inventory :/
        </div>
    );

  }
  
}
