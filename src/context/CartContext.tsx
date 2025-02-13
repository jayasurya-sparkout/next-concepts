import { createContext, useContext, useState } from "react";

type CartItem = {
    title: string;
    price: number;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(item: CartItem) {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
                );
            } else {
                return [...prevCart, item];
            }
        });
    }

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}
