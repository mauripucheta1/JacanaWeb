


const HeroSection = () => {

    return (
        
        <main className="relative w-full h-screen flex flex-row justify-center items-center text-center">

            {/* Imagen móvil */}
            <img
                src="/img/coleccion-5.jpeg"
                alt="Hero vertical"
                className="absolute w-full h-full object-cover object-top brightness-50 md:hidden"
            />

            {/* Imagen desktop */}
            <img
                src="/img/carro-2.jfif"
                alt="Hero horizontal"
                className="absolute w-full h-full object-cover object-top brightness-50 hidden md:block"
            />

        </main>

    )
    
};

export default HeroSection;