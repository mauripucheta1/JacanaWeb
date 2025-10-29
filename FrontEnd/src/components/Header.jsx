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

        <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 py-7 px-4 ${ scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>

            <div className="flex items-center justify-between px-4 md:px-8 py-3">

                {/* Home */}
                <a href="/" className="text-white text-2xl font-bold">Jacana</a>

                {/* Mobile */}
                <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Abrir menú">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop */}
                <nav className="hidden md:flex gap-10 text-white font-semibold text-xl">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="relative group">
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

            </div>

            <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${ 
                isOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMenu}
            ></div>

            <aside className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:hidden bg-black text-white transform transition-transform duration-300 ease-in-out ${
                isOpen 
                    ? "translate-x-0" 
                    : "translate-x-full"
                }`}
            >

                <div className="flex justify-between items-center px-7 py-6 relative">
                    <h2 className="text-2xl font-bold">Menú</h2>
                    <button onClick={toggleMenu} aria-label="Cerrar menú">
                        <X size={28} />
                    </button>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-white/20"></span>
                </div>

                <nav className="flex flex-col items-start gap-6 px-7 mt-8 text-lg font-medium">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="relative w-full group">
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 px-7">

                    <a target="_blank" href="https://www.instagram.com/jacana.ar/" className="flex justify-center items-center w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>

                    <a target="_blank" href="https://www.facebook.com/" className="flex justify-center items-center w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>

                    <a target="_blank" href="https://web.whatsapp.com/" className="flex justify-center items-center w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                    </a>

                </div>

            </aside>
            
        </header>

    )

};

export default Header;