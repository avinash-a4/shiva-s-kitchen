"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { menuData, menuCategories } from "@/data/menu";
import MenuCard from "@/components/MenuCard";

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const filteredItems =
        activeCategory === "All"
            ? menuData
            : menuData.filter((item) => item.category === activeCategory);

    return (
        <section
            id="menu"
            ref={ref}
            className="relative section-padding bg-dark-900 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-spicy-900/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="text-spicy-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                        Our Menu
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                        Explore Our{" "}
                        <span className="gradient-text">Delicious Menu</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        80+ dishes crafted with love and the finest spices
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14"
                >
                    {menuCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all whitespace-nowrap ${activeCategory === category
                                ? "bg-gradient-to-r from-spicy-700 to-spicy-500 text-white shadow-lg shadow-spicy-700/30"
                                : "bg-dark-100 text-gray-400 hover:bg-dark-50 hover:text-white border border-white/5"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Items count */}
                <div className="text-center mb-8">
                    <span className="text-gray-500 text-sm">
                        Showing {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
                    </span>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {filteredItems.map((item, i) => (
                        <MenuCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
