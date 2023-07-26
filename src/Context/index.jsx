import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const CartShopContext = createContext();

export const CartShopProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    return (
        <CartShopContext.Provider
            value={{
                counter,
                setCounter
            }}
        >
            {children}
        </CartShopContext.Provider>
    )
}

CartShopProvider.propTypes = {
    children: PropTypes.node
}

