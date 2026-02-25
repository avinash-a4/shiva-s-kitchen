import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoScrollAnimation from "@/components/LogoScrollAnimation";
import AfterAnimation from "@/components/AfterAnimation";
import MenuSection from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <LogoScrollAnimation />
            <AfterAnimation />
            <MenuSection />
            <Footer />
            <CartDrawer />
            <CheckoutForm />
        </main>
    );
}
