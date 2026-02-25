"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/CartContext";

export default function CartDrawer() {
    const {
        items,
        removeItem,
        updateQuantity,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        setIsCheckoutOpen,
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-dark-300 z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div>
                                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                                <p className="text-sm text-gray-400">
                                    {totalItems} item{totalItems !== 1 ? "s" : ""}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <span className="text-5xl mb-4">🛒</span>
                                    <p className="font-medium">Your cart is empty</p>
                                    <p className="text-sm mt-1">Add items from the menu</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={`${item.menuItem.id}-${item.size}`}
                                        layout
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-dark-200 rounded-xl p-4 border border-white/5"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-white font-medium text-sm truncate">
                                                    {item.menuItem.name}
                                                </h4>
                                                {item.menuItem.hasHalfFull && (
                                                    <span className="text-xs text-spicy-400 font-medium">
                                                        {item.size === "half" ? "Half" : "Full"}
                                                    </span>
                                                )}
                                                <p className="text-spicy-500 font-bold mt-1">
                                                    ₹{item.price * item.quantity}
                                                </p>
                                            </div>

                                            {/* Qty controls */}
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.menuItem.id,
                                                            item.size,
                                                            item.quantity - 1
                                                        )
                                                    }
                                                    className="w-7 h-7 rounded-lg bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-50 transition-colors flex items-center justify-center text-sm font-bold"
                                                >
                                                    −
                                                </button>
                                                <span className="w-8 text-center text-white text-sm font-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.menuItem.id,
                                                            item.size,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                    className="w-7 h-7 rounded-lg bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-50 transition-colors flex items-center justify-center text-sm font-bold"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() =>
                                                    removeItem(item.menuItem.id, item.size)
                                                }
                                                className="p-1 rounded hover:bg-red-500/20 transition-colors"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-red-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/10 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 font-medium">Total</span>
                                    <span className="text-2xl font-bold gradient-text">
                                        ₹{totalPrice}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        setIsCheckoutOpen(true);
                                    }}
                                    className="w-full py-4 rounded-xl btn-glow text-white font-bold text-lg relative z-10"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Proceed to Checkout
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
