"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
    removeFromCart: (productId: string, selectedColor?: string) => void;
    updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setIsLoaded(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (product: Product, quantity: number = 1, selectedColor?: string) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id && item.selectedColor === selectedColor
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id && item.selectedColor === selectedColor
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity, selectedColor }];
        });
    };

    const removeFromCart = (productId: string, selectedColor?: string) => {
        setCart((prevCart) =>
            prevCart.filter((item) =>
                !(item.id === productId && item.selectedColor === selectedColor)
            )
        );
    };

    const updateQuantity = (productId: string, quantity: number, selectedColor?: string) => {
        if (quantity <= 0) {
            removeFromCart(productId, selectedColor);
            return;
        }

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.selectedColor === selectedColor
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartTotal,
                getCartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
