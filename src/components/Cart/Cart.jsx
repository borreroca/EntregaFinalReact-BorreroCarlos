import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import styles from './Cart.module.css';


const Cart = () => {

    const {cart, totalQuantity, total} = useCart()

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay item en el carrito</h1>
                <Link to="/" className=""> Productos</Link>
            </div>
        )
    }

    return (
        <>
            <h1 className={`${styles.mainTitle}`}>Carrito de compras</h1>
            {
                cart.map(prod => {
                    return(
                        <div key={prod.id} className={`${styles.itemDetail}`}>
                            <h1 className={`${styles.title}`}>{prod.name}</h1>
                            <div className={`${styles.infoContainer}`}>
                                <img src={prod.img} alt={prod.name} className={`${styles.image}`} />
                                <div className={`${styles.info}`}>
                                    <p className={`${styles.price}`}>${prod.price} c/u</p>
                                    <p className={`${styles.stock}`}>cantidad: {prod.quantity}</p>
                                    <p className={`${styles.finalPrice}`}>Subtotal: ${prod.price * prod.quantity}</p>
                                </div>    
                            </div>                    
                        </div>
                    )
                })
            }
            <h2 className={`${styles.total}`}>Total de la compra es: ${total}</h2>

            <Link to="/checkout" className={`${styles.link}`}>Checkout</Link>
        </>
        
    )
}

export default Cart