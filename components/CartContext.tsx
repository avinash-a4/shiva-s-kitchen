"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export interface CartItem {
    menuItem: MenuItem;
    quantity: number;
    size: "half" | "full";
    price: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: MenuItem, size: "half" | "full") => void;
    removeItem: (itemId: number, size: "half" | "full") => void;
    updateQuantity: (itemId: number, size: "half" | "full", quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    isCheckoutOpen: boolean;
    setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const getItemPrice = (item: MenuItem, size: "half" | "full"): number => {
        if (item.hasHalfFull) {
            return size === "half" ? (item.halfPrice || 0) : (item.fullPrice || 0);
        }
        return item.price || 0;
    };

    const addItem = useCallback((item: MenuItem, size: "half" | "full") => {
        setItems((prev) => {
            const existingIndex = prev.findIndex(
                (ci) => ci.menuItem.id === item.id && ci.size === size
            );
            if (existingIndex >= 0) {
                const updated = [...prev];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + 1,
                };
                return updated;
            }
            return [
                ...prev,
                {
                    menuItem: item,
                    quantity: 1,
                    size,
                    price: item.hasHalfFull
                        ? size === "half"
                            ? item.halfPrice || 0
                            : item.fullPrice || 0
                        : item.price || 0,
                },
            ];
        });
    }, []);

    const removeItem = useCallback((itemId: number, size: "half" | "full") => {
        setItems((prev) =>
            prev.filter((ci) => !(ci.menuItem.id === itemId && ci.size === size))
        );
    }, []);

    const updateQuantity = useCallback(
        (itemId: number, size: "half" | "full", quantity: number) => {
            if (quantity <= 0) {
                removeItem(itemId, size);
                return;
            }
            setItems((prev) =>
                prev.map((ci) =>
                    ci.menuItem.id === itemId && ci.size === size
                        ? { ...ci, quantity }
                        : ci
                )
            );
        },
        [removeItem]
    );

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);
    const totalPrice = items.reduce((sum, ci) => sum + ci.price * ci.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                isCartOpen,
                setIsCartOpen,
                isCheckoutOpen,
                setIsCheckoutOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
