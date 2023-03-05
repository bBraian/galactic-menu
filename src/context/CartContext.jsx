import { useEffect, useState } from "react"
import { createContext } from "react"

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalCartPrice, setTotalCartPrice] = useState(0)

    function addToCart(product) {
        setCart(state => [...state, product])
    }

    function calculateTotalPrice() {
        let totalSum = 0;
        cart.map(item => {
            totalSum += item.price;
        })

        setTotalCartPrice(totalSum);
    }

    function deleteFromCart(cartProductId) {
        setCart(state => state.filter(item => item.cartProductId != cartProductId))
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [cart])

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                totalCartPrice,
                deleteFromCart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}