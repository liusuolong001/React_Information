import React, { Component } from "react";
import Header from "./cpns/Header";
import Main from "./cpns/Main";
import Footer from "./cpns/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
