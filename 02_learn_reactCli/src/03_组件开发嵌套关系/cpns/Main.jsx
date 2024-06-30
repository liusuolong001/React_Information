import React, { Component } from 'react'
import Banners from './Banners'
import ProductList from './ProductList'

export class Main extends Component {
  render() {
    return (
      <div>
        <Banners/>
        <ProductList/>
      </div> 
    )
  }
}

export default Main