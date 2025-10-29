import { motion } from "framer-motion";
import '../../styles/global.css';

const ProductSection = () => {

    return (
       
        <>
        
            <main className="relative w-full h-screen flex justify-center items-center">

                <img src="/img/maraton-1-jacana.png" className="absolute w-full h-full object-cover" />

                <p className="relative z-10 text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center">
                    Supera límites<br />con estilo
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

            <section className="w-full h-auto flex justify-center items-center px-4 md:px-16 lg:px-36 bg-black text-gray-200 md:mt-20">

                <p className="max-w-screen-lg mx-auto text-justify text-base md:text-lg lg:text-xl mt-10">
                    En Jacana, entendemos que el deporte no es solo una actividad física, sino un estilo de vida. Por eso, hemos desarrollado una línea de ropa deportiva 
                    diseñada para ofrecerte el máximo confort, rendimiento y estilo. <br /><br />
                    Cada prenda ha sido creada con materiales de alta calidad que proporcionan durabilidad y soporte, ya sea que estés entrenando en el 
                    gimnasio, corriendo en el parque o simplemente disfrutando de un día activo. Nuestra colección no solo destaca por su funcionalidad, sino también por su diseño moderno y atractivo, adaptado a las 
                    últimas tendencias de la moda deportiva. <br /><br />
                    Con Jacana, estarás listo para superar tus límites y alcanzar tus metas, con la confianza de llevar ropa que trabaja tan duro como tú. Descubre la diferencia 
                    con Jacana y lleva tu rendimiento al siguiente nivel.
                </p>
                    
            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-10 px-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-black">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgRemera1"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Remera Manga Corta Athene<br />Unisex/Femenina</p>
                        <p className="px-6 flex-grow">Tela calada ultraliviana de secado rápido, peso 30% menor a una prenda similar promedio. 100% estampada.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgRemera2"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Remera Manga Corta Falco<br />Unisex/Femenina</p>
                        <p className="px-6 flex-grow">Tela calada ultraliviana de secado rápido, peso 30% menor a una prenda similar promedio. 100% estampada.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgMusculosa1"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Musculosa Falco<br />Unisex/Femenina</p>
                        <p className="px-6 flex-grow">Tela ultraliviana. Secado rápido. Apertura amplia en axilas/espalda y cuello. 100% estampada.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgMusculosa2"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Musculosa Athene<br />Unisex/Femenina</p>
                        <p className="px-6 flex-grow">Tela ultraliviana. Secado rápido. Apertura muy amplia en axilas/espalda y cuello. 100% estampada.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-4 px-10">
                    
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgTop1"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Top 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Hecho en tela compresiva. Frente y laterales forrados. Costura por encima de los hombros ancha. Cuello cerrado. Costuras ocultas. 100% estampado.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgTop2"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Top Athene<br />Femenino</p>
                        <p className="px-6 flex-grow">Realizado en tela compresiva. Apertura amplia en cuello y axilas. Frente forrado. 100% estampado.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgSosten1"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Sosten 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Realizado en tela compresiva. Apertura amplia de cuello, espalda y axilas. Elástico inferior para mayor sujeción. Frente forrado. 100% estampado.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgSosten2"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Sosten Falco<br />Femenino</p>
                        <p className="px-6 flex-grow">Frente y espalda forrados. Con tiras bretel regulables. Estampado en frente y espalda.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-4 px-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgChaleco"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Chaleco 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Chaleco corto hecho en tela compresiva liviana. Frente forrado con cierre invisible. Secado rápido. 100% estampado.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgTopMangas"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Top con mangas 251<br />Femenino</p>
                        <p className="px-6 flex-grow">Realizado en tela compresiva liviana. Frente forrado. Corto. Secado rápido. 100% estampado.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgPrimeraPiel"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Primera piel Athene<br />Masculino/Femenino</p>
                        <p className="px-6 flex-grow">Remera mangas largas compresiva. Realizada en tela liviana y de secado rápido. Estampado con logos pequeños.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgMangas"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Mangas 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Accesorio realizado en tela compresiva. Unidas en los hombros. Secado rápido. 100% estampado.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-4 px-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgShort250"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Short 250<br />Masculino/Femenino</p>
                        <p className="px-6 flex-grow">Short con corte lateral amplio. Elástico superior. Bolsillo interno para llaves. Calzón suspensor de secado rápido. Estampado con logos pequeños.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgShortFalco"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Short Falco<br />Masculino/Femenino</p>
                        <p className="px-6 flex-grow">Short con aplique lateral de tela elastizada. Elástico superior. Calzón suspensor de secado rápido. Estampado con logos pequeños.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgCalza250"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Calza 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Realizada en tela compresiva. Con puños en las piernas. Cintura con elástico. Estampado con logos pequeños.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgBombachudo"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Bombachudo 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Realizado en tela compresiva. Elástico superior. Integramente forrado. Tiro alto. Estampado con logos pequeños.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-4 px-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgCalzaFalco"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Calza Larga Falco<br />Femenino</p>
                        <p className="px-6 flex-grow">Realizada íntegramente con tela compresiva, cintura alta. Estampada 100%.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgCalzaAthene"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Calza Athene<br />Masculino</p>
                        <p className="px-6 flex-grow">Realizada con tela compresiva. Refuerzo en entrepierna. Cintura con elástico.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgEntero"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Entero 250<br />Femenino</p>
                        <p className="px-6 flex-grow">Integramente compresivo. Cierre invisible al pecho. Pecho, calzón delantero y trasero forrado. Tela de secado rápido.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgEnteroMG"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Entero 250 con mangas cortas<br />Masculino</p>
                        <p className="px-6 flex-grow">Realizado en tela compresiva de secado rápido, cierre invisible al pecho. Calza corta con refuerzo en la entrepierna.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>

            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-4 px-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgCamperaFalco"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Campera Falco<br />Masculino/Femenino</p>
                        <p className="px-6 flex-grow">Tela elastizada, bolsillo ribeteado, cuello alto. Corte de ventilación trasero a media espalda. Estampa frente y espalda.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgBuzoFalco"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Buzo Falco<br />Masculino/Femenino</p>
                        <p className="px-6 flex-grow">Realizada con tela frizada de secado rápido. Manga de 3 piezas. Cuello alto. Cierre a medio pecho. Estampado 100%.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgRompeviento"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Rompevientos Falco<br />Masculino/Femenino</p>
                        <p className="px-6 flex-grow">Tela ripstop antidesgarro. Dos bolsillos ribeteados. Cuello alto. Estampado 100%.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgJogginPasser"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Joggin Passer<br />Masculino</p>
                        <p className="px-6 flex-grow">Tela de algodón elastizado. Dos bolsillos cosidos a los laterales. Puño inferior. Cintura con elástico. Estampado con logos medianos.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>
                    
            </section>

            <section className="w-full h-auto flex flex-col justify-center items-center mt-4 px-10">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        
                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgRemRugbyPasser"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Remera Manga Corta Passer Rugby<br />Masculino</p>
                        <p className="px-6 flex-grow">Prenda íntegramente elastizada. Tela de secado rápido. Cuello redondo ancho. Entallada. Costuras reforzadas. Estampado 100% con número.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgShortRugby"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Short Rugby Passer<br />Masculino</p>
                        <p className="px-6 flex-grow">Short corto. Costuras reforzadas. Laterales elastizados. Cintura con elástico. Estampado con pequeños logos (hasta 3).</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgMuscHockey"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Musculosa Hockey Passer<br />Femenino</p>
                        <p className="px-6 flex-grow">Prenda con laterales elastizados. Tela de secado rápido. Cuello en «V» ancho. Entallada. Estampado 100%.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl">

                        <div className="w-full aspect-[4/5] bgBasquet"></div>

                        <p className="text-lg font-semibold mt-3 flex-grow">Musculosa Básquet Passer<br />Masculino</p>
                        <p className="px-6 flex-grow">Cuello en «V» cerrado con boquilla. Larga. Tela de secado rápido. Estampado 100% con número y nombre.</p>
                        <div className="flex flex-col mt-4">
                            <p className="font-semibold">Entrenamiento 5/5</p>
                            <p className="font-semibold">Uniforme 4/5</p>
                            <p className="font-semibold">Competencia 3/5</p>
                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}

export default ProductSection;