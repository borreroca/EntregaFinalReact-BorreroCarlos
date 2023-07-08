import { BsFillCartFill } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {totalQuantity} = useCart()

  return (
    <Link to="/cart" className="CartWidget" style={{display: totalQuantity > 0 ? "block" : "none", color:"white", textDecoration:"none"}}>
      <BsFillCartFill/> {totalQuantity}
    </Link>
  )
}

export default CartWidget;
