import { motion } from "framer-motion";
import '../../styles/global.css';

const AboutSection = () => {

    return (

        <>
        
            <main className="relative w-full h-screen flex justify-center items-center">

                <img src="/img/taller-jacana.png" alt="Taller de Jacana" className="absolute w-full h-full object-cover object-center" />

                <p className="relative z-10 text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center">
                    Vestimos <br />atletas
                </p>
            
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

            <section className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-black text-white mt-20">
                
                <div className="w-full max-w-[550px] h-auto text-white rounded-lg shadow-md p-6 mx-auto lg:ml-10">

                    <div className="w-full h-[80px] flex justify-center items-center text-center border-2 border-white rounded-xl">
                        <p className="text-4xl uppercase font-semibold">Conócenos</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-6">

                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-right">
                            <img src="/img/Cesar.png" alt="Cesar" class="rounded-full w-32 h-32" />
                            <p className="text-2xl mt-4 lg:mt-0 lg:ml-4 w-full text-gray-200">Cesar A. Stagnaro Yamati<br /><span class="font-bold">Director</span></p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-right">
                            <img src="/img/Guada.png" alt="Guadalupe" class="rounded-full w-32 h-32" />
                            <p className="text-2xl mt-4 lg:mt-0 lg:ml-4 w-full text-gray-200">Guadalupe Diaz Murisi<br /><span className="font-bold">Directora</span></p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-right">
                            <img src="/img/Vozzi.png" alt="Cesar Vozzi" className="rounded-full w-32 h-32" />
                            <p className="text-2xl mt-4 lg:mt-0 lg:ml-4 w-full text-gray-200">Cesar Vozzi<br /><span className="font-bold">Gerente</span></p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-right">
                            <img src="/img/Luz.png" alt="Luz" className="rounded-full w-32 h-32" />
                            <p className="text-2xl mt-4 lg:mt-0 lg:ml-4 w-full text-gray-200">Luz Maria Diaz Murisi<br /><span className="font-bold">Asistente</span></p>
                        </div>

                    </div>

                </div>

                <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center">
                    
                    <div className="w-full max-w-lg h-[350px] rounded-xl sliderChiquito overflow-hidden">
                        <img src="/img/bg-we.jpg" alt="fondo" className="w-full h-full brightness-50 object-cover rounded-xl" />
                        <img src="/img/background-home2.jfif" alt="fondo" className="w-full h-full brightness-50 object-cover rounded-xl" />
                        <img src="/img/taller-1.jfif" alt="fondo" className="w-full h-full brightness-50 object-cover rounded-xl" />
                        <img src="/img/taller-2.jfif" alt="fondo" className="w-full h-full brightness-50 object-cover rounded-xl" />
                    </div>

                    <div className="mt-10 space-y-6 w-full max-w-lg px-6 lg:px-0">

                        <div className="flex justify-center items-center">
                            <p className="text-sm sm:text-base md:text-lg text-justify px-4 text-gray-200">
                                <span className="font-bold uppercase text-xl text-white">Nuestro compromiso con el deporte se manifiesta en cada acción.</span><br />
                                En Jacana, fusionamos la excelencia deportiva con el apoyo comunitario para crear un universo donde el deporte se convierte en un motor de cambio y conexión social...
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <p className="text-sm sm:text-base md:text-lg text-justify px-4 text-gray-200">
                                <span className="font-bold uppercase text-xl text-white">Juntos, fortalecemos nuestra comunidad local.</span><br />
                                Creemos en el poder transformador de la colaboración comunitaria...
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <p className="text-sm sm:text-base md:text-lg text-justify px-4 text-gray-200 ">
                                <span className="font-bold uppercase text-xl text-white">Cuidando nuestro planeta, paso a paso.</span><br />
                                En un mundo donde cada acción cuenta, estamos comprometidos con la protección del medio ambiente...
                            </p>
                        </div>

                    </div>

                </div>
                
            </section>

            <section className="w-full h-auto flex justify-center items-center text-center mt-20 md:mt-32">

                <div className="w-full max-w-screen-lg mx-auto px-10">
                    <p className="text-base sm:text-base md:text-lg lg:text-xl font-normal text-gray-200">
                        <span className="font-bold uppercase text-3xl sm:text-4xl text-white">Este es nuestro objetivo<br />Nuestra motivación</span><br /><br />
                        En Jacana, somos fanáticos del atletismo como vos. Por eso, nuestra misión es crear productos deportivos especializados que te acompañen en cada desafío. Nos encanta trabajar mano a mano 
                        con nuestros clientes para personalizar cada pieza y crear algo único que se adapte a tu estilo y necesidades. Somos una empresa global, pero nos sentimos orgullosos de ser referentes 
                        locales por la calidad de nuestros productos. Nos guiamos por valores como el trabajo en equipo, la empatía, la pasión, la honestidad, la confianza y el respeto en todas nuestras relaciones.
                    </p>
                </div>

            </section>

            <section className="w-full h-auto inline-block py-10">

                <div className="w-full max-w-screen-xl mx-auto mt-10 flex flex-wrap justify-center gap-4">

                    <img src="/img/Equipo-4.jpeg" alt="fondoNosotros" class="brightness-50 imagenesDesplegables rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover" />
                    <img src="/img/Equipo-5.jpeg" alt="fondoNosotross" class="brightness-50 imagenesDesplegables rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover" />  
                    <img src="/img/Equipo-1.jpeg" alt="fondoNosotross" class="brightness-50 imagenesDesplegables rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover" />  
                    <img src="/img/Equipo-2.jpeg" alt="fondoNosotross" class="brightness-50 imagenesDesplegables rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover" />  
                    <img src="/img/Equipo-3.jpeg" alt="fondoNosotross" class="brightness-50 imagenesDesplegables rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover" /> 

                </div>

            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center text-center mt-20 md:mt-32 text-white">

                <div className="w-full max-w-screen-lg mx-auto px-10">

                    <p className="text-base sm:text-base md:text-lg lg:text-xl text-center text-gray-200">
                        <span className="font-bold uppercase text-3xl sm:text-4xl text-white">QUIÉNES SOMOS<br />Nuestra historia</span><br /><br />
                        En el año 2009 César y Francisco, dos hermanos, se adentraron en el mundo del atletismo participando en diferentes eventos en la provincia de Córdoba. Si bien las convocatorias eran menores 
                        a las actuales, el ambiente era fraternal y enriquecedor. En este nuevo mundo los corredores referentes se convirtieron en sus principales apoyos.
                        Durante su trayectoria atlética, César experimentó las dificultades que implicaba conseguir indumentaria adecuada. Las musculosas eran escasas en las tiendas y los pantaloncitos se 
                        denominaban «retro». Motivados por esta necesidad y por su pasión por el deporte, César junto a su esposa Guada decidieron emprender en el año 2016 la fabricación de indumentaria deportiva.
                        Nace JACANA, nombre que refiere a lo autóctono. Fieles a sus raíces, comenzaron apoyando al atletismo, tal como este deporte los había recibido a ellos...
                    </p>

                </div>


            </section>

        </>
           
    )

}

export default AboutSection;