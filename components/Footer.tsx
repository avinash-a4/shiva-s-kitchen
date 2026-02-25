"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Menu", href: "#menu" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer
            id="contact"
            ref={ref}
            className="relative bg-dark-900 overflow-hidden"
        >
            {/* Top gradient divider */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-spicy-700 to-transparent" />

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-spicy-900/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {/* Restaurant Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spicy-700 to-spicy-500 flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <div>
                                <h3 className="text-xl font-bold gradient-text">
                                    Shiva&apos;s Kitchen
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Authentic Indian Chinese
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Where every dish tells a story of passion, tradition, and the
                            perfect blend of spices. Taste the difference, feel the passion.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                            ~ Taste the Difference, Feel the Passion ~
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-lg">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-spicy-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-spicy-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-lg">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-spicy-500 mt-0.5">📍</span>
                                <div>
                                    <p className="text-gray-300 text-sm font-medium">Address</p>
                                    <p className="text-gray-500 text-sm">
                                        1-55/A/1, Madinaguda
                                        <br />
                                        Near Pranam Hospital
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-spicy-500 mt-0.5">📞</span>
                                <div>
                                    <p className="text-gray-300 text-sm font-medium">Phone</p>
                                    <a
                                        href="tel:9032909043"
                                        className="text-gray-500 text-sm hover:text-spicy-400 transition-colors"
                                    >
                                        9032909043
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5">💬</span>
                                <div>
                                    <p className="text-gray-300 text-sm font-medium">WhatsApp</p>
                                    <a
                                        href="https://wa.me/919032909043"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 text-sm hover:text-green-400 transition-colors"
                                    >
                                        Order on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-lg">
                            Follow Us
                        </h4>
                        <div className="flex gap-3 mb-6">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/shivas_kitchen__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-11 h-11 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919032909043"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-11 h-11 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:9032909043"
                                className="group w-11 h-11 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center hover:border-spicy-500/50 hover:shadow-lg hover:shadow-spicy-500/20 transition-all"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-400 group-hover:text-spicy-400 transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* Order CTA */}
                        <a
                            href="#menu"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-glow text-white text-sm font-semibold relative z-10"
                        >
                            <span className="relative z-10">🔥 Order Now</span>
                        </a>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600 text-xs text-center sm:text-left">
                            © 2024 Shiva&apos;s Kitchen. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs">
                            1-55/A/1, Madinaguda | Ph: 9032909043
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
