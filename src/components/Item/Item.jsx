import { Link } from "react-router-dom";
import styles from './Item.module.css';

const Item = ({id, img, name, price, stock}) => {
    return(
        <div className={`${styles.item} item`}>
            <h1 className={`${styles.title} title`}>{name}</h1>
            <img src={img} alt={name} className={`${styles.image} image`} />
            <p className={`${styles.price} price`}>${price}</p>
            <p className={`${styles.stock} stock`}>{stock} unidades disponibles</p>
            <Link to={`/item/${id}`} className={`${styles.link} link`}>
                ver detalle
            </Link>
        </div>
    )
}

export default Item;