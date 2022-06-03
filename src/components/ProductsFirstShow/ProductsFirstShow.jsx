import React from 'react'
import Titles from '../Titles/Titles'
import './ProductsFirstShow.css'
import fProduct from '../../images/firstProduct.png'
import ProductsShown from './ProductsShown/ProductsShown'
function ProductsFirstShow() {
  return (
      
    <section className="productsFirstShow">
        <Titles
        title={'Our Coffee'}
        text={'Discover our selection of with organic, sustainably-sourced coffee'}
        />
        <ProductsShown
            product1={fProduct}
            product2={fProduct}
            product3={fProduct}
        />
    </section>


  )
}

export default ProductsFirstShow