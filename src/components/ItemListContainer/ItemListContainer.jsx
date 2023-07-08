import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from '../../services/firebase/firestore/products'
import Loading from "../Loading/Loading";
import styles from "./ItemListContainer.module.css";


const ItemListContainer = () => {
  
  const { categoryId } = useParams()

  const getProductsWithCategory = () => getProducts(categoryId)

  const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
  
  if(loading) {
      return <Loading/>
  }

  if(error) {
      return <h1>Hubo un error al obtener los productos</h1>
  }

  return (
      <div>
          <h1 className={styles.title}>Bienvenido a Electro-Store</h1>
          <p className={styles.paragraph}>A continuación encontraras nuestro catalogo de productos</p>
          <ItemList products={products}/>
      </div>
  )
}

export default ItemListContainer;
