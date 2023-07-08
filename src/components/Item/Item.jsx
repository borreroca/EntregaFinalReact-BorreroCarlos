import { Link } from "react-router-dom";
import styles from './Item.module.css';

const Item = ({id, img, name, price, stock}) => {
    return(
        <div className={`${styles.item}`}>
            <h1 className={`${styles.title}`}>{name}</h1>
            <img src={img} alt={name} className={`${styles.image}`} />
            <p className={`${styles.price}`}>${price}</p>
            <p className={`${styles.stock}`}>{stock} unidades disponibles</p>
            <Link to={`/item/${id}`} className={`${styles.link}`}>
                ver detalle
            </Link>
        </div>
    )
}

export default Item;