"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/components/CartContext";

interface MenuCardProps {
    item: MenuItem;
    index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
    const [size, setSize] = useState<"half" | "full">(
        item.hasHalfFull ? "half" : "full"
    );
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const currentPrice = item.hasHalfFull
        ? size === "half"
            ? item.halfPrice || 0
            : item.fullPrice || 0
        : item.price || 0;

    const handleAdd = () => {
        for (let i = 0; i < qty; i++) {
            addItem(item, size);
        }
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
        setQty(1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
            className="gradient-border rounded-3xl p-7 card-hover group relative overflow-hidden"
        >
            {/* Veg / Non-Veg Badge */}
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center ${item.isVeg
                        ? "border-green-500"
                        : "border-red-500"
                        }`}
                >
                    <div
                        className={`w-3 h-3 rounded-full ${item.isVeg ? "bg-green-500" : "bg-red-500"
                            }`}
                    />
                </div>
                <span className="text-sm text-gray-500 font-medium">#{item.id}</span>
            </div>

            {/* Name */}
            <h3 className="text-white font-bold text-lg sm:text-xl mb-4 group-hover:text-spicy-400 transition-colors leading-snug min-h-[3rem]">
                {item.name}
            </h3>

            {/* Price Display */}
            <div className="mb-5">
                {item.hasHalfFull ? (
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">Half: ₹{item.halfPrice}</span>
                        <span className="text-sm text-gray-500">|</span>
                        <span className="text-sm text-gray-500">Full: ₹{item.fullPrice}</span>
                    </div>
                ) : (
                    <span className="text-sm text-gray-500">₹{item.price}</span>
                )}
                <div className="mt-1">
                    <span className="text-3xl font-extrabold gradient-text">₹{currentPrice}</span>
                </div>
            </div>

            {/* Half / Full Toggle */}
            {item.hasHalfFull && (
                <div className="flex gap-3 mb-5">
                    <button
                        onClick={() => setSize("half")}
                        className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${size === "half"
                            ? "bg-gradient-to-r from-spicy-700 to-spicy-500 text-white shadow-lg shadow-spicy-700/30"
                            : "bg-dark-100 text-gray-400 hover:bg-dark-50"
                            }`}
                    >
                        Half
                    </button>
                    <button
                        onClick={() => setSize("full")}
                        className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${size === "full"
                            ? "bg-gradient-to-r from-spicy-700 to-spicy-500 text-white shadow-lg shadow-spicy-700/30"
                            : "bg-dark-100 text-gray-400 hover:bg-dark-50"
                            }`}
                    >
                        Full
                    </button>
                </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center bg-dark-100 rounded-xl overflow-hidden">
                    <button
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        className="px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-50 transition-colors text-base font-bold"
                    >
                        −
                    </button>
                    <span className="px-4 text-white text-base font-bold min-w-[2.5rem] text-center">
                        {qty}
                    </span>
                    <button
                        onClick={() => setQty(qty + 1)}
                        className="px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-50 transition-colors text-base font-bold"
                    >
                        +
                    </button>
                </div>

                {/* Add to Cart */}
                <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 rounded-xl font-bold text-base transition-all ${added
                        ? "bg-green-600 text-white"
                        : "btn-glow text-white relative z-10"
                        }`}
                >
                    <span className="relative z-10">
                        {added ? "✓ Added!" : "Add to Cart"}
                    </span>
                </button>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-spicy-700/10 rounded-full blur-3xl" />
            </div>
        </motion.div>
    );
}
