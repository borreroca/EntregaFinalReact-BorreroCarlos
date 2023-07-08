import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock){
            setCount(prev => prev+1)
        }
    }

    const decrement = () => {
        if(count < stock){
            setCount(prev => prev-1)
        }
    }

    return(
        <div className ="Counter">
            <div className="Controls">
                <button className="Button" onClick={increment}>-</button>
                <h4 className="Number">{count}</h4>
                <button className="Button" onClick={decrement}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(count)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;

