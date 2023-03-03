import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);


    function addToCart(product) {
        setCart(state => [...state, product])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}