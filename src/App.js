import React from "react";
// import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarBootstrap from "./components/NavBar/NavBarBootstrap";
import ProductsFirstShow from "./components/ProductsFirstShow/ProductsFirstShow";
import Sustainability from "./components/Sustainability/Sustainability";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		// <BrowserRouter>
		//   <Routes>
		//     <Route path="/" element={<NavBarBootstrap />} />
		//   </Routes>
		// </BrowserRouter>
		<div className="App">
			<NavBarBootstrap />
			{/* <ItemListContainer msg={'Bienvenidos a mi tienda online!'}/> */}
			<HeroSection />
			<Sustainability />
			<ProductsFirstShow />
			<ItemListContainer />
		</div>
	);
}

export default App;
