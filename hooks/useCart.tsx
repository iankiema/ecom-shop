import { createContext, useState } from "react";

type CartContextType  = {
    cartTotalQty:number
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = () => {

    const [cartTotalQty, setCartTotalQty] = useState()
    const value = {
        cartTotalQty
    }
    return <CartContext.Provider value={value}/>
}