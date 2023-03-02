import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage('shopping-cart', []);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id) => {
        setCartItems(currentItems => {
            if (!currentItems.find(item => item.id === id)) return [...currentItems, { id, quantity: 1 }];
            else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                })
            }
        })
    };

    const decreaseCartQuantity = (id) => {
        setCartItems(currentItems => {
            if (!currentItems.find(item => item.id === id)) return currentItems.filter(item => item.id !== id);
            else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                })
            }
        })
    };

    const removeFromCart = (id) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        });
    };

    const openCart = () => {
        setIsOpen(true);
    };

    const closeCart = () => {
        setIsOpen(false);
    }

    return <ShoppingCartContext.Provider 
        value={{ 
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart, 
            cartItems,
            cartQuantity,
            openCart,
            closeCart,
            isOpen
            }} >
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
};