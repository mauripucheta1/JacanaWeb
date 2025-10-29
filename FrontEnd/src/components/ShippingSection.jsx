import { motion } from "framer-motion";

const ShippingSection = () => {

    return (

        <>
        
            <main className="relative w-full h-screen flex justify-center items-center">

                <img src="/img/envios-devoluciones-jacana.png" class="absolute w-full h-full object-cover brightness-50" />

                <p className="relative z-10 text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center">
                    Envíos y<br></br>devoluciones
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

            <section className="w-full h-auto flex flex-col lg:flex-row items-center text-center mt-10 lg:mt-20 text-white">

                <div className="w-full max-w-screen-lg mx-auto flex justify-center items-center text-center px-6">
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl uppercase font-bold">
                        Todo<br />sobre<br />envíos
                    </p>
                </div>

                <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center text-center mt-10 px-4 sm:px-6 md:px-10 lg:px-32">
                    
                    <div className="w-full h-auto">
                        <p className="text-base sm:text-lg md:text-xl text-justify text-gray-200">
                            <span className="uppercase font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">Productos de colección</span><br /><br />
                            Una vez realizada la compra, nuestro personal pondrá a disposición del servicio postal el paquete dentro de las 48hs. A partir de este momento, las entregas suelen 
                            demorar entre 5 y 8 días hábiles...
                        </p>
                    </div>

                    <div className="w-full h-auto mt-6">
                        <p className="text-base sm:text-lg md:text-xl text-justify text-gray-200">
                            <span className="uppercase font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">Productos personalizados</span><br /><br />
                            Se enviarán preferentemente por Correo Argentino. En caso de que desees cambiar el servicio postal, deberás notificar al vendedor antes de la compra...
                        </p>
                    </div>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col lg:flex-row items-center text-center mt-10 lg:mt-20 text-white">

                <div className="w-full max-w-screen-lg mx-auto flex justify-center items-center text-center px-6">
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl uppercase font-bold">
                        Todo<br />sobre<br />devoluciones
                    </p>
                </div>

                <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center text-center mt-10 px-4 sm:px-6 md:px-10 lg:px-32">

                    <div className="w-full h-auto">
                        <p className="text-base sm:text-lg md:text-xl text-justify text-gray-200">
                            <span className="uppercase font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">Productos de colección</span><br /><br />
                            En el caso de que no estés conforme con el producto o quieras cambiar el talle, te damos la oportunidad de cambiarlo sin costo hasta 5 días hábiles luego de haberlo recibido...
                        </p>
                    </div>

                    <div className="w-full h-auto mt-6">
                        <p className="text-base sm:text-lg md:text-xl text-justify text-gray-200">
                            <span className="uppercase font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">Productos personalizados</span><br/><br/>
                            Lamentablemente, no puede haber devolución de productos personalizados por su propia esencia...
                        </p>
                    </div>

                </div>

            </section>

        </>

    )

}

export default ShippingSection;