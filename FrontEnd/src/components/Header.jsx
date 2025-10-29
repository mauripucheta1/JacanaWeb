import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { name: "Home", href: "/" },
        { name: "Productos", href: "/Products" },
        { name: "Sobre Nosotros", href: "/About" },
        { name: "Cuenta", href: "/Login" },
    ];

    return (
        <header
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
            scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        >
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
            {/* Logo o nombre */}
            <a href="/" className="text-white text-2xl font-bold">
            Jacana
            </a>

            {/* Botón Hamburguesa */}
            <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navegación en desktop */}
            <nav className="hidden md:flex gap-10 text-white font-semibold text-xl">
            {links.map((link) => (
                <a
                key={link.href}
                href={link.href}
                className="relative group"
                >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
            </nav>
        </div>

        {/* Navegación en móvil */}
        {isOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md text-white text-lg font-semibold flex flex-col items-center py-6 space-y-4 animate-fadeIn">
            {links.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative group"
                >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
            </div>
        )}
        </header>
    );

};

export default Header;