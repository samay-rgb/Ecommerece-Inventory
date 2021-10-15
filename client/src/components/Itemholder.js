import React,{useState} from "react";
import Items from "./Items";
// import img1 from "./img1.jpg";
// import lap1 from "./lap1.jpeg";
// import lap2 from "./lap3.jpeg";
// import lap3 from "./lap3.jpeg";
import Axios from 'axios';
export default function Itemholder() {
  // const items = [
  //   {
  //     id: 1,
  //     name: "HP Laptop",
  //     price: "1000",
  //     image: img1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 2,
  //     name: "HP Laptop1",
  //     price: "1500",
  //     image: lap1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 3,
  //     name: "HP Laptop2",
  //     price: "1090",
  //     image: lap2,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 4,
  //     name: "HP Laptop3",
  //     price: "1009",
  //     image: lap3,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 5,
  //     name: "HP Laptop4",
  //     price: "1099",
  //     image: img1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 6,
  //     name: "HP Laptop",
  //     price: "100",
  //     image: lap1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 7,
  //     name: "HP Laptop",
  //     price: "1000",
  //     image: lap2,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 8,
  //     name: "HP Laptop1",
  //     price: "1500",
  //     image: lap3,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 9,
  //     name: "HP Laptop2",
  //     price: "1090",
  //     image: img1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 10,
  //     name: "HP Laptop3",
  //     price: "1009",
  //     image: img1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 11,
  //     name: "HP Laptop4",
  //     price: "1099",
  //     image: lap2,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  //   {
  //     id: 12,
  //     name: "HP Laptop",
  //     price: "100",
  //     image: lap1,
  //     description:
  //       "HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MSOffice/Natural Silver/1.76 Kg), 15s-du3038TU",
  //   },
  // ];
  const [productList,setProductList] = useState([]);
  Axios.get("http://localhost:3001/getproducts").then((response)=>{
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
