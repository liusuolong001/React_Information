import React, { Component } from "react";
import axios from "axios";
import Banners from "./Banners";
import ProductList from "./ProductList";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      banners: [],
      productList: [],
    };
  }

  render() {
    const { banners, productList } = this.state;
    return (
      <div>
        <Banners banners={banners} title="默认标题" />
        <Banners />
        <ProductList productList={productList} />
      </div>
    );
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setState({
        banners,
        productList: recommend,
      });
    });
  }
}

export default Main;
