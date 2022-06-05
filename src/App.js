import React from "react";
import NavBarBootstrap from './components/NavBar/NavBarBootstrap';
// import ItemListContainer from "./components/ItemListContainer";

import './App.css'
import Sustainability from "./components/Sustainability/Sustainability";
import ProductsFirstShow from "./components/ProductsFirstShow/ProductsFirstShow";
import HeroSection from "./components/HeroSection/HeroSection";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="App">

      <NavBarBootstrap/>
      {/* <ItemListContainer msg={'Bienvenidos a mi tienda online!'}/> */}
      <HeroSection/>
      <Sustainability/>
      <ProductsFirstShow/>
      <ItemListContainer/>
    </div>

  );
}

export default App;
