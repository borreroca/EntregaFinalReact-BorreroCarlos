import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';
import Swal from "sweetalert2";

const ItemDetail =({id, name, img, description, price, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem} = useCart()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const objProduct = {
            id, name, price, img, quantity
        }
 
        addItem(objProduct)

        
    }


    return(

        <div className={`${styles.itemDetail}`}>
            <h1 className={`${styles.title}`}>{name}</h1>
            <div className={`${styles.infoContainer}`}>
                <img src={img} alt={name} className={`${styles.image}`} />
                <div className={`${styles.info}`}>
                    <p className={`${styles.description}`}>{description}</p>
                    <p className={`${styles.price}`}>${price}</p>
                    <p className={`${styles.stock}`}>{stock} unidades disponibles</p>
                    <div className="ItemFooter">
                        {
                            quantity == 0 
                            ? (stock > 0 ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                            : <Link to ="/cart" className={`${styles.link}`}> Finalizar compra</Link>
                        }
                    </div>
                </div>    
            </div>                    
        </div>
    )
}

export default ItemDetail;