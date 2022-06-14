import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
	const [productDetail, setProductDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		const getDetail = () => {
			fetch("products.json")
				.then((res) => res.json())
				.then((data) => {
					setProductDetail(data.find((product) => product.id === id));
				})
				.catch((err) => console.log(err));
		};
		getDetail();
	}, [id]);
	return (
		<div>
			<ItemDetail productDetail={productDetail} />
		</div>
	);
}

export default ItemDetailContainer;
