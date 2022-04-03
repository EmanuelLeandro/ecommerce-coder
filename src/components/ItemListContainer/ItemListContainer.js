import './ItemListContainer.css'
import React from 'react';

const ItemListContainer = ({ onAdd, stock, initial }) => {
    return (
        <div className="ItemListContainer">
            <button onClick={onAdd}> - </button>
            <p>{stock}</p>
            <p>{initial}</p>
            <button onClick={onAdd}> + </button>
        </div>
    )
}

export default ItemListContainer