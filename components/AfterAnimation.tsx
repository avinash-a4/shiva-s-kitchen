"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    { icon: "🍛", title: "Authentic Indian Chinese", desc: "Traditional recipes with a modern twist" },
    { icon: "⚡", title: "Fast Service", desc: "Quick preparation, fresh every time" },
    { icon: "🌿", title: "Fresh Ingredients", desc: "Sourced daily for maximum flavor" },
    { icon: "🏆", title: "Best Taste", desc: "The taste that keeps you coming back" },
];

export default function AfterAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id="about"
            className="relative section-padding bg-dark-900 overflow-hidden"
        >
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-spicy-700/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-spicy-500/8 rounded-full blur-[100px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-spicy-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                        About Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                        Welcome to{" "}
                        <span className="gradient-text">Shiva&apos;s Kitchen</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Where every dish tells a story of passion, tradition, and the perfect
                        blend of spices. Experience the authentic taste of Indian Chinese
                        cuisine like never before.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                            className="gradient-border p-6 rounded-2xl text-center card-hover group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-16"
                >
                    <p className="text-2xl sm:text-3xl font-light text-gray-300 italic">
                        &ldquo;Taste the Difference, Feel the{" "}
                        <span className="gradient-text font-semibold">Passion</span>&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
