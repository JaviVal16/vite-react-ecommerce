import { createContext } from 'react';

const CartShopContext = createContext();

export const cartShopProvider = ({ children }) => {
    return (
        <CartShopContext.Provider>
            {children}
        </CartShopContext.Provider>
    )
}