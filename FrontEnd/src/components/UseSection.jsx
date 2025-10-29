import { motion } from "framer-motion";

const UseSection = () => {

    return (
        
        <>
        
            <main className="relative w-full h-screen flex justify-center items-center">

                <img src="/img/prendas-jacana.png" className="absolute w-full h-full object-cover brightness-50" />

                <p className="relative z-10 text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center">
                    Recomendaciones <br/> de uso
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

            <section className="w-full h-auto flex justify-center items-center text-center text-white">

                <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-10 md:px-16 lg:px-32 mt-6 sm:mt-10 md:mt-16">

                    <p className="text-base sm:text-lg md:text-xl text-justify leading-relaxed text-gray-200">

                        <span className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">AMPLIA LA VIDA <br/>DE TU ROPA</span><br/><br/>
                        Es importante que des el cuidado correspondiente a cada tipo de prenda que tengas. Haz que se gaste por entrenamiento, no por lavado.<br/><br/>
                        <span className="font-bold text-white uppercase">Cuidado general de las prendas:</span><br/>
                        Para cuidar adecuadamente las telas de nuestras prendas deportivas, es importante seguir algunas recomendaciones:<br/><br/>
                        1) En primer lugar, es fundamental leer las instrucciones de lavado que vienen en la etiqueta de la prenda. Generalmente, se recomienda lavarlas a mano o en ciclo suave en la lavadora, con agua fría y utilizando un detergente suave.  
                        Es importante evitar el uso de suavizantes, ya que pueden afectar la capacidad de transpiración de la tela.  
                        Además, es importante secar las prendas al aire libre, evitando la exposición directa al sol, ya que esto puede dañar las fibras de la tela.<br/><br/>
                        <span className="font-semibold">2) Es importante también tener cuidado al momento de usar las prendas deportivas, evitando roces extremos contra arbustos, rocas u otras superficies ásperas que puedan dañar la tela.</span><br/><br/>
                        3) En caso de que la prenda se ensucie, es importante tratar las manchas de inmediato para evitar que se fijen en la tela.  
                        Siguiendo estas recomendaciones, podrás mantener tus prendas deportivas en óptimas condiciones por más tiempo, garantizando su durabilidad y rendimiento durante tus actividades deportivas.<br/><br/>
                        4) Recuerda que el cuidado adecuado de tus prendas deportivas es fundamental para mantener su calidad y funcionalidad.

                    </p>

                </div>

            </section>

            <section className="w-full h-auto flex justify-center items-center text-center mt-8 px-6 text-white">

                <div className="bordeEtiquetas w-full max-w-screen-md h-auto mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 border-2 border-white">

                    <p className="text-base sm:text-lg md:text-xl text-justify text-gray-200">

                        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-white">Prendas de poliéster</span><br/><br/>
                        <span className="text-lg sm:text-2xl md:text-3xl">El poliéster: características y cuidados para una prenda duradera</span><br/><br/>
                        El poliéster se ha convertido en una de las fibras textiles más populares en la industria de la confección, debido a sus excepcionales propiedades...
                        <br/><br/>
                        <span className="text-base sm:text-2xl font-medium">Características del poliéster:</span><br/>
                        <span className="font-medium">Resistencia a las arrugas:</span> El poliéster tiene una estructura molecular que lo hace naturalmente resistente a la formación de arrugas...
                        <br/><span className="font-medium">Elasticidad:</span> Esta propiedad lo convierte en una fibra ideal para prendas deportivas...
                        <br/><span className="font-medium">Secado rápido:</span> El poliéster absorbe poca humedad...
                        <br/><span className="font-medium">Resistencia a la humedad:</span> El poliéster es naturalmente resistente a la humedad y al moho...
                        <br/><span className="font-medium">Ligereza:</span> El poliéster es una fibra liviana...
                        <br/><span className="font-medium">Versatilidad:</span> El poliéster se puede combinar con diversos tipos de fibras...
                        <br/><span className="font-medium">Precio accesible:</span> El poliéster es una fibra relativamente económica...
                        <br/><br/>
                        <span className="text-base sm:text-2xl font-medium">Cuidados para el poliéster:</span><br/>
                        <span className="font-medium">Seguir las instrucciones de la etiqueta:</span> Es fundamental leer atentamente la etiqueta de la prenda...
                        <br/><span className="font-medium">Clasificación por colores:</span> Antes de lavar, se debe separar la ropa de poliéster por colores...
                        <br/><span className="font-medium">Pretratamiento de manchas:</span> En caso de manchas, se recomienda pretratarlas...
                        <br/><span className="font-medium">Lavado a máquina:</span> La mayoría de las prendas de poliéster se pueden lavar a máquina en un ciclo suave...
                        <br/><span className="font-medium">Secado:</span> Para un secado óptimo, se recomienda secarlas al aire libre...
                        <br/><span className="font-medium">Planchado:</span> El poliéster generalmente no requiere planchado...
                        <br/><br/>
                        Siguiendo estas recomendaciones de cuidado, las prendas de poliéster mantendrán sus propiedades y apariencia por mucho tiempo.
                    </p>

                </div>

            </section>

            <section className="w-full h-auto flex justify-center items-center text-center mt-8 px-6 text-white">

                <div className="bordeEtiquetas w-full max-w-screen-md h-auto mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 border-2 border-white">

                    <p className="text-base sm:text-lg md:text-xl text-justify text-gray-200">

                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-white">Prendas de algodón</span><br/><br/>
                        <span className="text-lg sm:text-2xl md:text-3xl">Cuida tu ropa deportiva de algodón y mantén el máximo rendimiento.</span><br/><br/>
                        En Jacana, sabemos que la ropa deportiva de algodón es esencial para tu comodidad y rendimiento durante la actividad física...
                        <br/><br/>
                        <span className="text-base sm:text-2xl font-medium">Lavado:</span><br/>
                        <span className="font-medium">Separa las prendas por color:</span> Lava las prendas de algodón de colores claros por separado de las de colores oscuros...
                        <br/><span className="font-medium">Utiliza agua fría:</span> El agua fría ayuda a preservar los colores...
                        <br/><span className="font-medium">Elige un detergente suave:</span> Evita los detergentes agresivos...
                        <br/><span className="font-medium">Voltea las prendas:</span> Al lavarlas, voltea las prendas de adentro hacia afuera...
                        <br/><span className="font-medium">Secado al aire libre:</span> Siempre que sea posible, seca las prendas de algodón al aire libre...
                        <br/><br/>
                        <span className="text-base sm:text-2xl font-medium">Planchado:</span><br/>
                        <span className="font-medium">Plancha a baja temperatura:</span> El algodón generalmente se puede planchar a temperatura media...
                        <br/><span className="font-medium">Utiliza una plancha de vapor:</span> El vapor ayuda a suavizar las arrugas...
                        <br/><span className="font-medium">Plancha en seco:</span> No planches las prendas de algodón mojadas...
                        <br/><br/>
                        <span class="text-base sm:text-2xl font-medium">Almacenamiento:</span><br/>
                        Guarda las prendas en un lugar fresco y seco...
                        <br/>Dobla las prendas cuidadosamente...
                        <br/>No guardes las prendas apretadas...
                        <br/><br/>
                        <span className="font-medium text-2xl">Consejos adicionales:</span><br/>
                        <span className="font-medium">Evita el uso de suavizantes:</span> Los suavizantes pueden acumularse en las fibras...
                        <br/><span className="font-medium">Repara las pequeñas roturas de inmediato:</span> Si una prenda se rasga, repárala lo antes posible...
                        <br/><span className="font-medium">Sigue las instrucciones de cuidado específicas para cada prenda:</span> Algunas pueden tener indicaciones diferentes...
                        <br/><span className="font-medium">Siempre revisa la etiqueta de la prenda para obtener más información.</span><br/><br/>
                        Siguiendo estos consejos, tu ropa deportiva de algodón se mantendrá en óptimas condiciones por mucho tiempo.
                    </p>

                </div>

            </section>

        </>

    )

};

export default UseSection;