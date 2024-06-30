import React, { Component } from "react";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { productList } = this.props;
    return (
      <div>
        <ul> 
          {productList.map((it) => {
            return <li key={it.acm}>{it.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
