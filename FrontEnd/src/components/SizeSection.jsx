import { motion } from "framer-motion";
import "../../styles/global.css";

const SizeSection = () => {

    return (
       
        <>
        
            <main className="relative w-full h-screen flex justify-center items-center">

                <img src="/img/talles-jacana.png" className="absolute w-full h-full object-cover" />

                <p className="relative z-10 text-white font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center">
                   Tus <br /> medidas
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

            <section className="w-full flex flex-col justify-center items-center text-center mt-20">

                <div className="w-full h-auto flex justify-center items-center text-center">
                    <p className="uppercase font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Talles</p>
                </div>

                <div className="w-full max-w-screen-lg mx-auto flex justify-center items-center text-center mt-6 sm:mt-10 px-4 sm:px-6 md:px-10 lg:px-32">
                    <p className="text-lg sm:text-xl md:text-2xl text-center">
                        <span class="uppercase font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">¿Cómo obtengo mi talle correctamente?</span><br/><br/>
                        Para obtener fielmente tu talle necesitas una cinta métrica y repetir la postura retratada en la imagen.  
                        Atención: Nuestras prendas compresivas (Top, Enteros, Bombachudos, Chalecos, Calzas, etc.) presionan mucho las partes cubiertas.  
                        Es común que muchas mujeres pidan un talle más en las prendas superiores para mayor comodidad, sobre todo cuando usan sostén aparte.
                    </p>
                </div>

                <div className="w-full max-w-screen-lg mx-auto mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

                    <div className="w-full max-w-xs flex flex-col items-start text-left min-h-[200px]-md flex-grow gap-1 mx-auto">
                        <div className="w-full h-auto flex justify-center">
                            <p className="font-bold text-xl uppercase">1 - Torso</p>
                        </div>
                        <div className="w-full h-auto flex justify-center text-center">
                            <p className="text-base sm:text-lg md:text-xl">Medir el largo desde la traquea hasta la ingle (Aproximadamente 4cm por debajo del ombligo).</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs flex flex-col items-start text-left min-h-[200px]-md flex-grow gap-1 mx-auto">
                        <div className="w-full h-auto flex justify-center">
                            <p className="font-bold text-xl uppercase">2 - Pecho</p>
                        </div>
                        <div className="w-full h-auto flex justify-center text-center">
                            <p className="text-base sm:text-lg md:text-xl">Con los brazos al costado del cuerpo relajados. Medir el contorno más sobresaliente del pecho.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs flex flex-col items-start text-left min-h-[200px]-md flex-grow gap-1 mx-auto">
                        <div className="w-full h-auto flex justify-center">
                            <p className="font-bold text-xl uppercase">3 - Cintura</p>
                        </div>
                        <div className="w-full h-auto flex justify-center text-center">
                            <p className="text-base sm:text-lg md:text-xl">Rodear el cuerpo a la altura del ombligo asegurándose de que la cinta métrica esté ajustada pero sin apretar demasiado.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs flex flex-col items-start text-left min-h-[200px]-md flex-grow gap-1 mx-auto">
                        <div className="w-full h-auto flex justify-center text-center">
                            <p className="font-bold text-xl uppercase">4 - Cadera</p>
                        </div>
                        <div className="w-full h-auto flex justify-center text-center">
                            <p className="text-base sm:text-lg md:text-xl">Con los pies juntos medir la circunferencia más grande de la cadera cuidando que la cinta esté a la misma altura por delante y por detrás.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-xs flex flex-col items-start text-left min-h-[200px]-md flex-grow gap-1 mx-auto">
                        <div className="w-full h-auto flex justify-center">
                            <p className="font-bold text-xl uppercase">5 - Pierna</p>
                        </div>
                        <div className="w-full h-auto flex justify-center text-center">
                            <p className="text-base sm:text-lg md:text-xl">Tomar medida desde la cintura hasta el tobillo, asegurándote de que la cinta métrica siga la línea natural de la pierna sin estirarla.</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="w-full flex justify-center items-center mt-10 sm:mt-16">

                <div className="w-full max-w-screen-md flex justify-center items-center text-center">
                    <img src="/img/PersonasTalles.png" alt="personasTalles" className="w-full max-w-screen-md h-auto object-cover" />
                </div>

            </section>

            <section className="w-full h-auto flex justify-center items-center text-center mt-10 sm:mt-16">

                <div className="w-full max-w-screen-lg mx-auto overflow-x-auto">

                    <table className="borderCada w-full text-sm sm:text-base md:text-lg text-center">
                        <thead>
                            <tr className="borderCada">
                                <th className="borderCada uppercase">Medida Femenina</th>
                                <th className="borderCada">XS</th>
                                <th className="borderCada">S</th>
                                <th className="borderCada">M</th>
                                <th className="borderCada">L</th>
                                <th className="borderCada">XL</th>
                                <th className="borderCada">XXL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno del pecho</td>
                                <td className="borderCada">77-82</td>
                                <td className="borderCada">83-88</td>
                                <td className="borderCada">89-94</td>
                                <td className="borderCada">95-101</td>
                                <td className="borderCada">102-106</td>
                                <td className="borderCada">107-111</td>
                            </tr>
                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno de la cintura</td>
                                <td className="borderCada">61-66</td>
                                <td className="borderCada">67-72</td>
                                <td className="borderCada">73-78</td>
                                <td className="borderCada">79-85</td>
                                <td className="borderCada">86-90</td>
                                <td className="borderCada">91-95</td>
                            </tr>
                            <tr class="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno de la cadera</td>
                                <td className="borderCada">86-91</td>
                                <td className="borderCada">92-97</td>
                                <td className="borderCada">98-103</td>
                                <td className="borderCada">104-110</td>
                                <td className="borderCada">111-115</td>
                                <td className="borderCada">112-119</td>
                            </tr>
                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Largo de torso</td>
                                <td className="borderCada">46</td>
                                <td className="borderCada">48</td>
                                <td className="borderCada">50</td>
                                <td className="borderCada">52</td>
                                <td className="borderCada">55</td>
                                <td className="borderCada">57</td>
                            </tr>
                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Largo de piernas</td>
                                <td className="borderCada">102</td>
                                <td className="borderCada">103</td>
                                <td className="borderCada">105</td>
                                <td className="borderCada">107</td>
                                <td className="borderCada">110</td>
                                <td className="borderCada">112</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <section className="w-full h-auto flex justify-center items-center text-center mt-10 sm:mt-10">
                
                <div className="w-full max-w-screen-lg mx-auto overflow-x-auto">

                    <table className="borderCada w-full text-sm sm:text-base md:text-lg text-center">

                        <thead>

                            <tr className="borderCada">
                                <th className="borderCada uppercase">Medida Masculina/Unisex</th>
                                <th className="borderCada">XS</th>
                                <th className="borderCada">S</th>
                                <th className="borderCada">M</th>
                                <th className="borderCada">L</th>
                                <th className="borderCada">XL</th>
                                <th className="borderCada">XXL</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno del pecho</td>
                                <td className="borderCada">77-82</td>
                                <td className="borderCada">83-89</td>
                                <td className="borderCada">90-96</td>
                                <td className="borderCada">97-105</td>
                                <td className="borderCada">106-118</td>
                                <td className="borderCada">119-132</td>
                            </tr>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno de la cintura</td>
                                <td className="borderCada">66-70</td>
                                <td className="borderCada">71-75</td>
                                <td className="borderCada">76-82</td>
                                <td className="borderCada">83-90</td>
                                <td className="borderCada">91-112</td>
                                <td className="borderCada">113-125</td>
                            </tr>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno de la cadera</td>
                                <td className="borderCada">77-81</td>
                                <td className="borderCada">82-89</td>
                                <td className="borderCada">90-96</td>
                                <td className="borderCada">97-105</td>
                                <td className="borderCada">106-118</td>
                                <td className="borderCada">119-132</td>
                            </tr>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Largo de torso</td>
                                <td className="borderCada">50</td>
                                <td className="borderCada">52</td>
                                <td className="borderCada">54</td>
                                <td className="borderCada">55</td>
                                <td className="borderCada">56</td>
                                <td className="borderCada">58</td>
                            </tr>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Largo de piernas</td>
                                <td className="borderCada">105</td>
                                <td className="borderCada">107</td>
                                <td className="borderCada">110</td>
                                <td className="borderCada">112</td>
                                <td className="borderCada">114</td>
                                <td className="borderCada">116</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <section className="w-full h-auto flex justify-center items-center text-center mt-10 sm:mt-10">

                <div className="w-full max-w-screen-lg mx-auto overflow-x-auto">

                    <table className="borderCada w-full text-sm sm:text-base md:text-lg text-center">

                        <thead>

                            <tr className="borderCada">
                                <th className="borderCada uppercase">Medida Niños</th>
                                <th className="borderCada">6</th>
                                <th className="borderCada">8</th>
                                <th className="borderCada">10</th>
                                <th className="borderCada">12</th>
                                <th className="borderCada">14</th>
                                <th className="borderCada">16</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno del pecho</td>
                                <td className="borderCada">58-63</td>
                                <td className="borderCada">64-69</td>
                                <td className="borderCada">70-75</td>
                                <td className="borderCada">76-81</td>
                                <td className="borderCada">82-87</td>
                                <td className="borderCada">88-93</td>
                            </tr>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno de la cintura</td>
                                <td class="borderCada">36-42</td>
                                <td className="borderCada">43-48</td>
                                <td className="borderCada">49-53</td>
                                <td className="borderCada">54-59</td>
                                <td className="borderCada">60-64</td>
                                <td className="borderCada">65-67</td>
                            </tr>
                            
                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Contorno de la cadera</td>
                                <td className="borderCada">56-59</td>
                                <td className="borderCada">60-63</td>
                                <td className="borderCada">64-67</td>
                                <td className="borderCada">70-73</td>
                                <td className="borderCada">76-79</td>
                                <td className="borderCada">80-82</td>
                            </tr>

                            <tr className="borderCada">
                                <td className="borderCada whitespace-nowrap">Largo de torso</td>
                                <td className="borderCada">36</td>
                                <td className="borderCada">38</td>
                                <td className="borderCada">40</td>
                                <td className="borderCada">42</td>
                                <td className="borderCada">45</td>
                                <td className="borderCada">48</td>
                            </tr>

                            <tr class="borderCada">
                                <td class="borderCada whitespace-nowrap">Largo de piernas</td>
                                <td class="borderCada">80</td>
                                <td class="borderCada">83</td>
                                <td class="borderCada">89</td>
                                <td class="borderCada">92</td>
                                <td class="borderCada">96</td>
                                <td class="borderCada">100</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

        </>

    )

}

export default SizeSection;