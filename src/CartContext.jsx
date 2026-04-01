import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    
    function addToCart(product, qty = 1) {
        setCart(prevCart => {
            const exists = prevCart.find((item) => item.id === product.id);
            if (exists) {
                return prevCart.map((item) => item.id === product.id
                    ? { ...item, quantity: item.quantity + qty }
                    : item
                );
            } else {
                return [...prevCart, { ...product, quantity: qty }];
            }
        });
    }
    
    function removeFromCart(id) {
        setCart(cart.filter((item) => item.id !== id));
    }
    
    function getTotal() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    function clearCart() {
        setCart([]);
    }
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal, clearCart }}>{children}</CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}