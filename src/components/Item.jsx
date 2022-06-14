import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./Button/AddToCart";
import "./Item.css";

function Item({ item }) {
	const { name, price, img } = item;
	return (
		<>
			<div className="productsList">
				<img src={img} alt="" />
				<h6>{name}</h6>
				<span className="d-flex justify-content-center">${price}</span>
				<Link className="btnItem" to={"/item/"}>
					Select more options
				</Link>
			</div>
		</>
	);
}

export default Item;
