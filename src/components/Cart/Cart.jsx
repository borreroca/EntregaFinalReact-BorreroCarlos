import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"



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
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return(
                        <div key={prod.id}>
                            <h2>{prod.name}</h2>
                            <h3>${prod.price}</h3>
                            <h3>cantidad: {prod.quantity}</h3>
                            <h3>{prod.quantity * prod.price}</h3>
                        </div>
                    )
                })
            }
            <h2>Total de la compra es: ${total}</h2>

            <Link to="/checkout">Checkout</Link>
        </>
        
    )
}

export default Cart