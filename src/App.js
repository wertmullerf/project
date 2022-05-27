import React from "react";
import NavBarBootstrap from './components/NavBarBootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBarBootstrap/>
      <ItemListContainer msg={'Bienvenidos a mi tienda online!'}/>
    </div>

  );
}

export default App;
