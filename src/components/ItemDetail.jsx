import React from "react";
import "./ItemDetail.css";
export default function ItemDetail({ productShown }) {
	return (
		<div>
			{productShown?.map((product) => {
				return (
					<div className="productDetailShown container">
						<div className="productDetailText">
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<strong>${product.price}</strong>
							<h6>View details</h6>
						</div>
						<div className="productDetailImg">
							<img src={product.img} alt="" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
