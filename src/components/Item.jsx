import React from 'react'
import AddToCart from './Button/AddToCart'
import './Item.css'

function Item({ item }) {
    const {name, price, img} = item
    return (
        <div className="productsList">
            <img src={img} alt="" />
            <h6>{name}</h6>
            <span className='d-flex justify-content-center'>${price}</span>
            <AddToCart
                AddToCart={'Select more options'}
            />
        </div>
  )
}

export default Item
