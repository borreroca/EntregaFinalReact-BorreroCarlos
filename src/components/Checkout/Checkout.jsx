



const Checkout = () => {

    

    const createOrder = () => {
        const objOrder = {
            buyer: {
                name: "Carlos Borrero",
                phone: "123456",
                email: "asd@asd.com"
            },
            items: {
                id: 
            }
        }
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