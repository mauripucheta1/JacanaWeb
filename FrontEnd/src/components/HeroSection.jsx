import { motion } from "framer-motion";

const HeroSection = () => {

    return (
        
        <main className="relative w-full h-screen flex flex-row justify-center items-center text-center">

            {/* Imagen móvil */}
            <img
                src="/img/atletas-jacana-mobile.png"
                alt="Hero vertical"
                className="absolute w-full h-full object-cover object-top md:hidden"
            />

            {/* Imagen desktop */}
            <img
                src="/img/prenda-jacana-desktop.png"
                alt="Hero horizontal"
                className="absolute w-full h-full object-cover object-center hidden md:block"
            />

            <p className="relative z-10 text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center">
                Por atletas, <br></br>para atletas
            </p>

            {/* Scroll Mouse animado */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-1">
                <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                />
                </div>
            </motion.div>

        </main>

    )
    
};

export default HeroSection;