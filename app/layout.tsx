import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Shiva's Kitchen | Authentic Indian Chinese | Madinaguda",
    description:
        "Shiva's Kitchen - Taste the Difference, Feel the Passion. Authentic Indian Chinese cuisine with fast delivery. Order on WhatsApp. Located at Madinaguda, near Pranam Hospital.",
    keywords:
        "Shiva's Kitchen, Indian Chinese, restaurant, Madinaguda, Hyderabad, momos, noodles, fried rice, biryani, manchurian, food delivery",
    openGraph: {
        title: "Shiva's Kitchen | Authentic Indian Chinese",
        description:
            "Taste the Difference, Feel the Passion. Order online via WhatsApp!",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="font-poppins antialiased">
                <CartProvider>{children}</CartProvider>
            </body>
        </html>
    );
}
