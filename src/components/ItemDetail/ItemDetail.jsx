import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({id, name, src, category, description, price, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem} = useCart()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const objProduct = {
            id, name, price, quantity
        }
 
        addItem(objProduct)

    }


    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            {/* <picture>
                <img src={src} alt={name} className="ItemImg" />
            </picture> */}
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantity == 0 
                    ? (stock > 0 ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                    : <Link to ="/cart"> Finalizar compra</Link>
                }
            </footer>
        </article>
    )
}

export default ItemDetail;