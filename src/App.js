import React from "react";
import NavBarBootstrap from './components/NavBarBootstrap';
// import ItemListContainer from "./components/ItemListContainer";
import HeroSection from "./components/HeroSection";
import './App.css'
import Sustainability from "./components/sustainability/Sustainability";
function App() {
  return (
    <div className="App">
      <NavBarBootstrap/>
      {/* <ItemListContainer msg={'Bienvenidos a mi tienda online!'}/> */}
      <HeroSection/>
      <Sustainability/>
      
    </div>

  );
}

export default App;
