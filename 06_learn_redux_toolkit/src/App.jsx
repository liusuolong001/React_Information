import React, { PureComponent } from "react";
import Profile from "./pages/profile";
import Product from "./pages/product";
import Home from "./pages/home";
import "./App.css";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Message",
    };
  }
  render() {
    return (
      <div className="appPages">
        <Profile></Profile>
        <Product></Product>
        <Home></Home>
      </div>
    );
  }
}
export default App;
