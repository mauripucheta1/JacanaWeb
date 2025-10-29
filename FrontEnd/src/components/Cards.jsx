import { motion } from "framer-motion";
import '../../styles/global.css';

const CardsTimeline = () => {

    const darkMode = true; 

    const textPrimary = darkMode ? "text-white" : "text-black";
    const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";

    const timelineItems = [
        {
            numero: 1,
            titulo: "+300 equipos vestidos",
            contenido: "Hemos vestido más de 300 equipos a lo largo del país con nuestra indumentaria deportiva de calidad premium.",
            invert: false
        },
        {
            numero: 2,
            titulo: "+150 eventos siendo sponsors",
            contenido: "Participamos activamente como sponsors en más de 150 eventos deportivos, apoyando el crecimiento del deporte.",
            invert: true
        },
        {
            numero: 3,
            titulo: "+100 acreditaciones y reconocimientos",
            contenido: "Nuestro esfuerzo ha sido reconocido con más de 100 acreditaciones y premios en el sector deportivo.",
            invert: false
        },
        {
            numero: 4,
            titulo: "+25 prendas deportivas",
            contenido: "Contamos con una colección de más de 25 prendas deportivas diseñadas para rendimiento y estilo.",
            invert: true
        },
        {
            numero: 5,
            titulo: "+50 proyectos culminados",
            contenido: "Hemos finalizado con éxito más de 50 proyectos de personalización de indumentaria deportiva.",
            invert: false
        },
        {
            numero: 6,
            titulo: "Empresa líder en Argentina",
            contenido: "Nos consolidamos como una empresa líder en Argentina gracias a nuestra innovación y compromiso con el deporte.",
            invert: true
        }
    ];

    return (

        <section className="flex flex-col">

            <section className="relative w-full py-12 px-6 md:px-10 flex flex-col gap-16 mt-20">

                <svg className="absolute top-0 h-full w-[4px] left-6 hidden lg:flex md:left-1/2 -translate-x-0 md:-translate-x-1/2" viewBox="0 0 10 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 0 L5 1000" stroke={darkMode ? "#FFFFFF" : "#00471E"} strokeWidth="4" trokeDasharray="10 10" fill="none" />
                </svg>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {timelineItems.map(({ numero, titulo, contenido, invert }, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center justify-center lg:justify-${invert ? 'end' : 'start'} gap-6`}
                        >

                            {/* Número de tarjeta */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-lg shadow-lg">
                                    {numero}
                                </div>
                            </div>

                            {/* Contenedor del texto */}
                            <div className={`flex flex-col md:w-3/4 lg:w-2/3 text-center ${invert ? "md:text-right" : "text-left"}`}>
                                <h3 className={`text-2xl md:text-3xl font-bold ${textPrimary} mb-2`}>
                                    {titulo}
                                </h3>
                                <p className={`text-lg md:text-xl ${textSecondary} leading-relaxed`}>
                                    {contenido}
                                </p>
                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>

            <section className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center mt-20 mb-20 max-w-screen-md mx-auto px-4">
        
                <div className="w-full sm:w-2/3 md:w-2/3 h-auto flex justify-center text-center text-white">
                    <p className="text-2xl md:text-4xl uppercase">Conoce más sobre nuestra colección</p>
                </div>
                    
                <div class="w-full sm:w-1/3 md:w-1/3 h-auto flex justify-center items-center mt-4 md:mt-0">
                    <img src="/img/Logo-Coleccion.png" alt="Fondo Colección" className="w-26 h-20 md:w-60 md:h-32" />
                </div>
                
            </section>

            <section className="w-full slider flex overflow-hidden">

                <img src="/img/coleccion-2.jfif" className="w-full aspect-[16/9] max-h-[600px] object-cover brightness-50" />
                <img src="/img/coleccion-1.jfif" className="w-full aspect-[16/9] max-h-[600px] object-cover brightness-50" />
                <img src="/img/coleccion-6.jpeg" className="w-full aspect-[16/9] max-h-[600px] object-cover brightness-50" />
                <img src="/img/coleccion-4.jpeg" className="w-full aspect-[16/9] max-h-[600px] object-cover brightness-50" />
                <img src="/img/coleccion-5.jpeg" className="w-full aspect-[16/9] max-h-[600px] object-cover brightness-50" />

            </section>

        </section>


    )

};

export default CardsTimeline;