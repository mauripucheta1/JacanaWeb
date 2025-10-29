import '../../styles/global.css';

const HomeSection = () => {

    return (

        <section className="flex flex-col bg-black text-white -translate-y-1">

            <section className="w-full h-auto">

                <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center text-center mt-8 gap-3 md:gap-10">

                    <div className="w-full md:w-1/3 h-auto flex flex-col justify-center items-center p-4">

                        <div className="w-16 h-16 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="60" height="60" stroke-width="1.2">
                                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                <path d="M12 12l8 -4.5"></path>
                                <path d="M12 12l0 9"></path>
                                <path d="M12 12l-8 -4.5"></path>
                                <path d="M16 5.25l-8 4.5"></path>
                            </svg>
                        </div>

                        <p className="text-lg">Envios a todo el país</p>
                        <p className="text-lg"><span className="font-semibold"><a target="_blank" href="https://www.google.com/maps">Ubicación</a></span></p>

                    </div>
                
                    <div className="w-full md:w-1/3 h-auto flex flex-col justify-center items-center p-4">

                        <div className="w-16 h-16 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="60" height="60" stroke-width="1.2">
                                <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                                <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                                <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                                <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                                <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                                <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                                <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                                <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                                <path d="M9 12l2 2l4 -4"></path>
                            </svg>
                        </div>

                        <p className="text-lg">Calidad y comodidad <br /><span className='font-semibold'>Asegurada</span></p>

                    </div>
                
                    <div className="w-full md:w-1/3 h-auto flex flex-col justify-center items-center p-4">

                        <div className="w-16 h-16 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="60" height="60" strokeWidth="1.2">
                                <path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path>
                            </svg>
                        </div>

                        <p className="text-lg">Prendas y diseños<br /><span className='font-semibold'>Únicos</span></p>

                    </div>
                
                </div>

                <div className="w-full max-w-screen-md h-auto flex flex-col justify-center items-center text-center mt-14 md:mt-20 mx-auto">

                    <p className="font-bold text-3xl md:text-5xl  uppercase text-center px-4 md:px-10">
                        <span className="block mb-2">Sponsor oficial</span>
                        <span className="block mb-2">de la Confederación Argentina</span>
                        <span className="block">de Atletismo</span>
                    </p>

                    <p className="text-lg md:text-xl text-gray-200 text-center mt-10 px-10 md:px-10 leading-relaxed">
                        Nos enorgullece ser el sponsor oficial de la Confederación Argentina de Atletismo. 
                        A través de nuestro compromiso, apoyamos a atletas de todas las edades, promovemos la práctica del deporte 
                        y contribuimos al desarrollo de competencias nacionales e internacionales, fomentando la excelencia y la pasión por el atletismo en todo el país.
                    </p>


                    <a target="_blank"  href="https://cada-atletismo.org/" className="mt-10 inline-block bg-orange-500 text-white font-semibold px-10 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                        Ver más
                    </a>

                </div>


                <div className="relative w-full max-w-6xl mx-auto mt-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-0">

                        <div className="relative group overflow-hidden rounded-xl">

                            <img src="/img/carro-1.jfif" alt="Entrenamiento" className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex justify-center items-center">
                                <p className="text-white text-2xl md:text-3xl font-semibold uppercase tracking-wider">
                                    Entrenamiento
                                </p>
                            </div>

                        </div>

                        <div className="relative group overflow-hidden rounded-xl">

                            <img src="/img/carro-3.jfif" alt="Competencia" className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex justify-center items-center">
                                <p className="text-white text-2xl md:text-3xl font-semibold uppercase tracking-wider">
                                    Competencia
                                </p>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </section>

            <div className='w-full h-[80px] mt-20'>
                <img src='/img/textura-blanca.png' alt='Textura blanca' className='w-full h-full translate-y-1' />
            </div>

            <section className="w-full h-auto flex flex-col bg-white text-black">

                <div className="text-center mb-6 md:mb-10 bg-white text-black">
                    <h2 className="font-extrabold text-3xl md:text-5xl uppercase tracking-wide drop-shadow-lg">
                        Nuestras <br />instalaciones
                    </h2>
                    <p className="mt-10 text-base md:text-lg max-w-2xl mx-auto">
                        Un espacio pensado para atletas, donde el entrenamiento, la innovación y la pasión por el deporte se encuentran.
                    </p>
                </div>

                <div className="text-center space-y-2 mb-8 bg-white text-black">
                    <p className="text-lg md:text-xl">
                        📍 <span className="font-medium">General Cabrera 256</span>, Jesús María, Córdoba — Argentina
                    </p>
                    <p>
                        📞 <a href="https://api.whatsapp.com/send?phone=5493525437109" target="_blank" className="font-semibold text-orange-500 hover:text-orange-400 transition-colors">
                        +54 9 3525 437109
                        </a>
                    </p>
                    <p>
                        ✉️ <a href="mailto:info@vestimosatletas.com" className="font-medium hover:text-white transition-colors">
                            info@vestimosatletas.com
                        </a>
                    </p>
                </div>

                {/* Mapa */}
                <div className="w-full flex justify-center items-center mt-8 px-4 md:px-10">
                    <div className="w-full max-w-5xl flex justify-center items-center rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]">
                        <iframe
                            className="w-full aspect-[16/9] rounded-2xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.646530048631!2d-64.09069852566806!3d-30.98034482097147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943263bd9528c907%3A0x9b4ef82a20614d4!2sJacana!5e0!3m2!1sen!2sar!4v1729733058272!5m2!1sen!2sar"
                            style={{
                                border: 0,
                            }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </section>

            <div className='w-full h-[80px] -translate-y-1'>
                <img src='/img/textura-blanca.png' alt='Textura blanca' className='w-full h-full -rotate-180' />
            </div>

        </section>

    )

};

export default HomeSection;