import React  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
export default function ItemListContainer() {
    const onAdd = (contador) =>{
       alert(`Pudiste agregar ${contador} productos`)
    }
    return (
        <div className="itemCount">
            <ItemCount stock={6} initial={1} onAdd={onAdd}/>
        </div>
    )
}
