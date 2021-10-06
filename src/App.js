//import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
//import Titlebar from "./components/Titlebar";
import React from "react";
import Carousel from "./components/Carousel";
//import Items from "./components/Items";
import Itemholder from "./components/Itemholder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpIn from "./components/Signup";
import Cart from "./components/Cart";
import Seller from "./components/Seller";
import Smartphone from "./components/Smartphone";
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
      <Router>
        <Navbar title="AmazKart" />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <Itemholder />
          </Route>
          <Route exact path="/login">
            <SignUpIn />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/sell">
            <Seller />
          </Route>
          <Route exact path="/smartphone">
            <Smartphone />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
