//import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
//import Titlebar from "./components/Titlebar";
import React from "react";
import Carousel from "./components/Carousel";
//import Items from "./components/Items";
import Itemholder from "./components/Itemholder";
function App() {
  /*const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6c757d";
      //showalert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      //showalert("Light mode enabled", "success");
    }
  };*/
  return (
    <div>
      <Navbar title="AmazKart" />

      <Carousel />
      <div className="container">
        <Itemholder />
      </div>
    </div>
  );
}

export default App;
