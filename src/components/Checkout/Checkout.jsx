import { addDoc, collection, query, where, documentId, getDocs, writeBatch } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import BuyerForm from "../BuyerForm/BuyerForm";
import Loading from "../Loading/Loading";
import { useState} from "react";
import Swal from 'sweetalert2'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const {cart, total, clearCart} = useCart()

    const navigate = useNavigate()

    const createOrder = async (buyerInfo) => {
        setLoading(true)
        const buyer = buyerInfo

        const objOrder = {
            buyer,
            items: cart,
            total
        }

        try{
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection (db, "products"), where(documentId(), "in", ids))

            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)

            const outOfStock =[]

            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock:stockDb-prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...fieldsDoc})
                }
            })

            if(outOfStock.length === 0) {
                batch.commit()

                const ordersRef = collection(db, "orders")

                const {id} = await addDoc(ordersRef, objOrder)

                Swal.fire({
                    icon: 'success',
                    title: '¡Muchas gracias por tu compra!',
                    text: `La orden fue generada correctamente, el id de tu compra es: ${id}`,
                })
                clearCart()
                navigate("/")

            }

        }catch(error){
            Swal.fire({
                icon: 'error',
                title: '¡Ups!',
                text: `Lo siento, hubo un error al crear la orden.`,
            })
        }finally{
            setLoading(false)
        }

    }

    if(loading) {
        <Loading/>
    }


    return (
        <>
            <h1>Checkout</h1>
            <BuyerForm onForSubmit={createOrder}/>
        </>
    )
}

export default Checkout