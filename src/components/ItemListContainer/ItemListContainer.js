import React, { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
import getSneakers from './ItemList';



const ItemListContainer = () => {
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([])                                                                                                   


useEffect (()=> {
    getSneakers()
    .then((sneakers) => setProducts(sneakers))
    .catch((error)=>console.log(error));
}, []);

    const onAdd = (condition) => {
        if (condition === '-'){
            setCount(count - 1);
        }
        if (condition === '+'){
            setCount(count + 1);
        }
    };

    const initial = 1 ;
    return (
     <div className="ItemListContainer" >
         {products.map((product) => (
         <div key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.stock}/>
            <ItemCount 
                onAdd={onAdd} 
                stock={product.stock} 
                nitial={initial} 
                count={count}
            />    
         </div>
         ))}
    </div>
    );
};

export default ItemListContainer