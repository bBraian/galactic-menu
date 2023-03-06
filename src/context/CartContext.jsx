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
            totalSum += (item.price)*item.amount;
        })

        setTotalCartPrice(totalSum);
    }

    function deleteFromCart(cartProductId) {
        setCart(state => state.filter(item => item.cartProductId != cartProductId))
    }

    function addOrRemoveProduct(cartProductId, action) {
        let cartWithOutEditedOne = cart.filter(item => item.cartProductId != cartProductId);
        let registerEdit = cart.find(item => item.cartProductId == cartProductId);
        console.log("reg",registerEdit);
        console.log("cart",cartWithOutEditedOne);
        if(action === "remove") {
            registerEdit.amount--;
        } else if(action === "add") {
            registerEdit.amount++;
        }
        setCart([registerEdit, ...cartWithOutEditedOne])
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
                deleteFromCart,
                addOrRemoveProduct
            }}
        >
            { children }
        </CartContext.Provider>
    )
}