
import { addDoc, collection, query, where, documentId, getDocs, writeBatch } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {

    const {cart, total, clearCart} = useCart()
    const navigate = useNavigate()

    const createOrder = async () => {
        const objOrder = {
            buyer: {
                name: "Carlos Borrero",
                phone: "123456",
                email: "asd@asd.com"
            },
            items: cart,
            total
        }

        try{
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection (db, "products"), where(documentId(), "in", ids))

            // getDocs(productsRef).then((querySnapshot) => {

            // })

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

                // console.log("la compra fue realizada, id: " + id)
                clearCart()
                navigate("/")

            }
        }catch(error){
            console.log(error)
        }


        // const db =getFirestore();

        // const objectCollection = collection(db, "orders")

        // addDoc(objectCollection, objOrder).then(({id}) => setObjectId(id));
    }


    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden de compra</button>
        </>
    )
}

export default Checkout