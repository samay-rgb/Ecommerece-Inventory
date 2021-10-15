import React,{useState} from "react";
import Items from "./Items";
import Axios from 'axios';
export default function Laptops() {
  const [laptops,setLaptops] = useState([]);
  Axios.get("http://localhost:3001/getlaptops").then((response)=>{
      setLaptops(response.data);
  });
  if(laptops.length)
  {
    return (
      <div className="container">
        <h1 className="text-center">
          Find best selling laptops according to your budget. Get additional 10%
          off this festive season.
        </h1>
        <div className="row">
          {laptops.map((element) => {
            return (
              <Items
                key={element.pid}
                price={element.price}
                image={element.img_url}
                name={element.pname}
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
          No Laptops in the inventory :/
        </div>
    );

  }
  
}
