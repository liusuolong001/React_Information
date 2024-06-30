import React, { PureComponent } from "react";
import "./style.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "App",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div className="page">
        <Home></Home>

        <Profile></Profile>
      </div>
    );
  }
}

export default App;
