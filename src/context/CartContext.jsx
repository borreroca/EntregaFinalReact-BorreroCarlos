import { createContext, useState, useContext } from "react";

const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    console.log(cart)
  
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart(prev => {
                return [...prev, productToAdd]
            })
        }else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId )
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const totalQuantity = getTotalQuantity()
    const total = getTotal()

    return (
        <CartContext.Provider value={{cart, totalQuantity, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}