import { useState } from "react";
import styles from './ItemCount.module.css';

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock){
            setCount(prev => prev+1)
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(prev => prev-1)
        }
    }

    return(
        <div className={styles.Counter}>
            <div className={styles.Controls}>
                <button className={styles.Button} onClick={decrement}>-</button>
                <h4 className={styles.Number}>{count}</h4>
                <button className={styles.Button} onClick={increment}>+</button>
            </div>
            <div className={styles.counterButton}>
                <button className={styles.Button} onClick={() => onAdd(count)} disabled={!stock}>
                Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;

