import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
	const [productDetail, setProductDetail] = useState();
	const productShown = productDetail?.filter((product) => product.id === 1);

	useEffect(() => {
		const getDetail = () => {
			fetch("./products.json")
				.then((res) => res.json())
				.then((data) => {
					setProductDetail(data);
					console.log(data);
				})
				.catch((err) => console.log(err));
		};
		setTimeout(() => {
			//MINI DELAY PARA QUE PAREZCA MAS REAL
			getDetail();
		}, 3500);
	}, []);

	return (
		<div>
			<ItemDetail productShown={productShown} />
		</div>
	);
}

export default ItemDetailContainer;
