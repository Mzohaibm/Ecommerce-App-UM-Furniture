import React, { createContext, useState } from "react";
const SendCart = createContext();
const Context = (props) => {
    const [cartItem, setCartItem] = useState([]);
    const addToCart = (product) => {
        const ProductExist = cartItem.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItem(
                cartItem.map((item) =>
                    item.id === product.id
                        ? { ...ProductExist, qty: ProductExist.qty + 1 }
                        : item
                )
            );
        } else {
            setCartItem([...cartItem, { ...product, qty: 1 }]);
        }
    };
    const decreaseQty = (product) => {
        const ProductExist = cartItem.find((item) => item.id === product.id);
        if (ProductExist.qty === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id));
        } else {
            setCartItem(
                cartItem.map((item) =>
                    item.id === product.id
                        ? { ...ProductExist, qty: ProductExist.qty - 1 }
                        : item
                )
            );
        }
    };
    const RemoveItem = (product) => {
        setCartItem(cartItem.filter((item) => item.id !== product.id))
    }
    return (
        <div>
            <SendCart.Provider value={{ cartItem, addToCart, decreaseQty, RemoveItem }}>
                {props.children}
            </SendCart.Provider>
        </div>
    );
};
export { SendCart };
export default Context;

