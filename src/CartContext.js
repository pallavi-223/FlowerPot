import React, { createContext} from 'react';
import useAPI from "./boqutes/useAPI";
export const CartContext = createContext();

export const CartProvider = props => {
   
    return (
        <CartContext.Provider  value={{...useAPI()}}>
            {props.children}
        </CartContext.Provider> 
    )
}

 
