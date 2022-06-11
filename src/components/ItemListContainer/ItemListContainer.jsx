// import ItemCount from '../ItemCount/ItemCount';
import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer";
import ItemList from "../ItemList";
import Titles from "../Titles/Titles";
import "./ItemListContainer.css";
export default function ItemListContainer() {
	const [items, setItems] = useState();
	const coffeesList = [
		{
			id: 1,
			name: "Classic beans",
			description:
				" is simply dummy text of the printing and typesetting industry.",
			price: 50,
			img: "https://i.ibb.co/qnNNsqg/first-Product.png",
			stock: 30,
		},
		{
			id: 2,
			name: "Heavy beans",
			description:
				" is simply dummy text of the printing and typesetting industry.",
			price: 45,
			img: "https://i.ibb.co/ZxmFx0g/second-Product.png",
			stock: 5,
		},
		{
			id: 3,
			name: "Sweet beans",
			description:
				" is simply dummy text of the printing and typesetting industry.",
			price: 20,
			img: "https://i.ibb.co/YbyNdH0/third-Product.png",
			stock: 10,
		},
		{
			id: 4,
			name: "Light beans",
			description:
				" is simply dummy text of the printing and typesetting industry.",
			price: 30,
			img: "https://i.ibb.co/YbyNdH0/third-Product.png",
			stock: 3,
		},
		{
			id: 5,
			name: "Cafenetic giftcard",
			description:
				" is simply dummy text of the printing and typesetting industry.",
			price: 25,
			img: "https://i.ibb.co/xMcbK2k/giftCard.png",
			stock: 600,
		},
		{
			id: 6,
			name: "Cafenetic giftcard V2",
			description:
				" is simply dummy text of the printing and typesetting industry.",
			price: 50,
			img: "https://i.ibb.co/hdQnK8t/second-Gift-Card.png",
			stock: 700,
		},
	];

	// const onAdd = (contador) =>{
	//    alert(`Pudiste agregar ${contador} productos`)
	// }
	useEffect(() => {
		const productsPromise = new Promise((resolve, reject) => {
			resolve(coffeesList);
		}, 2000);
		productsPromise
			.then((result) => {
				setItems(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(items);

	return (
		// <div className="itemCount">
		//     <ItemCount stock={6} initial={1} onAdd={onAdd}/>
		// </div>
		<div className="products">
			<Titles
				title={"Our products"}
				text={
					"We have a wide range of products to choose from. Check out our products below."
				}
			/>
			<ItemList items={items} />
			<hr />
			<Titles
				title={"Product detail"}
				text={
					"Here you can see the details of the product you selected."
				}
			/>
			<ItemDetailContainer />
		</div>
	);
}
